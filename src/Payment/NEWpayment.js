import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const NEWpayment = ({handlepayment}) => {
  const stripe = useStripe();
  const elements = useElements();


  const [error1,setError1] =useState(null)
  const [success,setsuccess] =useState(null)






  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError1(error.message);
      setsuccess(null)
    } else {
     setsuccess(paymentMethod.id);
     setError1(null)
     handlepayment(paymentMethod.id)
    }
  };

  return (






    <div class="card ">
      <div class="card-header">
       Payment System
</div>
      <div class="card-body">
        <h5 class="card-title">Stripe payment System</h5>

        <div >

        <form  onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe}>
            Pay For Me
        </button>
        </form>



        </div>

      </div>
      <div class="card-footer text-muted">
       
         </div>

         {

           error1 && <p style={{color:'red'}}>{error1}</p>

         }

          {

          success && <p style={{color:'green'}}>Payment done SUCCESSFULLY...</p>

          }





    </div>
   











  );
};

export default NEWpayment;