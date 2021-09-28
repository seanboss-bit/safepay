import React from "react";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Form = () => {
  return (
    <div className="contact-info">
      <div className="container">
        <div className="call-side">
          <div className="call-box">
            <PhoneIphoneOutlinedIcon />
            <div className="text-stuff">
              <p>Call our 24/7 call center on</p>
              <p>+234 700 SAFEPAY</p>
            </div>
          </div>
          <div className="call-box">
            <EmailOutlinedIcon />
            <div className="text-stuff">
              <p>Email :safepay@instantdeposit.africa</p>
              <p>Web: www.instantdeposit.africa</p>
            </div>
          </div>
          <div className="call-box">
            <LocationOnOutlinedIcon />
            <div className="text-stuff">
              <p>Location : Genesys Tech Hub, KM7,</p>
              <p>Enugu-Port Harcourt Expressway, Enugu</p>
            </div>
          </div>
        </div>
        <div className="form-side">
          <div className="form-side-img">
            <img src="/images/sitting.png" alt="#" />
          </div>
          <div className="form-body">
            <div className="name-area">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button className="btn-orange">send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
