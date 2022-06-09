import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Dashboard from "../Dashboard/dashboard";
import Loader from '../Loader/Loader';
import Swal from 'sweetalert2';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'bootstrap/dist/css/bootstrap.css';
import "./record.css";
import "../../css/table.css";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#E2474B",// theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function Show() {

    const [getData, setData] = useState([])
    const [loader, setLoader] = useState(true);

    let userID = localStorage.getItem("userID");
    const classes = useStyles();


    const getRecord = async () => {
        setLoader(true);
        try {
            const response = await fetch(`https://backend-kr53.onrender.com/record/${userID}/`)
            const data = await response.json();
            setData(data.result);
            setLoader(false);
        } catch (err) { console.log(err) }

    }

    const deleteRecord = async function (id) {
        try {
            console.log(id)
            const requestOptions = {
                method: 'DELETE',

            };
            if (window.confirm("do you want delete this record?")) {
                const response = await fetch(`https://backend-kr53.onrender.com/record/${id}`, requestOptions)
                const get = await response.json()
                setData(get)
            }

            Swal.fire({
                icon: 'success',
                title: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (err) { console.log(err) }
    }


    useEffect(() => {
        getRecord();
    }, []);



    return (
        <div className='center-div'>
            <Dashboard />
            <div className='center-table'>
                {
                    loader == true ? (
                        <Loader />
                    ) : (
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="right">ID</StyledTableCell>
                                        <StyledTableCell align="right">Category</StyledTableCell>
                                        <StyledTableCell align="right">Type</StyledTableCell>
                                        <StyledTableCell align="right">Amount</StyledTableCell>
                                        <StyledTableCell align="right">Concept</StyledTableCell>
                                        <StyledTableCell align="right">Date</StyledTableCell>
                                        <StyledTableCell align="right">Delete</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        getData.map(function (Data) {
                                            console.log(Data.date);
                                            return (
                                                <StyledTableRow key={Data.id}>
                                                    <StyledTableCell align="right">{Data.id}</StyledTableCell>
                                                    <StyledTableCell align="right">{Data.categories.name}</StyledTableCell>
                                                    <StyledTableCell align="right">{Data.type.name}</StyledTableCell>
                                                    <StyledTableCell align="right">{Data.amount}</StyledTableCell>
                                                    <StyledTableCell align="right">{Data.concept}</StyledTableCell>
                                                    <StyledTableCell align="right">{Data.date}</StyledTableCell>
                                                    <StyledTableCell align="right"><Button onClick={() => deleteRecord(Data.id)}>delete</Button></StyledTableCell>
                                                </StyledTableRow>
                                            )
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )
                }
            </div>
        </div>
    )

};