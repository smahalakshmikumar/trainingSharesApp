import { LOG_IN, LOG_OUT } from "./actionTypes";

/**
 * Login action
 * @param {array} data- logged in data  
 * @returns login data
 */
export const Login = (data) => {
  return {
    type: LOG_IN,
    payload: data,
  };
};

/**
 * Logout action
 * @param {number} id- logged out based on id  
 * @returns logout
 */
export const Logout = (id) => {
  return {
    type: LOG_OUT,
    payload: id,
  };
};
