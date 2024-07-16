import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StorePage from './components/Store/StorePage';
import Login from './components/Login/Login';
import Register from "./components/Login/Register";
import {Admin} from "./components/Admin/Admin";
import DocsPage from "./components/Distribute/Documentation/DocsPage";

function App() {
    return (
        <Router>
            <Routes>
                {/*Admin Page*/}
                <Route path="/admin/*" element={<Admin/>}/>

                {/* Login page */}
                <Route path="/login" element={<Login />} />

                {/*register page*/}
                <Route path="/register" element={<Register />} />

                {/* Store page */}
                <Route path="/*" element={<StorePage />}/>

                <Route path="/docs/*" element={<DocsPage />}/>
            </Routes>
        </Router>
    );
}

export default App;
