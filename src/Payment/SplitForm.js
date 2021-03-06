import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";

import "./Split.css"



const useOptions = () => {
 
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize:"16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
    <form onSubmit={handleSubmit}>

      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            
          }}
          onChange={event => {
           
          }}
          onBlur={() => {
            
          }}
          onFocus={() => {
           
          }}
        />
      </label> <br />
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            
          }}
          onChange={event => {
           
          }}
          onBlur={() => {
           
          }}
          onFocus={() => {
            
          }}
        />
      </label> <br />
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
           
          }}
          onChange={event => {
           
          }}
          onBlur={() => {
            
          }}
          onFocus={() => {
            
          }}
        />
      </label> <br />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

export default SplitForm;
