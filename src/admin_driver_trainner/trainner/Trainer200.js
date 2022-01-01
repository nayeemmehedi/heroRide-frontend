import React,{useState,useEffect} from 'react';
import axios from 'axios';
import fakedata from "../../fakedata/fake.json"
import {Link} from "react-router-dom"

const Trainner200 = () => {
      const [check1,setcheck1] = useState(false)

  let user = JSON.parse(localStorage.getItem("user"));


    const [page1, setpage1] =useState([])


        useEffect(() =>{

    const fetchPost = async () =>{
        const res = await  axios.get("http://localhost:5600/trainnerDataBack")
        setpage1(res.data)
    }
    fetchPost()

},[])


let isTRainner = page1.filter((value) => value.email === user.email);

useEffect(() => {


  if(isTRainner[0]?.check === false){

      setcheck1(true)

      
  }else{
       setcheck1(false) 

  }
   
}, [isTRainner])



     const [page, setpage] = useState([])

    useEffect(() =>{

    const fetchPost = async () =>{
        const res = await  axios.get("http://localhost:5600/addHero100")
        setpage(res.data)
    }
    fetchPost()

},[])



    return (
        <div>

       { check1 ? <div className="row">
            
       

            {
                page.map(v=>( (v.money==200) &&

                    <div className="col-4 border  m-5 p-5 shadow bg-info text-secendary">

                     <p>Name : {v.company_name}</p>
                     <p>Car Name : {v.car_name}</p>
                     <p>money : {v.money}</p>
                     <Link to ={`./formPay/${v._id}`} button className="btn btn-primary">buy package</Link>
                     <p></p>


                                     
    
                    </div>


                ))
            }
             </div> : <div>you r not trainner...</div>  }
            
        </div>
    );
};

export default Trainner200;