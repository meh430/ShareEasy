import React from 'react';
import './App.css';

import { UploadComponent } from './components/UploadComponent'
import { PastLinksComponent } from './components/PastLinksComponent';
const inlineElement = {
    display: "inline-block"
};
export const App = () => {
    return (
        <div className="App">
            <div style={{textAlign: "center"}}>
                <h1 className="title">Share Easy!</h1>
                <i className="fas fa-share-alt-square" style={{
                    color: "white", fontSize: "50px",
                    display: "inline-block",
                    margin: "0px"
                }}></i>
            </div>
            <div style={{textAlign: "center"}}>
                <UploadComponent />
                <PastLinksComponent/>
            </div>
        </div>
    );
}