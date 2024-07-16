import React, {useEffect, useRef, useState, WheelEvent } from "react";
import '../../../../styles/Store/MainStore/Discover/Discover_section-1.css'

import {IoAdd} from "react-icons/io5";
import {GrNext, GrPrevious} from "react-icons/gr";
import {CiGift} from "react-icons/ci";

import gameData from "../../../../Data/dataGame.json";

import mega_sale from "../../../../img/Store/mega-sale.png";
import shop_earn_redeem from "../../../../img/Store/shop-earn-redeem.png";
import featured_giveaways from "../../../../img/Store/featured-giveaways.png";
import game_gta from "../../../../img/Store/game-gta.png";
import farcry4 from "../../../../img/Store/farcry4.png";
import deals from "../../../../img/Store/deals.png";
import free_games_news from "../../../../img/Store/Free_game-news.png";
import dyinglight2_deals from "../../../../img/Store/dyinglight2-deals.png";
import {Link} from "react-router-dom";

const Discover_section1 =() =>{
    const [scrollAmountMegaSale, setScrollAmountMegaSale] = useState(0);
    const [scrollAmountNewReleases, setScrollAmountNewReleases] = useState(0);
    const [activeIndexSpan1, setActiveIndexSpan1] = useState(0);
    const [activeIndexSpan2, setActiveIndexSpan2] = useState(0);
    const [activeIndexSpan5, setActiveIndexSpan5] = useState(0);
    const bannerImages = [mega_sale, shop_earn_redeem, featured_giveaways];
    const listDeal = [farcry4, dyinglight2_deals, deals];
    const gameCardWidthPercentage = 24;
    const totalCards = gameData.length;
    const scrollStep = (100 / totalCards) * gameCardWidthPercentage;
    const MegaSaleSpotlight = useRef<HTMLDivElement>(null);
    const TopNewReleases = useRef<HTMLDivElement>(null);
    const sliderRefSpan1 = useRef<HTMLDivElement>(null);
    const sliderRefSpan2 = useRef<HTMLDivElement>(null);
    const sliderRefSpan5 = useRef<HTMLDivElement>(null);

    const handleScrollLeftMegaSale = () => {
        const scrollWidth = MegaSaleSpotlight.current?.scrollWidth || 0;
        const clientWidth = MegaSaleSpotlight.current?.clientWidth || 0;
        const maxScroll = scrollWidth - clientWidth;
        const newScroll = Math.max(scrollAmountMegaSale - scrollStep, 0);
        setScrollAmountMegaSale(newScroll > maxScroll ? maxScroll : newScroll);
        setActiveIndexSpan1(Math.max(activeIndexSpan1 - 1, 0));
        setActiveIndexSpan2(Math.max(activeIndexSpan2 - 1, 0));
        setActiveIndexSpan5(Math.max(activeIndexSpan5 - 1, 0));
    };

    const handleScrollRightMegaSale = () => {
        const scrollWidth = MegaSaleSpotlight.current?.scrollWidth || 0;
        const clientWidth = MegaSaleSpotlight.current?.clientWidth || 0;
        const maxScroll = scrollWidth - clientWidth;
        const newScroll = Math.min(scrollAmountMegaSale + scrollStep, maxScroll);
        setScrollAmountMegaSale(newScroll < 0 ? 0 : newScroll);
        setActiveIndexSpan1(Math.min(activeIndexSpan1 + 1, bannerImages.length - 1));
        setActiveIndexSpan2(Math.min(activeIndexSpan2 + 1, gameData.length - 1));
        setActiveIndexSpan5(Math.min(activeIndexSpan5 + 1, listDeal.length - 1));
    };

    const handleScrollLeftNewReleases = () => {
        const scrollWidth = TopNewReleases.current?.scrollWidth || 0;
        const clientWidth = TopNewReleases.current?.clientWidth || 0;
        const maxScroll = scrollWidth - clientWidth;
        const newScroll = Math.max(scrollAmountNewReleases - scrollStep, 0);
        setScrollAmountNewReleases(newScroll > maxScroll ? maxScroll : newScroll);
    };

    const handleScrollRightNewReleases = () => {
        const scrollWidth = TopNewReleases.current?.scrollWidth || 0;
        const clientWidth = TopNewReleases.current?.clientWidth || 0;
        const maxScroll = scrollWidth - clientWidth;
        const newScroll = Math.min(scrollAmountNewReleases + scrollStep, maxScroll);
        setScrollAmountNewReleases(newScroll < 0 ? 0 : newScroll);
    };

    useEffect(() => {
        if (MegaSaleSpotlight.current?.style) {
            MegaSaleSpotlight.current.style.transform = `translateX(-${scrollAmountMegaSale}px)`;
        }
    }, [scrollAmountMegaSale]);

    useEffect(() => {
        if (TopNewReleases.current?.style) {
            TopNewReleases.current.style.transform = `translateX(-${scrollAmountNewReleases}px)`;
        }
    }, [scrollAmountNewReleases]);

    useEffect(() => {
        const handleScrollSpan1 = () => {
            if (sliderRefSpan1.current) {
                const newIndex = Math.round(sliderRefSpan1.current.scrollLeft / sliderRefSpan1.current.clientWidth);
                setActiveIndexSpan1(newIndex);
            }
        };

        if (sliderRefSpan1.current) {
            sliderRefSpan1.current.addEventListener('scroll', handleScrollSpan1);
        }

        return () => {
            if (sliderRefSpan1.current) {
                sliderRefSpan1.current.removeEventListener('scroll', handleScrollSpan1);
            }
        };
    }, []);

    useEffect(() => {
        const handleScrollSpan2 = () => {
            if (sliderRefSpan2.current) {
                const newIndex = Math.round(sliderRefSpan2.current.scrollLeft / sliderRefSpan2.current.clientWidth);
                setActiveIndexSpan2(newIndex);
            }
        };

        if (sliderRefSpan2.current) {
            sliderRefSpan2.current.addEventListener('scroll', handleScrollSpan2);
        }

        return () => {
            if (sliderRefSpan2.current) {
                sliderRefSpan2.current.removeEventListener('scroll', handleScrollSpan2);
            }
        };
    }, []);

    useEffect(() => {
        const handleScrollSpan5 = () => {
            if (sliderRefSpan5.current) {
                const newIndex = Math.round(sliderRefSpan5.current.scrollLeft / sliderRefSpan5.current.clientWidth);
                setActiveIndexSpan5(newIndex);
            }
        };

        if (sliderRefSpan5.current) {
            sliderRefSpan5.current.addEventListener('scroll', handleScrollSpan5);
        }

        return () => {
            if (sliderRefSpan5.current) {
                sliderRefSpan5.current.removeEventListener('scroll', handleScrollSpan5);
            }
        };
    }, []);

    const handleIndicatorClickSpan1 = (index: number) => {
        if (sliderRefSpan1.current) {
            const scrollToPosition = sliderRefSpan1.current.clientWidth * index;
            sliderRefSpan1.current.scrollTo({ left: scrollToPosition, behavior: 'smooth' });
            setActiveIndexSpan1(index);
        }
    };

    const handleIndicatorClickSpan2 = (index: number) => {
        if (sliderRefSpan2.current) {
            const scrollToPosition = sliderRefSpan2.current.clientWidth * index;
            sliderRefSpan2.current.scrollTo({ left: scrollToPosition, behavior: 'smooth' });
            setActiveIndexSpan2(index);
        }
    };

    const handleIndicatorClickSpan5 = (index: number) => {
        if (sliderRefSpan5.current) {
            const scrollToPosition = sliderRefSpan5.current.clientWidth * index;
            sliderRefSpan5.current.scrollTo({ left: scrollToPosition, behavior: 'smooth' });
            setActiveIndexSpan5(index);
        }
    };

    return(
        <div className="section-1">
            <span className="span_1" >
                <div className="list_banner" ref={sliderRefSpan1}>
                    <div className="banner">
                    <a href="#">
                        <img src={mega_sale} alt="Mega Sale" className="banner-image"/>
                    </a>
                    </div>
                    <div className="banner">
                        <a href="#">
                            <img src={shop_earn_redeem} alt="SHOP. EARN. REDEEM" className="banner-image"/>
                        </a>
                    </div>
                    <div className="banner">
                        <a href="#">
                            <img src={featured_giveaways} alt="FEATURED GIVEAWAYS" className="banner-image"/>
                        </a>
                    </div>
                </div>
                <div className="indicators">
                    {bannerImages.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === activeIndexSpan1 ? 'active' : ''}`}
                            onClick={() => handleIndicatorClickSpan1(index)}
                        />
                    ))}
                </div>
            </span>
            <span className="span_2">
                <div className="main-content">
                    <div className="game-banner_mobile" ref={sliderRefSpan2}>
                        {gameData.map((game, index) => (
                            <div className="game-card" key={index}>
                                <div className="img-game">
                                <button className="add-game-to-wishlist"><IoAdd size={20}/></button>
                                    <img src={game.image} alt={game.title}/>
                                </div>
                                <div className="game-info">
                                    <h2>{game.name}</h2>
                                    <h3>{game.title}</h3>
                                    <div className="prices">
                                        <span className="discount">-{game.discount}%</span>
                                        <span className="original-price">₫{game.originalPrice.toLocaleString()}</span>
                                        <span className="sale-price">₫{game.price.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="indicators">
                        {gameData.map((_, index) => (
                            <div
                                key={index}
                                className={`indicator ${index === activeIndexSpan2 ? 'active' : ''}`}
                                onClick={() => handleIndicatorClickSpan2(index)}
                            />
                        ))}
                    </div>
                    <div className="game-banner">
                        <div className="title-game">
                            <h2>SAVE DURING MEGA SALE</h2>
                            <p>Premium Edition includes the complete GTAV story,
                                Grand Theft Auto Online and all existing gameplay upgrades and content.
                            </p>
                            <div className="price-game">
                                <div className="discount">
                                    -50%
                                </div>
                                <div className="first-price">
                                    ₫455.500
                                </div>
                                <div className="price-now">
                                    ₫227.750
                                </div>
                            </div>
                            <div className="down-add">
                                <div className="down">
                                    <button className="btn-down">
                                        SAVE NOW
                                    </button>
                                </div>
                                <div className="add">
                                    <button className="btn-add">
                                        <IoAdd size={25} className="icon-add"/>
                                        <p>ADD TO WISHLIST</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="game">
                        <img src="https://cdn1.epicgames.com/offer/c4763f236d08423eb47b4c3008779c84/EGS_AlanWake2_RemedyEntertainment_S2_1200x1600-c7c8091ddac0f9669c8e5905bca88aaa?h=480&quality=medium&resize=1&w=360" alt="Alan Wake 2" className="game-img"/>
                        <div className="name-game">
                            Alan Wake 2
                        </div>
                    </div>
                    <div className="game">
                        <img src="https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=480&quality=medium&resize=1&w=360" alt="Red Dead Redemption 2" className="game-img"/>
                        <div className="name-game">
                            Red Dead Redemption 2
                        </div>
                    </div>
                    <div className="game">
                        <img src="https://cdn1.epicgames.com/spt-assets/18822837ee7344a68c0270c2f450f768/battlefield-1-9wn24.jpg?h=480&quality=medium&resize=1&w=360" alt="Battlefield™ 1 Revolution" className="game-img"/>
                        <div className="name-game">
                            Battlefield™ 1 Revolution
                        </div>
                    </div>
                    <div className="game">
                        <img src={game_gta} alt="Alan Wake 2" className="game-img"/>
                        <div className="name-game">
                            Grand Theft Auto V
                        </div>
                    </div>
                </div>
            </span>
            <span className="span_3">
                <div className="top-container">
                    <div className="title-top">
                        <h2>MEGA Sale Spotlight</h2>
                        <GrNext size={10} className="icon-title"/>
                    </div>
                    <div className="next-prev">
                        <GrPrevious className="btn-next-prev btn-left" onClick={() => handleScrollLeftMegaSale()}/>
                        <GrNext className="btn-next-prev btn-right" onClick={() => handleScrollRightMegaSale()}/>
                    </div>
                </div>
                <div className="games-list-container">
                    <div className="games-list" ref={MegaSaleSpotlight}>
                        {gameData.map((game, index) => (
                            <Link to="/paypage">
                                <div className="game-card" key={index}>
                                    <div className="img-game">
                                        <button className="add-game-to-wishlist"><IoAdd size={18}/></button>
                                        <img src={game.image} alt={game.name}/>
                                    </div>
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
                            </Link>
                        ))}
                    </div>
                </div>
            </span>
            <span className="span_4">
                <div className="top-container">
                    <div className="title-top">
                        <h2>Top New Releases</h2>
                        <GrNext size={10} className="icon-title"/>
                    </div>
                    <div className="next-prev">
                        <GrPrevious className="btn-next-prev btn-left" onClick={() => handleScrollLeftNewReleases()}/>
                        <GrNext className="btn-next-prev btn-right" onClick={() => handleScrollRightNewReleases()}/>
                    </div>
                </div>
                <div className="games-list-container">
                    <div className="games-list" ref={TopNewReleases}>
                        {gameData.map((game, index) => (
                            <Link to="/paypage">
                                <div className="game-card" key={index}>
                                    <div className="img-game">
                                        <button className="add-game-to-wishlist"><IoAdd size={18}/></button>
                                        <img src={game.image} alt={game.name}/>
                                    </div>
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
                            </Link>
                        ))}
                    </div>
                </div>
            </span>
            <span className="span_5">
                <div className="list" ref={sliderRefSpan5}>
                    <div className="list_deal">
                        <div className="list_deal-img-game">
                            <img src={farcry4}/>
                            <div className="title">
                                Deals of the Week
                            </div>
                        </div>
                        <div className="list_deal-content">
                            <div className="list_deals-title-game">
                                Kao the Kangaroo
                            </div>
                            <div className="list_deal-price-game">
                                <div className="list_deals-discout">
                                    -70%
                                </div>
                                <div className="list_deal-original-price">
                                    ₫600,000
                                </div>
                                <div className="list_deal-price">
                                    ₫180,000
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list_deal">
                        <div className="list_deal-img-game">
                            <img src={dyinglight2_deals}/>
                            <div className="title">
                                Deals of the Week
                            </div>
                        </div>
                        <div className="list_deal-content">
                            <div className="list_deals-title-game">
                                Dying Light 2nd Anniversary Bundle
                            </div>
                            <div className="list_deal-price-game">
                                <div className="list_deals-discout">
                                    -50%
                                </div>
                                <div className="list_deal-original-price">
                                    ₫922,000
                                </div>
                                <div className="list_deal-price">
                                    ₫461,000
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list_deal">
                        <div className="list_deal-img-game">
                            <img src={deals}/>
                        </div>
                        <div className="list_deal-content">
                            <div className="list_deals-title-game">
                                Check out all the deals for this week.
                            </div>
                            <div className="list_deal-link">
                                <a href="#">Browse</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="indicators">
                {listDeal.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === activeIndexSpan5 ? 'active' : ''}`}
                        onClick={() => handleIndicatorClickSpan5(index)}
                    />
                ))}
            </div>
            </span>
            <span className="span_6">
                <div className="free_game-top">
                    <div className="title-top">
                        <CiGift size={50} className="icon-free-game"/>
                        <p>Free Games</p>
                    </div>
                    <a href="#" className="btn-view-more">
                        View More
                    </a>
                </div>
                <div className="free-game">
                    <div className="game_free-content">
                        <div className="game-img">
                            <img src={farcry4}/>
                            <p>Free Now</p>
                        </div>
                        <div className="game_free-title">
                            <div className="title">Farming Simulator 22</div>
                            <p>Free Now - May 30 at 10:00PM</p>
                        </div>
                    </div>
                    <div className="game_free-content">
                        <div className="game-img">
                            <img src={free_games_news}/>
                            <p className="free_game-new">Mystety Game</p>
                        </div>
                        <div className="game_free-title">
                            <div className="title-game-new">Unlocking in 00:00:00:00</div>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    );
};

export default Discover_section1;