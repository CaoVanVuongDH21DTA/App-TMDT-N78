    import React, { useState } from 'react';
    import { FaChevronDown, FaGlobe } from "react-icons/fa";
    import { BsPersonCircle } from "react-icons/bs";
    import logo from '../img/epic_games_logo.png';
    import '../Style/Header.css';
    import { TbBrandFortnite } from "react-icons/tb";
    import { MdOutlineRocketLaunch } from "react-icons/md";
    import { FaRegFaceMehBlank } from "react-icons/fa6";
    import { PiFacebookLogoDuotone } from "react-icons/pi";
    import { SiEpicgames, SiSketchfab, SiUnrealengine, SiMercedes } from "react-icons/si";
    import { FaArtstation } from "react-icons/fa";
    import { LuHandMetal } from "react-icons/lu";
    import { GiRoundStar, GiSurroundedEye } from "react-icons/gi";
    import { BsWrenchAdjustableCircle } from "react-icons/bs";
    import { Link } from 'react-router-dom';

    const Header = () => {
        const [showDropdown, setShowDropdown] = useState(false);
        const [showLogoDropdown, setShowLogoDropdown] = useState(false);

        const toggleDropdown = () => {
            setShowDropdown(prevState => !prevState);
        };

        const toggleLogoDropdown = () => {
            setShowLogoDropdown(prevState => !prevState);
        };

        return (
            <header className="header">
                <div className="left-section">
                    <button className="btn-logo" onClick={toggleLogoDropdown}>
                        <img src={logo} className="img-logo" alt="Epic Games Logo"/>
                        <FaChevronDown className={`icon-logo ${showLogoDropdown ? 'icon-rotate' : ''}`} color="#AAAAAE"/>
                    </button>
                    {showLogoDropdown && (
                        <div className="logo-dropdown-menu">
                            <div className="column">
                                <div className="menu-section">
                                    <h4>Play</h4>
                                    <a href="#"><TbBrandFortnite />Fortnite</a>
                                    <a href="#"><MdOutlineRocketLaunch />Rocket League</a>
                                    <a href="#"><FaRegFaceMehBlank />Fall Guys</a>
                                </div>
                                <div className="menu-section">
                                    <h4>Discover</h4>
                                    <a href="#"><PiFacebookLogoDuotone />Epic Games Store</a>
                                    <a href="#"><SiEpicgames />Fab</a>
                                    <a href="#"><SiSketchfab />Sketchfab</a>
                                    <a href="#"><FaArtstation />ArtStation</a>
                                </div>
                            </div>
                            <div className="column">
                                <div className="menu-section">
                                    <h4>Create</h4>
                                    <a href="#"><SiUnrealengine />Unreal Engine</a>
                                    <a href="#"><TbBrandFortnite />Create in Fortnite</a>
                                    <a href="#"><LuHandMetal />MetaHuman</a>
                                    <a href="#"><SiMercedes />Twinmotion</a>
                                    <a href="#"><GiRoundStar />RealityScan</a>
                                    <a href="#"><GiSurroundedEye />RealityCapture</a>
                                    <a href="#"><SiEpicgames />Epic Online Services</a>
                                    <a href="#"><SiEpicgames />Publish on Epic Games Store</a>
                                    <a href="#"><BsWrenchAdjustableCircle />Kids Web Services</a>
                                    <a href="#"><SiEpicgames />Developer Community</a>
                                </div>
                            </div>
                        </div>
                    )}
                    <nav className="nav-links">
                        <a href="#">Store</a>
                        <a href="#">News</a>
                        <Link to="/faq">FAQ</Link>
                        <a href="/help">Help</a>
                        <Link to="/about">About Epic</Link>
                    </nav>
                </div>
                <div className="right-section">
                    <div className="icon-containers" onClick={toggleDropdown}>
                        <FaGlobe size={25} color="#AAAAAE"/>
                        {showDropdown && (
                            <div className="dropdown-menu">
                                <a href="#">English<FaGlobe/></a>
                                <a href="#">العربية</a>
                                <a href="#">Deutsch</a>
                                <a href="#">Español</a>
                                <a href="#">Español (LA)</a>
                                <a href="#">Français</a>
                                <a href="#">Italiano</a>
                                <a href="#">日本語</a>
                                <a href="#">한국어</a>
                                <a href="#">Polski</a>
                                <a href="#">Português (Brasil)</a>
                                <a href="#">Русский</a>
                                <a href="#">ไทย</a>
                                <a href="#">Türkçe</a>
                                <a href="#">简体中文</a>
                            </div>
                        )}
                    </div>
                    <div className="icon-container">
                        <BsPersonCircle size={25} color="#AAAAAE" />
                    </div>
                    <a className="download-btn"
                       href="https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi"
                    >Download</a>
                </div>
            </header>
        );
    };

    export default Header;
