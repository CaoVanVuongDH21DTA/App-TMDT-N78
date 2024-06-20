import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {SiEpicgames} from "react-icons/si";
import {FaChevronDown, FaChevronUp, FaGlobe} from "react-icons/fa";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {BsPersonCircle} from "react-icons/bs";
import {IoClose, IoMenu} from "react-icons/io5";
import '../../../styles/Distribute/Header_Distri.css'
import StorePage from "../../Store/StorePage";

function Header_Distri (){
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showDistribute, setShowDistribute] = useState(false);
    const [isMenuHeaderOpen, setIsMenuHeaderOpen] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);

    useEffect(() => {
        if (isMenuHeaderOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuHeaderOpen]);


    const  toggleLanguages = ()=>{
        if (showLanguages) {
            setShowLanguages(false);
        } else {
            setShowLanguages(true);
        }
    }

    const handleButtonClick = ()     => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const ShowMenuHeader = () => {
        setIsMenuHeaderOpen(!isMenuHeaderOpen);
        if (showDistribute) {
            setShowDistribute(false);
        }
        if (showLanguages) {
            setShowLanguages(false);
        }
    };

    const handlePersonClick = () => {
        navigate('/login');
    };

    const StorePage=()=>{
        navigate('/')
    }

    const HideMenuHeader =()=>{
        setIsDropdownOpen(false);
    };

    const toggleDistribute = () => {
        setShowDistribute(prevState => !prevState);
    };

    return (
        <header className={`header-distribute ${isMenuHeaderOpen ? 'menu-open' : ''}`}>
            <div className={`btn-logo-show-hide-menu ${isMenuHeaderOpen ? 'hide' : ''}`}>
                <div className="list_extention">
                    <button className="btn-logo" onClick={handleButtonClick} >
                        {/*img logo epic*/}
                        <SiEpicgames size={30} className="img-logo"/>
                        {isDropdownOpen ? (
                            <FaChevronUp className="icon-logo" color="#AAAAAE"/>
                        ) : (
                            <FaChevronDown className="icon-logo" color="#AAAAAE"/>
                        )}
                    </button>
                    {/*Hiển thị menu khi click vào logo*/}
                    <div className={`dropdown_content-logo ${isDropdownOpen ? 'show' : 'hide'}`}>
                        <div className="backgroungd_none"></div>
                        <div className="column" >
                            <div className="column-1">
                                <div className="dropdown-column">
                                    <h4>Play</h4>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)',
                                        }}>
                                        </div>
                                        <span>
                                            Fortnite
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/nvjfw8LwTbyiETLiJEeE)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/nvjfw8LwTbyiETLiJEeE)',
                                        }}>
                                        </div>
                                        <span>
                                            Rocket League
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/1MdipiMMQeSDZe15gy3V)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/1MdipiMMQeSDZe15gy3V)',
                                        }}>
                                        </div>
                                        <span>
                                            Fall Guys
                                        </span>
                                    </a>
                                </div>
                                <div className="dropdown-column">
                                    <h4>Discover</h4>
                                    <a href="#" onClick={StorePage}>
                                        <SiEpicgames size={22}/>
                                        <span>
                                            Epic Games Store
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/VYHbV8mMQhCzjH0TIGVO)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/VYHbV8mMQhCzjH0TIGVO)',
                                        }}>
                                        </div>
                                        <span>
                                            Fab
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/1MdipiMMQeSDZe15gy3V)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/SueHxUd6SFy59VZItanD)',
                                        }}>
                                        </div>
                                        <span>
                                            Sketchfab
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/SueHxUd6SFy59VZItanD)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/GnVa6hUTtSLOfMZrWNxe)',
                                        }}>
                                        </div>
                                        <span>
                                            ArtStation
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="column-2">
                                <div className="dropdown-column">
                                    <h4>Create</h4>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)',
                                        }}>
                                        </div>
                                        <span>
                                            Unreal Engine
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/1MdipiMMQeSDZe15gy3V)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)',
                                        }}>
                                        </div>
                                        <span>
                                            Create in Fortnite
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/E3A9GiKvTxe0vldk0b7T)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/E3A9GiKvTxe0vldk0b7T)',
                                        }}>
                                        </div>
                                        <span>
                                            MetaHuman
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/bx1K2n3URsKKIismuqzF)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/fBKKKvETTG2PSGTs19a9)',
                                        }}>
                                        </div>
                                        <span>
                                            Twinmotion
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/fBKKKvETTG2PSGTs19a9)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/4hsNBIcXQcCzsN0FYLfD)',
                                        }}>
                                        </div>
                                        <span>
                                            RealityScan
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/4hsNBIcXQcCzsN0FYLfD)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)',
                                        }}>
                                        </div>
                                        <span>
                                            RealityCapture
                                        </span>
                                    </a>
                                    <a href="#">
                                        <SiEpicgames size={22}/>

                                        <span>
                                            Epic Online Services
                                        </span>
                                    </a>
                                    <a href="#">
                                        <SiEpicgames size={22}/>

                                        <span>
                                            Publish on Epic Games Store
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/ijWMz82OStqcWRGDawM9)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/ijWMz82OStqcWRGDawM9)',
                                        }}>
                                        </div>
                                        <span>
                                            Kids Web Services
                                        </span>
                                    </a>
                                    <a href="#">
                                        <SiEpicgames size={22}/>
                                        <span>
                                            Developer Community
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 32" height="32" width="2" fill="#303034" style={{margin: '20px',}}>
                    <path d="M0 0h2v32H0z"></path>
                </svg>
            </div>
            <div className={`navbar_header ${isMenuHeaderOpen ? 'menu-open' : ''}`}>
                <h1 style={{fontSize: "20px"}}>ONLINE SERVICES</h1>
                <div className={`mobile-drawer ${isMenuHeaderOpen ? 'active' : ''}`}>
                    <div className="main-nav">
                        <nav className="nav-links">
                            <div className="navbar-item">
                                <a href="#">Overview</a>
                            </div>
                            <div className="navbar-item">
                                <a href="#">Account Services</a>
                            </div>
                            <div className="navbar-item">
                                <a href="#">Game Services</a>
                            </div>
                            <div className="navbar-item">
                                <a href="#">Get Started</a>
                            </div>
                            <div className="navbar-item">
                                <a href="#">News</a>
                            </div>
                            <div className="navbar-item distribute" onMouseOver={HideMenuHeader}>
                                <button className="showListDistri" onClick={toggleDistribute}>
                                    <span>Resources</span>
                                    <div><GrFormNext size={20} className="icon-showdistr"/></div>
                                </button>
                                <div className={`dropdown-content ${showDistribute ? 'active' : ''}`}>
                                    <div className="backgroungd_none"></div>
                                    <div className="list-distribute">
                                        <button className="btn-back" onClick={toggleDistribute}><GrFormPrevious
                                            size={20}/> Back
                                        </button>
                                        <ul className="list">
                                            <li><a href="#">Documentation</a></li>
                                            <li><a href="#" >Support</a></li>
                                            <li><a href="#" >Trust Statement</a></li>
                                            <li><a href="#" >Licensing</a></li>
                                            <li><a href="#">FAQ</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="toolbar">
                        <div className="tools">
                            <div className="languages" onMouseOver={HideMenuHeader}>
                                <div className="img-languages">
                                    <FaGlobe size={25} color="#AAAAAE" onClick={toggleLanguages}/>
                                </div>
                                <div className={`dropdown-language ${showLanguages ? 'active' : ''}`}>
                                    <div className="backgroungd_none"></div>
                                    <div className="list-languages">
                                        <button className="btn-back" onClick={toggleLanguages}><GrFormPrevious size={20}/>Back </button>
                                        <ul className="list">
                                            <li><a href="#">English</a></li>
                                            <li><a href="#">Franch</a></li>
                                            <li><a href="#">Tiếng Việt</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="person" onClick={handlePersonClick}>
                                <a className="profile">
                                    <BsPersonCircle size={25} color="#AAAAAE"/>
                                </a>
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
                    {isMenuHeaderOpen ? <IoClose size={25} className="btn-menu" color="#AAAAAE"/> :
                        <IoMenu size={25} className="btn-menu" color="#AAAAAE"/>}
                </div>
            </div>
        </header>
    )
};

export default Header_Distri;