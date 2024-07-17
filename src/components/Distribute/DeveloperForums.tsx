import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../../styles/Distribute/DeveloperForums.css'
import { SiEpicgames } from "react-icons/si";
import { BsChatDots } from "react-icons/bs";
import { PiStudentBold } from "react-icons/pi";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineSkipPrevious } from "react-icons/md";
import {FaChevronDown} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaKeyboard } from "react-icons/fa6";

function DeveloperForums(){
    const [showGeneral, setShowGeneral] = useState(false);
    const [showDistribution, setShowDistribution] = useState(false);
    const [showCommunity, setShowCommunity] = useState(false);
    const [showInternational, setShowInternational] = useState(false);

    const toggleShowGeneral = () => {
        setShowGeneral(!showGeneral);
    };
    const toggleShowDistribution = () => {
        setShowDistribution(!showDistribution);
    };
    const toggleShowCommunity = () => {
        setShowCommunity(!showCommunity);
    };
    const toggleShowInternational = () => {
        setShowInternational(!showInternational);
    };

    return(
        <main className="page-distri-dev">
            <aside className="sidebar">
                <div className="span-sign-in">
                    <div className="wrap">
                        <div className="title-dev">
                            Join our community, grow your knowledge and learn from others!
                        </div>
                        <p>
                            <Link to="/login" className="sign-in">Sign In</Link>
                        </p>
                        <p className="no-account">
                            Don’t have an Epic Games account?
                            <Link to="/login" className="sign-up">Sign up</Link>
                        </p>
                    </div>
                </div>
                <div className="span-nav">
                    <nav className="menu-nav">
                        <ul>
                            <li className="item-nav">
                                <a href="">
                                    <img src="https://components.edc-cdn.net/public/images/logo-edc-community.svg"/>
                                </a>
                            </li>
                            <li className="item-nav">
                                <Link to="/">
                                    <p><SiEpicgames size={20}/>Epic Game Store</p>
                                </Link>
                            </li>
                            <li className="item-nav">
                                <Link to="/developerforums" className="title">
                                    <p><BsChatDots size={20}/>Forums</p>
                                </Link>
                            </li>
                            <li className="item-nav">
                                <Link to="/learning" className="title">
                                    <p><PiStudentBold size={20}/>Learning</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="span-nav categories">
                    <ul className="menu-categories">
                        <li className="title-categories">Categories</li>
                        <li className="item">
                            <p className="item-link" onClick={toggleShowGeneral}>
                                <span>
                                    {showGeneral ? (
                                        <FaChevronDown className={`icon-show-list ${showGeneral ? 'rotated' : ''}`} />
                                    ) : (
                                        <MdNavigateNext size={26} className={`icon-show-list ${showGeneral ? 'rotated' : ''}`} />
                                    )}
                                </span>
                                <span className="text-item">General</span>
                            </p>
                            <ul className={`list-item ${showGeneral ? 'show' : ''}`}>
                                <li>
                                    <a href="" className="item-link list">Announcements</a>
                                </li>
                                <li>
                                    <a href="" className="item-link list">Tutorial & Course Discussions</a>
                                </li>
                                <li>
                                    <a href="" className="item-link list">Feedback & Requests</a>
                                </li>
                            </ul>
                        </li>
                        <li className="item">
                            <p className="item-link" onClick={toggleShowDistribution}>
                                <span>
                                    {showDistribution ? (
                                        <FaChevronDown className={`icon-show-list ${showGeneral ? 'rotated' : ''}`} />
                                    ) : (
                                        <MdNavigateNext size={26} className={`icon-show-list ${showGeneral ? 'rotated' : ''}`} />
                                    )}
                                </span>
                                <span className="text-item">Distribution</span>
                            </p>
                            <ul className={`list-item ${showDistribution ? 'show' : ''}`}>
                                <li>
                                    <a href="" className="item-link list">Onboarding</a>
                                </li>
                                <li>
                                    <a href="" className="item-link list">Store Presence & Configuration</a>
                                </li>
                                <li>
                                    <a href="" className="item-link list">Release & Analytics</a>
                                </li>
                            </ul>
                        </li>
                        <li className="item">
                            <p className="item-link" onClick={toggleShowCommunity}>
                                <span>
                                    {showCommunity ? (
                                        <FaChevronDown className={`icon-show-list ${showCommunity ? 'rotated' : ''}`} />
                                    ) : (
                                        <MdNavigateNext size={26} className={`icon-show-list ${showCommunity ? 'rotated' : ''}`} />
                                    )}
                                </span>
                                <span className="text-item">Community</span>
                            </p>
                            <ul className={`list-item ${showCommunity ? 'show' : ''}`}>
                                <li>
                                    <a href="" className="item-link list">Community & Industry Discussion</a>
                                </li>
                            </ul>
                        </li>
                        <li className="item">
                            <p className="item-link" onClick={toggleShowInternational}>
                                <span>
                                    {showInternational ? (
                                        <FaChevronDown className={`icon-show-list ${showInternational ? 'rotated' : ''}`} />
                                    ) : (
                                        <MdNavigateNext size={26} className={`icon-show-list ${showInternational ? 'rotated' : ''}`} />
                                    )}
                                </span>
                                <span className="text-item">International</span>
                            </p>
                            <ul className={`list-item ${showInternational ? 'show' : ''}`}>
                                <li>
                                    <a href="" className="item-link list">Português (Portuguese)</a>
                                </li>
                                <li>
                                    <a href="" className="item-link list">简体中文 (Simplified Chinese)</a>
                                </li>
                                <li>
                                    <a href="" className="item-link list">Pусский (Russian)</a>
                                </li>
                                <li>
                                    <a href="" className="item-link list">日本語 (Japanese)</a>
                                </li>

                                <li>
                                    <a href="" className="item-link list">한국어 (Korean)</a>
                                </li>

                                <li>
                                    <a href="" className="item-link list">Español (Spanish)</a>
                                </li>

                                <li>
                                    <a href="" className="item-link list">العربية (Arabic)</a>
                                </li>
                                <li>
                                    <a href="" className="item-link list">Français (French)</a>
                                </li>
                                <li>
                                    <a href="" className="item-link list">Deutsch (German)</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="close-aside">
                    <button className="btn-close-aside">
                        <span className="icon-close-aside"><MdOutlineSkipPrevious size={20}/></span>
                        <span className="title-close-aside">Collapse</span>
                    </button>
                </div>
            </aside>
            <section className="main-distri-dev">
                <div className="header_main">
                    <div className="wrap">
                        <div className="content_main">
                            <div className="home-wrapper">
                                <div className="title">
                                    <ul className="wrap">
                                        <li className="wrap_title">
                                            <a href="">
                                                <SiEpicgames size={20}/> Developer
                                            </a>
                                        </li>
                                        <li className="wrap_category">
                                            Forum
                                        </li>
                                        <li className="wrap_category">
                                            Distribution
                                        </li>
                                        <li className="dropdown-list">
                                            <div className="icon-dropdown">
                                                <FaChevronDown/>
                                            </div>
                                            <ul className="list">
                                                <li>
                                                    <div className="icon-lsit-dropdown">
                                                        <div className="logo" style={{
                                                            maskImage: 'url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)',
                                                            WebkitMaskImage: 'url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)',
                                                        }}>
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        <span className="name">Unreal Engine</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon-lsit-dropdown">
                                                        <div className="logo" style={{
                                                            maskImage: 'url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)',
                                                            WebkitMaskImage: 'url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)',
                                                        }}>
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        <span className="name">UEFN & Creative</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon-lsit-dropdown">
                                                        <SiEpicgames/>
                                                    </div>
                                                    <div className="text">
                                                        <span className="name">Distribution</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon-lsit-dropdown">
                                                        <div className="logo" style={{
                                                            maskImage: 'url(https://media.graphassets.com/fBKKKvETTG2PSGTs19a9)',
                                                            WebkitMaskImage: 'url(https://media.graphassets.com/4hsNBIcXQcCzsN0FYLfD)',
                                                        }}>
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        <span className="name">Capturing Reality</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon-lsit-dropdown">
                                                        <div className="logo" style={{
                                                            maskImage: 'url(https://media.graphassets.com/E3A9GiKvTxe0vldk0b7T)',
                                                            WebkitMaskImage: 'url(https://media.graphassets.com/E3A9GiKvTxe0vldk0b7T)',
                                                        }}>
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        <span className="name">MetaHuman</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon-lsit-dropdown">
                                                        <div className="logo" style={{
                                                            maskImage: 'url(https://media.graphassets.com/bx1K2n3URsKKIismuqzF)',
                                                            WebkitMaskImage: 'url(https://media.graphassets.com/fBKKKvETTG2PSGTs19a9)',
                                                        }}>
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        <span className="name">Twinmotion</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="panel">
                                <div className="icon-menu-header">
                                    <IoMenu/>
                                </div>
                                <div className="list-menu-header">
                                    <div className="panel-body">

                                    </div>
                                    <div className="footer-panel">
                                        <button>
                                            <FaKeyboard />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DeveloperForums;