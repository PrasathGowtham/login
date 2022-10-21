import React, { useState } from "react";
import axios from "axios";
import "./home.css";

import { Link } from "react-router-dom";
const Homepage = () => {
    //const navigate = useNavigation();
    const [data, regigterdata] = useState({
        name: "",
        surname: "",
        mobileno: "",
        postcode: "",
        state: "",
        area: "",
        email: "",
        education: "",
        country: "",
        region: ""
    })
    let handelChange = (e) => {
        let { name, value } = e.target
        regigterdata({
            ...data, [name]: value
        })
    }
    const handelSubmit = async (e) => {

        e.preventDefault();
        const responce = await axios.post("https://logiin.herokuapp.com/submit/save", { ...data });
        console.log(responce)
    };





    return (
        <div className="homepage" style={{ padding: "100px" }}>
            {console.log("data", data)}
            <div class="row mt-5">
                <h2 text-align="center">Add Your Profile</h2 ><Link style={{textAlign:"right"}}to="/">Home</Link>
                <div class="col-md-6"><label class="labels">Name</label><input type="text" name="name" class="form-control" placeholder="first name" value={data.name} onChange={handelChange} /></div>
                <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" name="surname" value={data.surname} onChange={handelChange} placeholder="surname" /></div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" name="mobileno" value={data.mobileno} onChange={handelChange} /></div>
                <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="enter address line 2" name="postcode" value={data.postcode} onChange={handelChange} /></div>
                <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter address line 2" name="state" value={data.state} onChange={handelChange} /></div>
                <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="enter address line 2" name="area" value={data.area} onChange={handelChange} /></div>
                <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" name="email" value={data.email} onChange={handelChange} /></div>
                <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" name="education" value={data.education} onChange={handelChange} /></div>
            </div>
            <div class="row mt-3">
                <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" name="country" value={data.country} onChange={handelChange} /></div>
                <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" name="region" value={data.region} onChange={handelChange} placeholder="state" /></div>
            </div>
            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={handelSubmit}>Save Profile</button><br/>  </div>

        </div>


    )

}


export default Homepage;