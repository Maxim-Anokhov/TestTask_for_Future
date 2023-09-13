import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, } from "../Store/SearchingSlice";
import { sortFromCategory, sortFromRelevance, getBookName } from "../Store/FiltersSLice"
import './SearchingForm.css'
import './glass.png'




export function SearchingForm() {

    const dispatch = useDispatch();

    const setBookName = (e) => dispatch(getBookName(e.target.value))

    const setSorting = (e) => dispatch(sortFromRelevance(e.target.value))

    const setCategories = (e) => dispatch(sortFromCategory(e.target.value))

    const bookName = useSelector(state => state.filters.bookName)

    const categoriesState = useSelector(state => state.filters.categories);

    const sortingState = useSelector(state => state.filters.sortingBy)

    const getBooks = (e) => { e.preventDefault(); dispatch(fetchBooks({ bookName, categoriesState, sortingState })) };


    return (




        <form className="SearchingForm" onSubmit={e => getBooks(e)} >
            <div className="input_wrap">

                <input className="input_search" type="text" onChange={(e) => setBookName(e)} />

                <button><img className="glass" src={require("./glass.png")} alt="img" /></button>
            </div>
            <div className="select_categories">
                Categories:<select value={categoriesState} onChange={(e) => setCategories(e)} name="Categories" id="">
                    <option value="all">all</option>
                    <option value="art">art</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                </select>
            </div>
            <div className="select_relevance">
                Sorting by: <select value={sortingState} onChange={(e) => setSorting(e)} name="Sorting by" id="">
                    <option value="relevance">relevance</option>
                    <option value="newest">newest</option>
                </select>
            </div>

        </form>



    )
}
