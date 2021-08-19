import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

/**
 *  NavigationBar component
 * @returns NavigationBar
 */
export const NavigationBar = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  //getting logged in user state from store
//   const state = useSelector((state) => state?.users?.usersList);
//   const { firstName, email, role } = state[0];
//   console.log(firstName, email, role);
  /**
   * logout function clicked
   * @returns dispatch logout and pushing to next page
   */
//   const logoutClicked = () => {
//     dispatch(Logout());
//     history.push("/")
//   };
  return (
    <Navbar
      bg="primary"
      expand="lg"
      sticky="top"
      top="0"
      style={{
        marginLeft: "-40px",
        marginRight: "-40px",
      }}
      position="fixed"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="/">Shares Buddy</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* {firstName ? (
            <Nav.Item>
              <Button variant="contained"> {firstName},</Button>
            </Nav.Item>
          ) : null} */}
          <Nav.Item>
            <Button  onClick={() => history.push("/sharesList")} >Shares</Button>
          </Nav.Item>
          <Nav.Item>
            <Button    onClick={() => history.push("/myOrders")} >My Orders</Button>
          </Nav.Item>
          <Nav.Item>
            <Button >Log Out</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavigationBar;
