import React from "react";

function Product(props){
    return <div class="col-lg-4 col-md-6 mb-4">
    <div className="card h-100">
    <a href="#"><img class="card-img-top" src={props.data.img} alt=""/></a>
    <div className="card-body">
      <h4 className="card-title">
        <a href="#">{props.data.productName}</a>
      </h4>
      <h5>{props.data.price}</h5>
      <p className="card-text">{props.data.discription}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted"></small>
    <button className="btn btn-warning" onClick={()=>props.handleAddItems(props.data)}>Add to Cart</button>
    
    </div>
  </div>
  </div>
}
export default Product;