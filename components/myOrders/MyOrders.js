import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyOrdersChild from "./MyOrdersChild"
import {fetchOrders} from "../redux/actions/orderAction"

/**
 * Displays list of orders
 * @returns order component
 */
const MyOrders = () => {
  const userLoggedin = useSelector((state) => state?.users?.usersList);
  const orders = useSelector((state) => state?.orders);
  const { userorders } = orders.confirmedShares;
  let dispatch = useDispatch();
  const { id } = userLoggedin[0];

  
  /**grouping list data based on share name */
  const groups = userorders.reduce((groups, item) => ({
    ...groups,
    [item.shareName]: [...(groups[item.shareName] || []), item]
  }), {}
  );
  
  

  /**forming array */
  const objArray = [];
  Object.keys(groups).forEach(key => objArray.push({
    shareName: key,
   shareValues: groups[key]
  }));
  console.log("array",objArray)
  
 
  /**
   * to calculate total price
   * @returns sum value of individual shares
   */
   objArray?.map((data) =>{
    let sum=0,quantity=0;
    data.shareValues.map((share)=>{
       sum=sum+share.sharePrice;
       quantity=quantity+share.quantity;
       data.newTotalPrice=sum;
       data.totalQuantity=quantity;
       return sum,quantity;
    });
})

 /**
   * to calculate total price
   * @returns sum value of Total shares bought
   */
  const totalPrice = () => {
    let sum = 0;
    objArray?.map((data) =>{
        data.shareValues.map((value) => {
      sum = sum + value.sharePrice;

    });
   
    });
    console.log(sum)
    return sum;
  };
  const totalQuantity = () => {
    let quantity = 0;
    objArray?.map((data) =>{
        data.shareValues.map((value) => {
            quantity = quantity + value.quantity;
    });
    
    });
    console.log(quantity)
    return quantity;
  };





  /**
   * getting user orders from DB
   * @returns Dispatch get axios call
   */
  useEffect(() => {
    dispatch(fetchOrders(id));
  }, []);

  return (
      <MyOrdersChild userorders={userorders} objArray={objArray} totalQuantity={totalQuantity()}
      totalPrice={totalPrice()}/>
  );
};

export default React.memo(MyOrders);