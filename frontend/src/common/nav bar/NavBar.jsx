import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/navbar/logo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function NavBar() {
  return (
    <div className="nav_bar">
      <div className="container">
        <div className="content c_flex">
          <div className="logo_nav_links c_flex">
            <div className="logo">
              <Link to="">
                <img src={logo} alt="shopify" className="img" />
              </Link>
            </div>
            <div className="nav_links">
              <ul className="links c_flex">
                <li>
                  <Link to="" className="a_flex">
                    <span>Solutions</span>
                    <ExpandMoreIcon />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <span>Pricing</span>
                  </Link>
                </li>
                <li>
                  <Link to="" className="a_flex">
                    <span>Resources</span>
                    <ExpandMoreIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="login_reg c_flex">
            <div className="login_btn">
              <Link to="/login">Log in</Link>
            </div>
            <div className="register_btn ">
              <Link to="/register" className="btn_primary fw">
                Start free trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
