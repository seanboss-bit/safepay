import React from "react";
import TimelineIcon from "@mui/icons-material/Timeline";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ForumIcon from '@mui/icons-material/Forum';
const About = () => {
  return (
    <div className="abt">
      <div className="container">
        <div className="abt-content">
          <div className="image-side">
            <div className="img-post">
              <img src="/images/vd.jpg" alt="#" />
              <img src="/images/vd1.jpg" alt="#" className="abs" />
            </div>
            <img src="/images/vd2.jpg" alt="#" />
          </div>
          <div className="writing-side">
            <div className="write-title">
              Why choose our secure, fast and seamless payment platform?
            </div>
            <div className="wrire-sub-text">
              Would you rather not make and receive payments anywhere and at any
              time? Why spend time in long queues in banking halls? Why expose
              your debit card details? We provide you with secure, quick,
              efficient and seamless financial transactions
            </div>
            <div className="graph-space">
              <div className="graph-space-content">
                <div className="graph-icon">
                  <TimelineIcon />
                </div>
                <div className="graph-text">
                  <p className="graph-title">Accurate Payments</p>
                  <p className="normal-writing">
                    There is no overpayment or underpayment when you use our
                    seamless platform; you pay exactly what you need to
                  </p>
                </div>
              </div>
              <div className="graph-space-content">
                <div className="graph-icon">
                  <FileCopyIcon />
                </div>
                <div className="graph-text">
                  <p className="graph-title">Safe & Secure</p>
                  <p className="normal-writing">
                    Your payments on our platform will not expose your sensitive
                    financial information online. Generate your payment
                    reference and use your bank's USSD to pay
                  </p>
                </div>
              </div>
              <div className="graph-space-content">
                <div className="graph-icon">
                  <ForumIcon />
                </div>
                <div className="graph-text">
                  <p className="graph-title">Available to anyone</p>
                  <p className="normal-writing">
                    Now, your friends and relatives can now help you pay those
                    fees from anywhere. Just send them your payment reference
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
