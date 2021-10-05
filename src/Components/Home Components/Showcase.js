import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
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
  const [users, setUsers] = useState();
  const [modalLoading, setModalLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [sucess, setSucess] = useState(true);
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
    setModalLoading(true);
    setTimeout(() => {
      setModalLoading(false);
    }, 4000);
  }, [modal, sucess]);
  useEffect(() => {
    const findUser = userData.find((user) => {
      return (
        user.regNumber.toLowerCase().toString() ===
        search.toLowerCase().toString()
      );
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
                        {users ? (
                          <span>
                            {users.firstName}
                            <span className="ms-1 me-1">{users.lastName}</span>
                          </span>
                        ) : (
                          <div>
                            {setValue(false)}
                            {toast.error(
                              "User with This Registration Number Does Not Exist"
                            )}
                          </div>
                        )}
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
              <button
                className="btn-orange mt-3"
                disabled={search === "" && users}
                onClick={() => {
                  if (users) {
                    setModal(true);
                  }
                }}
              >
                continue
              </button>
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
      {modal ? (
        <div className="showcase-modal-bg">
          <div className="container">
            <div className="showcase-modal-body">
              {modalLoading ? (
                <div className="modal-load">
                  <ClipLoader color="#ffb24d" size={130} />
                </div>
              ) : (
                <div>
                  <div className="closing">
                    <CloseIcon onClick={() => setModal(false)} />
                  </div>
                  <div className="reference">
                    <p>REF NO: FGIE34525JTE</p>
                  </div>
                  {sucess ? (
                    <div>
                      <div className="content">
                        <p>Are You Sure That You Want To Continue</p>
                        <p>
                          You are About to pay{" "}
                          <span className="price me-1">
                            N{NumberWithComma(option?.price)}
                          </span>
                          for{" "}
                          <span className="name">
                            {users?.firstName}
                            <span className="ms-1 me-1">{users?.lastName}</span>
                          </span>{" "}
                          <span className="name">{option.value}</span> with
                          SafePay
                        </p>
                      </div>
                      <input type="text" placeholder="Phone Number" />
                      <div className="buttons">
                        <button
                          className="btn-reverse"
                          onClick={() => setModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn-orange"
                          onClick={() => {
                            setSucess(false);
                            setModalLoading(true);
                            setTimeout(() => {
                              setModalLoading(false);
                            }, 4000);
                          }}
                        >
                          continue
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {modalLoading ? (
                        <div className="modal-load">
                          <ClipLoader color="#ffb24d" size={130} />
                        </div>
                      ) : (
                        <div>
                          <div className="reference bold">
                            <p>PAY REF: 8480238484</p>
                          </div>
                          <div className="content">
                            <p>Your Payment Has Been Approved</p>
                            <p>
                              To Complete the Payment From Any Bank Dial
                              *Bank_Code*000*REF NO#
                            </p>
                          </div>

                          <button
                            className="btn-reverse"
                            onClick={() => {
                              setModal(false);
                              setValue(false);
                              setOption(payments[0]);
                            }}
                          >
                            Continue
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Showcase;
