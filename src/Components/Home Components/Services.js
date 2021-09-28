import React from "react";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services-intro">
          <p>The safe payment alternative is here</p>
          <p>
            All your cash transactions have now been made seamless and
            effortless. Go ahead and enjoy!
          </p>
        </div>
        <div className="service-box">
          <div className="service-box-inner">
            <div className="service-img-rep">
              <LocalAtmIcon />
            </div>
            <div className="service-offer">
              <h4>24/7 Cash Deposit</h4>
            </div>
          </div>
          <div className="service-box-inner">
            <div className="service-img-rep">
              <LocationCityIcon />
            </div>
            <div className="service-offer">
              <h4>pay school fees</h4>
            </div>
          </div>
          <div className="service-box-inner">
            <div className="service-img-rep">
              <ShoppingCartIcon />
            </div>
            <div className="service-offer">
              <h4>shop with ease</h4>
            </div>
          </div>
          <div className="service-box-inner">
            <div className="service-img-rep">
              <PhoneIphoneIcon />
            </div>
            <div className="service-offer">
              <h4>send money to phone</h4>
            </div>
          </div>
          <div className="service-box-inner dis"></div>
          <div className="service-box-inner">
            <div className="service-img-rep">
              <CardGiftcardIcon />
            </div>
            <div className="service-offer">
              <h4>enjoy rewards</h4>
            </div>
          </div>
          <div className="service-box-inner">
            <div className="service-img-rep">
              <SendToMobileIcon />
            </div>
            <div className="service-offer">
              <h4>pay any bill</h4>
            </div>
          </div>
        </div>
        <div className="service-overview">
          <img src="/images/ladypay2crop.jpg" alt="#" />
          <div className="overview-writeups">
            <div className="overview-heading">
              SafePAY can benefit your organization in several ways you may not
              have imagined
            </div>
            <div className="overview-sub-heading mt-3 mb-3">
              We understand the unique challenges facing organizations regarding
              receiving payments. Payments need not be a hassle for you and your
              stakeholders.
            </div>
            <div className="goals">
              <div className="goal-inner">
                <div className="goal-check">
                  <CheckOutlinedIcon />
                </div>
                <p>
                  We save you the stress of manually tracking payments from bank
                  statements and WhatsApp messages
                </p>
              </div>
              <div className="goal-inner">
                <div className="goal-check">
                  <CheckOutlinedIcon />
                </div>
                <p>
                  For every payment made to you, we send you instant
                  notification with all relevant details
                </p>
              </div>
              <div className="goal-inner">
                <div className="goal-check">
                  <CheckOutlinedIcon />
                </div>
                <p>
                  We give you executive dashboard to monitor all your payments
                </p>
              </div>
            </div>
            <button className="btn-orange"> sign up today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
