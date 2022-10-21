import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [data, regigterdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    let handelChange = (e) => {
        let { name, value } = e.target
        regigterdata({
            ...data, [name]: value
        })
    }
    const handelSubmit = async (e) => {

        e.preventDefault();
        const responce = await axios.post("https://logiin.herokuapp.com/register/signup", { ...data });
        console.log(responce)
       
    };
    return (
        <div className="Register">
            {console.log("data", data)}
            <h1>Register</h1>
            <input type="text" name="firstname" value={data.firstname} onChange={handelChange} placeholder="Enter Your First Name"></input>
            <input type="text" name="lastname" value={data.lastname} onChange={handelChange} placeholder="Enter Your Last Name"></input>
            <input type="email" name="email" value={data.email} onChange={handelChange} placeholder="Enter Your Email"></input>
            <input type="password" name="password" value={data.password} onChange={handelChange} placeholder="Enter Your Password"></input>
            <input type="password" name="confirmpassword" value={data.confirmpassword} onChange={handelChange} placeholder="conform Your Password"></input>
            <div className="button" onClick={handelSubmit}>Register</div>
            <div>If Registed</div>
            <div className="button" onClick={() => navigate("/")}>Login</div>
        </div>)

}


export default Register;