import React from "react";
import "./Header.css"
import { SearchingForm } from "./SearchingForm";

export function Header(){
    return(
        <div className="Header">
             <h1 className="h1">Search for books</h1>
             <SearchingForm/>
           
        </div>
    )
}