import React from "react";
import "./ResultPage.css"
import {  useSelector } from "react-redux";




export  function ResultPage(){
   
     const books= useSelector(state=>state.search.books.items)
console.log(books)
if(books!==undefined){

    return(
        
        books.map(item=>
        <div key={item.id} className="ResultPage">
        <div>

        <img className="book_cover" src={item.volumeInfo.imageLinks&&item.volumeInfo.imageLinks.smallThumbnail} alt="" /> 
        </div>
    <div>
        <h6>{item.volumeInfo.categories}</h6>
        <h6>{item.volumeInfo.title}</h6>
        <h6>{item.volumeInfo.authors}</h6>

    </div>
        </div>
    )
 )
}
}