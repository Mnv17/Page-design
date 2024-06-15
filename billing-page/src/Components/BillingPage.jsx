import React from 'react';
import "./BillingPage.css";

export const BillingPage = () => {
  return (
    <div>
      <div>
        <h2>Billing</h2>
        <div>
            <h4>Order history</h4>
            <p>Manage billing information and view receipt</p>
        </div>
        <div className='container'>
        <div className='full-box'>
         <div className='head'>
                <p>Date</p>
                <p>Type</p>
                <p>Receipt</p>
         </div>

         <div className='middle'>
            <div className='inner-middle'>
                <p>Oct.21,2021</p>
                <p>Pro Annual</p>
                <p>Download</p>
            </div>
            <div className='inner-middle'>
                <p>Aug.21,2021</p>
                <p>Pro Portfolio</p>
                <p>Download</p>
            </div>
            <div className='inner-middle'>
                <p>Jul.21,2021</p>
                <p>Sponsred Post</p>
                <p>Download</p>
            </div>
            <div className='inner-middle'>
                <p>Jun.21,2021</p>
                <p>Sponsred Post</p>
                <p>Download</p>
            </div>
         </div>
        </div>

        <div className='plan'>
                <p>Your Plan</p>
                <h3>Pro Annual</h3>
                <p>Renews on Nov.2021</p>
                <p className='cancel'>Cancel Subscrption</p>
        </div>
        </div>
      </div>
    </div>
  )
}

