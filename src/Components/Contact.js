import React, { useState, useEffect } from "react";
import Showcase from "./Contact Components/Showcase";
import Language from "./Home Components/Language";
import Footer from "./Home Components/Footer";
import CopyRight from "./Home Components/CopyRight";
import Form from "./Contact Components/Form";
const Contact = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading">
          <img src="/images/preloader.gif" alt="#" />
        </div>
      ) : (
        <div>
          <Language />
          <Showcase />
          <Form />
          <Footer />
          <CopyRight />
        </div>
      )}
    </div>
  );
};

export default Contact;
