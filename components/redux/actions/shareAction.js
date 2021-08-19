import axios from "axios";
import * as api from "../../api/api"
import {
    FETCH_SHARES_LIST,
    FETCH_SELECTED_SHARE,
    FETCH_FAILURE_SHARESLIST
} from "./actionTypes";

/**
 * Fetching list of SHARES
 * @returns dispatch fetch success list of SHARES
 */
 export const fetchSharesList = () => {
    return (async(dispatch, state) => {
      try{
        let response = await api.getData("share/");
        dispatch(fetchSuccess(response.data));
      
      }
      catch(err){
        dispatch(fetchFailure(err));
      }
    });
  };

/**
 * Fetching selected SHARE
 * @returns dispatch fetch  selected SHARE
 */
 export const fetchSelectedDoctor = (paramID) => {
    return (async(dispatch, state) => {
      try{
        let response = await api.getData(`share/${paramID}`);
        dispatch(fetchSelectedSuccess(response.data));
      
      }
      catch(err){
        dispatch(fetchFailure(err));
      }
    });
  };
  



  /**
 * success response
 * @param {array} data -takes response data
 * @param {object} options -shows options 
 * @returns type:FETCH_SHARES_LIST,data
 */
export const fetchSuccess = (data, options = {}) => {
    return { type: FETCH_SHARES_LIST, payload: data};
  };
  
  /**
   * success response
   * @param {object} data -takes response data
   * @param {object} options -shows options 
   * @returns type:FETCH_SELECTED_SHARE,data
   */
   export const fetchSelectedSuccess = (data, options = {}) => {
    return { type: FETCH_SELECTED_SHARE, payload: data};
  };
  
  
  /**
   * fetch failure to return error 
   * @param {error} displays error 
   * @returns type fetch failure,payload data
   */
  export const fetchFailure = (err) => {
    return { type: FETCH_FAILURE_SHARESLIST, payload: err.message };
  };
  
  
  