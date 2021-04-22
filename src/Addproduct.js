import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { PostProducts } from "./api";
import axios from "axios";
function Addproducts(){

    let [productname,setproductname] =useState("");
    let [price, setprice] = useState("");
    
    let [details,setdetails]=useState("");
    let [image,setimage]=useState("");
    

    let userData = { product: productname,productprice: price, productdetails: details,productimage: image}
    let history=useHistory();
    
    return(
        <>
         <div class="container mt-5">   
         <div className="col-2 float-right">
                 <button className="btn btn-danger " onClick={()=>{
                     history.push(`/products`);
                 }}>Products</button>
             </div>       
                <div class="d-flex justify-content-center h-100">
                    <div class="card1">
                        <div class="card-header">
                            <h3>Add Product</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                let productdata= await axios.post("http://localhost:8000/Addproduct",userData);
                                setprice("");
                                
                                setproductname("");
                                setdetails("");
                                setimage("");
                              
                            }}>
                            <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-video"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Product Name" required value={productname} onChange={(e) => {
                                        setproductname(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-language"></i></span>
                                    </div>
                                    <input type="number" class="form-control" placeholder="Price" required value={price} onChange={(e) => {
                                        setprice(e.target.value);
                                    }}/>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-clock"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="details"  required value={details} onChange={(e) => {
                                        setdetails(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-rupee-sign"></i></span>
                                    </div>
                                    <input type="file" class="form-control" placeholder="image"  required value={image} onChange={(e) => {
                                        setimage(e.target.value);
                                    }} />
                                </div>
                                
                                <div class="form-group">
                                    <input type="submit" value="Add Product" class="btn  btn-success" />
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

export default Addproducts;
  