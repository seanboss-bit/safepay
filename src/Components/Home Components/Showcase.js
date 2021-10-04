import React, { useState, useEffect } from "react";
import FastForwardIcon from "@mui/icons-material/FastForward";
import payments from "../api/payment-type";
import userData from "../api/user";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Showcase = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(false);
  const [option, setOption] = useState(payments[0]);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(userData);
  const changeOption = (e) => {
    const selectedOptionId = e.target.value;
    const selectedOption = payments.filter(
      (payment) => payment.id === selectedOptionId
    )[0];
    setOption(selectedOption);
  };
  const NumberWithComma = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    setOption(payments[0]);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // eslint-disable-next-line
    const findUser = userData.filter((user) => {
      if (
        user.regNumber.toLowerCase().toString() ===
        search.toLowerCase().toString()
      ) {
        return user;
      } else if (
        user.regNumber.toLowerCase().toString() !==
        search.toLowerCase().toString()
      ) {
        console.log("bad");
      }
    });
    setUsers(findUser);
  }, [search]);
  return (
    <div className="showcase">
      <ToastContainer />
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
                <select onChange={(e) => changeOption(e)} value={option?.id}>
                  {payments.map((payment) => (
                    <option key={payment.id} value={payment.id}>
                      {payment.value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-inputs">
                <label>enter registraction number</label>
                <input
                  type="input"
                  placeholder="Enter Reg Number"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setValue(false);
                    } else {
                      setSearch(e.target.value);
                      setLoading(true);
                      setValue(true);
                      setTimeout(() => {
                        setLoading(false);
                      }, 5000);
                    }
                  }}
                  on
                />
              </div>
              {value ? (
                <div>
                  {loading ? (
                    <div className="info-loading">
                      <ClipLoader color="#ffb24d" />
                    </div>
                  ) : (
                    <p className="payment-info">
                      {" "}
                      you are about to pay{" "}
                      <span className="price">
                        N{NumberWithComma(option?.price)}
                      </span>{" "}
                      for{" "}
                      <span className="name">
                        {users.map((user) => (
                          <span key={user.id}>
                            {user.firstName}
                            <span className="ms-1 me-1">{user.lastName}</span>
                          </span>
                        ))}
                      </span>
                      being <span className="name">{option.value}</span> fees
                      exchange rate
                    </p>
                  )}
                </div>
              ) : null}
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
