import React from 'react';
import { MainPage } from './Components/MainPage';
import { BookDetails } from './Components/BookDetails';
import './App.css';

import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/MainPage" element={<MainPage />} />
        <Route path='/BookDetails' element={<BookDetails />} />
        <Route path='*' element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
