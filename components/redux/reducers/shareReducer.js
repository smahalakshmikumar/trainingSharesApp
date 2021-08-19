import {
    FETCH_SHARES_LIST,
    FETCH_SELECTED_SHARE,FETCH_FAILURE_SHARESLIST,SET_LOADER
} from "../actions/actionTypes";

  const initialState = { sharesList:[],selectedShare:{},
  isLoading: false, error: "" };
  /**
   * shareReducer to perform fetch success,failure and set loader actions
   * @param {array} state - displays state 
    * @param {object} action -action object that has type and payload
   * @returns updated state
   */
  const shareReducer = (state = initialState, action) => {
    switch (action.type) {
       case FETCH_SELECTED_SHARE:
         let success={ ...state, selectedShare: action.payload,error: "" }
         console.log(success);
        return success;
        case FETCH_SHARES_LIST:
        return { ...state, sharesList: action.payload,error: "" }
       case FETCH_FAILURE_SHARESLIST:
        return { ...state, error: action.payload, sharesList: [] ,selectedShare:{}};
      
       default:
        return state;
    }
  };
  
  export default shareReducer;
  