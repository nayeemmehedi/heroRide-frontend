import React, { useState } from "react";
import firebase from "firebase/app";

import "firebase/auth";

import { Link } from "react-router-dom";
import firebaseConfig from "../login/firebaseConfig";
import { useHistory } from "react-router-dom";

//solving error
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const SignUpTrain = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    password: "",
    password_confirm: "",
    error: "",
    passwordError: "",
    success: false,
    check: false,
  });

  //check function  password  & confirm password equal or not

  const isPasswordConfirmed = (password, confimPassword) => {
    if (password && confimPassword && password === confimPassword) return true;
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isPasswordConfirmed(user.password, user.password_confirm)) {
      let newuser = { ...user };
      newuser.passwordError = "password not matching";
      setUser(newuser);

      return;
    }

    // //   user.sendEmailVerification()
    //     const user = firebase.auth().currentUser;
    //     firebase.auth().user.sendEmailVerification()
    //    .then(() => {
    // // Email verification sent!
    // // ...
    //  });

    const newname = firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)

      .then((userCredential) => {
        // Signed in

        var user1 = userCredential.user;

        //    let passcode=   user.sendEmailVerification()
        //    console.log(passcode)

        let newuser = { ...user1 };
        newuser.error = "";

        setUser(newuser);

        // UserInfoPass(user.name)

        // history.push('/login')

        const trainner = () => {
          fetch("http://localhost:5600/trainnerData", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => "");
        };

        trainner();

        alert("Done.....");
      })

      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        user.isSignIn = false;

        let newuser = { ...user };
        newuser.error = errorMessage;
        setUser(newuser);
      });
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleBlur = (event) => {
    let validCheck = true;

    if (event.target.name === "email") {
      validCheck = validateEmail(event.target.value);
    }

    if (event.target.name === "password") {
      validCheck = event.target.value > 6;
    }

    if (validCheck) {
      let newuser = { ...user };
      newuser[event.target.name] = event.target.value;
      setUser(newuser);
    }

    if (event.target.name === "check") {
      let newuser = { ...user };
      newuser[event.target.name] = event.target.checked;
      setUser(newuser);
    }
  };

  let UserInfoPass = (name) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({})
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div
      className="container star"
      style={{ backgroundColor: "black", text: "white" }}
    >
      <div className="row pt-5">
        <div className="col-4"></div>
        <div className="col-4" style={{ color: "white" }}>
          <form onSubmit={handleSubmit}>
            <h1>Create an account Trainer....</h1>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Username
              </label>
              <input
                required
                type="text"
                onBlur={handleBlur}
                placeholder="Name Please"
                name="name"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                Username
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Email
              </label>
              <input
                required
                type="email"
                onBlur={handleBlur}
                placeholder="Email Please"
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
                required
                type="password"
                name="password"
                class="form-control"
                id="exampleInputPassword1"
                onBlur={handleBlur}
              />
              <span>password must be geater then 6</span>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password confirm
              </label>

              <input
                required
                type="password"
                name="password_confirm"
                class="form-control"
                id="exampleInputPassword1"
                onBlur={handleBlur}
              />
              <span>password must be geater then 6</span>
            </div>
            <br />
            <hr />
            <label for="exampleInputPassword1" class="form-label">
              If you r trainner click here ...otherwise not
            </label>{" "}
            <br />
            <hr />
            <input
              onBlur={handleBlur}
              type="checkbox"
              name="check"
            /> <br /> <hr />
            <input
              type="submit"
              value="Create an account"
              class="btn btn-primary"
            />
          </form>
          <h1 style={{ color: "red" }}>{user.error}</h1>
          {user.isSignIn && (
            <h1 style={{ color: "green" }}>SuccessFully login in</h1>
          )}

          <span>
            already have an account ? <Link to="/loginTrain">sign In</Link>{" "}
          </span>

          <h1 style={{ color: "red" }}>{user.passwordError}</h1>

          <div style={{ height: "200px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpTrain;
