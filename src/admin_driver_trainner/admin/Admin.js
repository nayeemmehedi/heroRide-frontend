import React from 'react'
import MainPage from "./Pagination/Mainpage"
import {adminMain} from "./File"

const Admin = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  

    return (
        <div>

         {(user.email == adminMain) ?<div>

          <MainPage/>
         
         </div>  : <div>You r not admin...</div> }

       
            
        </div>
    );
};

export default Admin;