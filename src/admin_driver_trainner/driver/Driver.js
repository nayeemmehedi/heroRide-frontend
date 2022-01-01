import React,{useState,useEffect} from "react";
import fakedata from "../../fakedata/fake.json";
import axios from "axios"

const Driver = () => {

  const [check1,setcheck1] = useState(false)

  let user = JSON.parse(localStorage.getItem("user"));


    const [page, setpage] =useState([])


        useEffect(() =>{

    const fetchPost = async () =>{
        const res = await  axios.get("http://localhost:5600/trainnerDataBack")
        setpage(res.data)
    }
    fetchPost()

},[])


let isTRainner = page.filter((value) => value.email === user.email);

useEffect(() => {


  if(isTRainner[0]?.check === false){

      setcheck1(false)

      
  }else{
       setcheck1(true) 

  }
   
}, [isTRainner])







  console.log(fakedata);

  const func = () => {
    // fetch("http://localhost:5600/addAll", {
    //   method: "POST",
    //   body: JSON.stringify(fakedata),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => alert("thank u"));
  };

  return (
    <div>

   {check1 ?  <div>
      <h1>hello driver {(user && user.name) || user.displayName || user.email}</h1>
     
     </div> : <div>You r not driver...</div> }
     
    </div>
  );
};

export default Driver;
