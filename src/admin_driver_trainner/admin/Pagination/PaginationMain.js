import React from 'react';

const PaginationMain = ({postperPage, totalPages, paginat}) => {

    const pageNumber =[]


    for (let i = 1; i <= Math.ceil(totalPages/ postperPage); i++) {
        pageNumber.push(i)
    }

console.log(pageNumber)


    return (
        <nav>
        <ul className="pagination">

        {

            pageNumber.map(n => 

                <li className="page-item">

                <a onClick={()=>paginat(n)} className="page-link text-danger">{n} </a>
                


                
                
                </li>



            )
        }
        
        </ul>

            
        </nav>
    );
};

export default PaginationMain;