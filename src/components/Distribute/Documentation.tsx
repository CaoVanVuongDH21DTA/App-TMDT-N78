import React, {useEffect, useState} from "react";
import Header_Distri from "./Header_Footer-Distribute/Header_Distri";
import Footer_Distri from "./Header_Footer-Distribute/Footer_Distri";
import '../../styles/Distribute/Documentation.css'
import { MdNavigateNext, MdLightMode, MdDarkMode } from "react-icons/md";
import {CiSearch} from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import {FaChevronDown} from "react-icons/fa";

function Documentation(){
    const [showDev, setShowDev] = useState(false);
    const [showEGStore, setShowEGStore] = useState(false);
    const [showEOServices, setShowEOServices] = useState(false);
    const [showEOS_GServices, setShowEOS_GServices] = useState(false);
    const [showEOS_EAServices, setShowEOS_EAServices] = useState(false);
    const [showEOS_SDK_API, setShowEOS_SDK_API] = useState(false);
    const [showEOS_WAPI, setShowEOS_WAPI] = useState(false);
    const [showKWS, setShowKWS] = useState(false);

    const [theme, setTheme] = useState('light');

    const toggleShowDev = () => {
        setShowDev(!showDev);
    };
    const toggleShowEGStore = () => {
        setShowEGStore(!showEGStore);
    };
    const toggleShowEOServices = () => {
        setShowEOServices(!showEOServices);
    };
    const toggleShowEOS_GServices = () => {
        setShowEOS_GServices(!showEOS_GServices);
    };
    const toggleShowEOS_EAServices = () => {
        setShowEOS_EAServices(!showEOS_EAServices);
    };
    const toggleShowEOS_SDK_API = () => {
        setShowEOS_SDK_API(!showEOS_SDK_API);
    };
    const toggleShowEOS_WAPI = () => {
        setShowEOS_WAPI(!showEOS_WAPI);
    };
    const toggleShowKWS = () => {
        setShowKWS(!showKWS);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return(
        <>
            <Header_Distri/>
            <main className="page-distri">
                <aside className="sidebar">
                    <div className="navigation-tree">
                        <div className="nav-main">
                            <div className="nav-container">
                                <ul className="menu">
                                    <li className="item">
                                        <div className="designer-item">
                                            <p className="bg-item">
                                                <span className="icon-item not-icon">
                                                    <MdNavigateNext size={20}/>
                                                </span>
                                                <a href="#" style={{"color":"var(--text-color)", "fontWeight":"bold"}}>Epic Developer Resources</a>
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
                                        <div className="designer-item">
                                            <p className="bg-item" onClick={toggleShowDev}>
                                                <span className="icon-item">
                                                    {showDev ? (
                                                        <FaChevronDown size={14} className={`icon-show-list ${showDev ? 'rotated' : ''}`} />
                                                    ) : (
                                                        <MdNavigateNext size={20} className={`icon-show-list ${showDev ? 'rotated' : ''}`} />
                                                    )}
                                                </span>
                                                <a href="#">Developer Portal</a>
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
                                        <div className="designer-item">
                                            <p className="bg-item" onClick={toggleShowEGStore}>
                                                <span className="icon-item">
                                                    {showEGStore ? (
                                                        <FaChevronDown size={14} className={`icon-show-list ${showEGStore ? 'rotated' : ''}`} />
                                                    ) : (
                                                        <MdNavigateNext size={20} className={`icon-show-list ${showEGStore ? 'rotated' : ''}`} />
                                                    )}
                                                </span>
                                                <a href="#">Epic Games Store</a>
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
                                        <div className="designer-item">
                                            <p className="bg-item" onClick={toggleShowEOServices}>
                                                <span className="icon-item">
                                                    {showEOServices ? (
                                                        <FaChevronDown size={14} className={`icon-show-list ${showEOServices ? 'rotated' : ''}`} />
                                                    ) : (
                                                        <MdNavigateNext size={20} className={`icon-show-list ${showEOServices ? 'rotated' : ''}`} />
                                                    )}
                                                </span>
                                                <a href="#">Epic Online Services (EOS) Overview</a>
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
                                        <div className="designer-item">
                                            <p className="bg-item" onClick={toggleShowEOS_GServices}>
                                                <span className="icon-item">
                                                    {showEOS_GServices ? (
                                                        <FaChevronDown size={14} className={`icon-show-list ${showEOS_GServices ? 'rotated' : ''}`} />
                                                    ) : (
                                                        <MdNavigateNext size={20} className={`icon-show-list ${showEOS_GServices ? 'rotated' : ''}`} />
                                                    )}
                                                </span>
                                                <a href="#">EOS Game Services</a>
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
                                        <div className="designer-item">
                                            <p className="bg-item" onClick={toggleShowEOS_EAServices}>
                                                <span className="icon-item">
                                                    {showEOS_EAServices ? (
                                                        <FaChevronDown size={14} className={`icon-show-list ${showEOS_EAServices ? 'rotated' : ''}`} />
                                                    ) : (
                                                        <MdNavigateNext size={20} className={`icon-show-list ${showEOS_EAServices ? 'rotated' : ''}`} />
                                                    )}
                                                </span>
                                                <a href="#">EOS Epic Account Services</a>
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
                                        <div className="designer-item">
                                            <p className="bg-item" onClick={toggleShowEOS_SDK_API}>
                                                <span className="icon-item">
                                                    {showEOS_SDK_API ? (
                                                        <FaChevronDown size={14} className={`icon-show-list ${showEOS_SDK_API ? 'rotated' : ''}`} />
                                                    ) : (
                                                        <MdNavigateNext size={20} className={`icon-show-list ${showEOS_SDK_API ? 'rotated' : ''}`} />
                                                    )}
                                                </span>
                                                <a href="#">EOS SDK API Reference</a>
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
                                        <div className="designer-item">
                                            <p className="bg-item" onClick={toggleShowEOS_WAPI}>
                                                <span className="icon-item">
                                                    {showEOS_WAPI ? (
                                                        <FaChevronDown size={14} className={`icon-show-list ${showEOS_WAPI ? 'rotated' : ''}`} />
                                                    ) : (
                                                        <MdNavigateNext size={20} className={`icon-show-list ${showEOS_WAPI ? 'rotated' : ''}`} />
                                                    )}
                                                </span>
                                                <a href="#">EOS Web API Reference</a>
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
                                        <div className="designer-item">
                                            <p className="bg-item" onClick={toggleShowKWS}>
                                                <span className="icon-item">
                                                    {showKWS ? (
                                                        <FaChevronDown size={14} className={`icon-show-list ${showKWS ? 'rotated' : ''}`} />
                                                    ) : (
                                                        <MdNavigateNext size={20} className={`icon-show-list ${showKWS ? 'rotated' : ''}`} />
                                                    )}
                                                </span>
                                                <a href="#">Kids Web Services (KWS)</a>
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
                <section className="content-section">
                    <section className="top-main">
                        <div className="hero_header">
                            <div className="content">
                                <nav className="nav-cont">
                                    <ol className="path">
                                        <li className="path-item">
                                            <a href="#">Epic Developer Resources</a>
                                        </li>
                                        <li className="path-item">
                                            <MdNavigateNext size={20} className="icon-path"/>
                                        </li>
                                        <li className="path-item">
                                            <span>Epic Games Store</span>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="search">
                                <input type="text" placeholder="Search Document" className="search-bar"/>
                                <CiSearch className="icon-search" size={25}/>
                            </div>
                        </div>
                        <div className="hero_main">
                            <h1>Epic Games Store</h1>
                            <p>Distribute your product on the Epic Games Store.</p>
                        </div>
                    </section>
                    <section className="main">
                        <section className="container">
                            <div className="item-main">
                                <div className="section-header">
                                    <div className="title">
                                        <h4>Get Started</h4>
                                    </div>
                                    <button><GoArrowUpRight className="icon-btn"/></button>
                                </div>
                                <div className="section-body">
                                    <div className="list">
                                        <a href="#">
                                            <span className="title-body">Get Started</span>
                                            <p className="text-body">
                                                Onboarding resources for Epic Games Store partners.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item-main">
                                <div className="section-header">
                                    <div className="title">
                                        <h4>What's New</h4>
                                    </div>
                                    <button><GoArrowUpRight className="icon-btn"/></button>
                                </div>
                                <div className="section-body">
                                    <div className="list">
                                        <a href="#">
                                            <span className="title-body">What's New</span>
                                            <p className="text-body">
                                                Recent releases and documentation updates for the Epic Games Store
                                                publishing
                                                tools.
                                            </p>
                                        </a>
                                        <a href="#">
                                            <span className="title-body">Known Issues</span>
                                            <p className="text-body">
                                                Known issues in the Epic Games Store publishing tools.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item-main">
                                <div className="section-header">
                                    <div className="title">
                                        <h4>Requirements & Guidelines</h4>
                                    </div>
                                    <button><GoArrowUpRight className="icon-btn"/></button>
                                </div>
                                <div className="section-body">
                                    <div className="list">
                                        <a href="#">
                                            <span className="title-body">Requirements & Guidelines</span>
                                            <p className="text-body">
                                                Distribution requirements for publishing on the Epic Games Store.
                                            </p>
                                        </a>
                                        <a href="#">
                                            <span className="title-body">Ratings & Content Guidelines</span>
                                            <p className="text-body">
                                                Content and rating guidelines for distributing products on the
                                                storefront.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item-main">
                                <div className="section-header">
                                    <div className="title">
                                        <h4>Sales & Marketing</h4>
                                    </div>
                                    <button><GoArrowUpRight className="icon-btn"/></button>
                                </div>
                                <div className="section-body">
                                    <div className="list">
                                        <a href="#">
                                            <span className="title-body">Sales</span>
                                            <p className="text-body">
                                                Resources for selling your product on the storefront.
                                            </p>
                                        </a>
                                        <a href="#">
                                            <span className="title-body">Marketing</span>
                                            <p className="text-body">
                                                Resources for marketing your product on the storefront.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item-main">
                                <div className="section-header">
                                    <div className="title">
                                        <h4>Store Presence</h4>
                                    </div>
                                    <button><GoArrowUpRight className="icon-btn"/></button>
                                </div>
                                <div className="section-body">
                                    <div className="list">
                                        <a href="#">
                                            <span className="title-body">Store Presence</span>
                                            <p className="text-body">
                                                Resources for maintaining your store presence using the Epic Games Store publishing tools.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item-main">
                                <div className="section-header">
                                    <div className="title">
                                        <h4>Publishing Tools</h4>
                                    </div>
                                    <button><GoArrowUpRight className="icon-btn"/></button>
                                </div>
                                <div className="section-body">
                                    <div className="list">
                                        <a href="#">
                                            <span className="title-body">Publishing Process</span>
                                            <p className="text-body">
                                                Information about the Epic Games Store distribution process.
                                            </p>
                                        </a>
                                        <a href="#">
                                            <span className="title-body">Organization Management</span>
                                            <p className="text-body">
                                                Resources for managing your organization in the Epic Games Store
                                                publishing tools.
                                            </p>
                                        </a>
                                        <a href="#">
                                            <span className="title-body">Uploading Binaries (BPT Instructions)</span>
                                            <p className="text-body">
                                                Instructions for uploading binaries using the BuildPatch Tool.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item-main">
                                <div className="section-header">
                                    <div className="title">
                                        <h4>Epic Games Store Testing Guide</h4>
                                    </div>
                                    <button><GoArrowUpRight className="icon-btn"/></button>
                                </div>
                                <div className="section-body">
                                    <div className="list">
                                        <a href="#">
                                            <span className="title-body">Testing Guide</span>
                                            <p className="text-body">
                                                Test cases for Epic Games Store requirements (e.g., multiplayer crossplay) and optional Epic Online Services.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item-main">
                                <div className="section-header">
                                    <div className="title">
                                        <h4>Epic Games Store Services</h4>
                                    </div>
                                    <button><GoArrowUpRight className="icon-btn"/></button>
                                </div>
                                <div className="section-body">
                                    <div className="list">
                                        <a href="#">
                                            <span className="title-body">Services</span>
                                            <p className="text-body">
                                                Optional services available for your product, such as achievements, cloud saves, and more.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item-main">
                                <div className="section-header">
                                    <div className="title">
                                        <h4>Protocol Activation</h4>
                                    </div>
                                    <button><GoArrowUpRight className="icon-btn"/></button>
                                </div>
                                <div className="section-body">
                                    <div className="list">
                                        <a href="#">
                                            <span className="title-body">Protocol Activation</span>
                                            <p className="text-body">
                                                Activate game clients to launch the Epic Games Store.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item-main">
                                <div className="section-header">
                                    <div className="title">
                                        <h4>Epic-Managed Distribution</h4>
                                    </div>
                                    <button><GoArrowUpRight className="icon-btn"/></button>
                                </div>
                                <div className="section-body">
                                    <div className="list">
                                        <a href="#">
                                            <span className="title-body">Is This For Me?</span>
                                            <p className="text-body">
                                                Information on distribution methods and supporting documentation.
                                            </p>
                                        </a>
                                        <a href="#">
                                            <span className="title-body">Get Started</span>
                                            <p className="text-body">
                                                Onboarding resources for Epic-Managed products.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
            <Footer_Distri/>
        </>
    );
};

export default Documentation;