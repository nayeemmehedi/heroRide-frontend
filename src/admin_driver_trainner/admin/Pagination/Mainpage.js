import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Submain from "./Submain"
import PaginationMain from "./PaginationMain"

const Mainpage = () => {

    const [page, setpage] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [postperPage,setpostperPage] = useState(10)


    const indexlastPage = currentPage * postperPage
    const indexfirstPage = indexlastPage - postperPage
    const currentposts = page.slice(indexfirstPage, indexlastPage)
     



useEffect(() =>{

    const fetchPost = async () =>{
        const res = await  axios.get("http://jsonplaceholder.typicode.com/posts")
        setpage(res.data)
    }
    fetchPost()

},[])

const paginat =(p)=>{
    setCurrentPage(p)
}



    return (
        <div>
        <h6 className="text-danger">pagination</h6>
          <Submain page={currentposts}/>
          <PaginationMain postperPage ={postperPage} totalPages ={page.length} paginat={paginat}></PaginationMain>
            
        </div>
    );
};

export default Mainpage;