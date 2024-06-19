import React, {useState} from "react";
import {CiSearch} from "react-icons/ci";
import '../../../../styles/Responsive/Main/Browse-filter.css';
import {FaChevronDown, FaChevronUp} from "react-icons/fa";

const Filter = ({ closeFilter }: { closeFilter: any }) => {
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
    const btnCloseFilter = () => {
        closeFilter();
    };
    return (
        <div className="Filter">
            <div className="content">
                <div className="cont-filter">
                    <div className="main-filter">
                        <span>
                            <div className="top-filter">
                                <div className="title">
                                    <p>Filters</p>
                                </div>
                                <div className="search-filter">
                                    <div className="search">
                                        <input type="text" placeholder="Keywords" className="search-bar"/>
                                        <CiSearch className="icon-search"/>
                                    </div>
                                </div>
                            </div>
                        </span>
                        {/* Events */}
                        <span>
                            <div className="btn">
                                <button onClick={handleEventDropdownClick}>
                                    <p>Events</p>
                                    {isEventDropdownOpen ? (
                                        <FaChevronUp className="icon-logo" color="#AAAAAE"/>
                                    ) : (
                                        <FaChevronDown className="icon-logo" color="#AAAAAE"/>
                                    )}
                                </button>
                                <div className={`list ${isEventDropdownOpen ? 'show' : 'hide'}`}>
                                    {["Deals of the Week", "Destiny 2 Sale", "EA Classic Games on Epic", "Epic MEGA Sale", "First Run"].map((event, index) => (
                                        <div key={index}>
                                            <div className="name">
                                                <p>{event}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </span>

                        {/* Genre */}
                        <span>
                            <div className="btn">
                                <button onClick={handleGenreDropdownClick}>
                                    <p>Genre</p>
                                    {isGenreDropdownOpen ? (
                                        <FaChevronUp className="icon-logo" color="#AAAAAE"/>
                                    ) : (
                                        <FaChevronDown className="icon-logo" color="#AAAAAE"/>
                                    )}
                                </button>
                                <div className={`list ${isGenreDropdownOpen ? 'show' : 'hide'}`}>
                                    {["Action", "Action-Adventure", "Card Game", "Casual", "City Builder", "Comedy", "Dungeon Crawler", "Exploration", "Fantasy", "Fighting", "First Person", "Horror", "Indie", "MOBA", "Music", "Narration", "Open World", "Party", "Platformer", "Puzzle", "Racing", "Retro", "Rogue-Lite", "RPG", "Shooter", "Simulation", "Space", "Sports", "Stealth", "Strategy", "Survival", "Tower Defense", "Trivia", "Turn-Based", "Turn-Based Strategy"].map((genre, index) => (
                                        <div key={index}>
                                            <div className="name">
                                                <p>{genre}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </span>

                        {/* Features */}
                        <span>
                            <div className="btn">
                                <button onClick={handleFeaturesDropdownClick}>
                                    <p>Features</p>
                                    {isFeaturesDropdownOpen ? (
                                        <FaChevronUp className="icon-logo" color="#AAAAAE"/>
                                    ) : (
                                        <FaChevronDown className="icon-logo" color="#AAAAAE"/>
                                    )}
                                </button>
                                <div className={`list ${isFeaturesDropdownOpen ? 'show' : 'hide'}`}>
                                    {["Achievements", "Alexa Game Control", "Cloud Saves", "Co-op", "Competitive", "Controller Support", "Cross Platform", "Local Multiplayer", "MMO", "Multiplayer", "Online Multiplayer", "Single Player", "VR"].map((feature, index) => (
                                        <div key={index}>
                                            <div className="name">
                                                <p>{feature}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </span>

                        {/* Types */}
                        <span>
                            <div className="btn">
                                <button onClick={handleTypesDropdownClick}>
                                    <p>Types</p>
                                    {isTypesDropdownOpen ? (
                                        <FaChevronUp className="icon-logo" color="#AAAAAE"/>
                                    ) : (
                                        <FaChevronDown className="icon-logo" color="#AAAAAE"/>
                                    )}
                                </button>
                                <div className={`list ${isTypesDropdownOpen ? 'show' : 'hide'}`}>
                                    {["Apps", "Editor", "Experience", "Game", "Game Add-On", "Game Bundle", "Game Demo", "Game Edition"].map((type, index) => (
                                        <div key={index}>
                                            <div className="name">
                                                <p>{type}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </span>

                        {/* Platform */}
                        <span>
                            <div className="btn">
                                <button onClick={handlePlatFormDropdownClick}>
                                    <p>Platform</p>
                                    {isPlatFormDropdownOpen ? (
                                        <FaChevronUp className="icon-logo" color="#AAAAAE"/>
                                    ) : (
                                        <FaChevronDown className="icon-logo" color="#AAAAAE"/>
                                    )}
                                </button>
                                <div className={`list ${isPlatFormDropdownOpen ? 'show' : 'hide'}`}>
                                    {["Mac OS", "Windows"].map((platform, index) => (
                                        <div key={index}>
                                            <div className="name">
                                                <p>{platform}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="bottom-filter">
                <div className="btn-bottom">
                    <button className="btn-clear" onClick={btnCloseFilter}>clear</button>
                </div>
                <div className="btn-bottom">
                    <button className="btn-apply">apply</button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
