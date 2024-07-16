import React, {useEffect, useState} from "react";
import { FaChevronDown, FaGlobe } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import '../styles/Header.css';
import {Link, NavLink, useLocation} from "react-router-dom";
import { SiEpicgames } from "react-icons/si";
import {IoClose, IoMenu} from "react-icons/io5";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import Service from "../service/Service";

const Header = () => {
    const { pathname } = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showDistribute, setShowDistribute] = useState(false);
    const [showResources, setShowResources] = useState(false);
    const [menuHeaderOpen, setMenuHeaderOpen] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const isAuthenticated = Service.isAuthenticated();
    const isAdmin = Service.isAdmin();


    // profile User
    const [profileInfo, setProfileInfo] = useState({
        id: '',
        name: '',
        email: '',
        role: '',
        city: ''
    });

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try {

            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await Service.getYourProfile(token);
            setProfileInfo(response.ourUsers);
        } catch (error) {
            console.error('Error fetching profile information:', error);
        }
    };

    // Đặt lại tất cả các biến trạng thái khi tên đường dẫn thay đổi
    useEffect(() => {
        setIsDropdownOpen(false);
        setShowDistribute(false);
        setShowResources(false);
        setMenuHeaderOpen(false);
        setShowLanguages(false);
        setShowOptions(false);
    }, [pathname]);

    // log out
    const handleLogout = () => {
        const confirmDelete = window.confirm('Are you sure you want to logout this user?');
        if (confirmDelete) {
            Service.logout();
        }
    };


    useEffect(() => {
        if (menuHeaderOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuHeaderOpen]);

    // button show languages
    const toggleLanguages = () => setShowLanguages(!showLanguages);

    // button show languages
    const toggleOptions = () => setShowOptions(!showOptions);

    // button show menu header
    const handleButtonClick = ()     => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const ShowMenuHeader = () => {
        setMenuHeaderOpen(!menuHeaderOpen);
        setShowDistribute(false);
        setShowLanguages(false);
    };

    const HideMenuHeader =()=>{
        setIsDropdownOpen(false);
        setShowOptions(false);
    };

    const toggleDistribute = () => {
        setShowDistribute(!showDistribute);
    };
    const toggleResources = () => {
        setShowResources(!showResources);
    };

    return (
        <header className={`header ${menuHeaderOpen ? 'menu-open' : ''}`}>
            <div className="btn-logo-show-hide-menu">
                <div className="list_extention">
                    <button className={`btn-logo ${isDropdownOpen ? 'rotate' : ''}`} onClick={handleButtonClick}>
                        {/*img logo epic*/}
                        <SiEpicgames size={30} className="img-logo"/>
                        <FaChevronDown className="icon-logo" color="/AAAAAE"/>
                    </button>
                    {/*Hiển thị menu khi click vào logo*/}
                    <div className={`dropdown_content-logo ${isDropdownOpen ? 'show' : 'hide'}`}>
                        <div className="backgroungd_none"></div>
                        <div className="column">
                            <div className="column-1">
                                <div className="dropdown-column">
                                    <h4>Play</h4>
                                    <Link to="/">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)',
                                        }}>
                                        </div>
                                        <span>
                                            Fortnite
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/nvjfw8LwTbyiETLiJEeE)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/nvjfw8LwTbyiETLiJEeE)',
                                        }}>
                                        </div>
                                        <span>
                                            Rocket League
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/1MdipiMMQeSDZe15gy3V)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/1MdipiMMQeSDZe15gy3V)',
                                        }}>
                                        </div>
                                        <span>
                                            Fall Guys
                                        </span>
                                    </Link>
                                </div>
                                <div className="dropdown-column">
                                    <h4>Discover</h4>
                                    <Link to="/">
                                        <SiEpicgames size={22}/>
                                        <span>
                                            Epic Games Store
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/VYHbV8mMQhCzjH0TIGVO)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/VYHbV8mMQhCzjH0TIGVO)',
                                        }}>
                                        </div>
                                        <span>
                                            Fab
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/1MdipiMMQeSDZe15gy3V)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/SueHxUd6SFy59VZItanD)',
                                        }}>
                                        </div>
                                        <span>
                                            Sketchfab
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/SueHxUd6SFy59VZItanD)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/GnVa6hUTtSLOfMZrWNxe)',
                                        }}>
                                        </div>
                                        <span>
                                            ArtStation
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="column-2">
                                <div className="dropdown-column">
                                    <h4>Create</h4>
                                    <Link to="/">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)',
                                        }}>
                                        </div>
                                        <span>
                                            Unreal Engine
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/1MdipiMMQeSDZe15gy3V)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)',
                                        }}>
                                        </div>
                                        <span>
                                            Create in Fortnite
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/E3A9GiKvTxe0vldk0b7T)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/E3A9GiKvTxe0vldk0b7T)',
                                        }}>
                                        </div>
                                        <span>
                                            MetaHuman
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/bx1K2n3URsKKIismuqzF)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/fBKKKvETTG2PSGTs19a9)',
                                        }}>
                                        </div>
                                        <span>
                                            Twinmotion
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/fBKKKvETTG2PSGTs19a9)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/4hsNBIcXQcCzsN0FYLfD)',
                                        }}>
                                        </div>
                                        <span>
                                            RealityScan
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/4hsNBIcXQcCzsN0FYLfD)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)',
                                        }}>
                                        </div>
                                        <span>
                                            RealityCapture
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <SiEpicgames size={22}/>

                                        <span>
                                            Epic Online Services
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <SiEpicgames size={22}/>

                                        <span>
                                            Publish on Epic Games Store
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/ijWMz82OStqcWRGDawM9)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/ijWMz82OStqcWRGDawM9)',
                                        }}>
                                        </div>
                                        <span>
                                            Kids Web Services
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <SiEpicgames size={22}/>
                                        <span>
                                            Developer Community
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 32" height="32" width="2" fill="white"
                     style={{margin: '20px',}}>
                    <path d="M0 0h2v32H0z"></path>
                </svg>
            </div>
            <div className={`navbar_header ${menuHeaderOpen ? 'menu-open' : ''}`}>
            {!pathname.startsWith("/docs") && !pathname.startsWith("/support") && (
                    <Link to="/" style={{textDecoration: "none"}}>
                        <h1 style={{fontSize: "20px", color: "white"}}>STORE</h1>
                    </Link>
                )}
                {pathname.startsWith("/docs") && (
                    <h1 style={{fontSize: "20px", color: "white"}}>ONLINE SERVICES</h1>
                )}

                <div className={`mobile-drawer ${menuHeaderOpen ? 'active' : ''}`}>
                    {!pathname.startsWith("/docs")  && !pathname.startsWith("/support") && (
                        <div className="main-nav">
                            <nav className="nav-links">
                                <div className="navbar-item">
                                    <Link to="/support">Support</Link>
                                </div>
                                <div className="navbar-item distribute" onMouseOver={HideMenuHeader}>
                                    <button className="showListDistri" onClick={toggleDistribute}>
                                        <span>Distribute</span>
                                        <div><GrFormNext size={20} className="icon-showdistr"/></div>
                                    </button>
                                    <div className={`dropdown-content ${showDistribute ? 'active' : 'non-active'}`}>
                                        <div className="backgroungd_none"></div>
                                        <div className="list-distribute">
                                            <button className="btn-back" onClick={toggleDistribute}><GrFormPrevious
                                                size={20}/> Back
                                            </button>
                                            <ul className="list">
                                                <li><Link to="/distribution">Distribute on Epic Games Store</Link></li>
                                                <li><Link to="/docs">Documentation</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    )}
                    {pathname.startsWith("/support") && (
                        <div className="main-nav ">
                            <nav className="nav-links support-page">
                                <div className="navbar-item">
                                    <NavLink
                                        to="/"
                                        className={({isActive}) => (isActive ? " active" : "")}
                                    >
                                        Store
                                    </NavLink>
                                    <NavLink
                                        to="/News"
                                        className={({isActive}) => (isActive ? " active" : "")}
                                    >
                                        News
                                    </NavLink>
                                    <NavLink
                                        to="/support/faq"
                                        className={({isActive}) => (isActive ? " active" : "")}
                                    >
                                        FAQ
                                    </NavLink>
                                    <NavLink
                                        to="/support"
                                        end
                                        className={({isActive}) => (isActive ? " active" : "")}
                                    >
                                        Help
                                    </NavLink>
                                    <NavLink
                                        to="/support/about"
                                        className={({isActive}) => (isActive ? " active" : "")}
                                    >
                                        About Epic
                                    </NavLink>
                                </div>
                            </nav>
                        </div>
                    )}
                    {pathname.startsWith("/docs") && (
                        <div className="main-nav ">
                            <nav className="nav-links docs-page">
                                <div className="navbar-item">
                                    <Link to="/">Store</Link>
                                </div>
                                <div className="navbar-item">
                                    <Link to="/docs">Documentation</Link>
                                </div>
                                <div className="navbar-item">
                                    <Link to="/support">Support</Link>
                                </div>
                            </nav>
                        </div>
                    )}
                    <div className="toolbar">
                        <div className="tools">
                            <div className="languages" onMouseOver={HideMenuHeader}>
                                <div className="img-languages">
                                    <FaGlobe size={25} color="AAAAAE" onClick={toggleLanguages}/>
                                </div>
                                <div className={`dropdown-language ${showLanguages ? 'active' : 'not-active'}`}>
                                    <div className="backgroungd_none"></div>
                                    <div className="list-languages">
                                        <button className="btn-back" onClick={toggleLanguages}><GrFormPrevious
                                            size={20}/>Back
                                        </button>
                                        <ul className="list">
                                            <li><Link to="/">English</Link></li>
                                            <li><Link to="/">Franch</Link></li>
                                            <li><Link to="/">Tiếng Việt</Link></li>
                                            <li><Link to="/">العربية</Link></li>
                                            <li><Link to="/">Deutsch</Link></li>
                                            <li><Link to="/">Español</Link></li>
                                            <li><Link to="/">Français</Link></li>
                                            <li><Link to="/">日本語</Link></li>
                                            <li><Link to="/">한국어</Link></li>
                                            <li><Link to="/">Português (Brasil)</Link></li>
                                            <li><Link to="/">Русский</Link></li>
                                            <li><Link to="/">ไทย</Link></li>
                                            <li><Link to="/">Türkçe</Link></li>
                                            <li><Link to="/">简体中文</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="person">
                                <div className="profile">
                                    <BsPersonCircle size={25} color="AAAAAE" onClick={toggleOptions}/>
                                </div>
                                <div className={`dropdown-options ${showOptions ? 'active' : 'not-active'}`}>
                                    <div className="backgroungd_none"></div>
                                    <div className="list-options">
                                        <button className="btn-back" onClick={toggleOptions}><GrFormPrevious
                                            size={20}/>Back
                                        </button>
                                        <ul className="list">
                                            {!isAuthenticated && <li><Link to="/login">Đăng Nhập</Link></li>}
                                            {!isAuthenticated && <li><Link to="/register">Đăng Ký</Link></li>}
                                            {/*{isAdmin && <li><Link to="/admin">Admin</Link></li>}*/}
                                            {isAuthenticated &&
                                                <>
                                                    <li><p>Name: {profileInfo.name}</p></li>
                                                    <li><p>Email: {profileInfo.email}</p></li>
                                                    <li><p>City: {profileInfo.city}</p></li>
                                                    {profileInfo.role === "ADMIN" && (
                                                        <li><Link to="/admin">Admin</Link></li>
                                                    )}
                                                    <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                                                </>
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="download">
                        <a href="https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi?trackingId=00c38629eacd45eeaa9835c1d4015b8c"
                           className="download-btn"> Download
                        </a>
                    </div>
                </div>
                <div className="btn_menu-header" onClick={ShowMenuHeader}>
                    {menuHeaderOpen ? <IoClose size={25} className="btn-menu" color="/AAAAAE"/> :
                        <IoMenu size={25} className="btn-menu" color="/AAAAAE"/>}
                </div>
            </div>
        </header>
    )
}

export default Header;
