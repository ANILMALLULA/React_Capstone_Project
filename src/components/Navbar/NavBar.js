import React from "react";
import {
  FaListAlt,
  FaHome,
  FaPlus,
  FaUser,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavBar = () => {
  const auth = useSelector((state) => state.users);
  const history = useHistory();
  const filledLocal = JSON.parse(localStorage.getItem("user-info"));

  return (
    <>
      <Navbar
        expand='lg'
        responsive='true'
        style={{
          display: "flex",
          backgroundColor: "#865858",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px",
        }}
      >
        <Link
          to='/'
          style={{
            textDecoration: "none",
          }}
        >
          <h4
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
              margin: "auto",
              marginLeft: "20px",
            }}
          >
            Capstone Project
          </h4>
        </Link>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <NavLink
              exact
              to='/home'
              style={{
                color: "white",
                fontWeight: "600",
                margin: "10px",
              }}
            >
              <FaHome style={{ margin: "10px 0" }} /> Home
            </NavLink>
            <NavLink
              exact
              to='/list'
              style={{
                color: "white",
                fontWeight: "600",
                margin: "10px",
              }}
            >
              <FaListAlt style={{ margin: "10px 0" }} /> View List
            </NavLink>
            <NavLink
              exact
              to='/create'
              style={{
                color: "white",
                fontWeight: "600",
                margin: "10px",
                marginRight: "20px",
              }}
              onClick={() => {
                if (auth.loginSuccess) {
                  history.push("/create");
                } else if (window.confirm("Please login to add the product")) {
                  history.push("/login");
                }
              }}
            >
              <FaPlus style={{ margin: "10px 0" }} /> Add Product
            </NavLink>
            <NavLink
              exact
              to='/charts'
              style={{
                color: "white",
                fontWeight: "600",
                margin: "10px",
              }}
              onClick={() => {
                if (auth.loginSuccess) {
                  history.push("/charts");
                } else if (window.confirm("Please login to view the charts")) {
                  history.push("/login");
                }
              }}
            >
              <FaChartBar style={{ margin: "10px 0" }} /> Charts
            </NavLink>
            {auth.loginSuccess ? (
              <NavLink
                exact
                to='/profile'
                style={{
                  color: "black",
                  fontWeight: "bold",
                  margin: "10px",
                }}
                onClick={() => {
                  history.push("profile");
                }}
              >
                {filledLocal.fname}
                <FaUser style={{ margin: "10px 4px" }} />
              </NavLink>
            ) : null}

            {!auth.loginSuccess ? (
              <NavLink
                exact
                to='/login'
                style={{
                  color: "black",
                  fontWeight: "bold",
                  margin: "10px",
                }}
                onClick={() => {
                  history.push("login");
                }}
              >
                Login
                <FaUser style={{ margin: "10px 0" }} />
              </NavLink>
            ) : (
              <NavLink
                exact
                to='/logout'
                style={{
                  color: "black",
                  fontWeight: "bold",
                  margin: "10px",
                }}
                onClick={() => {
                  history.push("logout");
                }}
              >
                {" "}
                Logout
                <FaSignOutAlt style={{ margin: "10px 4px" }} />
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
