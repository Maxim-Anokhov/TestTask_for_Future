import React from "react";
import { useState } from "react";
import { useDispatch,} from "react-redux";
import { fetchBooks,} from "../Store/SearchingSlice";
import './SearchingForm.css'
import './glass.png'




export function SearchingForm(){

   const [bookName,setBookName]=useState()
   const dispatch=useDispatch()
   function getBooks(e) {
    e.preventDefault() ;
    dispatch(fetchBooks(bookName))}

   function setValue(e){
    const value=e.target.value;
    setBookName(value)
}



    return(

      
           

            <form  className="SearchingForm" onSubmit={e=>getBooks(e)} action="preventDefault">

            <input className="input_search" type="text"  onChange={setValue} />
            
            <button><img  className="glass"src={require("./glass.png")} alt="img" /></button>

Categories:<select name="Categories" id="">
<option value="all">all</option>
<option value="art">art</option>
<option value="biography">biography</option>
<option value="computers">computers</option>
<option value="history">history</option>
<option value="medical">medical</option>
<option value="poetry">poetry</option>
</select>
Sorting by: <select name="Sorting by" id="">
    <option value="relevance">relevance</option>
    <option value="newest">newest</option>
</select>
           </form>
        

        
        )
}
    