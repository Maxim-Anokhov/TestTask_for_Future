import React from "react";
import "./BookDetails.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function BookDetails() {

    const details = useSelector(state => state.search.details.volumeInfo)

    return (

        <div className="BookDetails">
            <Link to="/MainPage">

                <button>X</button>
            </Link>
            <img src={details.imageLinks.thumbnail} alt="" />
            <h4>Title:{details.title}</h4>
            <h4>Category:{details.categories}</h4>
            <h4>Author:{details.author}</h4>
            <h5>Description:{details.description}</h5>
        </div>
    )
}