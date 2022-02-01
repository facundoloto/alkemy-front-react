import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("login")
  return user
};

const ProtectedRoutes = () => {
console.log(useAuth())
  const isAuth = useAuth();//save result if user is loggein or not
  return isAuth ? <Navigate to="/home"/> : <Outlet/>;//if it's true you can't navigate in to login just redericetion to home
};

export default ProtectedRoutes;