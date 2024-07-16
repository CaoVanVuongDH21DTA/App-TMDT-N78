import React, {useState} from "react";
import '../../../../styles/Store/MainStore/Browse/Aside.css'
import {CiSearch} from "react-icons/ci";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";

const Aside = () => {

    const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
    const [isGenreDropdownOpen, setIsGenreDropdownOpen] = useState(false);
    const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
    const [isTypesDropdownOpen, setIsTypesDropdownOpen] = useState(false);
    const [isPlatFormDropdownOpen, setIsPlatFormDropdownOpen] = useState(false);

    const handleEventDropdownClick = () => {
        setIsEventDropdownOpen(!isEventDropdownOpen);
    };

    const handleGenreDropdownClick = () => {
        setIsGenreDropdownOpen(!isGenreDropdownOpen);
    };

    const handleFeaturesDropdownClick = () => {
        setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen);
    };

    const handleTypesDropdownClick = () => {
        setIsTypesDropdownOpen(!isTypesDropdownOpen);
    };

    const handlePlatFormDropdownClick = () => {
        setIsPlatFormDropdownOpen(!isPlatFormDropdownOpen);
    };

    return (
        <aside className="sibar_browse">
            <div className="top-contai">
                <div className="filters">
                    <p className="text-filt">Filters</p>
                    <div className="input-filt">
                        <input type="text" placeholder="Keywords" className="search-filt"/>
                        <CiSearch className="icon-search"/>
                    </div>
                </div>
            </div>

            <ul  className="list-filter">
                {/*Events*/}
                <li className="item-filter">
                    <div className="btn">
                        <button
                            onClick={handleEventDropdownClick}
                            className={`btn-show-list ${isEventDropdownOpen ? 'rotate' : ''}`}
                        >
                            <p>Events</p>
                            <FaChevronDown className="icon-logo"/>
                        </button>
                        <ul className={`list ${isEventDropdownOpen ? 'show' : 'hide'}`}>
                            {["Deals of the Week", "Destiny 2 Sale", "EA Classic Games on Epic", "Epic MEGA Sale", "First Run"].map((event, index) => (
                                <li key={index}>
                                    <div className="name">
                                        <p>{event}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>

                {/*Genre*/}
                <li className="item-filter">
                    <div className="btn">
                        <button
                            onClick={handleGenreDropdownClick}
                            className={`btn-show-list ${isGenreDropdownOpen ? 'rotate' : ''}`}
                        >
                            <p>Genre</p>
                            <FaChevronDown className="icon-logo"/>
                        </button>
                        <ul className={`list ${isGenreDropdownOpen ? 'show' : 'hide'}`}>
                            {["Action", "Action-Adventure", "Card Game", "Casual", "City Builder", "Comedy", "Dungeone Crawler", "Exploration", "Fantasy", "Fighting", "First Person", "Horror", "Indie", "MOBA", "Music", "Narration", "OpenWorld", "Party", "Platformer", "Puzzle", "Racing", "Retro", "Rogue-Lite", "RPG", "Shooter", "Simulation", "Space", "Sports", "Stealth", "Strategy", "Survival", "Tower Defense", "Trivia", "Turn-Based", "Turn-Based Strategy"].map((event, index) => (
                                <li key={index}>
                                    <div className="name">
                                        <p>{event}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>

                {/*Features*/}
                <li className="item-filter">
                    <div className="btn">
                        <button
                            onClick={handleFeaturesDropdownClick}
                            className={`btn-show-list ${isFeaturesDropdownOpen ? 'rotate' : ''}`}
                        >
                            <p>Features</p>
                            <FaChevronDown className="icon-logo"/>
                        </button>
                        <ul className={`list ${isFeaturesDropdownOpen ? 'show' : 'hide'}`}>
                            {["Achievements", "Alexa Game Control", "Cloud Saves", "Co-op", "Competitive", "Controller Support", "Cross Platform", "Local Multiplayer", "MMO", "Multiplayer", "Online Multiplayer", "Single Player", "VR"].map((event, index) => (
                                <li key={index}>
                                    <div className="name">
                                        <p>{event}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>

                {/*Types*/}
                <li className="item-filter">
                    <div className="btn">
                        <button
                            onClick={handleTypesDropdownClick}
                            className={`btn-show-list ${isTypesDropdownOpen ? 'rotate' : ''}`}
                        >
                            <p>Types</p>
                            <FaChevronDown className="icon-logo"/>
                        </button>
                        <ul className={`list ${isTypesDropdownOpen ? 'show' : 'hide'}`}>
                            {["Apps", "Editor", "Experience", "Game", "Game Add-On", "Game Bundle", "Game Demo", "Game Edition"].map((event, index) => (
                                <li key={index}>
                                    <div className="name">
                                        <p>{event}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>

                {/*Platform*/}
                <li className="item-filter">
                    <div className="btn">
                        <button
                            onClick={handlePlatFormDropdownClick}
                            className={`btn-show-list ${isPlatFormDropdownOpen ? 'rotate' : ''}`}
                        >
                            <p>Platform</p>
                            <FaChevronDown className="icon-logo"/>
                        </button>
                        <ul className={`list ${isPlatFormDropdownOpen ? 'show' : 'hide'}`}>
                            {["Mac OS", "Windows"].map((event, index) => (
                                <li key={index}>
                                    <div className="name">
                                        <p>{event}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </aside>
    );
};

export default Aside;