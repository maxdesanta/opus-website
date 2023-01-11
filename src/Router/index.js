import { Routes, Route } from "react-router-dom";
import ImportantUrgentAdd from "../Components/Card/ImportanUrgent/ImportantUrgentAdd";
import MainLayout from "../Components/Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/Forgot";

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="iu/add" element={<ImportantUrgentAdd />} />
      </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      <Route path="forgot" element={<ForgotPassword />} />
      
    </Routes>
  );
}
