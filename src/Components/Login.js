import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
const Login = () => {
  return (
    <div className="login-body">
      <div className="login-form">
        <h4 className="topic">login</h4>
        <div className="login-form-inputs">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="forgot-password">
          <div className="forget">
            <input type="checkbox" checked/>
            <label className="ps-1">remember me</label>
          </div>
          <p>forgot password?</p>
        </div>
        <button className="btn-orange">login</button>
        <div className="other-login-options">
          <p>or sign in with</p>
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
            don't have an account? <Link to="/register">sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
