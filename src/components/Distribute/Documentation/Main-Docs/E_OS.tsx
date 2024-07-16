import React, {useEffect, useState} from "react";
import {MdNavigateNext, MdPrint} from "react-icons/md";
import {CiSearch} from "react-icons/ci";
import '../../../../styles/Distribute/E_OS.css'
import { AiOutlineLink } from "react-icons/ai";
import {IoShareSocial} from "react-icons/io5";

function E_OS(){
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
        <div className="main_EOS">
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
                                    <span>Epic Online Services (EOS) Overview</span>
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
                    <h1>Epic Online Services (EOS) Overview</h1>
                    <p>Epic Online Services (EOS) are free, cross-platform services for multiplayer games. EOS is quick to install into your game, includes operation tools, and allows scaling.</p>
                </div>
            </section>
            <section className="content_eos">
                <section className="main_eos">
                    <p>Epic Online Services (EOS) are free, games-platform agnostic, services to launch, operate, and
                        scale your game, whatever games platform your game clients run on, and whatever game engine you
                        use for development, or if you use no game engine at all.</p>
                    <p>They are split into two subsets: EOS Game Services and EOS Epic Account Services.</p>
                    <ul>
                        <li>
                            <strong>EOS Game Services</strong>
                            enable you to build and integrate online functionality into your game. You can set up your
                            game to use Games Services without any requirement for your players to have an Epic Games
                            account.
                            <br/>
                            (See the
                            <a href="">EOS Game Services</a>
                            section below for more information.)
                        </li>
                        <li>
                            <strong>EOS Epic Account Services</strong>
                            provide player accounts. Use Epic Account Services to tap into an ecosystem of over 500
                            million players across multiple platforms and stores.
                            <br/>
                            (See the
                            <a href="">EOS Epic Account Services</a>
                            section below for more information.)
                        </li>
                    </ul>
                    <p>
                        EOS also provides services for the Epic Games Store (documentation:
                        <a href="">Epic Games Store Services</a>
                        ).
                    </p>
                    <p>
                        To use any EOS services in your game, you integrate interfaces using the EOS tools. There is an
                        interface for each service.
                    </p>
                    <p>
                        EOS has several tools, including:
                    </p>
                    <ul>
                        <li>
                            The Developer Portal
                            <br/>
                            (Documentation:
                            <a href="">Developer Portal</a>
                            )
                        </li>
                        <li>
                            The EOS SDK and API - in C and C#
                            <br/>
                            (Documentation:
                            <a href="">Working with the EOS SDK</a>
                            and
                            <a href="">EOS SDK API Reference</a>
                            )
                        </li>
                        <li>
                            The EOS Web API - HTTP APIs for common use cases
                            <br/>
                            (Documentation:
                            <a href="">EOS Web API Introduction</a>
                            )
                        </li>
                    </ul>
                    <p><strong>Note:</strong></p>
                    <ul>
                        <li>For your game to use EOS Game Services, your players do not require an Epic Games account
                            and your game does not have to use EOS Epic Account Services.
                        </li>
                        <li>
                            Players can connect to your game using either an identity from a supported identity provider
                            (such as a Steam account) or an Epic Games account. (See the section below on
                            <a href="">Connection Type and Player Accounts</a>
                            for information on which EOS interfaces to use.)
                        </li>
                    </ul>

                    <div className="title_EOS" id="video-introduction-to-eos">
                        <h2 className={activeSection === 'video-introduction-to-eos' ? 'active' : ''}>Video Introduction
                            to EOS</h2>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        See the introduction video on youtube.com:
                        <a href="">Introduction to Epic Online Services.</a>
                    </p>
                    <div className="video">
                        <div>
                            <iframe title="video" src="https://www.youtube-nocookie.com/embed/0KKTsCFKABc" width="500"
                                    height="300" frameBorder="0" allowFullScreen/>
                        </div>
                        <p>Video: Introduction to Epic Online Services</p>
                    </div>
                    <div className="title_EOS" id="eos-game-services">
                        <h2 className={activeSection === 'eos-game-services' ? 'active' : ''}>EOS Game Services</h2>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        EOS Game Services enable you to build and integrate online functionality into your game. You can
                        set up your game to use Games Services without any requirement for your players to have an Epic
                        Games account.
                        <br/>
                        You can use any of the following free services:
                    </p>
                    <ul>
                        <li>
                            <p>
                                <strong>Multiplayer</strong>
                                <br/>
                                Set up multiplayer sessions, lobbies, peer-to-peer networking and enable voice chat
                                between players.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Player progression</strong>
                                <br/>
                                Track metrics, stats, and achievements for every player. Set up leaderboards and store
                                encrypted, user-specific, game-specific data to cloud servers.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Game operations</strong>
                                <br/>
                                Use anti-cheat, player sanctions, reports and a ticketing system to manage your
                                community. Store data for your game that is accessible to any player on any device where
                                they can log in.
                            </p>
                        </li>
                    </ul>
                    <div className="title_EOS" id="multiplayer">
                        <h3 className={activeSection === 'multiplayer' ? 'active' : ''}>Multiplayer</h3>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <div className="title_EOS" id="lobbies">
                        <h4 className={activeSection === 'lobbies' ? 'active' : ''}>Lobbies</h4>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>Use the Lobbies Interface to enable players to create, remove, join, and leave lobbies.</p>
                    <p>
                        <strong>Note:</strong>
                        <br/>
                        The Social Overlay is part of EOS Epic Account Services. You can use this service to enable
                        players to accept Lobby invites.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Game Services:
                            <a href="">Lobbies and Sessions Introduction</a>
                        </li>
                        <li>
                            EOS Game Services:
                            <a href="">Lobbies Interface</a>
                        </li>
                        <li>
                            EOS Game Services:
                            <a href="">Sessions Interface</a>
                        </li>
                        <li>
                            EOS Epic Account Services:
                            <a href="">Social Overlay</a>
                        </li>
                    </ul>
                    <div className="title_EOS" id="peer-to-peer-p2p-connections">
                        <h4 className={activeSection === 'peer-to-peer-p2p-connections' ? 'active' : ''}>
                            <strong>Peer-to-Peer (P2P) Connections</strong>
                        </h4>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the NAT P2P Interface to enable players to connect with other players in a game
                    </p>
                    <p>
                        Documentation:
                    </p>
                    <ul>
                        <li>
                            EOS Game Services:
                            <a href="">NAT P2P Interface</a>
                        </li>
                    </ul>
                    <div className="title_EOS" id="sessions">
                        <h4 className={activeSection === 'sessions' ? 'active' : ''}>
                            <strong>Sessions</strong>
                        </h4>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Sessions Interface to allow players to set up a match and use matchmaking to find other
                        players for the match.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Game Services:
                            <a href="">Lobbies and Sessions Introduction</a>
                        </li>
                        <li>
                            EOS Game Services:
                            <a href="">Lobbies Interface</a>
                        </li>
                        <li>
                            EOS Game Services:
                            <a href="">Sessions Interface</a>
                        </li>
                    </ul>
                    <div className="title_EOS" id="stats">
                        <h4 className={activeSection === 'stats' ? 'active' : ''}>
                            <strong>Stats</strong>
                        </h4>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Stats Interface to define the stats for your game in the Developer Portal. You can
                        include any statistical data about a player that you want to track, for example the number of
                        items the player has collected. You can use these stats to determine when to unlock achievements
                        and how to use rank players in leaderboards.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Game Services:
                            <a href="">Stats Interfacen</a>
                        </li>
                        <li>
                            EOS Game Services:
                            <a href="">Achievements Interface</a>
                        </li>
                        <li>
                            EOS Game Services:
                            <a href="">Lobbies Interface</a>
                        </li>
                    </ul>
                    <div className="title_EOS" id="title-storage">
                        <h4 className={activeSection === 'title-storage' ? 'active' : ''}>
                            <strong>Title Storage</strong>
                        </h4>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Title Storage Interface to retrieve game-specific data that is stored in encrypted form
                        on cloud servers.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Game Services:
                            <a href="">Title Storage Interface</a>
                        </li>
                    </ul>
                    <div className="title_EOS" id="voice-chat">
                        <h4 className={activeSection === 'voice-chat' ? 'active' : ''}>
                            <strong>Voice Chat</strong>
                        </h4>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Voice Interface to integrate voice into your game. Either use EOS Lobbies (through the
                        Lobbies Interface) or your own trusted server application.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Game Services:
                            <a href="">Voice Interface</a>
                        </li>
                    </ul>
                    <div className="title_EOS" id="player-progression">
                        <h3 className={activeSection === 'player-progression' ? 'active' : ''}>
                            <strong>Player Progression</strong>
                        </h3>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <div className="title_EOS" id="achievements">
                        <h4 className={activeSection === 'achievements' ? 'active' : ''}>
                            <strong>Achievements</strong>
                        </h4>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Achievements Interface to access data about player achievements, unlock them for a
                        player, get data on a player's progression for an achievement, and send notifications to players
                        when they unlock an achievement.
                    </p>
                    <p>
                        <strong>Node:</strong>
                        <br/>
                        You can offer XP to players in games published on the Epic Games Store by using Epic Games Store
                        achievements. Epic Games Store achievements are built on Epic Online Services achievements.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Game Services:
                            <a href="">Achievements Interface</a>
                            for Epic Online Services achievements
                        </li>
                        <li>
                            Epic Games Store Services:
                            <a href="">Epic Games Store achievements</a>
                        </li>
                    </ul>
                    <div className="title_EOS" id="leaderboards">
                        <h4 className={activeSection === 'leaderboards' ? 'active' : ''}>
                            <strong>Leaderboards</strong>
                        </h4>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Leaderboards Interface to define leaderboards for your game, choose the stats to
                        include, how you rank players, and the lifespan of the leaderboards.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Game Services:
                            <a href="">Leaderboards Interface</a>
                        </li>
                    </ul>
                    <div className="title_EOS" id="metrics">
                        <h4 className={activeSection === 'metrics' ? 'active' : ''}>
                            <strong>Metrics</strong>
                        </h4>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Metrics Interface to set up the Game Analytics dashboard in the Developer Portal and
                        track worldwide game activity, player retention, and online player counts. You can view your
                        game’s usage, including players’ active sessions and past sessions.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Game Services:
                            <a href="">Metrics Interface</a>
                        </li>
                        <li>
                            Developer Portal:
                            <a href="">Developer Portal</a>
                            introduction
                        </li>
                    </ul>
                    <div className="title_EOS" id="player-data-storage">
                        <h4 className={activeSection === 'player-data-storage' ? 'active' : ''}>
                            <strong>Player Data Storage</strong>
                        </h4>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Player Data Storage Interface to save, download, copy, and delete player-related data
                        for your game on cloud servers in encrypted form.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Game Services:
                            <a href="">Player Data Storage Interface</a>
                        </li>
                    </ul>
                    <div className="title_EOS" id="game-operations">
                        <h3><strong>Game Operations</strong></h3>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <div className="title_EOS" id="easy-anti-cheat">
                        <h4 className={activeSection === 'easy-anti-cheat' ? 'active' : ''}>
                            <strong>Easy Anti-Cheat</strong>
                        </h4>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Anti-Cheat Interface to prevent and detect player cheating within your game.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Game Services:
                            <a href="">Anti-Cheat Interface</a>
                        </li>
                    </ul>

                    <div className="title_EOS" id="logging">
                        <h4 className={activeSection === 'logging' ? 'active' : ''}><strong>Logging</strong></h4>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Logging Interface to analyze Epic Online Services diagnostic output during software
                        development and after your game has shipped. You can filter the data and focus on the
                        information you’re interested in, and set logging on or off for each interface. </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Game Services:
                            <a href="">Logging Interface</a>
                        </li>
                    </ul>
                    <div className="title_EOS" id="reports">
                        <h4 className={activeSection === 'reports' ? 'active' : ''}><strong>Reports</strong></h4>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Reports Interface to collect and publish player behavior to Player Reports. View details
                        about player cheating, verbal abuse and offensive profiles.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Game Services:
                            <a href="">Reports Interface</a>
                        </li>
                    </ul>

                    <div className="title_EOS" id="sanctions">
                        <h4 className={activeSection === 'sanctions' ? 'active' : ''}><strong>Sanctions</strong></h4>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Sanctions Interface to define and manage sanctions for your game in the Game Services
                        section of the Developer Portal. You can view the details of all sanctions placed on a player.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Game Services:
                            <a href="">Sanctions Interface</a>
                        </li>
                        <li>
                            Developer Portal:
                            <a href="">Developer Portal</a>
                            introduction
                        </li>
                    </ul>
                    <div className="title_EOS" id="epic-account-services">
                        <h2 className={activeSection === 'epic-account-services' ? 'active' : ''}><strong>EOS Epic Account
                            Services</strong></h2>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        EOS Epic Account Services provide player accounts. Use Epic Account Services to tap into an
                        ecosystem of over 500 million players across multiple platforms and stores.
                    </p>
                    <p>
                        <strong>Note:</strong>
                        <br/>
                        To use EOS Epic Account Services, players of your game must have an Epic Games account (or a
                        proxy Epic Games account). They connect to your game using the Auth Interface.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Epic Account Services:
                            <a href="">Crossplay Technical Overview</a>
                            (for proxy Epic Games accounts)
                        </li>
                        <li>
                            EOS Epic Account Services:
                            <a href="">Auth Interface</a>
                        </li>
                    </ul>
                    <p>EOS Epic Account Services includes the following free services:</p>
                    <div className="title_EOS" id="crossplay">
                        <h3 className={activeSection === 'crossplay' ? 'active' : ''}><strong>Crossplay</strong></h3>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Enable players accessing your game from different storefronts to play together using a combined
                        friends list.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Epic Account Services:
                            <a href="">Crossplay Interface</a>
                        </li>
                    </ul>
                    <div className="title_EOS" id="friends">
                        <h3 className={activeSection === 'friends' ? 'active' : ''}><strong>Friends</strong></h3>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Friends Interface to enable players to invite friends to join a game-play session, and
                        to retrieve and to display friend information to players. You can display to any logged-in
                        player; their friends and their invite status in relation to other players. You can enable
                        players to keep their friends list up-to-date by subscribing to friends status updates, and to
                        add new friends.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Epic Account Services:
                            <a href="">Friends Interface</a>
                        </li>
                    </ul>
                    <div className="title_EOS" id="presence">
                        <h3 className={activeSection === 'presence' ? 'active' : ''}><strong>Presence</strong></h3>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Presence Interface to display a player’s status (online/offline/playing) within the
                        game. The player’s status is also visible to their friends. You can update and delete a player’s
                        presence data. In combination with the friends feature, players can also view their friends’
                        presence information.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Epic Account Services:
                            <a href="">Presence Interface</a>
                        </li>
                    </ul>
                    <div className="title_EOS" id="social-overlay">
                        <h3 className={activeSection === 'social-overlay' ? 'active' : ''}>
                            <strong>Social Overlay</strong>
                        </h3>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        Use the Social Overlay to display to a player their achievements and friends information,
                        including if their friends are playing the same game.
                    </p>
                    <p>Documentation:</p>
                    <ul>
                        <li>
                            EOS Epic Account Services:
                            <a href="">Social Overlay</a>
                        </li>
                        <li>
                            EOS Epic Account Services:
                            <a href="">Friends Interface</a>
                        </li>
                    </ul>
                    <div className="title_EOS" id="connect-type-and-player-accounts">
                        <h2 className={activeSection === 'connect-type-and-player-accounts' ? 'active' : ''}>
                            <strong>Connection Type and Player Accounts</strong>
                        </h2>
                        <button className="btn_getLink" type="button" aria-label="Copy link to this section">
                            <AiOutlineLink size={30}/>
                        </button>
                    </div>
                    <p>
                        For your game to use EOS Game Services, your players do not require an Epic Games account and
                        your game does not have to use EOS Epic Account Services. Players can connect to your game using
                        either an identity from a supported identity provider (such as a Steam account) or an Epic Games
                        account.
                    </p>
                    <p>
                        Note that how you set up a player's connection to your game depends on player identity:
                    </p>
                    <ul>
                        <li>
                            To let players connect to your game with their Epic Games accounts, use the EOS Epic Account
                            Services: Auth Interface.
                        </li>
                        <li>
                            To let players connect to your game with identities provided by online stores and gaming
                            services such as Steam, use the EOS Game Services: Connect Interface.
                        </li>
                    </ul>
                    <p>For more information, see the following documentation:</p>
                    <ul>
                        <li>
                            For details of the identity providers supported by EOS, see
                            <a href="">Identity Provider Management</a>
                        </li>
                        <li>
                            <a href="">EOS Games Services: Connect Interface</a>
                        </li>
                        <li>
                            <a href="">EOS Epic Account Services: Auth Interface</a>
                        </li>
                        <li>
                            <a href="">EOS SDK API Reference: EOS_EExternal Credential Type</a>
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
                <aside className="sidebar_eos">
                    <div className="top_sidebar" onClick={toggleShowSidebarList}>
                        Contents
                    </div>
                    <div className={`sidebar_list ${showSidebarList ? 'active' : ''}`}>
                        <ul>
                            <li>
                                <a href="#video-introduction-to-eos"
                                   className={`item_list lv1 ${activeSection === 'video-introduction-to-eos' ? 'active' : ''}`}>Video
                                    Introduction to EOS</a>
                            </li>
                            <li>
                                <a href="#eos-game-services"
                                   className={`item_list lv1 ${activeSection === 'eos-game-services' ? 'active' : ''}`}>EOS
                                    Game Services</a>
                            </li>
                            <li>
                                <a href="#multiplayer"
                                   className={`item_list lv2 ${activeSection === 'multiplayer' ? 'active' : ''}`}>Multiplayer</a>
                            </li>
                            <li>
                                <a href="#lobbies"
                                   className={`item_list lv3 ${activeSection === 'lobbies' ? 'active' : ''}`}>Lobbies</a>
                            </li>
                            <li>
                                <a href="#peer-to-peer-p2p-connections"
                                   className={`item_list lv3 ${activeSection === 'peer-to-peer-p2p-connections' ? 'active' : ''}`}>
                                    Peer-to-Peer (P2P) Connections
                                </a>
                            </li>
                            <li>
                                <a href="#sessions"
                                   className={`item_list lv3 ${activeSection === 'sessions' ? 'active' : ''}`}>Sessions</a>
                            </li>
                            <li>
                                <a href="#stats"
                                   className={`item_list lv3 ${activeSection === 'stats' ? 'active' : ''}`}>Stats</a>
                            </li>
                            <li>
                                <a href="#title-storage"
                                   className={`item_list lv3 ${activeSection === 'title-storage' ? 'active' : ''}`}>Title
                                    Storage</a>
                            </li>
                            <li>
                                <a href="#voice-chat"
                                   className={`item_list lv3 ${activeSection === 'voice-chat' ? 'active' : ''}`}>Voice
                                    Chat</a>
                            </li>
                            <li>
                                <a href="#player-progression"
                                   className={`item_list lv2 ${activeSection === 'player-progression' ? 'active' : ''}`}>Player
                                    Progression</a>
                            </li>
                            <li>
                                <a href="#achievements"
                                   className={`item_list lv3 ${activeSection === 'achievements' ? 'active' : ''}`}>Achievements</a>
                            </li>
                            <li>
                                <a href="#leaderboards"
                                   className={`item_list lv3 ${activeSection === 'leaderboards' ? 'active' : ''}`}>Leaderboards</a>
                            </li>
                            <li>
                                <a href="#metrics"
                                   className={`item_list lv3 ${activeSection === 'metrics' ? 'active' : ''}`}>Metrics</a>
                            </li>
                            <li>
                                <a href="#player-data-storage"
                                   className={`item_list lv3 ${activeSection === 'player-data-storage' ? 'active' : ''}`}>Player
                                    Data Storage</a>
                            </li>
                            <li>
                                <a href="#game-operations"
                                   className={`item_list lv3 ${activeSection === 'game-operations' ? 'active' : ''}`}>Game
                                    Operations</a>
                            </li>
                            <li>
                                <a href="#easy-anti-cheat"
                                   className={`item_list lv3 ${activeSection === 'easy-anti-cheat' ? 'active' : ''}`}>Easy
                                    Anti-Cheat</a>
                            </li>
                            <li>
                                <a href="#reports"
                                   className={`item_list lv3 ${activeSection === 'reports' ? 'active' : ''}`}>Reports</a>
                            </li>
                            <li>
                                <a href="#sanctions"
                                   className={`item_list lv3 ${activeSection === 'sanctions' ? 'active' : ''}`}>Sanctions</a>
                            </li>
                            <li>
                                <a href="#epic-account-services"
                                   className={`item_list lv1 ${activeSection === 'epic-account-services' ? 'active' : ''}`}>EOS
                                    Epic Account Services</a>
                            </li>
                            <li>
                                <a href="#crossplay"
                                   className={`item_list lv2 ${activeSection === 'crossplay' ? 'active' : ''}`}>Crossplay</a>
                            </li>
                            <li>
                                <a href="#friends"
                                   className={`item_list lv2 ${activeSection === 'friends' ? 'active' : ''}`}>Friends</a>
                            </li>
                            <li>
                                <a href="#presence"
                                   className={`item_list lv2 ${activeSection === 'presence' ? 'active' : ''}`}>Presence</a>
                            </li>
                            <li>
                                <a href="#social-overlay"
                                   className={`item_list lv2 ${activeSection === 'social-overlay' ? 'active' : ''}`}>Social
                                    Overlay</a>
                            </li>
                            <li>
                                <a href="#connect-type-and-player-accounts"
                                   className={`item_list lv1 ${activeSection === 'connect-type-and-player-accounts' ? 'active' : ''}`}>Connection
                                    Type
                                    and Player Accounts</a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default E_OS;