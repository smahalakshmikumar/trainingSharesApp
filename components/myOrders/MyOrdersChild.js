import React from "react";
import NavigationBar from "../ui/NavigationBar";
import { Button } from "react-bootstrap";

/**
 * Displays list of orders
 * @returns orderchild component
 */
const MyOrdersChild=({objArray,totalPrice,totalQuantity})=>{

    
    

    return (
        <>
          <NavigationBar/>
          <div class="row">
              <div class="col-md-8">
              {objArray != null && objArray.length > 0 ? (
        <div class="card" style={{ width: "40rem", margin: "20px" }}>
          <div class="card-header">
            <h4>My Orders</h4>
            <h6>My shares:{totalQuantity}</h6>
            <h6>Shares worth:Rs.{totalPrice}</h6>
          </div>
          {objArray?.map((data) => (
            < div style={{ margin: "20px" }}>
              <h5 style={{ color: "blue" }}>Share Name: {data.shareName} </h5>
              <p>Number of Shares:  {data.totalQuantity}</p>
              <p>Price:Rs.{data.newTotalPrice}</p>
              <div class="card-footer"><Button variant="danger" 
                  id="sellButton">Sell Share</Button></div>              
             </div>
          ))} 
        </div>
      ) : <h1>Book Shares</h1>
      }
              </div>
              <div class="col-md-4">
              <div class="card" style={{ width: "18rem", margin: "20px" }}>
          <div class="card-header">
            <h4>Wallet Balance</h4>
          </div>
          <div>
          <h5 style={{ color: "blue" }}>Rs.</h5>
          </div>
          </div>
              </div>
          </div>
        </>
      );
}
export default React.memo(MyOrdersChild);
