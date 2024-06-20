import React from "react";
import Header_support from "./Header_support";
import Mid from "./Mid";
import Footer_support from "./Footer_support";
import {Route, Routes} from "react-router-dom";
import FAQ from "./FAQ";
import About from "./About";

function Support () {
    return(
        <>
            <Header_support/>
            <Routes>
                <Route path="/" element={<Mid />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/About" element={<About />} />
            </Routes>
            <Footer_support/>
        </>
    );
};

export default Support;