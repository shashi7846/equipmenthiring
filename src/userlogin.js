// // import React from 'react';

// // function AdminLogin() {
// //   return (
// //     <div className="container">
// //       <div className="col-lg-5">
// //          <label for="textfield">Firstname</label>
// //          <input className="form-control" type="text"/>
// //         </div>
// //         <div className="col-lg-5">
// //          <label for="text" >Password</label>
// //          <input className="form-control" type="password"/>
// //         </div>

// //             <div className="btn btn-success">Submit</div>

// //         </div>

// //   );
// // };

// // export default AdminLogin;

// import React from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  

//   const history = useHistory();
//   let adminData = {
//     email: email,
//     password: password,
   
//   };
//   const distoast = () => {
//     toast.success("Login successful", {
//       position: "top-right",
//       autoClose: 3000,
//     });
//   };
//   return (
//     <>
//       <div className="admin_Login container-fluid">
//         <div className="row ">
//           <div className="col-md-4 text-center company__info">
//             <span className="company__logo">
//               <h2>
//                 <span className="fa fa-android"></span>
//               </h2>
//             </span>
//             {/* <h4 className="company_title">Your Company Logo</h4> */}
//           </div>
//           <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
//             <div className="container-fluid">
//               <div className="row">
//                 <h2>LOGIN</h2>
//               </div>
//               <div className="row">
//                 <form
//                   onSubmit={async (e) => {
//                     e.preventDefault();

//                     let sentAdminData = await axios.post(
//                       "http://localhost:8000/login",
//                       email,password
//                     );

//                     console.log(sentAdminData);
//                     setEmail("");
//                     setPassword("");
                 

//                     history.push("/");
//                   }}
//                   control=""
//                   className="form-group"
//                 >
//                   <div className="row col-lg-20">
//                     <input
//                       type="text"
//                       name="email"
//                       id="email"
//                       className="form-control"
//                       value={email}
//                       placeholder="Email"
//                       onChange={(e) => {
//                         setEmail(e.target.value);
//                       }}
//                     />
//                   </div>
//                   <div className="row col-lg-20">
//                     <span className="fa fa-lock"></span>
//                     <input
//                       type="text"
//                       name="password"
//                       id="password"
//                       className="form-control"
//                       value={password}
//                       placeholder="Password"
//                       onChange={(e) => {
//                         setPassword(e.target.value);
//                       }}
//                     />
//                   </div>
                

//                   {/* <div className="row">
//                                         <input type="checkbox" name="remember_me" id="remember_me" className="" />
//                                         <label for="remember_me">Remember Me!</label>
//                                     </div> */}
//                   <div className="row">
//                     <Link
//                       to="/products"
//                       class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
//                       onClick={distoast}
//                     >
//                       <i class="fas fa-download fa-sm text-white-50"></i> Submit
//                     </Link>
//                     <ToastContainer />
//                   </div>
//                 </form>
//               </div>
//               {/* <div className="row">
//                                 <p>Don't have an account? <Link><a href="#">Register Here</a></Link></p>
//                             </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default AdminLogin;

  
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Postalogin} from "./api";
import axios from 'axios'
function Userlogin() {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let history=useHistory();
    let userData = { email, password }

    return (
        <>
            <div class="container mt-5">
                <div class="d-flex justify-content-center h-100">
                    <div class="card1">
                        <div class="card-header">
                            <h3>User Login</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                               let logindata= await axios.post("http://localhost:8000/login",userData);

                               console.log(logindata);
                               window.localStorage.setItem("app_token",logindata.data.token)
                               console.log(window.localStorage.app_token)
                               let token=logindata.data.token;

                              
                            //    try {
                            //     let commondata = await Getlongurlsecure({
                            //         headers: {
                            //             authorization: window.localStorage.getItem("app_token")
                            //         }
                            //     });
                            //     setData(commondata.data.message);
                            // } catch (error) {
                            //     setData("Not logged In");
                            // }
                            if(token)
                            {
                                history.push(`/products`);
                            }
                            else{
                                history.push(`/login`);
                            }
                                setEmail("");
                                setPassword("");
                            }}>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                    </div>
                                    <input type="email" class="form-control" placeholder="email" required value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" required value={password} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Login" class="btn float-right btn-danger" />
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}






export default Userlogin;
