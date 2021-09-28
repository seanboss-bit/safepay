import React from "react";
import { Link } from "react-router-dom";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";

const Footer = () => {
  return (
    <div className="home-footer">
      <div className="container">
        <div className="home-footer-content">
          <div className="footer-about">
            <div className="footer-abt-img">
              <img src="/images/logo2.png" alt="#" />
            </div>
            <div className="footer-about-txt">
              <p>
                SafePAY is an innovative seamless digital payment alternative
                designed for web and USSD. You can now safely perform your
                financial transactions from anywhere, with or without internet.
              </p>
            </div>
            <div className="signup-now">
              <input type="text" placeholder="Type Email" />
              <button className="btn-orange">quick signup</button>
            </div>
          </div>
          <div className="footer-links-one">
            <div className="footer-title">
              <p>Products</p>
            </div>
            <div className="footer-links">
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> cash deposit
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> bill payments
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> cash to phone
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> withdraw cash
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> isusu contribution
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> urgent 2k
              </Link>
            </div>
          </div>
          <div className="footer-links-two">
            <div className="footer-title">
              <p>Payments</p>
            </div>
            <div className="footer-links">
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> pay school fees
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> pay health insurance
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon />
                pay any invoice
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> pay for a friend
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> pay local taxes
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> pay a
              </Link>
            </div>
          </div>
          <div className="footer-links-three">
            <div className="footer-title">
              <p>company</p>
            </div>
            <div className="footer-links">
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> about us
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> products
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon />
                payments
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> subscription
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> our vision
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> social media
              </Link>
            </div>
          </div>
          <div className="footer-links-four">
            <div className="footer-title">
              <p>support</p>
            </div>
            <div className="footer-links">
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> customer care
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> live chat
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon />
                notification
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> privacy
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> terms & condition
              </Link>
              <Link to="/">
                <PlayCircleFilledWhiteOutlinedIcon /> contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
