// import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router";
// import { GetUserByEmail ,GetMovieById,PostTicket, UpdateSeats} from "./api";
// import axios from "axios";
// function Cart(props){

//     let x=props.match.params.id.split("+");
//     console.log(x[0])
//     console.log(x[1])
//     let history = useHistory();

//     let [userData, setuserData] = useState([])
//     let [productData,setproductData]=useState([])
//     let [amountofProducts,setamountofProducts]=useState("");
//     let [productImage,setproductImage]=useState([])

//     useEffect(async (email) => {
//         let users = await  axios.get(`http://localhost:8000/users/${email}`)(x[1]);
//         setuserData(...userData, users.data)
//         console.log("Mounted")
//     }, [])

//     console.log(userData)


//     useEffect(async (id) => {
//         let users = await axios.get(`http://localhost:8000/products/${id}`)(x[0]);
//         setproductData(...productData, users.data)
//         console.log("Mounted")
//     }, [])
    
//     let product={
//         username:userData.username,
//         productImage:productData.productImage,
//         productname: productData.productname,
        
//         totalproducts:amountofProducts,
//         total:productData.fair*amountofProducts,
       
//     }
//     console.log(productData)

//     return(
//         <>
//         <div class="container mt-5">
//                 <div class="d-flex justify-content-center h-100">
//                     <div class="card1">
//                         <div class="card-header">
//                             <h3>{userData.username} Cart</h3>
//                         </div>
//                         <div class="card-body">
//                             <form onSubmit={async (e) => {
//                                 e.preventDefault();
//                                 await PostTicket(product);
//                                 setamountofProducts("");
//                                 await UpdateSeats(x[0],{seats:(productData.seats-amountofProducts)})
//                                 history.push(`/usertickets/${userData.username}`)
//                             }}>
                            

//                                 <div class="form-group text-light ">
//                                    <h4>Product
//                                         : {productData.productImage}</h4>
//                                 </div>


//                                 <div class="form-group text-light ">
//                                    <h4>Movie Date : {productData.date}</h4>
//                                 </div>
                                
//                                 <div class="input-group form-group">
//                                     <div class="input-group-prepend">
//                                         <span class="input-group-text"><i class="fas fa-sort-numeric-up"></i></span>
//                                     </div>
//                                     <input type="Number" class="form-control" placeholder="No of seats" required min="1" value={amountofProducts} onChange={(e) => {
//                                         setamountofProducts(e.target.value);
//                                     }}  />
//                                 </div>
//                                 <div class="form-group text-light ">
//                                    <h4>Total = rs {productData.fair*amountofProducts}</h4>
//                                 </div>
//                                 <div class="form-group">
//                                     <input type="submit" value="Buy" class="btn float-right btn-danger" />
//                                 </div>
//                             </form>
//                         </div>
//                         <div class="card-footer">
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Cart;
