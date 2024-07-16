import React, {useEffect, useState} from "react";

import '../../../../styles/Distribute/E_Account_Services.css'

import {MdNavigateNext, MdPrint} from "react-icons/md";
import {CiSearch} from "react-icons/ci";
import {IoShareSocial} from "react-icons/io5";
import {AiOutlineLink} from "react-icons/ai";
import {IoMdInformationCircle} from "react-icons/io";

function E_Account_Services () {

    const [activeSection, setActiveSection] = useState<string>('');
    const [showSidebarList, setShowSidebarList] = useState(false)

    const toggleShowSidebarList = () => {
        setShowSidebarList(!showSidebarList);
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.title_EOS');
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const middleOfViewport = windowHeight / 2;

            sections.forEach(section => {
                const sectionId = section.getAttribute('id');
                const rect = section.getBoundingClientRect();

                // Kiểm tra xem sectionId có tồn tại và rect.top nằm trong viewport không
                if (sectionId && rect.top <= middleOfViewport && rect.bottom >= middleOfViewport) {
                    setActiveSection(sectionId);
                }
            });
        };

        // Lắng nghe sự kiện cuộn trang
        window.addEventListener('scroll', handleScroll);

        // Xóa lắng nghe khi component bị unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="EAccountServices-section">
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
                                    <span>EOS Epic Account Services</span>
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
                    <h1>EOS Epic Account Services</h1>
                    <p>EOS Epic Account Services provide access to a cross-platform Epic Games account ecosystem and its associated social features.</p>
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
                    <div className="title_EOS" id="about-eos-epic-account-services">
                        <h2>About EOS Epic Account Services</h2>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>EOS Epic Account Services provide player accounts that give access to the cross-platform Epic
                        Games account ecosystem and its associated social features.</p>
                    <p>Use EOS Epic Account Services to tap into an ecosystem of over 500 million players across
                        multiple platforms and stores; allow game players to access their friends across a wide variety
                        of supported platforms, regardless of the storefronts a game is available on or the game engines
                        a game is built in.</p>
                    <p>EOS Epic Account Services exposes API operations to authenticate players and access their friends
                        and presence. They also provide some Epic Games Store services, such as in-app purchases.</p>
                    <p>For more information on these services, see the following documentation:</p>
                    <ul>
                        <li>
                            Authentication -
                            <a href="">Auth Interface</a>
                        </li>
                        <li>
                            <a href="">Friends Interface</a>
                        </li>
                        <li>
                            <a href="">Presence Interface</a>
                        </li>
                        <li>
                            <p>
                                EOS Overlay -
                                <a href="">UI Interface</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="">User Info Interface</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                Epic Games Store in-app purchases -
                                <a href="">Ecommerce</a>
                            </p>
                        </li>
                    </ul>
                    <div className="title_EOS" id="eos-overlay">
                        <h3 className={activeSection === 'eos-overlay' ? 'active' : ''}>EOS Overlay</h3>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>To use the Epic Account Services social features, authorization, and in-app purchases (on
                        Desktop), you must integrate the EOS Overlay with your game (or other software application).</p>
                    <p>For information on the EOS Overlay, see the following documentation:</p>
                    <ul>
                        <li>
                            <a href="">EOS Overlay Overview</a>
                        </li>
                    </ul>

                    <div className="title_EOS" id="key-information">
                        <h2>Key Information</h2>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <ul>
                        <li>
                            <p>
                                <strong>EOS Game Services do not require EOS Epic Account Services</strong>
                                <br/>
                                EOS Epic Account Services are a set of resources which are specific to using
                                cross-platform Epic Games account social features in your game. If you use EOS Game
                                Services in your game, you do not require EOS Epic Account Services. Players can connect
                                to your game using either an identity from a supported identity provider (such as a
                                Steam account) or an Epic Games account.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Acceptable use</strong>
                                <br/>
                                Acceptable use of EOS Epic Account Services is defined in the Service Addendum for Epic
                                Account Services.
                                <br/>
                                For information on how to set up your application for Epic Account Services, see the
                                <a href="">Get Started </a>
                                documentation on Epic Account Services.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Preview mode</strong>
                                <br/>
                                EOS Epic Account Services are available in preview mode, and is subject to some
                                temporary limitations. These are:
                                <ul>
                                    <li>The service does not offer parental consent when players access games from
                                        outside of the Epic Games Store.
                                    </li>
                                    <li>Audience restrictions apply for unverified applications.</li>
                                </ul>
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>OpenID specification compatibility</strong>
                                <br/>
                                The EOS Epic Account Services authentication and authorization flow is compatible with
                                OpenID Connect Core 1.0 and Discovery 1.0 specifications with minor extensions. EOS Epic
                                Account Services OpenID provider configuration is available at
                                <a href="">api.epicgames.dev/~/openid-configuration.</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Epic Games accounts vs. EOS Organization User IDs / EOS Product User
                                    IDs</strong>
                                <br/>
                                There are several commonalities and differences between the Epic Games account system
                                and the EOS Organization/Product User ID system.
                                <ul>
                                    <li>Both (a) the Epic Games account system and (b) the EOS Organization User ID /
                                        EOS Product User ID system are fully cross-platform, and both support a wide
                                        variety of external authentication methods.
                                    </li>
                                    <li>However, in contrast to an ecosystem-wide Epic Games account:
                                        <ul>
                                            <li>An EOS Organization User ID is always specific to a developer's <span>organization<IoMdInformationCircle
                                                size={20}/></span></li>
                                            <li>An EOS Product User ID is always specific to
                                                a <span>product<IoMdInformationCircle size={20}/></span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        As a result:
                                        <ul>
                                            <li>The same external identity, such as a console account is always linked
                                                at most to one (a) Epic Games account at a time, but can be linked to
                                                multiple (b) EOS Organization User IDs simultaneously, though no more
                                                than once per Organization.
                                            </li>
                                            <li>The same EOS Organization User ID can point at most to one EOS Product
                                                User ID per each product.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ul>
                    <div className="title_EOS" id="eos-epic-account-services-documentation">
                        <h2>EOS Epic Account Services Documentation</h2>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <div className="item-main">
                        <div className="title_EOS" id="getting-started">
                            <h2>Getting Started</h2>
                            <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                                <AiOutlineLink size={30}/>
                            </button>
                        </div>
                        <div className="section-body">
                            <div className="list">
                                <a href="#">
                                    <span className="title-body">Get Started</span>
                                    <p className="text-body">
                                        How to set up EOS Epic Account Services with your game.
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div className="section-header">
                            <div className="title_EOS" id="tools">
                                <h2>Tools</h2>
                                <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                                    <AiOutlineLink size={30}/>
                                </button>
                            </div>
                        </div>
                        <div className="section-body">
                            <div className="list">
                                <a href="#">
                                    <span className="title-body">Tool: Developer Authentication</span>
                                    <p className="text-body">
                                        A tool to manage login status during development.
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div className="section-header">
                            <div className="title_EOS" id="guides-and-concepts">
                                <h2>Guides and Concepts</h2>
                                <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                                    <AiOutlineLink size={30}/>
                                </button>
                            </div>
                        </div>
                        <div className="section-body">
                            <div className="list">
                                <a href="#">
                                    <span className="title-body">Authorization and Consent Management</span>
                                    <p className="text-body">
                                        The player experience of consent and how players manage permissions.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Brand Review</span>
                                    <p className="text-body">
                                        Discover more about brand reviews, including the brand review process and domain
                                        verification.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Crossplay</span>
                                    <p className="text-body">
                                        Discover crossplay, including using crossplay across different platforms and the
                                        redistributable installer.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Data Privacy and Visibility</span>
                                    <p className="text-body">
                                        Epic Games account data privacy and visibility.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Design Guidelines</span>
                                    <p className="text-body">
                                        Integrating with EOS Epic Account Services for authentication.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Social Overlay Overview</span>
                                    <p className="text-body">
                                        A tour of the Social Overlay as it appears to players.
                                    </p>
                                </a>

                            </div>
                        </div>
                        <div className="section-header">
                            <div className="title_EOS" id="interfaces">
                                <h2>Interfaces</h2>
                                <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                                    <AiOutlineLink size={30}/>
                                </button>
                            </div>
                        </div>
                        <div className="section-body">
                            <div className="list">
                                <a href="#">
                                    <span className="title-body">Auth Interface</span>
                                    <p className="text-body">
                                        Interface to handle verification of user accounts, including login and logout functionality.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Friends Interface</span>
                                    <p className="text-body">
                                        Interface to retrieve friends lists, or to add or remove other users.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Presence Interface</span>
                                    <p className="text-body">
                                        Interface that enables users to inform their friends of their current activities.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Progression Snapshot Interface</span>
                                    <p className="text-body">
                                        Using the Progression Snapshot Interface to merge Epic Accounts.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">UI Interface</span>
                                    <p className="text-body">
                                        Query user reports to view the details of reported user behaviors, for example,
                                        cheating, verbal abuse, offensive profiles, and so on.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">Sanctions Interface</span>
                                    <p className="text-body">
                                        Interface that accesses overlay features.
                                    </p>
                                </a>
                                <a href="#">
                                    <span className="title-body">User Info Interface</span>
                                    <p className="text-body">
                                        Interface to obtain information about the user, such as display name or country, and map display names to account identifiers.
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
                <aside className="sidebar_EAS">
                    <div className="top_sidebar" onClick={toggleShowSidebarList}>
                        Contents
                    </div>
                    <div className={`sidebar_list ${showSidebarList ? 'active' : ''}`}>
                        <ul>
                            <li>
                                <a href="#about-eos-epic-account-services"
                                   className={`item_list lv1 ${activeSection === 'about-eos-epic-account-services' ? 'active' : ''}`}>
                                    About EOS Epic Account Services
                                </a>
                            </li>
                            <li>
                                <a href="#eos-overlay"
                                   className={`item_list lv2 ${activeSection === 'eos-overlay' ? 'active' : ''}`}>
                                    EOS Overlay
                                </a>
                            </li>
                            <li>
                                <a href="#key-information"
                                   className={`item_list lv1 ${activeSection === 'key-information' ? 'active' : ''}`}>
                                    Key Information
                                </a>
                            </li>
                            <li>
                                <a href="#eos-epic-account-services-documentation"
                                   className={`item_list lv1 ${activeSection === 'eos-epic-account-services-documentation' ? 'active' : ''}`}>
                                    EOS Epic Account Services Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#getting-started"
                                   className={`item_list lv2 ${activeSection === 'getting-started' ? 'active' : ''}`}>
                                    Getting Started
                                </a>
                            </li>
                            <li>
                                <a href="#tools"
                                   className={`item_list lv2 ${activeSection === 'tools' ? 'active' : ''}`}>
                                    Tools
                                </a>
                            </li>
                            <li>
                                <a href="#guides-and-concepts"
                                   className={`item_list lv2 ${activeSection === 'guides-and-concepts' ? 'active' : ''}`}>
                                    Guides and Concepts
                                </a>
                            </li>
                            <li>
                                <a href="#interfaces"
                                   className={`item_list lv2 ${activeSection === 'interfaces' ? 'active' : ''}`}>
                                    Interfaces
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </section>
        </section>
    );
};

export default E_Account_Services;