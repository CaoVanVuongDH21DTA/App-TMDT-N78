import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

export default function StorePage (){
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh", background:"#121212"}}>
            <Header />
            <Main/>
            <Footer />
        </div>
    );
}
