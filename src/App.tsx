import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StorePage from './components/Store/StorePage';
import Login from './components/Login/Login';
import Discover from "./components/Store/MainStore/Discover/Discover";
import Browse from "./components/Store/MainStore/Browse/Browse";
import News from "./components/Store/MainStore/News/News";
import TopSeller from "./components/Store/MainStore/Discover/TopSeller";
import MostPlayed from "./components/Store/MainStore/Discover/MostPlayed";
import TopUpcommingWishlisted from "./components/Store/MainStore/Discover/TopUpconmingWishlisted";
import DistributeOnEpicGameStore from "./components/Distribute/DistributeOnEpicGameStore";
import DeveloperForums from "./components/Distribute/DeveloperForums";
import Documentation from "./components/Distribute/Documentation";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StorePage />}>
                    <Route index element={<Discover />} />
                    <Route path="/Browse" element={<Browse />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/TopSeller" element={<TopSeller />} />
                    <Route path="/MostPlayed" element={<MostPlayed/>} />
                    <Route path="/TopUpcommingWishlisted" element={<TopUpcommingWishlisted/>} />
                    <Route path="/Distribution" element={<DistributeOnEpicGameStore/>}/>
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/DeveloperForums" element={<DeveloperForums />} />
                <Route path="/Documentation" element={<Documentation />} />
            </Routes>
        </Router>
    );
}

export default App;
