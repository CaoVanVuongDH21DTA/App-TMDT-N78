import React from "react";
import '../../../../styles/Distribute/E_Dev_Res.css'
import {CiSearch} from "react-icons/ci";
import {MdNavigateNext} from "react-icons/md";

function E_Dev_Res () {
    return(
        <div className="main_dev_res">
            <div className="home_header">
                <div className="description">
                    <h1>Epic Developer Resources Documentation</h1>
                    <h2>Developer documentation for Epic Games Store, Epic Online Services (EOS), Kids Web Services (KWS), and their associated tools.</h2>
                </div>
                <div className="body_search">
                    <div className="search">
                        <input type="text" placeholder="Search Document" className="search-bar"/>
                        <CiSearch className="icon-search" size={20}/>
                    </div>
                    <button type="submit">
                        <span>search</span>
                    </button>
                </div>
            </div>
            <div className="home_articles">
                <p>
                    <strong>
                        See the Epic Developer Resources
                        <a>Overview</a>
                        page for a summary of the resources and tools available.
                    </strong>
                </p>
                <section className="grid-info">
                    <div className="article">
                        <div className="header_articles">
                            <div className="title">
                                Learn more about
                                <b>Epic Games Store</b>
                            </div>
                            <button type="button">
                                <a href="/docs/epic-game-store"><MdNavigateNext size={20}/></a>
                            </button>
                        </div>
                        <div className="body_articles">
                            <div className="list">
                                <a href="">
                                    <span className="title-body">Get Started</span>
                                    <p className="text-body">
                                        Learn more about the Epic Games Store distribution process.
                                    </p>
                                </a>
                                <a href="">
                                    <span className="title-body">Requirements & Guidelines</span>
                                    <p className="text-body">
                                        Review the policies, requirements, and guidelines for distribution.
                                    </p>
                                </a>
                                <a href="">
                                    <span className="title-body">Sales & Marketing</span>
                                    <p className="text-body">
                                        Resources for selling and marketing your product on the Epic Games Store.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="article">
                        <div className="header_articles">
                            <div className="title">
                                Learn more about
                                <b>Epic Online Services(EOS)</b>
                            </div>
                            <button type="button">
                                <a href="/docs/epic-online-services"><MdNavigateNext size={20}/></a>
                            </button>
                        </div>
                        <div className="body_articles">
                            <div className="list">
                                <a href="" className="art2_a1">
                                    <span className="title-body">EOS Get Started</span>
                                    <p className="text-body">
                                        Follow this guide to use free, platform agnostic, fast, easy, and dependable services to launch, operate, and scale your game.
                                    </p>
                                </a>
                                <a href="" className="art2_a2">
                                    <span className="title-body">EOS: Game Services</span>
                                    <p className="text-body">
                                        Use these free services to power your game, including voice chat, achievements, matchmaking, live ops, and more.
                                    </p>
                                </a>
                                <a href="" className="art2_a3">
                                    <span className="title-body">EOS: Epic Account Services</span>
                                    <p className="text-body">
                                        Use these free services to connect players with their friends across multiple platforms and storefronts.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="article">
                        <div className="header_articles">
                            <div className="title">
                                Learn more about
                                <b>Kids Web Services (KWS)</b>
                            </div>
                            <button type="button">
                                <a href="/docs/kids-web-services"><MdNavigateNext size={20}/></a>
                            </button>
                        </div>
                        <div className="body_articles">
                            <div className="list">
                            <a href="" className="art3">
                                    <span className="title-body">The KWS Platform</span>
                                    <p className="text-body">
                                        Find out about the KWS tools: the KWS Developer Portal, API, and webhooks.
                                    </p>
                                </a>
                                <a href="" className="art3">
                                    <span className="title-body">Get Started with Kids Web Services</span>
                                    <p className="text-body">
                                        Register and set up your organization with KWS.
                                    </p>
                                </a>
                                <a href="" className="art3">
                                    <span className="title-body">The Parent Verification Service</span>
                                    <p className="text-body">
                                        Verify the identity of the person designated as the parent of a child using your game.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="article">
                        <div className="header_articles">
                            <div className="title">
                                Learn more about
                                <b>Developer Portal</b>
                            </div>
                            <button type="button">
                                <a href="/docs/dev_portal"><MdNavigateNext size={20}/></a>
                            </button>
                        </div>
                        <div className="body_articles">
                            <div className="list">
                            <a href="" className="art4">
                                    <span className="title-body">Organizations</span>
                                    <p className="text-body">
                                        Find out about organization management tools in the Developer Portal.
                                    </p>
                                </a>
                                <a href="" className="art4">
                                    <span className="title-body">Product, Sandbox, and Deployment IDs</span>
                                    <p className="text-body">
                                        Find out about game management tools in the Developer Portal.
                                    </p>
                                </a>
                                <a href="" className="art4">
                                    <span className="title-body">EOS Player Search</span>
                                    <p className="text-body">
                                        Player search, account linking, user data requests, and user data deletion.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default E_Dev_Res;