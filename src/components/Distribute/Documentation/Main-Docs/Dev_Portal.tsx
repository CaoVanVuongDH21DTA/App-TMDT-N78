import React from "react";

import '../../../../styles/Distribute/Dev_Portal.css'
import { MdNavigateNext} from "react-icons/md";
import {CiSearch} from "react-icons/ci";
import { MdPrint } from "react-icons/md";
import {IoShareSocial} from "react-icons/io5";
function Dev_Portal(){
    return(
        <section className="page-dev-portal">
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
                                    <span>Developer Portal</span>
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
                    <h1>Developer Portal</h1>
                    <p>Use the Developer Portal to set up and configure your product (game or other software application) with Epic developer resources: the Epic Games Store and Epic Online Services (EOS).</p>
                </div>
            </section>
            <section className="main">
                <section className="container">
                    <p>The Epic Games Developer Portal is a browser-based tool. Use the Developer Portal to set up and
                        configure your game with Epic developer resources: the Epic Games Store and Epic Online Services
                        (EOS). </p>
                    <p><strong>Note</strong>: The Epic Games Developer Portal (known as the "Developer Portal") does not
                        provide configuration support for Kids Web Services (KWS).</p>
                    <div className="list">
                        <a href="#">
                            <span className="title-body">Introduction</span>
                            <p className="text-body">
                                Overview of data hierarchy for Epic Games Store and Epic Online Services (EOS) used in
                                the Developer Portal.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Organizations</span>
                            <p className="text-body">
                                Recent releases and documentation updates for the Epic Games Store
                                publishing
                                tools.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Product Settings, Sandbox, and Deployment</span>
                            <p className="text-body">
                                Overview of product management tools in the Developer Portal.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Player Search</span>
                            <p className="text-body">
                                Player search, account linking, user data requests, and user data deletion.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Client Credential and Client Policy Management</span>
                            <p className="text-body">
                                Resources for selling your product on the storefront.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Identity Provider Management</span>
                            <p className="text-body">
                                Overview of player identity management in the Developer Portal.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Ticketing System (Player Ticketing)</span>
                            <p className="text-body">
                                Provides user support using an automatically generated, preassigned email address and public web API key.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Title Storage Management</span>
                            <p className="text-body">
                                Manage Title Storage settings for your game through the Developer Portal.
                            </p>
                        </a>
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

export default Dev_Portal;