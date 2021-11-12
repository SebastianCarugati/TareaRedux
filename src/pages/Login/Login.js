import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../redux/auth";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    dispatch(LoginAction({ email, password, navigate}));
  };

  return (
    <div>
      <h1 />
      Logueate
      <h5 /> Correo electronico
      <input type="text" value={email} onChange={handleChangeEmail} />
      <hr />
      <h5 /> Password
      <input type="password" value={password} onChange={handleChangePassword} />
      <br />
      <button onClick={handleClick}>Logueate</button>
    </div>
  );
};

export default Login;

//Hacer que el button redireccione a home
