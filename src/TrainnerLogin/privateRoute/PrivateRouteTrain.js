import React from 'react';
import { Redirect, Route } from 'react-router-dom'

const PrivateRouteTrain = ({ children, ...rest }) => {

    const user = JSON.parse(localStorage.getItem('user'))|| {}

    return (
        
        <Route
            {...rest}
           render={({ location }) =>

                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/loginTrain",
                            state:{ from: location }
                        }}
                    />
                )

            }
        />






    );






}


export default PrivateRouteTrain;