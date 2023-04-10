import React from "react";
import Navbar from "./Components/Navbar";
import { index as User } from "./Pages/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { index as Kitchen } from "./Pages/Kitchen";
import { index as Billing } from "./Pages/BillingSection";
import Table from "./Pages/Kitchen/Table/Table";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="kitchen" element={<Kitchen />} />
        <Route path="kitchen/table" element={<Table />} />
        <Route path="billing" element={<Billing />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <Navbar/>
    //   <User/>

    // </div>
  );
};

export default App;
