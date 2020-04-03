import React from 'react';
import {hot} from 'react-hot-loader';
import './App.css'
import Header from '../Header';
import Footer from '../Footer';

import {
    Route
} from 'react-router-dom';
import {MemoryRouter as Router} from 'react-router'

function App(){
    return(
        <div>
            <Header/>  
            <Footer/> 
        </div> 
    );
}

export default hot(module)(App);