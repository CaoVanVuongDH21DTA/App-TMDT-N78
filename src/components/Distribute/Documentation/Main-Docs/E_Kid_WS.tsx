import React from "react";
import '../../../../styles/Distribute/E_Kid_WS.css'
import {MdNavigateNext, MdPrint} from "react-icons/md";
import {CiSearch} from "react-icons/ci";
import {IoShareSocial} from "react-icons/io5";

function E_Kid_WS ()  {
    return (
        <section className="Kid_WS-section">
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
                                    <span>Kids Web Services (KWS)</span>
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
                    <h1>Kids Web Services (KWS)</h1>
                    <p>A parent verification platform to help you create safe and compliant digital experiences for young audiences.</p>
                </div>
            </section>
            <section className="main">
                <section className="container">
                    <div className="list">
                        <a href="#">
                            <span className="title-body">Welcome to Kids Web Services</span>
                            <p className="text-body">
                                An overview of Kids Web Services (KWS) and how it can help you create safe and compliant
                                digital experiences.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">About the KWS Platform</span>
                            <p className="text-body">
                                An overview of the main developer features of KWS.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">About the Parent Verification Service</span>
                            <p className="text-body">
                                An overview of the KWS Parent Verification (PV) service, including an example use case
                                and a description of the verification methods used by the service.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Get Started</span>
                            <p className="text-body">
                                How to register with KWS and start using the KWS platform for the first time.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Set Up your Product</span>
                            <p className="text-body">
                                How to set up your product for integration with KWS.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Manage your KWS Organization</span>
                            <p className="text-body">
                                How to manage your KWS organization and accounts.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">KWS Support</span>
                            <p className="text-body">
                                Where to get support and information when using KWS.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">KWS Glossary</span>
                            <p className="text-body">
                                Where to get support and information when using KWS.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">KWS API Reference</span>
                            <p className="text-body">
                                A link to the KWS API specification.
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

export default E_Kid_WS;