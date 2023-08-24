import "./App.css";
// import Home from "./pages/Home";
// import Customizer from "./pages/Customizer";

import Layout from "./pages/Layout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ResetPwd from "./pages/ResetPwd";
import NotFound from "./pages/NotFound";
import Intro from "./pages/Intro";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Package from "./pages/configurator/Package";
import Upload from "./pages/configurator/Upload";
import MyAccount from "./pages/dashboard/MyAccount";
import MyConfig from "./pages/dashboard/MyConfig";
import Notification from "./pages/dashboard/Notification";
import Payment from "./pages/dashboard/Payment";
import Orders from "./pages/dashboard/MyOrders";
import DashLayout from "./pages/DashLayout";
import Overlay from "./components/Overlay";
import { useState } from "react";
import ProtectedRoute from "./components/routing/ProtectedRoute";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    // <div>
    //   <Home />
    //   <Customizer />
    // </div>
    <>
      <Overlay isOpen={isOpen} handleClose={handleClose} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-passwd" element={<ResetPwd />} />

          {/* <Route element={<ProtectedRoute />}> */}
          <Route
            exact
            path="/customize"
            element={
              // <ProtectedRoute>
                <Layout>
                  <Route index element={<Package />} />
                  <Route path="upload" element={<Upload />} />
                </Layout>
              // </ProtectedRoute>
            }
          ></Route>

          <Route exact path="/dashboard" element={<DashLayout />}>
            <Route
              index
              element={<MyAccount isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
            <Route path="my-config" element={<MyConfig />} />
            <Route path="notification" element={<Notification />} />
            <Route path="payment" element={<Payment />} />
            <Route path="orders" element={<Orders />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
