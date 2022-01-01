import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import axios from 'axios';

import { useForm } from "react-hook-form";
import NEWpayment from "./NEWpayment"
import Payment from "./Payment"
import Fakedata from "../fakedata/fake.json"

let user = {
    name : "nayeem Khan",
    email : "nayeem@gmail.com",
}


const FormPayment = () => {
     const [page, setpage] = useState([])


    const [company, setcompany] = useState([])
    const [formInfo, setformInfo] = useState(null)
    

    

    const {id} =useParams()

    



     useEffect(() =>{

    const fetchPost = async () =>{
        const res = await  axios.get("http://localhost:5600/addHero100")
        setpage(res.data)
    }
    fetchPost()

},[])
    

    useEffect(() => {

       const data =  page.filter (v => v._id == id)
        setcompany(data)




      
    }, [page])


    const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });



  
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    setformInfo(data)

    //  if (window.confirm("Do you want to add it?") == true) {
    //     fetch("https://localhost:5600/addnailpolishOne", {
    //       method: "POST",
    //       body: JSON.stringify(data),
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //       },
    //     })
    //       .then((response) => response.json())
    //       .then((json) => {
    //         alert("succefully done");
    //            window.location.reload();
    //       })
    //   }else {
    // 		alert("Cancel Oder...");
    // 		}
  };

  const handlePayment=(id)=>{
      
      const newdata = {

          formInfo,
          shippingId: id

      }
    alert(JSON.stringify(newdata));


  }
  

  return (
    <div className="darkman">
   
      <div style={{ display : formInfo ? "none" :"block"}} className="resortValue text-danger star">
        <h2 className="text-center">Add Product..</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

         <label className="text-danger star" htmlFor="name">
          User name
          </label>
         <input
                  type="text"
                 
                  {...register("user_name", {
                    required: "this is required",
                    
                  })}
                />
          {errors.name && <p>{errors.name.message}</p>}



          <label className="text-danger star" htmlFor="img">
            Company Name
          </label>
           <input
                  type="text"
                  value={company[0]?.company_name}
                  {...register("company_name", {
                    required: "this is required",
                    
                  })}
                />
          {errors.img && <p>{errors.img.message}</p>}


         
          <label className="text-danger star" htmlFor="amount">
            Price{" "}
          </label>
           <input
                  type="text"
                  value={company[0]?.money}
                  {...register("money", {
                    required: "this is required",
                    
                  })}
                />
          {errors.amount && <p>{errors.amount.message}</p>}
          <label className="text-danger star" htmlFor="value">
            User Email
          </label>
           <input
                  type="text"
                  value={user?.email}
                  {...register("user_email", {
                    required: "this is required",
                    
                  })}
                />
          {errors.value && <p>{errors.value.message}</p>}
          <label className="text-danger star" htmlFor="description">
            Car Name
          </label>
           <input
                  type="text"
                  value={company[0]?.car_name}
                  {...register("car", {
                    required: "this is required",
                    
                  })}
                />
          {errors.description && <p>{errors.description.message}</p>}
          <input type="submit" /> <br />



        </form>

        <h5 className="text-center text-danger">Click 4 times...</h5>

      </div>

      <div style={{ display : formInfo ? "block" :"none"}}>


      <Payment handlepayment={handlePayment}></Payment>
      
      
      </div>


          

    </div>
  );
};

export default FormPayment;