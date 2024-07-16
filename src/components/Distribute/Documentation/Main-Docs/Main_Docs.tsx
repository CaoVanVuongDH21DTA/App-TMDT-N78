import React, {useEffect, useState} from "react";
import {MdDarkMode, MdLightMode, MdNavigateNext} from "react-icons/md";
import '../../../../styles/Distribute/Main_Docs.css'
import {NavLink, Route, Routes} from "react-router-dom";
import {DocsRoutes} from "../../../../Routes/DocsRoutes";
import {BsCaretDownFill} from "react-icons/bs";

function Main_Docs(){
    const [showDev, setShowDev] = useState(false);
    const [showEGStore, setShowEGStore] = useState(false);
    const [showEOServices, setShowEOServices] = useState(false);
    const [showEOS_GServices, setShowEOS_GServices] = useState(false);
    const [showEOS_EAServices, setShowEOS_EAServices] = useState(false);
    const [showEOS_SDK_API, setShowEOS_SDK_API] = useState(false);
    const [showEOS_WAPI, setShowEOS_WAPI] = useState(false);
    const [showKWS, setShowKWS] = useState(false);

    const [showSidebar, setShowSidebar] = useState(false);
    const [buttonShowAside, setButtonShowAside] = useState(window.innerWidth <= 1279);

    const [theme, setTheme] = useState('light');
    const [currentNavLink, setCurrentNavLink] = useState("Epic Developer Resources Documentation");

    const handleNavLinkClick = (navLinkName:string) => {
        setCurrentNavLink(navLinkName);
        setShowSidebar(false)
    };

    const handleResize = () => {
        setButtonShowAside(window.innerWidth <= 1279);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleShowSidebar= () => {
        setShowSidebar(!showSidebar);
    }

    const toggleShowDev = () => {
        setShowDev(!showDev);
        setShowEGStore(false)
        setShowEOServices(false)
        setShowEOS_GServices(false)
        setShowEOS_EAServices(false)
        setShowEOS_SDK_API(false)
        setShowEOS_WAPI(false)
        setShowKWS(false)
    };
    const toggleShowEGStore = () => {
        setShowEGStore(!showEGStore);
        setShowDev(false);
        setShowEOServices(false)
        setShowEOS_GServices(false)
        setShowEOS_EAServices(false)
        setShowEOS_SDK_API(false)
        setShowEOS_WAPI(false)
        setShowKWS(false)
    };
    const toggleShowEOServices = () => {
        setShowEOServices(!showEOServices);
        setShowDev(false);
        setShowEGStore(false)
        setShowEOS_GServices(false)
        setShowEOS_EAServices(false)
        setShowEOS_SDK_API(false)
        setShowEOS_WAPI(false)
        setShowKWS(false)
    };
    const toggleShowEOS_GServices = () => {
        setShowEOS_GServices(!showEOS_GServices);
        setShowDev(false);
        setShowEGStore(false)
        setShowEOServices(false)
        setShowEOS_EAServices(false)
        setShowEOS_SDK_API(false)
        setShowEOS_WAPI(false)
        setShowKWS(false)
    };
    const toggleShowEOS_EAServices = () => {
        setShowEOS_EAServices(!showEOS_EAServices);
        setShowDev(false);
        setShowEGStore(false)
        setShowEOServices(false)
        setShowEOS_GServices(false)
        setShowEOS_SDK_API(false)
        setShowEOS_WAPI(false)
        setShowKWS(false)
    };
    const toggleShowEOS_SDK_API = () => {
        setShowEOS_SDK_API(!showEOS_SDK_API);
        setShowDev(false);
        setShowEGStore(false)
        setShowEOServices(false)
        setShowEOS_GServices(false)
        setShowEOS_EAServices(false)
        setShowEOS_WAPI(false)
        setShowKWS(false)
    };
    const toggleShowEOS_WAPI = () => {
        setShowEOS_WAPI(!showEOS_WAPI);
        setShowDev(false);
        setShowEGStore(false)
        setShowEOServices(false)
        setShowEOS_GServices(false)
        setShowEOS_EAServices(false)
        setShowEOS_SDK_API(false)
        setShowKWS(false)
    };
    const toggleShowKWS = () => {
        setShowKWS(!showKWS);
        setShowDev(false);
        setShowEGStore(false)
        setShowEOServices(false)
        setShowEOS_GServices(false)
        setShowEOS_EAServices(false)
        setShowEOS_SDK_API(false)
        setShowEOS_WAPI(false)
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return(
        <main className="page-docs">
            <aside className="sidebar">
                {buttonShowAside ? (
                    <div className="show-aside">
                        <p className="show-hide-sidebar" onClick={toggleShowSidebar}>
                            <span>{currentNavLink}</span>
                            <span className={`icon-show-hide-sidebar ${showSidebar ? 'rotate' : ''}`}>
                            <BsCaretDownFill size={20} className="icon"/>
                        </span>
                        </p>
                    </div>
                ) : null}
                <div className={`navigation-tree ${buttonShowAside && !showSidebar ? 'hide' : ''}`}>
                    <div className="nav-main">
                        <div className="nav-container">
                            <ul className="menu">
                                <li className="item">
                                    <div className="designer-item">
                                        <p className="bg-item">
                                            <NavLink to="/docs" style={{"color": "var(--text-color)", "fontWeight": "bold"}}
                                                     onClick={() => handleNavLinkClick("Epic Developer Resources Documentation")}>
                                            Epic Developer Resources</NavLink>
                                        </p>
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="designer-item">
                                        <p className="bg-item">
                                                <span className="icon-item not-icon">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                            <a href="#">Overview</a>
                                        </p>
                                    </div>
                                </li>
                                <li className="item">
                                    <div className={`designer-item ${showDev ? 'active' : ''}`}
                                         onClick={toggleShowDev}>
                                        <p className="bg-item">
                                            <span className={`icon-item ${showDev ? 'rotate' : ''}`}>
                                                    <MdNavigateNext size={20} className="icon-show-list"/>
                                            </span>
                                            <NavLink to="/docs/dev_portal"
                                                     onClick={() => handleNavLinkClick("Developer Portal")}>
                                                Developer Portal
                                            </NavLink>
                                        </p>
                                    </div>
                                    <ul className={`menu-item ${showDev ? 'show' : 'hide'}`}>
                                        <li className="item ">
                                        <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Introduction</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Organizations</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Product Settings, Sandbox, and Deployment</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">EOS Player Search</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Client Credential and Client Policy Management</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Identity Provider Management</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Ticketing System (Player Ticketing)</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Title Storage Management</a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <div className={`designer-item ${showEGStore ? 'active' : ''}`}
                                         onClick={toggleShowEGStore}>
                                        <p className="bg-item">
                                            <span className={`icon-item ${showEGStore ? 'rotate' : ''}`}>
                                                <MdNavigateNext size={20} className="icon-show-list"/>
                                            </span>
                                            <NavLink to="/docs/epic-game-store"
                                                     onClick={() => handleNavLinkClick("Epic Games Store")}
                                            >Epic Games Store</NavLink>
                                        </p>
                                    </div>
                                    <ul className={`menu-item ${showEGStore ? 'show' : 'hide'}`}>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                <span className="icon-item">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                                    <a href="#">What's New</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                <span className="icon-item">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                                    <a href="#">Get Started</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                <span className="icon-item">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                                    <a href="#">Requirements and Guidelines</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                <span className="icon-item">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                                    <a href="#">Sales and Marketing</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                <span className="icon-item">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                                    <a href="#">Store Presence</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                <span className="icon-item">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                                    <a href="#">Publishing Tools</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                <span className="icon-item">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                                    <a href="#">Epic Games Store Testing Guide</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                <span className="icon-item">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                                    <a href="#">Epic Games Store Services</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                <span className="icon-item">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                                    <a href="#">Protocol Activation</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                <span className="icon-item">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                                    <a href="#">Epic-Managed Distribution</a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <div className={`designer-item ${showEOServices ? 'active' : ''}`}
                                         onClick={toggleShowEOServices}>
                                        <p className="bg-item">
                                            <span className={`icon-item ${showEOServices ? 'rotate' : ''}`}>
                                                <MdNavigateNext size={20} className="icon-show-list"/>
                                            </span>
                                            <NavLink to="/docs/epic-online-services"
                                                     onClick={() => handleNavLinkClick("Epic Online Services (EOS) Overview")}
                                            >Epic Online Services (EOS) Overview</NavLink>
                                        </p>
                                    </div>
                                    <ul className={`menu-item ${showEOServices ? 'show' : 'hide'}`}>
                                        <li className="item ">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">EOS What's New</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">EOS Get Started</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">EOS SDK Samples</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">EOS SDK for Platforms</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">EOS SDK Error Codes</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">EOS SDK Release Notes</a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <div className={`designer-item ${showEOS_GServices ? 'active' : ''}`}
                                         onClick={toggleShowEOS_GServices}>
                                        <p className="bg-item">
                                            <span className={`icon-item ${showEOS_GServices ? 'rotate' : ''}`}>
                                                <MdNavigateNext size={20} className="icon-show-list"/>
                                            </span>
                                            <NavLink to="/docs/game-services"
                                                     onClick={() => handleNavLinkClick("EOS Game Services")}
                                            >EOS Game Services</NavLink>
                                        </p>
                                    </div>
                                    <ul className={`menu-item ${showEOS_GServices ? 'show' : 'hide'}`}>
                                        <li className="item ">
                                        <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Tool: Bulk Importer and Exporter</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Tool: File Decryption</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">Achievements Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">Anti-Cheat Interfaces</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Connect Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Custom Invites Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">Leaderboards Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">Lobbies and Sessions</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Logging Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Metrics Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">NAT P2P Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Platform Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">Player Data Storage Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Reports Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">Real-Time Communication (RTC) Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Sanctions Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Stats Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">Title Storage Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <div className={`designer-item ${showEOS_EAServices ? 'active' : ''}`}
                                         onClick={toggleShowEOS_EAServices}>
                                        <p className="bg-item">
                                            <span className={`icon-item ${showEOS_EAServices ? 'rotate' : ''}`}>
                                                <MdNavigateNext size={20} className="icon-show-list"/>
                                            </span>
                                            <NavLink to="/docs/epic-account-services"
                                                     onClick={() => handleNavLinkClick("EOS Epic Account Services")}
                                            >EOS Epic Account Services</NavLink>
                                        </p>
                                    </div>
                                    <ul className={`menu-item ${showEOS_EAServices ? 'show' : 'hide'}`}>
                                        <li className="item ">
                                        <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Get Started</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Tool: Developer Authentication</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Authorization and Consent Managemente</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">Brand Review</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">Crossplay</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Data Privacy and Visibility</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Design Guidelines</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">Social Overlay Overview</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">Authentication</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Friends Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Presence Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Progression Snapshot Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">UI Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">User Info Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <div className={`designer-item ${showEOS_SDK_API ? 'active' : ''}`}
                                         onClick={toggleShowEOS_SDK_API}>
                                        <p className="bg-item">
                                            <span className={`icon-item ${showEOS_SDK_API ? 'rotate' : ''}`}>
                                                <MdNavigateNext size={20} className="icon-show-list"/>
                                            </span>
                                            <NavLink to="/docs/api-ref"
                                                     onClick={() => handleNavLinkClick("EOS SDK API Reference")}
                                            >EOS SDK API Reference</NavLink>
                                        </p>
                                    </div>
                                    <ul className={`menu-item ${showEOS_SDK_API ? 'show' : 'hide'}`}>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">EOS API Interface List</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">EOS API Interface List</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">EOS API Enumerated Types By Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">EOS API Functions By Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">EOS API Data Structures By Interface</a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <div className={`designer-item ${showEOS_WAPI ? 'active' : ''}`}
                                         onClick={toggleShowEOS_WAPI}>
                                        <p className="bg-item">
                                            <span className={`icon-item ${showEOS_WAPI ? 'rotate' : ''}`}>
                                                <MdNavigateNext size={20} className="icon-show-list"/>
                                            </span>
                                            <NavLink to="/docs/web-api-ref"
                                                     onClick={() => handleNavLinkClick("EOS Web API Reference")}
                                            >EOS Web API Reference</NavLink>
                                        </p>
                                    </div>
                                    <ul className={`menu-item ${showEOS_WAPI ? 'show' : 'hide'}`}>
                                        <li className="item">
                                        <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">EOS Web API Introduction</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">EOS Web API Error Codes and Responses</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Anti-Cheat Web APIs</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Auth Web APIs</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Connect Web APIs</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Ecom Web APIs</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Player Reports Web APIs</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Sanctions Web APIs</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Voice Web APIs</a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item border_item">
                                    <div className={`designer-item ${showKWS ? 'active' : ''}`}
                                         onClick={toggleShowKWS}>
                                        <p className="bg-item">
                                            <span className={`icon-item ${showKWS ? 'rotate' : ''}`}>
                                                <MdNavigateNext size={20} className="icon-show-list"/>
                                            </span>
                                            <NavLink to="/docs/kids-web-services"
                                                     onClick={() => handleNavLinkClick("Kids Web Services (KWS)")}
                                            >Kids Web Services (KWS)</NavLink>
                                        </p>
                                    </div>
                                    <ul className={`menu-item ${showKWS ? 'show' : 'hide'}`}>
                                        <li className="item">
                                        <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Welcome to Kids Web Services</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">About the KWS Platform</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">About the Parent Verification Service</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Get Started</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">Set Up your Product in KWS</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                        <span className="icon-item">
                                                            <MdNavigateNext size={20}/>
                                                        </span>
                                                    <a href="#">Set Up the Parent Verification Service</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">Manage your KWS Organization</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">KWS Support</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">KWS Glossary</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <div className="designer-item">
                                                <p className="bg-item">
                                                    <a href="#">KWS API Reference</a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <div className="designer-item">
                                        <p className="bg-item">
                                                <span className="icon-item not-icon">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                            <a href="#">Glossary</a>
                                        </p>
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="designer-item">
                                        <p className="bg-item">
                                                <span className="icon-item not-icon">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                            <a href="#">Roadmap</a>
                                        </p>
                                    </div>
                                </li>
                                <li className="item border_item">
                                    <div className="designer-item">
                                        <p className="bg-item">
                                                <span className="icon-item not-icon">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                            <a href="#">Support</a>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <div className="theme">
                                <div className="switch-theme">
                                    <div className={`indicator ${theme}`}></div>
                                    <button className={`toggle-button ${theme === 'light' ? 'active' : ''}`}
                                            onClick={() => setTheme('light')}>
                                        <span><MdLightMode/></span>
                                        <span>Light</span>
                                    </button>
                                    <button className={`toggle-button ${theme === 'dark' ? 'active' : ''}`}
                                            onClick={() => setTheme('dark')}>
                                        <span><MdDarkMode/></span>
                                        <span>Dark</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <Routes>
                {DocsRoutes.map((item, index) => (
                    <Route key={index} path={item.path} element={item.element}/>
                ))}
            </Routes>
        </main>
    );
};

export default Main_Docs;