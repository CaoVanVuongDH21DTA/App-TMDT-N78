import React from "react";

import '../../../../styles/Distribute/E_GameStore.css'
import { MdNavigateNext} from "react-icons/md";
import {CiSearch} from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { MdPrint } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";

function E_GameStore(){
    return(
        <section className="content-section">
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
                                        Resources for maintaining your store presence using the Epic Games Store
                                        publishing tools.
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
                                        Test cases for Epic Games Store requirements (e.g., multiplayer crossplay)
                                        and optional Epic Online Services.
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
                                        Optional services available for your product, such as achievements, cloud
                                        saves, and more.
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

export default E_GameStore;