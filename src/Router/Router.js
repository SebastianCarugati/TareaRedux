import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import PATHS, { STATES } from "./path";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import { Navigate } from "react-router-dom";

const Router = () => {
  const { token } = useSelector((store) => store.user);

  return (
    <BrowserRouter>
      <Routes>
        {/* {token
          ? PATHS.private.map((r) => <Route {...r} />)
          : PATHS.noLoggedIn.map((r) => <Route {...r} />)} */}

        <Route path="/login" element={<Login />} />
        <Route path="*" element= {<Navigate to= '/login'/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// Implementar nuevo router con 2 pantallas (con un componente q se comparta en las dos pantallas) una pag con get user info y la otra con los productos, ambos pasan por redux.
// Navbar con logout.
//
//

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODQ2Nzg0ZDFjY2E5MDAwNGFlYTY0MCIsImlhdCI6MTYzNjA2NzIyOH0.xXBrTV11KRqwtH79ovsO-5IrH3Ph0iY4rUwjLXny8rs"
