import React, {useEffect, useRef, useState} from "react";
import '../../../../styles/Store/MainStore/Discover/Discover_section-2.css'

import {IoAdd} from "react-icons/io5";

import gameData from "../../../../Data/dataGame.json";

import farcry4 from "../../../../img/Store/farcry4.png";
import sales from "../../../../img/Store/sales.png";
import free_game from "../../../../img/Store/free-games.png";
import app from "../../../../img/Store/apps.png";
import {Link} from "react-router-dom";
import dyinglight2_deals from "../../../../img/Store/dyinglight2-deals.png";
import deadbydaylight from "../../../../img/Store/deadbydaylight.png";
import TopSeller from "./TopSeller";
import MostPlayed from "./MostPlayed";
import TopUpcommingWishlisted from "./TopUpconmingWishlisted";

const Discover_section2 =() =>{
    const [visibleGames] = useState(5);
    const [trendingGames] = useState(4);

    const [activeIndexSpan9, setActiveIndexSpan9] = useState(0);
    const [activeIndexSpan10, setActiveIndexSpan10] = useState(0);
    const [activeIndexSpan12, setActiveIndexSpan12] = useState(0);
    const listspan_9 = [TopSeller, MostPlayed, TopUpcommingWishlisted];
    const listspan_10 = [farcry4, deadbydaylight, dyinglight2_deals];
    const listspan_12 = [sales, free_game, app];
    const sliderRefSpan9 = useRef<HTMLDivElement>(null);
    const sliderRefSpan10 = useRef<HTMLDivElement>(null);
    const sliderRefSpan12 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScrollSpan9 = () => {
            if (sliderRefSpan9.current) {
                const newIndex = Math.round(sliderRefSpan9.current.scrollLeft / sliderRefSpan9.current.clientWidth);
                setActiveIndexSpan9(newIndex);
            }
        };

        if (sliderRefSpan9.current) {
            sliderRefSpan9.current.addEventListener('scroll', handleScrollSpan9);
        }

        return () => {
            if (sliderRefSpan9.current) {
                sliderRefSpan9.current.removeEventListener('scroll', handleScrollSpan9);
            }
        };
    }, []);

    useEffect(() => {
        const handleScrollSpan12 = () => {
            if (sliderRefSpan12.current) {
                const newIndex = Math.round(sliderRefSpan12.current.scrollLeft / sliderRefSpan12.current.clientWidth);
                setActiveIndexSpan12(newIndex);
            }
        };

        if (sliderRefSpan12.current) {
            sliderRefSpan12.current.addEventListener('scroll', handleScrollSpan12);
        }

        return () => {
            if (sliderRefSpan12.current) {
                sliderRefSpan12.current.removeEventListener('scroll', handleScrollSpan12);
            }
        };
    }, []);

    useEffect(() => {
        const handleScrollSpan10 = () => {
            if (sliderRefSpan10.current) {
                const newIndex = Math.round(sliderRefSpan10.current.scrollLeft / sliderRefSpan10.current.clientWidth);
                setActiveIndexSpan10(newIndex);
            }
        };

        if (sliderRefSpan10.current) {
            sliderRefSpan10.current.addEventListener('scroll', handleScrollSpan10);
        }

        return () => {
            if (sliderRefSpan10.current) {
                sliderRefSpan10.current.removeEventListener('scroll', handleScrollSpan10);
            }
        };
    }, []);

    const handleIndicatorClickSpan9 = (index: number) => {
        if (sliderRefSpan9.current) {
            const scrollToPosition = sliderRefSpan9.current.clientWidth * index;
            sliderRefSpan9.current.scrollTo({ left: scrollToPosition, behavior: 'smooth' });
            setActiveIndexSpan9(index);
        }
    };

    const handleIndicatorClickSpan12 = (index: number) => {
        if (sliderRefSpan12.current) {
            const scrollToPosition = sliderRefSpan12.current.clientWidth * index;
            sliderRefSpan12.current.scrollTo({ left: scrollToPosition, behavior: 'smooth' });
            setActiveIndexSpan12(index);
        }
    };

    const handleIndicatorClickSpan10 = (index: number) => {
        if (sliderRefSpan10.current) {
            const scrollToPosition = sliderRefSpan10.current.clientWidth * index;
            sliderRefSpan10.current.scrollTo({ left: scrollToPosition, behavior: 'smooth' });
            setActiveIndexSpan10(index);
        }
    };

    return(
        <div className="section-2">
            <span className="span_7">
                <h2>Fornite Experiences</h2>
                <div className="FE_container">
                    <div className="FE-content">
                        <img src={farcry4} className="For_Exp-img"/>
                        <div className="For_Exp-content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="FE-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                    <div className="FE-content">
                        <img src={farcry4} className="For_Exp-img"/>
                        <div className="For_Exp-content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="FE-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                    <div className="FE-content">
                        <img src={farcry4} className="For_Exp-img"/>
                        <div className="For_Exp-content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="FE-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                </div>
            </span>
            <span className="span_8">
                <div className="container">
                    <div className="GN-cont">
                        <img src={farcry4} className="img"/>
                        <div className="Game_News-content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="GN-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                    <div className="GN-cont">
                        <img src={farcry4} className="img"/>
                        <div className="Game_News-content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="GN-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                </div>
            </span>
            <span className="span_9">
                <div className="list" ref={sliderRefSpan9}>
                    <div className="top-list">
                        <div className="top_cont">
                            <h2>Top Sellers</h2>
                            <Link to="/TopSeller"><span>View More</span></Link>
                        </div>
                        <div className="top-lgame">
                            {gameData.slice(0, visibleGames).map((game, index) => (
                                <div className="game-card" key={index}>
                                    <button className="span_9-add-game-to-wishlist"><IoAdd size={15}/></button>
                                    <img src={game.image} alt={game.name} className="img-game"/>
                                    <div className="game-info">
                                        <h3>{game.name}</h3>
                                        <div className="prices">
                                            <span className="discount">-{game.discount}%</span>
                                            <div className="discount-sale-container">
                                                <span
                                                    className="original-price">₫{game.originalPrice.toLocaleString()}</span>
                                                <span className="sale-price">₫{game.price.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="top-list">
                        <div className="top_cont">
                            <h2>Most Played</h2>
                            <Link to="/MostPlayed">View More</Link>
                        </div>
                        <div className="top-lgame">
                            {gameData.slice(0, visibleGames).map((game, index) => (
                                <div className="game-card" key={index}>
                                    <button className="span_9-add-game-to-wishlist"><IoAdd size={15}/></button>
                                    <img src={game.image} alt={game.name} className="img-game"/>
                                    <div className="game-info">
                                        <h3>{game.name}</h3>
                                        <div className="prices">
                                            <span className="discount">-{game.discount}%</span>
                                            <div className="discount-sale-container">
                                                <span className="original-price">₫{game.originalPrice.toLocaleString()}</span>
                                                <span className="sale-price">₫{game.price.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="top-list">
                        <div className="top_cont">
                            <h2>Top Upcomming Wishlisted</h2>
                            <Link to="/TopUpcommingWishlisted">View More</Link>
                        </div>
                        <div className="top-lgame">
                            {gameData.slice(0, visibleGames).map((game, index) => (
                                <div className="game-card" key={index}>
                                    <button className="span_9-add-game-to-wishlist"><IoAdd size={15}/></button>
                                    <img src={game.image} alt={game.name} className="img-game"/>
                                    <div className="game-info">
                                        <h3>{game.name}</h3>
                                        <div className="prices">
                                            <span className="discount">-{game.discount}%</span>
                                            <div className="discount-sale-container">
                                                <span
                                                    className="original-price">₫{game.originalPrice.toLocaleString()}</span>
                                                <span className="sale-price">₫{game.price.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="indicators">
                    {listspan_9.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === activeIndexSpan9 ? 'active' : ''}`}
                            onClick={() => handleIndicatorClickSpan9(index)}
                        />
                    ))}
                </div>
            </span>
            <span className="span_10">
                <div className="span_10-container" ref={sliderRefSpan10}>
                    <div className="span_10-content">
                        <button className="span_10-add-game-to-wishlist"><IoAdd size={18}/></button>
                        <img src={farcry4}/>
                        <div className="content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="span_10-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                    <div className="span_10-content">
                        <img src={deadbydaylight}/>
                        <div className="content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="span_10-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                    <div className="span_10-content">
                        <button className="span_10-add-game-to-wishlist"><IoAdd size={18}/></button>
                        <img src={dyinglight2_deals}/>
                        <div className="content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <p className="price">₫249,000</p>
                        </div>
                    </div>
                </div>
                <div className="indicators">
                    {listspan_10.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === activeIndexSpan10 ? 'active' : ''}`}
                            onClick={() => handleIndicatorClickSpan10(index)}
                        />
                    ))}
                </div>
            </span>
            <span className="span_11">
                <div className="span_11-container">
                    <div className="span_11-title-top">
                        <h2>Trending</h2>
                        <a href="#">View More</a>
                    </div>
                </div>
                <div className="span_11-games-list">
                    {gameData.map((game, index) => (
                        <div className="game-card" key={index}>
                            <div className="img-game">
                                <button className="span_11-add-game-to-wishlist"><IoAdd size={20}/>
                                </button>
                                <img src={game.image} alt={game.name}/>
                            </div>
                            <div className="game-info">
                                <h3>{game.name}</h3>
                                <div className="prices">
                                    <span className="discount">-{game.discount}%</span>
                                    <div className="discount-sale-container">
                                        <span
                                            className="original-price">₫{game.originalPrice.toLocaleString()}</span>
                                        <span className="sale-price">₫{game.price.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="span_11-games-list-mobile">
                    {gameData.slice(0, trendingGames).map((game, index) => (
                        <div className="game-card" key={index}>
                            <div className="img-game">
                                <button className="span_11-add-game-to-wishlist"><IoAdd size={20}/>
                                </button>
                                <img src={game.image} alt={game.name}/>
                            </div>
                            <div className="game-info">
                                <h3>{game.name}</h3>
                                <div className="prices">
                                    <span className="discount">-{game.discount}%</span>
                                    <div className="discount-sale-container">
                                        <span
                                            className="original-price">₫{game.originalPrice.toLocaleString()}</span>
                                        <span className="sale-price">₫{game.price.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </span>
            <span className="span_12">
                <div className="span_12-container" ref={sliderRefSpan12}>
                    <div className="span_12-content">
                        <img src={sales}/>
                        <div className="content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="span_12-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                    <div className="span_12-content">
                        <img src={free_game}/>
                        <div className="content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="span_12-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                    <div className="span_12-content">
                        <img src={app}/>
                        <div className="content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="span_12-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                </div>
                <div className="indicators">
                    {listspan_12.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === activeIndexSpan12 ? 'active' : ''}`}
                            onClick={() => handleIndicatorClickSpan12(index)}
                        />
                    ))}
                </div>
            </span>
        </div>
    );
};

export default Discover_section2;