import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { DeleteProductById, GetProducts } from "./api";
import axios from "axios";

function Products() {
  let [userData, setuserData] = useState([]);

  useEffect(async () => {  
    let users = async()=> await  axios.get(`http://localhost:8000/products`);
    
    console.log(users.data);
    // setuserData(...userData, users.data);
    await setuserData([...userData,users.data])
    console.log("Mounted");
    // console.log(userData)
    users();
  }, []);

  let history = useHistory();

  return (
    <>
      <div className="container">
        <div className="row">
          {userData.map((user) => {
            return (
              <div className="col-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={user.image}
                    // "https://i.gadgets360cdn.com/products/cameras/large/1548234749_832_canon_eos-80d-24mp-dslr-camera.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{user.productname}</h5>
                    <p class="card-text">{user.details}</p>
                    {/* <a href="#" class="btn btn-primary">{user.price}</a> */}
                    <button
                      onClick={async () => {
                        history.push(`/cart`);
                      }}
                      class="btn btn-outline-danger up-lift btn-sm"
                    >
                      799
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
