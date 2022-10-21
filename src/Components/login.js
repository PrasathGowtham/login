import React, { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";
//import Routercomponent from "../../router";
import { useNavigate } from "react-router-dom";



const Loginpage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [data, regigterdata] = useState({
        email: "",
        password: "",

    })
    let handelChange = (e) => {
        let { name, value } = e.target
        regigterdata({
            ...data, [name]: value
        })
    }
    const handelSubmit = async (e) => {

        e.preventDefault();
        const responce = await axios.post("https://logiin.herokuapp.com/login/signin", { ...data });
        console.log(responce)
        if (responce) {
            sessionStorage.setItem("token", responce);
            navigate("/home");
        }
       if(data===""){
        navigate("/");
       }
    };


    return (
        <div className="login">
            {console.log("data", data)}
            <h1>Login</h1>
            <input type="text" name="email" value={data.email} placeholder="Enter Your Email" onChange={handelChange}></input>
            <input type="password" name="password" value={data.password} placeholder="Enter Your Password" onChange={handelChange}></input>
            <div className="button" type="submit" variant="contained" onClick={handelSubmit}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/signup")}>signup</div>
        </div>)

}


export default Loginpage;