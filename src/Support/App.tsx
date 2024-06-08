import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Mid from './components/Mid';
import Help from './components/Mid';
import About from "./components/About";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Mid />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
