import React, { useEffect, useState } from "react";
import {Routes, Route, useLocation, NavLink, Link} from 'react-router-dom';
import { StoreRoute } from "../Routes/StoreRoute";
import ClipLoader from "react-spinners/ClipLoader";

import '../styles/Main.css';
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import {SupportRoute} from "../Routes/SupportRoute";
import {IoMdAdd, IoMdRemove} from "react-icons/io";
import {FaArrowUpRightFromSquare} from "react-icons/fa6";
import Main_Docs from "./Distribute/Documentation/Main-Docs/Main_Docs";
import Paypage from "./Store/MainStore/PayPage/Paypage";

const Main = () => {
    const { pathname } = useLocation();
    const [currentNavLink, setCurrentNavLink] = useState("Discover");
    const [searchVisible, setSearchVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        handleStart();
        const timer = setTimeout(() => handleComplete(), 500); // Giả lập thời gian chờ

        return () => clearTimeout(timer);
    }, [pathname]);

    // Reset currentNavLink khi chuyển về từ các trang khác vào trang "store"
    useEffect(() => {
        if (pathname.startsWith("/")) {
            setCurrentNavLink("Discover");
        }
    }, [pathname]);

    const toggleMenu = (e: React.MouseEvent) => {
        e.stopPropagation();
        setMenuVisible(!menuVisible);
        setSearchVisible(false);
        setOverlayVisible(!overlayVisible);
    };

    const toggleSearch = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSearchVisible(!searchVisible);
        setOverlayVisible(!overlayVisible);
        if (menuVisible && overlayVisible) {
            setMenuVisible(false);
            setOverlayVisible(true);
        }
    };

    const handleNavLinkClick = (navLinkName: string) => {
        setCurrentNavLink(navLinkName);
        setMenuVisible(false);
        setSearchVisible(false);
        setOverlayVisible(false);
    };

    const closeAll = () => {
        setMenuVisible(false);
        setSearchVisible(false);
        setOverlayVisible(false);
    };

    // trang distribution

    const [isQuestion1, setIsQuestion1] = useState(false);
    const [isQuestion2, setIsQuestion2] = useState(false);
    const [isQuestion3, setIsQuestion3] = useState(false);
    const [isQuestion4, setIsQuestion4] = useState(false);
    const [isQuestion5, setIsQuestion5] = useState(false);
    const [isQuestion6, setIsQuestion6] = useState(false);
    const [isQuestion7, setIsQuestion7] = useState(false);
    const [isQuestion8, setIsQuestion8] = useState(false);
    const [isQuestion9, setIsQuestion9] = useState(false);
    const [isQuestion10, setIsQuestion10] = useState(false);

    const toggleQuestion1 = () => {
        setIsQuestion1(!isQuestion1);
    };
    const toggleQuestion2 = () => {
        setIsQuestion2(!isQuestion2);
    };
    const toggleQuestion3 = () => {
        setIsQuestion3(!isQuestion3);
    };
    const toggleQuestion4 = () => {
        setIsQuestion4(!isQuestion4);
    };
    const toggleQuestion5 = () => {
        setIsQuestion5(!isQuestion5);
    };
    const toggleQuestion6 = () => {
        setIsQuestion6(!isQuestion6);
    };
    const toggleQuestion7 = () => {
        setIsQuestion7(!isQuestion7);
    };
    const toggleQuestion8 = () => {
        setIsQuestion8(!isQuestion8);
    };
    const toggleQuestion9 = () => {
        setIsQuestion9(!isQuestion9);
    };
    const toggleQuestion10 = () => {
        setIsQuestion10(!isQuestion10);
    };


    return (
        <main className={`main ${overlayVisible ? 'overlay' : ''}`} onClick={closeAll}>
            {loading ? (
                <div className="loading-overlay">
                    <ClipLoader color={"#ffffff"} loading={loading} size={150} />
                </div>
            ) : (
                <>

                    {/*main trang store*/}
                    {!pathname.startsWith("/support") && !pathname.startsWith("/docs") && (
                        <>
                            <div className="top-main">
                                <div className="top-main-content">
                                    <CiSearch className="btn-icon-search" onClick={toggleSearch} />
                                    <div className={`search ${searchVisible ? "visible" : ""}`} onClick={(e) => e.stopPropagation()}>
                                        <input type="text" placeholder="Search store" className="search-bar" />
                                        <CiSearch className="icon-search" />
                                        <FaTimes className="btn-close-search" onClick={toggleSearch} />
                                    </div>
                                    <div className="nav-main" onClick={(e) => e.stopPropagation()}>
                                        <button className="show-nav-main" onClick={toggleMenu}>
                                            <span>{currentNavLink}</span>
                                            <FaAngleDown />
                                        </button>
                                        <ul className={`menu-nav ${menuVisible ? "visible" : ""}`}>
                                            <li>
                                                <NavLink
                                                    to="/"
                                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                                    onClick={() => handleNavLinkClick("Discover")}
                                                >
                                                    Discover
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/Browse"
                                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                                    onClick={() => handleNavLinkClick("Browse")}
                                                >
                                                    Browse
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/News"
                                                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                                    onClick={() => handleNavLinkClick("News")}
                                                >
                                                    News
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Routes>
                                {StoreRoute.map((item, index) => (
                                    <Route key={index} path={item.path} element={item.element} />
                                ))}
                            </Routes>
                        </>
                    )}


                    {/*main trang support*/}
                    {pathname.startsWith("/support") && (
                        <Routes>
                            {SupportRoute.map((item, index) => (
                                <Route key={index} path={item.path} element={item.element} />
                            ))}
                        </Routes>
                    )}

                    {/*main trang distribution*/}
                    {pathname.startsWith("/distribution") && (
                        <div className="distribute-page">
                            <main className="distribute">
                                <span className="span-1">
                                    <section>
                                        <div className="container_section">
                                            <div className="left-container-span-1">
                                                <img
                                                    src="https://cdn2.unrealengine.com/epic-games-store-self-service-publishing-tools-4554ceb470ed.webp"
                                                    className="img-span-1"/>
                                            </div>
                                            <div className="right-container-span-1">
                                                <div className="logo-store">
                                                    <img
                                                        src="https://cdn2.unrealengine.com/egs-logotype-2023-vertical-white-91864692d16e.svg?h=960&quality=medium&resize=1&w=1280"
                                                        className="logo"/>
                                                </div>
                                                <h1>Now open to all developers and publishers</h1>
                                                <div className="btn-developerportal">
                                                    <Link to="/">
                                                        <span className="text-btn">sign up today</span>
                                                    </Link>
                                                </div>
                                                <div className="subtitle">
                                                    <span className="text-subtitle">
                                                        Start distributing PC games on the Epic Games Store with our new self-service publishing tools.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </span>
                                <span className="span-2">
                                    <div className="container">
                                        <div className="item-container">
                                            <div className="content">
                                                <div className="img-card">
                                                    <img src="https://cdn2.unrealengine.com/direct-game-distribution-06596600236d.svg"/>
                                                </div>
                                                <div className="title">
                                                    <h2>Reach a Global Audience</h2>
                                                    <div className="subtitle">
                                                        <h3>Direct distribution to over 270 million Epic users across 187 countries with 16 languages supported.</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-container">
                                            <div className="content">
                                                <div className="img-card">
                                                    <img src="https://cdn2.unrealengine.com/video-game-revenue-c74196d72f94.svg"/>
                                                </div>
                                                <div className="title">
                                                    <h2>88%/12% Revenue Split</h2>
                                                    <div className="subtitle">
                                                        <h3>Keep 88% of the revenue and monitor product performance with integrated analytics dashboards.</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-container">
                                            <div className="content">
                                                <div className="img-card">
                                                    <img src="https://cdn2.unrealengine.com/player-engagement-69f0a2ba31cd.svg"/>
                                                </div>
                                                <div className="title">
                                                    <h2>Drive Player Engagement</h2>
                                                    <div className="subtitle">
                                                        <h3>Tap into store features like wishlists, achievements, store-wide promotions and more!</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span className="span-3">
                                    <div className="container">
                                        <div className="item-container">
                                            <div className="content">
                                                <div className="img-card">
                                                    <img
                                                        src="https://cdn2.unrealengine.com/epic-games-payment-methods-18cc6135990f.svg"/>
                                                </div>
                                                <div className="title">
                                                    <h2>Worldwide E-Commerce</h2>
                                                    <div className="subtitle">
                                                        <h3>Epic's payment service supports 100+ payment methods with 43 regional currencies and more on the way. </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-container">
                                            <div className="content">
                                                <div className="img-card">
                                                    <img src="https://cdn2.unrealengine.com/epic-games-wallet-2af74bb47a7a.svg"/>
                                                </div>
                                                <div className="title">
                                                    <h2>Epic Wallet</h2>
                                                    <div className="subtitle">
                                                        <h3>Users can load up their Wallet with funds to spend on products and services in the store, now available in more than 180 countries.</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-container">
                                            <div className="content">
                                                <div className="img-card">
                                                    <img
                                                        src="https://cdn2.unrealengine.com/game-ratings-localization-and-affliate-network-benefits-a931a6cb27b8.svg"/>
                                                </div>
                                                <div className="title">
                                                    <h2>Additional Benefits</h2>
                                                    <div className="subtitle">
                                                        <h3>Easy IARC ratings in Epic Developer Portal, request no-cost localization for store pages and activate our Support-A-Creator affiliate network.</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span className="span-4">
                                    <div className="container">
                                        <div className="left-container-span-4">
                                            <div className="content">
                                                <div className="img-span-4">
                                                    <img src="https://cdn2.unrealengine.com/epic-first-run-program-5e95ea5f8b1c.svg"/>
                                                </div>
                                                <div className="title">
                                                    <span className="text">
                                                        Boost your revenue share from 88% to 100% with Epic First Run
                                                    </span>
                                                    <a href="">
                                                        <span>
                                                            Learn more
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right-container-span-4">
                                            <div className="content">
                                                <div className="img-span-4">
                                                    <img
                                                        src="https://cdn2.unrealengine.com/now-on-epic-publish-page-image-8a1e648c45e8.svg"/>
                                                </div>
                                                <div className="title">
                                                    <span className="text">
                                                        Bring your existing catalog of games and capture 100% of the revenue in the first six months with Now On Epic
                                                    </span>
                                                    <a href="">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span className="span-5">
                                    <div className="container">
                                        <div className="bg-content">
                                            <div className="content">
                                                <div className="left-content">
                                                    <img src="https://cdn2.unrealengine.com/epic-developer-community-d6fe0dc96d78.svg"/>
                                                </div>
                                                <div className="right-content">
                                                    <div className="title">
                                                        <span className="subtitle">
                                                            Join the discussion or create topics for community support around distribution
                                                        </span>
                                                        <a href="#">Go to the community</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span className="span-6">
                                    <div className="container">
                                        <div className="bg-content">
                                            <div className="content">
                                                <div className="left-content">
                                                    <img src="https://cdn2.unrealengine.com/unreal-engine-2023-e98a5487e128.svg"/>
                                                </div>
                                                <div className="right-content">
                                                    <div className="title">
                                                        <span className="subtitle">
                                                            The world's most open and advanced real-time 3D creation tool
                                                        </span>
                                                        <a href="#">Learn more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-content">
                                            <div className="content">
                                                <div className="left-content">
                                                    <img
                                                        src="https://cdn2.unrealengine.com/epic-online-services-2023-fa8f84319372.svg"/>
                                                </div>
                                                <div className="right-content">
                                                    <div className="title">
                                                        <span className="subtitle">
                                                            A modular set of online services to connect your community across all platforms
                                                        </span>
                                                        <a href="#">Explore our services</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-content">
                                            <div className="content">
                                                <div className="left-content">
                                                    <img src="https://cdn2.unrealengine.com/kws-logo-test-684x513-ba7cef936d5b.png"/>
                                                </div>
                                                <div className="right-content">
                                                    <div className="title">
                                                        <span className="subtitle">
                                                            The leading parent verification and consent management toolset in the world.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span className="span-7">
                                    <div className="container">
                                        <section className="title"><h2>Frequently Asked Questions</h2></section>
                                        <ul className="list-questions">
                                            <li className="item-question">
                                                <div className="question">
                                                    <button className="btn-show-question" onClick={toggleQuestion1}>
                                                        <div className="text-question">
                                                            <h3>Why should I distribute my game on the Epic Games Store?</h3>
                                                        </div>
                                                        <span className="icon-btn-add">
                                                            {isQuestion1 ? <IoMdRemove className="icon"/> : <IoMdAdd className="icon"/>}
                                                        </span>
                                                    </button>
                                                    {isQuestion1 && (
                                                        <div className="asked-question">
                                                            <div className="asked">
                                                                The Epic Games Store has a global audience of over 230M+ users, a
                                                                88%/12% revenue split and additional no-cost services to help bring your
                                                                game to market.
                                                                For games built on Unreal Engine, engine royalty fees are waived for
                                                                in-store purchases using Epic's payment processor.
                                                                In-app purchases and products using their own payment processor are not
                                                                exempt from engine royalties.
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                            <li className="item-question">
                                                <div className="question">
                                                    <button className="btn-show-question" onClick={toggleQuestion2}>
                                                        <div className="text-question">
                                                            <h3>My game is built with Unity or another engine, can I bring it to the Epic Games store?</h3>
                                                        </div>
                                                        <span className="icon-btn-add">
                                                            {isQuestion2 ? <IoMdRemove className="icon"/> : <IoMdAdd className="icon"/>}
                                                        </span>
                                                    </button>
                                                    {isQuestion2 && (
                                                        <div className="asked-question">
                                                            <div className="asked">
                                                                Yes, the Epic Games store is engine-agnostic.
                                                                Epic is aiming to bring great games to players, regardless of your
                                                                engine choice.
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                            <li className="item-question">
                                                <div className="question">
                                                    <button className="btn-show-question" onClick={toggleQuestion3}>
                                                        <div className="text-question">
                                                            <h3>What are the Epic Games Store self-service publishing tools?</h3>
                                                        </div>
                                                        <span className="icon-btn-add">
                                                            {isQuestion3 ? <IoMdRemove className="icon"/> : <IoMdAdd className="icon"/>}
                                                        </span>
                                                    </button>
                                                    {isQuestion3 && (
                                                        <div className="asked-question">
                                                            <div className="asked">
                                                                They are a suite of tools within the Epic Developer Portal
                                                                used by developers to set up their game pages, pricing, offers, builds,
                                                                and updates on the Epic Games Store.
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                            <li className="item-question">
                                                <div className="question">
                                                    <button className="btn-show-question" onClick={toggleQuestion4}>
                                                        <div className="text-question">
                                                            <h3>What is the Epic Developer Portal?</h3>
                                                        </div>
                                                        <span className="icon-btn-add">
                                                            {isQuestion4 ? <IoMdRemove className="icon"/> : <IoMdAdd className="icon"/>}
                                                        </span>
                                                    </button>
                                                    {isQuestion4 && (
                                                        <div className="asked-question">
                                                            <div className="asked">
                                                                The Developer Portal is the central hub to distribute games on the Epic
                                                                Games Store and enhance games with Epic Online Services.
                                                                The Developer Portal is used to update product information, configure
                                                                back-end services, support players, and view game financial data, usage
                                                                reports,
                                                                and other statistical data. Learn more by reading the
                                                                <a href="#" className="link-developerportal">
                                                                    Developer Portal documentation
                                                                </a>
                                                                <FaArrowUpRightFromSquare className="icon-show-question"/>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                            <li className="item-question">
                                                <div className="question">
                                                    <button className="btn-show-question" onClick={toggleQuestion5}>
                                                        <div className="text-question">
                                                            <h3>What other developer tools does Epic offer?</h3>
                                                        </div>
                                                        <span className="icon-btn-add">
                                                            {isQuestion5 ? <IoMdRemove className="icon"/> : <IoMdAdd className="icon"/>}
                                                        </span>
                                                    </button>
                                                    {isQuestion5 && (
                                                        <div className="asked-question">
                                                            <div className="asked">
                                                                "Epic offers an ecosystem of tools, services, and communities to help
                                                                anyone create, power, and distribute software.
                                                                With a single Epic Games account, anyone can create with Unreal Engine,
                                                                enhance with Epic Online Services and Kids Web Services, and distribute
                                                                PC games on the Epic Games Store.
                                                                Even more tools like Twinmotion, MetaHuman, Quixel, and Capturing
                                                                Reality bring your project to the next level.
                                                                And the Epic Developer Community is here to connect creators alike to
                                                                share and learn. Learn more about
                                                                <a href="#">Epic's ecosystem of tools, services, and communities</a>
                                                                <FaArrowUpRightFromSquare className="icon-show-question"/>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                            <li className="item-question">
                                                <div className="question">
                                                    <button className="btn-show-question" onClick={toggleQuestion6}>
                                                        <div className="text-question">
                                                            <h3>How do I distribute games on the Epic Games Store?</h3>
                                                        </div>
                                                        <span className="icon-btn-add">
                                                            {isQuestion6 ? <IoMdRemove className="icon"/> : <IoMdAdd className="icon"/>}
                                                        </span>
                                                    </button>
                                                    {isQuestion6 && (
                                                        <div className="asked-question">
                                                            <div className="asked">
                                                                Getting started is easy, just log in or create an account at
                                                                <a href="#">dev.epicgames.com/portal</a>
                                                                <FaArrowUpRightFromSquare className="icon-show-question"/>
                                                                . From there the sign up wizard will help guide registration of your
                                                                company and the build of your first game.
                                                                Be sure to have business information (contact info and tax/payout
                                                                information) on hand.
                                                                Important to note there is a recoupable $100 USD submission fee per game
                                                                which will need to paid before releasing on the store. Read our
                                                                <a href="#">announcement blog</a>
                                                                <FaArrowUpRightFromSquare className="icon-show-question"/>
                                                                for an overview of the self-publishing process.
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                            <li className="item-question">
                                                <div className="question">
                                                    <button className="btn-show-question" onClick={toggleQuestion7}>
                                                        <div className="text-question">
                                                            <h3>Are there any requirements for a game to launch on the Store?</h3>
                                                        </div>
                                                        <span className="icon-btn-add">
                                                            {isQuestion7 ? <IoMdRemove className="icon"/> : <IoMdAdd className="icon"/>}
                                                        </span>
                                                    </button>
                                                    {isQuestion7 && (
                                                        <div className="asked-question">
                                                            <div className="asked">
                                                                All products published on the Epic Games Store adhere to our content
                                                                guidelines.
                                                                In addition, they must launch, run, and be consistent with the product
                                                                description presented to users via their Product Details Page (PDP).
                                                            </div>
                                                            <div className="asked">
                                                                Multiplayer games must support crossplay across all PC stores. This is
                                                                to make sure players who purchase
                                                                a multiplayer game on any store can easily connect with other players,
                                                                regardless of where the game was purchased.
                                                                To achieve this, you can implement crossplay yourself, use a third-party
                                                                SDK, or use Epic Online Services for free.
                                                            </div>
                                                            <div className="asked">
                                                                Achievements - All games onboarded to the Epic Games Store publishing
                                                                tools after March 9, 2023
                                                                are required to enable Epic Games Store achievements if the game has
                                                                achievements on other PC stores.
                                                                This helps standardize the player experience regardless of where the
                                                                game was purchased.
                                                            </div>
                                                            <div className="asked">
                                                                Visit the
                                                                <a href="#">Epic Games Store Requirements documentation</a>
                                                                <FaArrowUpRightFromSquare className="icon-show-question"/>
                                                                for more information.
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                            <li className="item-question">
                                                <div className="question">
                                                    <button className="btn-show-question" onClick={toggleQuestion8}>
                                                        <div className="text-question">
                                                            <h3>Any prohibited content that the Store may decline?</h3>
                                                        </div>
                                                        <span className="icon-btn-add">
                                                            {isQuestion8 ? <IoMdRemove className="icon"/> : <IoMdAdd className="icon"/>}
                                                        </span>
                                                    </button>
                                                    {isQuestion8 && (
                                                        <div className="asked-question">
                                                            <div className="asked">
                                                                Products that contain prohibited content (hateful or discriminatory
                                                                content, pornography, and illegal content)
                                                                are not eligible for distribution on the Epic Games Store. Content that
                                                                infringes on intellectual property
                                                                you do not own or have rights to use scams, frauds, or deceptive
                                                                practices, such as fake games
                                                                or malware are also prohibited. Published products receiving complaints
                                                                about content that does not meet the
                                                                criteria may be subject to re-review and removal from the Epic Games
                                                                Store. Visit the
                                                                <a href="#">Epic Games Store Ratings & Content Guidelines
                                                                    documentation</a>
                                                                <FaArrowUpRightFromSquare className="icon-show-question"/>
                                                                for more information.
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                            <li className="item-question">
                                                <div className="question">
                                                    <button className="btn-show-question" onClick={toggleQuestion9}>
                                                        <div className="text-question">
                                                            <h3>Does the Epic Games store have regional pricing?</h3>
                                                        </div>
                                                        <span className="icon-btn-add">
                                                            {isQuestion9 ? <IoMdRemove className="icon"/> : <IoMdAdd className="icon"/>}
                                                        </span>
                                                    </button>
                                                    {isQuestion9 && (
                                                        <div className="asked-question">
                                                            <div className="asked">
                                                                Yes, we do support regional pricing. We also have a set of suggested
                                                                regional discounts based on local norms.
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                            <li className="item-question">
                                                <div className="question">
                                                    <button className="btn-show-question" onClick={toggleQuestion10}>
                                                        <div className="text-question">
                                                            <h3>How do refunds work on the Epic Games store?</h3>
                                                        </div>
                                                        <span className="icon-btn-add">
                                                            {isQuestion10 ? <IoMdRemove className="icon"/> :
                                                                <IoMdAdd className="icon"/>}
                                                        </span>
                                                    </button>
                                                    {isQuestion10 && (
                                                        <div className="asked-question">
                                                            <div className="asked">
                                                                Games and products purchased through the Epic Games Store are generally
                                                                eligible for a refund.
                                                                These products are marked “refundable”. If a game or product is marked
                                                                as "non-refundable",
                                                                then it is not eligible for a refund. Products that include virtual
                                                                currency
                                                                or other consumables are marked “non-refundable” and are not eligible
                                                                for refund.
                                                                Also, most in-app purchases are non-refundable. Epic cannot provide
                                                                refunds for purchases
                                                                made outside of the Epic Games Store. Visit the
                                                                <a href="#">Epic Games Store Refund Policy</a>
                                                                <FaArrowUpRightFromSquare className="icon-show-question"/>
                                                                for more information.
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </span>
                            </main>
                        </div>
                    )}

                    {pathname.startsWith("/paypage") && (
                        <Paypage/>
                    )}
                </>
            )}
        </main>
    );
};

export default Main;
