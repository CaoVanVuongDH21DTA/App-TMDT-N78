import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import StorePage from './components/Store/StorePage';
import Login from './components/Login/Login';
import Register from "./components/Login/Register";
import {Admin} from "./components/Admin/Admin";
import DocsPage from "./components/Distribute/Documentation/DocsPage";
import deals from './img/Store/deals.png'

const PageTitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;

        let pageTitle = "App TMDT";

        if (path.startsWith('/admin')) {
            pageTitle += " - Admin";
        } else if (path === '/login') {
            pageTitle += " - Login";
        } else if (path === '/register') {
            pageTitle += " - Register";
        } else if (path.startsWith('/docs')) {
            pageTitle += " - Documentation";
        } else if (path.startsWith('/support')) {
            pageTitle += " - Support";
        } else {
            pageTitle += " - Store";
        }

        document.title = pageTitle;
    }, [location]);

    return null;
}

function App() {

    return (
        <Router>
            <PageTitleUpdater/>
            <Routes>
                {/*Admin Page*/}
                <Route path="/admin/*" element={<Admin/>}/>

                {/* Login page */}
                <Route path="/login" element={<Login/>}/>

                {/*register page*/}
                <Route path="/register" element={<Register/>}/>

                {/* Store page */}
                <Route path="/*" element={<StorePage/>}/>

                {/*Docs page*/}
                <Route path="/docs/*" element={<DocsPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
