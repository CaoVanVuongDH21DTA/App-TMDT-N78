import '../../../styles/Store/MainStore/Main.css';
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaTimes } from "react-icons/fa";

import React, { useEffect, useState} from "react";
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Browse from './Browse/Browse';
import Discover from "./Discover/Discover";
import News from "./News/News";
import TopSeller from "./Discover/TopSeller";
import MostPlayed from "./Discover/MostPlayed";
import TopUpcommingWishlisted from "./Discover/TopUpconmingWishlisted";

const Main = () => {
    const { pathname } = useLocation();
    const [currentNavLink, setCurrentNavLink] = useState("Discover");
    const [searchVisible, setSearchVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const toggleMenu = (e: React.MouseEvent) => {
        e.stopPropagation();
        setMenuVisible(!menuVisible);
        setSearchVisible(false);
        setOverlayVisible(!overlayVisible);

    };

    const toggleSearch = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSearchVisible(!searchVisible);
        setOverlayVisible(!overlayVisible);
        if (menuVisible && overlayVisible) {
            setMenuVisible(false);
            setOverlayVisible(true);
        }
    };


    const handleNavLinkClick = (navLinkName:string) => {
        setCurrentNavLink(navLinkName);
        setMenuVisible(false);
        setSearchVisible(false);
        setOverlayVisible(false);
    };

    const closeAll = () => {
        setMenuVisible(false);
        setSearchVisible(false);
        setOverlayVisible(false);
    };


    return (
        <main className={`main ${overlayVisible ? 'overlay' : ''}`} onClick={closeAll}>
            <div className="top-main">
                <div className="top-main-content">
                    <CiSearch className="btn-icon-search" onClick={toggleSearch}/>
                    <div className={`search ${searchVisible ? "visible" : ""}`} onClick={(e) => e.stopPropagation()}>
                        <input type="text" placeholder="Search store" className="search-bar"/>
                        <CiSearch className="icon-search"/>
                        <FaTimes className="btn-close-search" onClick={toggleSearch} />
                    </div>
                    <div className="nav-main" onClick={(e) => e.stopPropagation()}>
                        <button className="show-nav-main" onClick={toggleMenu}>
                            <span>{currentNavLink}</span>
                            <FaAngleDown/>
                        </button>
                        <ul className={`menu-nav ${menuVisible ? "visible" : ""}`}>
                            <li>
                                <NavLink to="/" className="nav-link"
                                         onClick={() => handleNavLinkClick("Discover")}>Discover</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Browse" className="nav-link"
                                         onClick={() => handleNavLinkClick("Browse")}>Browse</NavLink>
                            </li>
                            <li>
                                <NavLink to="/News" className="nav-link"
                                         onClick={() => handleNavLinkClick("News")}>News</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <Routes>
                <Route path="/" element={<Discover/>}/>
                <Route path="/Browse" element={<Browse/>}/>
                <Route path="/News" element={<News/>}/>
                <Route path="/TopSeller" element={<TopSeller/>}/>
                <Route path="/MostPlayed" element={<MostPlayed/>}/>
                <Route path="/TopUpcommingWishlisted" element={<TopUpcommingWishlisted/>}/>
            </Routes>
        </main>
    );
};

export default Main;
