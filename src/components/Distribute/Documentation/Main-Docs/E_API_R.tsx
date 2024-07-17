import React from "react";
import '../../../../styles/Distribute/E_API_R.css'
import {MdNavigateNext, MdPrint} from "react-icons/md";
import {CiSearch} from "react-icons/ci";
import {IoShareSocial} from "react-icons/io5";

function E_API_R ()  {
    return (
        <section className="API_R-section">
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
                                    <span>EOS SDK API Reference</span>
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
                    <h1>EOS API Reference</h1>
                    <p>EOS API Reference Landing Page</p>
                </div>
            </section>
            <section className="main">
                <section className="container">
                    <p>
                        The
                        <strong>Epic Online Services</strong>
                        (EOS) API is broken up into a series of interfaces, each handling a different set of related
                        features. This site covers the API reference by
                        <a href="">interface</a>
                        and by individual members. For more detailed guidance on using EOS, please see the
                        <a href="">main EOS documentation site</a>
                    </p>
                    <p>
                        The following lists contain all exposed functions and data types, sorted by interface:
                    </p>
                    <ul>
                        <li>
                            <a href="">Callback Function Types</a>
                        </li>
                        <li>
                            <a href="">Data Structures</a>
                        </li>
                        <li>
                            <a href="">Enumerated Types</a>
                        </li>
                        <li>
                            <a href="">Functions</a>
                        </li>
                    </ul>
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

export default E_API_R;