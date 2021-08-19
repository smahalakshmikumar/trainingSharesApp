import axios from "axios";
import * as api from "../../api/api"
import {
    
    ADD_TO_SHARE_ORDER,REMOVE_FROM_SHARE_ORDER,
    FETCH_SUCCESS_ORDERS
} from "../actions/actionTypes";

const initialState = {
    
    isLoading: false,
    confirmedShares:[]
   
  };
  /**
   *const shareOrdersReducer = (state = initialState, action) => {
    reducer to perform add,remove,clear order
   * @param {array} state - displays state 
   * @param {object} action -action object that has type and payload
   * @returns shareOrdersReducer data
   */
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case FETCH_SUCCESS_ORDERS:
        let confirmedShares = {
          ...state,
          confirmedShares: action.payload,
        };
        return confirmedShares;
      default:
        return state;
    }
  };
  
  export default orderReducer;