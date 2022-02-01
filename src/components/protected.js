import { Navigate, Outlet } from "react-router-dom";
const useAuth = () => {
  const user = localStorage.getItem("login")
  return user
};

const ProtectedRoutes = () => {
console.log(useAuth())
  const isAuth = useAuth();//save result if user is loggein or not
  return isAuth ? <Outlet /> : <Navigate to="/" />;//if it's true you can navigate in the app if not this redericetion to home
};

export default ProtectedRoutes;