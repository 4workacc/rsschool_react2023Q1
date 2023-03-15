import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import React from 'react';

import "./index.scss";

export default function MainPage() {
    return (
        <div className="MainPage">
            <h1>MainPage</h1>
            <SearchBar />
            <div className='Cards'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}