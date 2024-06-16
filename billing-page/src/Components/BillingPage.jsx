import React from "react";
import "./BillingPage.css";

export const BillingPage = () => {
  const orderHistory = [
    { date: "Oct. 21, 2021", type: "Pro Annual", receipt: "Download" },
    { date: "Aug. 21, 2021", type: "Pro Portfolio", receipt: "Download" },
    { date: "July. 21, 2021", type: "Sponsored Post", receipt: "Download" },
    { date: "Jun. 21, 2021", type: "Sponsored Post", receipt: "Download" },
  ];

  return (
    <div className="billingParentDiv">
      <main className="content">
        <h1 style={{color: "#1a194ce7"}}>Billing</h1>
        <section className="order-history">
          <h2 style={{color: "#1a194ce7"}}>Order History</h2>
          <p style={{color: "#1a194ce7"}}>Manage billing information and view receipts</p>

          <div className="billingParentheader">
            <div>Date</div>
            <div>Type</div>
            <div>Receipt</div>
          </div>

          <div>
            <div className="trowparent">
              {orderHistory.map((order, index) => (
                <div key={index} className="order-row">
                  <div>{order.date}</div>
                  <div>{order.type}</div>
                  <div>
                    <button className="download-button">{order.receipt}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="load-more">Load more</button>
        </section>
        <section className="payment-method">
          <h2 style={{color: "#1a194ce7"}}>Payment Method</h2>
          <p>Manage billing information and view receipts</p>
          <div className="payment-card">
            <div className="card-info">
              <img
                src="https://th.bing.com/th/id/OIP.xVREsbEnxpFwYsgl4hNO7QHaDA?rs=1&pid=ImgDetMain"
                alt="Visa"
              />
              <span style={{color: "#1a194ce7"}}>Visa ending in 2255</span>
            </div>
            <button className="remove-button">Remove</button>
          </div>
        </section>
      </main>

      <div className="subscription">
        <div>Your plan</div>
        <div>Pro Annual</div>
        <div>Renews on Nov. 2021</div>
        <button className="cancel-button">Cancel subscription</button>
      </div>
    </div>
  );
};
