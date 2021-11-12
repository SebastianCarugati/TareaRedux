import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ProductAction } from "../../redux/products";
import { useSelector } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(store => store.products);
  console.log (products)



  const handleClickProducts = (e) => {
    dispatch(ProductAction({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGRhZTkxMjc0MDc5MDAwNGQ1YzA3NiIsImlhdCI6MTYzNjY3NTIyNX0.jAdONhSZcvdyRbPZl-hZeN5cqp6JhKD13W_J52i4tj0'}));
  };

  return (
    <div>
      <button onClick={handleClickProducts}>Solicitar Productos</button>
      {products.products.map(p => <h5>{p.name}</h5>)}
    </div>
  );
};

export default Product;



























// import { Link, Outlet } from "react-router-dom"
// import { useNavigate } from 'react-router';
// import { useDispatch } from "react-redux";
// import { LogoutAction } from "../../redux/auth";

// const Products = () => {

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleLogout = () => {
//         dispatch(LogoutAction(navigate));
//     }

//     return (
//         <div>
//             <h1>Products</h1>
//             <button onClick={() => navigate(-1)} >Lacteos</button>
//             <br/>
//             <Link to='/products/verduras'>Verduras</Link>
//             <br/>
//             <Link to='/products'>Limpiar</Link>
//             <div style={{border: '2px solid  red'}}>
//                 <p>Tipo de producto</p>
//                 <Outlet />
//             </div>
//             <button onClick={handleLogout}>LOGOUT</button>
//         </div>
//     )
// }

// export default Products
