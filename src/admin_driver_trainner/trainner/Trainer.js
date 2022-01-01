import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import StripeMade from "../../Payment/Payment"
import axios from "axios";

const Trainer = () => {

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

console.log(isTRainner[0]?.check)

useEffect(() => {

    
          if(isTRainner[0]?.check === false){

           setcheck1(true)

      
  }else{
       setcheck1(false) 

  }
        
    




 
   
}, [isTRainner])








    const history = useHistory ()

    const value100 =()=>{
        history.push("./trainer100")

    }

     const value200 =()=>{
        history.push("./trainer200")

    }


    return (
        <div>

         { check1 ?

         <div className="mt-4">
            <h1 className="text-center">Two Learner Pakage....</h1>
            <div className='container p-5'>

                <div class="row g-3  mt-4 ">
                    <div className=" col-md-5">
                        <div class="">
                            <img  style={{width:'380px',height:'300px'}}  src="https://cdn.wallpapersafari.com/61/34/qsGWa8.jpg" class="card-img-top  " alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">CAR LEASSON</h5>
                                <p class="card-text">If you car learning then tap me..</p>
                                 <button onClick={value200}>200$</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div class=" ">
                            <img style={{width:'380px',height:'300px'}} src="https://tse1.mm.bing.net/th?id=OIP.B910fdRm2KdAon1czaA1zAHaEJ&pid=Api&P=0&w=311&h=174" class="card-img-top " alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">BIKE LESSON</h5>
                                <p class="card-text">If you car learning then tap me..</p>
                               <button onClick={value100}>100$</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


           


        </div>

        
       
       : <div>You r not trainner..</div>
}

            



        </div>
    );
};

export default Trainer;












 