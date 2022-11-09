import React from 'react';
import "./Menu.css";
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function Menu() {
    return (
        <ul>
            <li>
                <Link to='/energyengineering'>Energy Engineering</Link>
            </li>
            <li>
                <Link to='webdevelopment'>{"<Web Development/>"} </Link>
            </li>
            <li>
                <Link to='machinelearning'>Machine Learning.ai</Link>
            </li>
            <li>
                <Link to='ss'>Youtube channel</Link>
            </li>
            <li>
                <Link to='mytopseries'>My Top Series!</Link>
            </li>
        </ul>
    )
}

export {Menu}