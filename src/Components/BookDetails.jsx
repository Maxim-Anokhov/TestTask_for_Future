import React from "react";
import "./BookDetails.css"
// import { UseSelector } from "react-redux";
import { Link } from "react-router-dom";
export function BookDetails(){

    return(
        <div className="BookDetails">
       <Link to="/MainPage">

       <button>X</button>
       </Link> 
            <img src="" alt="" />
            <h4>Title:</h4>
            <h4>Category:</h4>
            <h4>Author:</h4>
            <h5>Description:</h5>
        </div>
    )
}