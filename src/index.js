import { BrowserRouter } from 'react-router-dom';  
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  
  <Login />  
 </BrowserRouter>  
);

document.getElementById('root')  