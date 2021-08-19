import { LOG_IN, LOG_OUT } from "../actions/actionTypes";

const initialState = {
  usersList: [],
  isLoading: false,
};
/**
 * Login action reducer
* @param {array} state - displays state 
  * @param {object} action -action object that has type and payload
 * @returns usersList
 */
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      let usersLog = {
        ...state,
        usersList: action.payload,
      };
      console.log(usersLog);
      return usersLog;

    case LOG_OUT:
      let updated = {
        ...state,
        usersList: state.usersList.filter((item) => item.id !== action.payload),
      };
      console.log(updated);
      return updated;

    default:
      return state;
  }
};

export default loginReducer;
