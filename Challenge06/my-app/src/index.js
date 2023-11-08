import React from 'react';
import ReactDOM from 'react-dom/client';
import NoMatch from '../src/pages/404';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from '../src/pages/LandingPage';
import ListCars from '../src/pages/ListCars';
import UseCarContext from './context/CarContext'
import UseFilterContext from './context/FilterContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<LandingPage /> }/>
        <Route path="cars" element={
          <UseCarContext>
          <UseFilterContext>
            <ListCars />
          </UseFilterContext>
          </UseCarContext>
          }/>
      </Route>
    <Route path="*" element={<NoMatch />}/>
  </Routes>
  </BrowserRouter>
);

reportWebVitals();
