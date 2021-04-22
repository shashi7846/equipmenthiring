import React from 'react'
import axios from 'axios'

import {useHistory} from 'react-router-dom'
import { useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

function UserRegister () {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [adminPin,setAdminPin] = useState("");

    const history = useHistory()
    let userData = {
        "email" : email,
        "password" : password,
        "admin_pin" : adminPin
    }
    const distoast=()=>{
        toast.success("Registration successful",{
            position:"top-right",
            autoClose: 5000,
        });
        
    }

    return (
        <>
        <div className="User_register container-fluid" >
                <div className="row ">
                    <div className="col-md-4 text-center company__info">
                        <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                        {/* <h4 className="company_title">Your Company Logo</h4> */}
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                                <h2>Register</h2>
                            </div>
                            <div className="row">
                                <form onSubmit={ async (e) => {
                                    e.preventDefault();

                                    let sentAdminData = await axios.post("http://localhost:8000/register",userData);

                                    console.log(sentAdminData);
                                    setEmail("");
                                    setPassword("");
                                    setAdminPin("");

                                    history.push("/userlogin")

                                }} control="" className="form-group">
                                    <div className="row col-lg-20">
                                        
                                        <input type="text" name="email" id="email" className="form-control" value={email} placeholder="Email" onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}/>
                                    </div>
                                    <div className="row col-lg-20">
                                        <span className="fa fa-lock"></span>
                                        <input type="text" name="password" id="password" className="form-control" value={password} placeholder="Password" onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}/>
                                    </div>
                                    <div className="row col-lg-20">
                                        <span className="fa fa-lock"></span>
                                        <input type="password" name="admin_pin" id="admin_pin" className="form-control" value={adminPin} placeholder="Enter Admin Pin" onChange={(e) => {
                                            setAdminPin(e.target.value)
                                        }}/>
                                    </div>

                                    {/* <div className="row">
                                        <input type="checkbox" name="remember_me" id="remember_me" className="" />
                                        <label for="remember_me">Remember Me!</label>
                                    </div> */}
                                    <div className="row">
                                        <button type="submit" value="Submit" className="btn btn-success" onClick={distoast}>Submit</button>
                                        <ToastContainer/>
                                    </div>
                                </form>
                            </div>
                            {/* <div className="row">
                                <p>Don't have an account? <Link><a href="#">Register Here</a></Link></p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserRegister;
