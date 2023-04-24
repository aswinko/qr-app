import React, { useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom"
import Dashboard from "./Container/Home";
import Login from "./Container/Login";
import BillingUsers from "./Container/BillingUsers";
import KitchenUsers from "./Container/KitchenUsers";
import PrivateRoute from "./Components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getInitialData, isUserLoggedIn } from "./Actions";
import FoodPage from "./Container/FoodPage";
import Orders from "./Container/Orders";
import Category from "./Container/Category";
import QrCode from "./Container/QrCode";

axios.defaults.withCredentials = true;

const App = () => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
    // if (auth.authenticate){
      dispatch(getInitialData());
      dispatch(getAllCategory());
    // }
  }, []);

  return (
      <div className="app">
        <Routes>
          <Route path="/" exact element={<PrivateRoute />} >
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/billing-users" element={<BillingUsers />} />
            <Route path="/kitchen-users" element={<KitchenUsers />} />
            <Route path="/foods" element={<FoodPage />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/qrcode" element={<QrCode />} />
          </Route>
          <Route path="/signin" element={<Login />} />
        </Routes>
      </div>
  );
};

export default App;
