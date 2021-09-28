import React from "react";
import FastForwardIcon from "@mui/icons-material/FastForward";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="container">
        <div className="showcase-content">
          <div className="showcase-text">
            <div className="heading">
              make payments in two easy secure steps
            </div>
            <div className="sub-text">
              The safe payment is alternative to power your payments without
              need for long queues in banking halls or exposing your card
              details.
            </div>
            <button className="btn-orange">
              start now <FastForwardIcon />
            </button>
          </div>
          <div className="showcase-form">
            <div className="showcase-body">
              <div className="form-inputs">
                <label>select your payment</label>
                <select>
                  <option>school fees (private schools)</option>
                  <option>plateau health subscription</option>
                  <option>ESUT payments</option>
                  <option>ESCET Payment</option>
                  <option>IMT Payments</option>
                  <option>GOUNI payments</option>
                  <option>safePay topup</option>
                </select>
              </div>
              <div className="form-inputs">
                <label>enter registraction number</label>
                <input type="number" placeholder="Enter Reg Number" />
              </div>
              <p className="payment-info">
                {" "}
                you are about to pay <span className="price">
                  N3,500
                </span> for <span className="name">ezechi ogo</span> being{" "}
                <span className="name">bece</span> fees exchange rate
              </p>
              <div className="form-input">
                <input type="checkbox" />
                <span className="name ms-1">send me the payment reference</span>
              </div>
              <button className="btn-orange mt-3">continue</button>
              <div className="form-footer">
                <p>
                  By clicking continue, I am agree with{" "}
                  {/* eslint-disable-next-line */}
                  <a href="#">Terms & Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
