import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
// import fakedata from '../Fakedata/Fakedata.json'
// import fakegmail from "../Fakedata/emailfake.json"

const Navbar = () => {
  let user = JSON.parse(localStorage.getItem("user"));


  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  // const addallevent =()=>{

  //       fetch("https://evening-journey-57542.herokuapp.com/addCompany",{
  //           method: "POST",
  //           headers: {'Content-Type':'application/json'},
  //           body: JSON.stringify(fakegmail)
  //       })

  //   }
  // const [company, setcompany] = useState([]);
  // useEffect(() => {
  //   fetch("https://evening-journey-57542.herokuapp.com/company")
  //     .then((res) => res.json())
  //     .then((data) => setcompany(data));
  // }, []);

  // let isDEVELOPER = company.some((value) => value.email === user.email);

  return (
    <div style={{ fontFamily: "Besley" }}>
      {/* <button onClick={addallevent}>add all gmail</button> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <div style={{ height: "70px" }} className="pt-2">
              <p
                style={{
                  fontSize: "25px",
                  textAlign: "center",
                  paddingLeft: "30px",
                }}
              >
                {" "}
                <span style={{ color: "blue" }}>
                  <FontAwesomeIcon icon={faFeatherAlt} />
                     <span style={{ color: 'black' }}> HIRO </span>

                 
                </span>{" "}
                <span className="text-danger">RIDER
                </span>
              </p>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav ms-lg-auto mb-lg-2 mb-lg-0">
              {/* <li className="nav-item me-5">
                <Link className="nav-link active" aria-current="page" to="./">
                  Home
                </Link>
              </li>

              <li className="nav-item me-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="./home"
                >
                  Intern
                </Link>
              </li> */}

              {/* <li className="nav-item me-5 ">
                <Link
                  className="nav-link active bg-danger"
                  aria-current="page"
                  to="./login"
                >
                 Login
                </Link>
              </li> */}

              <li className="nav-item me-5">
                <Link
                  className="nav-link active bg-danger"
                  aria-current="page"
                  to="./trainner"
                >
                 Trainer
                </Link>
              </li>
              {/* <li className="nav-item me-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="./hire"
                >
                  Interview
                </Link>
              </li> */}

              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/driver"
                >
                  <button className="btn btn-primary">Driver</button>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="./admin"
                >
                  <button className="btn btn-info">Admin</button>
                </Link>
              </li>

              {localStorage.getItem("user") ? (
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href
                  >
                    {(user && user.name) || user.displayName || user.email}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href onClick={logout}>
                        Logged Out
                      </a>
                    </li>
                  </ul>
                </div>
              ) : null}
            </ul> 
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;