import React from "react";
import '../../../../styles/Distribute/E_Web_API_R.css'
import {MdNavigateNext, MdPrint} from "react-icons/md";
import {CiSearch} from "react-icons/ci";
import {IoShareSocial} from "react-icons/io5";

function E_Web_API_R ()  {
    return (
        <section className="Web_API_R-section">
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
                                    <span>EOS Web API Reference</span>
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
                    <h1>EOS Web API Reference</h1>
                    <p>Descriptions of the Web APIs available to use with Epic Online Services (EOS).</p>
                </div>
            </section>
            <section className="main">
                <section className="container">
                    <p>
                        Use the Epic Online Services (EOS) Web API to access EOS Games Services and EOS Account
                        Services. Note that some Epic Games Store services also use the EOS Web API.
                    </p>
                    <p>
                        For information on:
                    </p>
                    <ul>
                        <li>
                            Web API call formatting, see the
                            <a href="">EOS Web API Introduction</a>
                            documentation.
                        </li>
                        <li>
                            Web API error codes and responses, see the
                            <a href="">EOS Web API Error Codes and Responses</a>
                            documentation.
                        </li>
                    </ul>

                    <div className="list">
                        <a href="#">
                            <span className="title-body">Anti-Cheat Web API</span>
                            <p className="text-body">
                                Use the Anti-Cheat Web APIs to use Anti-Cheat interface features with RESTful services.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Auth Web API</span>
                            <p className="text-body">
                                Use the Auth interface Web APIs to authenticate for Epic Account Services Web APIs.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Connect Web API</span>
                            <p className="text-body">
                                Use the Connect interface Web API to authenticate with EOS Game Services Web APIs.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Ecom Web API</span>
                            <p className="text-body">
                                RESTful endpoints to perform verification of ownership without using the SDK.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Report Web API</span>
                            <p className="text-body">
                                Use the Player Reports Web APIs to use Player Reports interface features with RESTful services.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Sanctions Web API</span>
                            <p className="text-body">
                                Use the Sanctions Web APIs to use Sanctions interface features with RESTful services.
                            </p>
                        </a>
                        <a href="#">
                            <span className="title-body">Voice Web API</span>
                            <p className="text-body">
                                Use the Voice Web APIs to use Voice interface features with RESTful services.
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

export default E_Web_API_R;