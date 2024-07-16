import React, {useEffect, useState} from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import PopularGenres from './PopularGenres';
import '../../../../styles/Store/MainStore/Browse/Browse.css'
import Aside from "./Aside";
import getData from '../../../../Data/dataGame.json'
import { IoFilterSharp } from "react-icons/io5";
import Filter from "../../../Responsive/Main/Browse_Filter/Filter";

const Browse = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [currentNavLink, setCurrentNavLink] = useState("All");


    const handleNavLinkClick = (navLinkName:string) => {
        setCurrentNavLink(navLinkName);
        setIsDropdownOpen(false)
    };

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const btnShowFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const closeFilter = () => {
        setIsFilterOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            document.body.style.overflow = 'auto';
        };

        if (isFilterOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('resize', handleResize);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('resize', handleResize);
        };
    }, [isFilterOpen]);

    return (
        <div className={`browse ${isFilterOpen ? 'filter-open' : ''}`}>
            <div className="container_browse">
                <PopularGenres />
                <div className="list_game">
                    <div className="all-game">
                        <section>
                            <div className="top-sect">
                                <div className="btn-show">
                                    <label>Show:</label>
                                    <div className="dropdown-select">
                                        <button
                                            onClick={handleDropdownClick}
                                            // className="select-btn"
                                            className={`select-btn ${isDropdownOpen ? 'rotate' : ''}`}
                                        >
                                            <div className="select">
                                                <span className="text">{currentNavLink}</span>
                                                <FaChevronDown className="icon-logo"/>

                                                {/*{isDropdownOpen ? (*/}
                                                {/*    <FaChevronUp className="icon-logo" color="#AAAAAE"/>*/}
                                                {/*) : (*/}
                                                {/*    <FaChevronDown className="icon-logo" color="#AAAAAE"/>*/}
                                                {/*)}*/}
                                            </div>
                                        </button>
                                        <div className={`list-select ${isDropdownOpen ? 'show' : 'hide'}`}>
                                            <ul>
                                                <li>
                                                    <button onClick={() => handleNavLinkClick("All")}>
                                                        All
                                                    </button>
                                                </li>
                                                <li>
                                                    <button onClick={() => handleNavLinkClick("New Release")}>
                                                        New Release
                                                    </button>
                                                </li>
                                                <li>
                                                    <button onClick={() => handleNavLinkClick("Coming Soon")}>
                                                        Coming Soon
                                                    </button>
                                                </li>
                                                <li>
                                                    <button onClick={() => handleNavLinkClick("Alphabetical")}>
                                                        Alphabetical
                                                    </button>
                                                </li>
                                                <li>
                                                    <button onClick={() => handleNavLinkClick("Price: High to Low")}>
                                                        Price: High to Low
                                                    </button>
                                                </li>
                                                <li>
                                                    <button onClick={() => handleNavLinkClick("Price: Low to High")}>
                                                        Price: Low to High
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="filters">
                                    <button className="btn-filter" onClick={btnShowFilter}>
                                        <label>Filter</label>
                                        <IoFilterSharp className="icon-filters"/>
                                    </button>
                                </div>
                            </div>
                            <div className="cont-sect">
                                <div className="games-grid">
                                    {getData.map((game, index) => (
                                        <div className="game-card" key={index}>
                                            <img src={game.image} alt={game.name} className="game-image"/>
                                            <div className="game-info">
                                                <h3>{game.name}</h3>
                                                <div className="prices">
                                                    <span className="discount">-{game.discount}%</span>
                                                    <div className="discount-sale-container">
                                                        <span
                                                            className="original-price">₫{game.originalPrice.toLocaleString()}</span>
                                                        <span
                                                            className="sale-price">₫{game.price.toLocaleString()}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                    <Aside />
                    {isFilterOpen && <Filter closeFilter={closeFilter}/>}
                </div>
            </div>
        </div>
    );
};

export default Browse;
