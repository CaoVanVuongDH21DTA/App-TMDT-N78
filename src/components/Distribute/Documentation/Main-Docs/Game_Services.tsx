import React from "react";
import '../../../../styles/Distribute/Game_Services.css'
import {MdNavigateNext, MdPrint} from "react-icons/md";
import {CiSearch} from "react-icons/ci";
import {GoArrowUpRight} from "react-icons/go";
import {IoShareSocial} from "react-icons/io5";
import {AiOutlineLink} from "react-icons/ai";

function Game_Services () {
    return (
        <section className="gameServices-section">
            <section className="top-main-docs">
                <div className="hero_header">
                    <div className="content">
                        <nav className="nav-cont">
                            <ol className="path">
                                <li className="path-item">
                                    <a href="/docs">Epic Developer Resources</a>
                                </li>
                                <li className="path-item">
                                    <MdNavigateNext size={20} className="icon-path"/>
                                </li>
                                <li className="path-item">
                                    <span>EOS Game Services</span>
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
                    <h1>EOS Game Services</h1>
                    <p>EOS Game Services are a collection of services for building cross-platform multiplayer functionality.</p>
                </div>
            </section>
            <section className="main">
                <section className="container">
                    <p>EOS Epic Account Services are part of Epic Online Services (EOS).</p>
                    <p>
                        See the
                        <a href="">Epic Online Services (EOS) Overview</a>
                        documentation
                        for information on the full set of services and their associated tools, and
                        <a href="">EOS Get Started</a>
                        documentation for guidance on setting up your game or other software application with EOS.
                    </p>
                    <div className="title_EOS" id="video-introduction-to-eos">
                        <h2>About EOS Game Services</h2>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>EOS Game Services enable you to build and integrate online functionality into your game or other
                        software application.</p>
                    <p>You can set up your game to use Game Services without any requirement for your players to have an
                        Epic Games account.
                        You can use any of the following free services:</p>
                    <ul>
                        <li>
                            <strong>Multiplayer</strong>
                            <br/>
                            Set up multiplayer sessions, lobbies, peer-to-peer networking and enable voice chat between
                            players.
                        </li>
                        <li>
                            <strong>Player progression</strong>
                            <br/>
                            Track metrics, stats, and achievements for every player. Set up leaderboards and store
                            encrypted, user-specific, game-specific data to cloud servers.
                        </li>
                        <li>
                            <strong>Game operations</strong>
                            <br/>
                            Use anti-cheat, player sanctions, reports and a ticketing system to manage your community.
                            Store data for your game that is accessible to any player on any device where they can log
                            in.
                        </li>
                    </ul>
                    <p>
                        EOS Game Services are part of Epic Online Services (EOS). You can find out more about Epic
                        Online
                        Services in the
                        <a href="">Epic Online Services (EOS) Introduction</a>
                        and
                        <a href="">EOS Get Started</a>
                        documentation.
                    </p>
                    <div className="title_EOS" id="video-introduction-to-eos">
                        <h2>EOS Game Services Documentation</h2>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>


                    <div className="item-main">
                        <div className="section-header">
                            <div className="title">
                                <h4>Tools</h4>
                            </div>
                            <button><GoArrowUpRight className="icon-btn"/></button>
                        </div>
                        <div className="section-body">
                            <div className="list">
                                <a href="#">
                                    <span className="title-body">Bulk Importer and Exporter Tool</span>
                                    <p className="text-body">
                                        A tool to assist with stat and achievement management.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">File Decryption Tool</span>
                                    <p className="text-body">
                                        The File Decryption Tool is a command line tool that you can use to create new files or decrypt files loaded to Title Storage or Player Data Storage easily and conveniently.
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div className="section-header">
                            <div className="title">
                                <h4>Interfaces</h4>
                            </div>
                            <button><GoArrowUpRight className="icon-btn"/></button>
                        </div>
                        <div className="section-body">
                            <div className="list">
                                <a href="#">
                                    <span className="title-body">Achievements Interface</span>
                                    <p className="text-body">
                                        Recent releases and documentation updates for the Epic Games Store
                                        publishing
                                        tools.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Anti-Cheat Interfaces</span>
                                    <p className="text-body">
                                        Understand the prerequisites, network architecture, platform components, and
                                        more involved in implementing Anti-Cheat in your EOS product.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Connect Interface</span>
                                    <p className="text-body">
                                        The Connect Interface handles connections between users' accounts under
                                        different identity providers.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Custom Invites Interface</span>
                                    <p className="text-body">
                                        Interface for handling invites where Epic matchmaking is not being used.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Leaderboards Interface</span>
                                    <p className="text-body">
                                        Interface to handle online leaderboards
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Lobbies Interface</span>
                                    <p className="text-body">
                                        Interface to handle lobbies
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Logging Interface</span>
                                    <p className="text-body">
                                        Interface to receive log messages from the Epic Online Services SDK
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Metrics Interface</span>
                                    <p className="text-body">
                                        Interface to record play sessions for game usage data collection.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">NAT P2P Interface</span>
                                    <p className="text-body">
                                        Interface to send and receive data between users, and related networking
                                        functionality.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Platform Interface</span>
                                    <p className="text-body">
                                        Interface that grants access to all other interfaces.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Player Data Storage Interface</span>
                                    <p className="text-body">
                                        Interface to handle cloud-based data management
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Reports Interface</span>
                                    <p className="text-body">
                                        Query user reports to view the details of reported user behaviors, for example, cheating, verbal abuse, offensive profiles, and so on.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Sanctions Interface</span>
                                    <p className="text-body">
                                        Manage punitive actions taken against your users including temporary or permanent bans from gameplay or communication.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Sessions Interface</span>
                                    <p className="text-body">
                                        Interface to handle session-based matchmaking
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Stats Interface</span>
                                    <p className="text-body">
                                        Interface for managing stats.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Title Storage Interface</span>
                                    <p className="text-body">
                                        Interface to download encrypted data shared by all players from the cloud
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Voice Interface</span>
                                    <p className="text-body">
                                        Use the Voice interface to create and manage voice chat rooms for your users while they use your product.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="toolbox_panel">
                        <button>
                            <IoShareSocial size={20}/>
                        </button>
                        <button>
                            <MdPrint size={20}/>
                        </button>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Game_Services;