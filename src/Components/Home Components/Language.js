import React, { useState, useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link, useHistory } from "react-router-dom";
const Language = () => {
  const history = useHistory();
  const [navTop, setNavTop] = useState(false);
  const [lang, setLang] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const toLoginPage = () => {
    history.push("/login");
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 65) {
        setNavTop(true);
        setOpenNav(false);
      } else {
        setNavTop(false);
      }
    });
  }, []);
  return (
    <div className="justrel">
      <div className="language">
        <div className="lan-left">
          <div className="container">
            <p>
              <EmailIcon /> safepay@instantdeposit.africa
            </p>
            <p>
              <AccessTimeIcon /> live support
            </p>
          </div>
        </div>
        <div className="lan-right">
          <div className="container">
            <span onMouseOver={() => setLang(true)}>
              <img src="/images/w1.png" alt="#" className="me-2" />
              ENG
            </span>
            {lang ? (
              <div
                className="mouse-over-body"
                onMouseLeave={() => setLang(false)}
              >
                <span>
                  <img src="/images/w2.png" alt="#" className="me-2" />
                  DEU
                </span>
                <span>
                  <img src="/images/w3.png" alt="#" className="me-2" />
                  ESP
                </span>
                <span>
                  <img src="/images/w4.png" alt="#" className="me-2" />
                  FRA
                </span>
                <span>
                  <img src="/images/w5.png" alt="#" className="me-2" />
                  KSA
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="navbar" id={navTop ? "top" : "topnot"}>
        <div className="container">
          <div>
            <img src="/images/logo2.png" alt="#" />
          </div>
          <div>
            <div
              className={openNav ? "bars active" : "bars activenot"}
              onClick={() => setOpenNav(!openNav)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={openNav ? "nav-links active" : "nav-links activenot"}>
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/contact">contact</Link>
            </div>
            <button onClick={toLoginPage} className="btn-orange">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
