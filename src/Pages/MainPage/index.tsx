import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import React from 'react';

export default function MainPage(){
    return(
        <div className="MainPage">
            <h1>MainPage</h1>
            <SearchBar />
            <Card />
        </div>
    )
}