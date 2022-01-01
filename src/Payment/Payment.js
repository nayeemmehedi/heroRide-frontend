import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';



import './Split.css'
import NEWpayment from './NEWpayment';


const stripePromise = loadStripe('pk_test_51J5cPUAy99puyXcgG23ckdcKVq9E593b1bbhhkmrzu5KyKFvMjrJDJEqO2F0w7AjmUqzV8QgYQJntZwsE60Mt2UK007URcHI3h')

const Payment = ({ handlepayment }) => {
    return (


        <div>


            <Elements stripe={stripePromise}>

                <NEWpayment handlepayment={handlepayment}></NEWpayment>



            </Elements>


        </div>






    );
};

export default Payment;