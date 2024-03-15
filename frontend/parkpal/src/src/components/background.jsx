import React from "react";
import { Link} from 'react-router-dom'
import './background.css'


const Background = () => {
    
    
    return (
        <div className="container">
            <div className='title'>
            <h1>Welcome to ParkPal</h1>
            </div>
            <div className='description'>
                <p>Where you can find the best parks</p>
            </div>
            <div className='button'>
               <Link to ='/parks'> <button>Find a Park</button> </Link>
            </div>
       </div>
       
    ) 
  };
  
  export default Background;