import React from 'react';

const Submain = ({page}) => {
    return (
        <div className="list-group mb-4">

        {
            page.map(v=>(
                <li className="list-group-item">{v.title}</li>
            )



             )
        }
            
        </div>
    );
};

export default Submain;