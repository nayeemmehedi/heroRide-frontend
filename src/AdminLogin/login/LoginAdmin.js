import React, { useState } from "react";

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LoginAdmin = () => {
  let google_provider = new firebase.auth.GoogleAuthProvider();

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // manual sigin up and password start

  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
    
  });

  const handleBlur = (event) => {
    if (event.target.name == "email") {
      let newuser = { ...user };

      newuser[event.target.name] = event.target.value;
      setUser(newuser);
    }
    if (event.target.name === "password") {
      let newuser1 = { ...user };
      newuser1[event.target.name] = event.target.value;
      setUser(newuser1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)

      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        let newuser = { ...user };

        newuser.errror = "";
        setUser(newuser);

        const { email } = user;

        // const signInuser2 = { email };
        // setLoggedInUser(signInuser2)
        localStorage.setItem("user", JSON.stringify(user));

        history.replace(from);

        // ...
      })

      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        let newuser = { ...user };

        newuser.error = errorMessage;

        setUser(newuser);
      });
  };

  //manual signin up and password finish

  const handleGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((result) => {
        let user = result.user;

        const loggedInUser = {
          name: user.displayName,
          email: user.email,
          img: user.photoURL,
        };
        

        localStorage.setItem("user", JSON.stringify(loggedInUser));
       

        history.replace(from);
        // window.location.reload();
         console.log(loggedInUser)
      })
      .catch((error) => {
        let errorMessage = error.message;

        
      });
  };

  //login form manual

  return (
    
    <div className="row mt-5 star" >
      <div className="col-4">

      </div>
      <div className="col-5">
        <div className='bg-secendary text-white'>
          <div>
            
          </div>
          <div className="container">
            <form onSubmit={handleSubmit}>
            
              <p>Admin Login....</p>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  onBlur={handleBlur}
                  name="email"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onBlur={handleBlur}
                  name="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
                <span>password must be greater then 6</span>
              </div>

              <input type="submit" value="submit" class="btn btn-primary" />

              {user.error ? (
                <h3 style={{ color: "red" }}>{user.error}</h3>
              ) : (
                <p></p>
              )}
            </form>
          </div>

          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <div className="nayeem1">
                <p>
                  <span>or</span>
                </p>
              </div>
            </div>
            <div className="col-4"></div>
          </div>

          <div>
            <div class="d-grid gap-2 ">
              {/* <button
                style={{ backgroundColor: "whitesmoke" }}
                className="btn btn-secondary btn-lg bg-dark"
                onClick={handleGoogle}
              >
                <i className="fab fa-google fa-2x"></i> <span> ... </span> Sign
                In With google
              </button> */}
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default LoginAdmin;