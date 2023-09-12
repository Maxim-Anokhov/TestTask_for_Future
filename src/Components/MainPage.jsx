import React from "react";
import { Header } from './Header';
import { ResultPage } from './ResultPage';
import { useSelector } from 'react-redux';

export function MainPage() {

    const quantityBooks = useSelector(state => state.search.books.totalItems)


    return (
        <div className="MainPage">
            <Header />
            <h4 className='quantity_books'>Found {quantityBooks} results</h4>
            <ResultPage />
            <button className='load_more'>load more</button>
        </div>
    )
}