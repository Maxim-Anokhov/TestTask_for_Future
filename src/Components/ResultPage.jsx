import React from "react";
import "./ResultPage.css"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { getDetails } from "../Store/SearchingSlice";




export function ResultPage() {

    const books = useSelector(state => state.search.books.items)

    const dispatch = useDispatch()

    const Details = (key) => {console.log(key.id); dispatch(getDetails()) }

    if (books !== undefined) {

        return (

            books.map(item =>
                <Link to="/BookDetails" >

                    <div key={item.id} className="ResultPage" type="button" onClick={Details(item)}>
                        <div>
                            <img className="book_cover" src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail} alt="" />
                        </div>
                        <div>
                            <h6>{item.volumeInfo.categories}</h6>
                            <h6>{item.volumeInfo.title}</h6>
                            <h6>{item.volumeInfo.authors}</h6>

                        </div>
                    </div>
                </Link>
            )
        )
    }
}