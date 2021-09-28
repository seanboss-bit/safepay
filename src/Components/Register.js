import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const Register = () => {
  return (
    <div className="login-body">
      <div className="login-form">
        <h4 className="topic">register</h4>
        <div className="login-form-inputs">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="login-form-inputs">
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="forgot-password">
          <div className="forget">
            <input type="checkbox" checked/>
            <label className="ps-1">i agree to the terms and conditions</label>
          </div>
        </div>
        <button className="btn-orange">sign up</button>
        <div className="other-login-options">
          <p>or sign up with</p>
          <div className="logos">
            <div className="logo-bg">
              <FacebookIcon />
            </div>
            <div className="logo-bg">
              <TwitterIcon />
            </div>
            <div className="logo-bg">
              <GoogleIcon />
            </div>
          </div>
          <p>
            don't have an account? <Link to="/login">login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
