import React,{ Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Header = React.lazy(() => import("../FirstPage/Header/Header.js"));

// const Shop = React.lazy(() => import("./Components2/Shop.js"));

// const ShopConfirm = React.lazy(() => import("./Components2/ShopConfirm.js"));

// const Review = React.lazy(() => import("./Components2/Review/Review"));
// const Pay = React.lazy(() => import("./Components2/Pay/Pay"));

// const MyOrder = React.lazy(() => import("./Components2/MyOrder/MyOrder"));

// const Dashboard = React.lazy(() => import("./Components2/Dashboard/Dashboard"));

// const AddProduct = React.lazy(() =>
//   import("./Components3/AddProduct/AddProduct")
// );

// const MakeAdmin = React.lazy(() => import("./Components3/MakeAdmin/MakeAdmin"));
// const ManageAllOrders = React.lazy(() =>
//   import("./Components3/ManageAllOrders/ManageAllOrders")
// );
// const ManageProducts = React.lazy(() =>
//   import("./Components3/ManageProducts/ManageProducts")
// );

// const Private = React.lazy(() =>
//   import("./Components4/privateRoute/PrivateRoute")
// );
// const Login = React.lazy(() => import("../Login/login/Login.js"));
// const SignUp = React.lazy(() => import("../Login/createAccount/SignUp.js"));

const Trainner = React.lazy(() =>
  import("../admin_driver_trainner/trainner/Trainer.js")
);

const Trainer100 = React.lazy(() =>
  import("../admin_driver_trainner/trainner/Trainer100.js")
);

const Trainer200 = React.lazy(() =>
  import("../admin_driver_trainner/trainner/Trainer200.js")
);
const FormPayment = React.lazy(() =>
  import("../Payment/FormPayment.js")
);

const Driver = React.lazy(() =>
  import("../admin_driver_trainner/driver/Driver.js")
);

const Admin = React.lazy(() =>
  import("../admin_driver_trainner/admin/Admin.js")
);


const LoginTrain = React.lazy(() => import("../TrainnerLogin/login/LoginTrain.js"));
const SignUpTrain = React.lazy(() => import("../TrainnerLogin/createAccount/SignUpTrain.js"));

 const PrivateTrain = React.lazy(() =>import("../TrainnerLogin/privateRoute/PrivateRouteTrain.js"));

const LoginDriver = React.lazy(() => import("../DriverLogin/login/LoginDriver.js"));
const SignUpDriver = React.lazy(() => import("../DriverLogin/createAccount/SignUpDriver.js"));

 const PrivateDriver = React.lazy(() =>import("../DriverLogin/privateRoute/PrivateRouteDriver.js"));

const AdminLogin = React.lazy(() => import("../AdminLogin/login/LoginAdmin.js"));
 const PrivateAdmin = React.lazy(() =>import("../AdminLogin/privateRoute/PrivateRouteAdmin.js"));



let user = JSON.parse(localStorage.getItem("user"));




function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div>
          <Switch>

          <Route exact path="/">
              <Header></Header>
            </Route>
            

            <Route exact path="/loginTrain">
              <LoginTrain></LoginTrain>
            </Route>
              <Route exact path="/signupTrain">
              <SignUpDriver></SignUpDriver>
            </Route>





            <Route exact path="/loginDriver">
              <LoginDriver></LoginDriver>
            </Route>
              <Route exact path="/signupDriver">
              <SignUpTrain></SignUpTrain>
            </Route>


        
             <Route exact path="/loginAdmin">
              <AdminLogin></AdminLogin>
            </Route>








             <PrivateTrain exact path="/trainner">
              <Trainner></Trainner>
            </PrivateTrain>
            <PrivateTrain exact path="/trainer100">
              <Trainer100></Trainer100>
            </PrivateTrain>
            <PrivateTrain exact path="/trainer200">
              <Trainer200></Trainer200>
            </PrivateTrain>
            <PrivateTrain exact path="/formPay/:id">
              <FormPayment></FormPayment>
            </PrivateTrain>





             <PrivateDriver exact path="/driver">
              <Driver></Driver>
            </PrivateDriver>
            <PrivateAdmin exact path="/admin">
              <Admin></Admin>
            </PrivateAdmin>


            {/* <Route exact path="/">
              <Header></Header>
            </Route>
           
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>

            <Route exact path="/resort">
              <Shop></Shop>
            </Route>

            <Private exact path="/dashboard">
              <Dashboard></Dashboard>
            </Private>

            <Private exact path="/resortConfirm/:id">
              <ShopConfirm></ShopConfirm>
            </Private>

            <Dashboard>
              <Private exact path="/myOrder">
                <MyOrder></MyOrder>
              </Private>

              <Private exact path="/review">
                <Review></Review>
              </Private>

              <Private exact path="/pay">
                <Pay></Pay>
              </Private>

              <Private exact path="/addProduct">
                <AddProduct></AddProduct>
              </Private>

              <Private exact path="/makeAdmin">
                <MakeAdmin></MakeAdmin>
              </Private>

              <Private exact path="/ManageAllOrders">
                <ManageAllOrders></ManageAllOrders>
              </Private>

              <Private exact path="/ManageProducts">
                <ManageProducts></ManageProducts>
              </Private>
            </Dashboard> */}
          </Switch>
        </div>
      </Router>
      </Suspense>
    </div>
  );
}

export default App;