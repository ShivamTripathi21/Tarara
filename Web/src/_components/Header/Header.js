import React from 'react'
import ReactSearchBox from 'react-search-box'
import './Header.css'

export default function Header(){
    
    return(
        <header className="header-class">
            <ReactSearchBox
                placeholder="Placeholder"
                value="Doe"
            />
        </header>
    );
}