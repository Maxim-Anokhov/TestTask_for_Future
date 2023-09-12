import React from "react";
import "./ResultPage.css"
import {  useSelector } from "react-redux";




export  function ResultPage(){
   
     const books= useSelector(state=>state.search.books.items)

if(books!==undefined){

    return(
        
        books.map(item=>
        <div key={item.id} className="ResultPage">
        
        <img className="book_cover" src={item.volumeInfo.imageLinks&&item.volumeInfo.imageLinks.smallThumbnail} alt="" /> 
    
        </div>
    )
 )
}
}