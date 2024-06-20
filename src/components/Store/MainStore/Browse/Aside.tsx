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
        <aside>
            <div className="top-contai">
                <div className="filters">
                    <p className="text-filt">Filters</p>
                    <div className="input-filt">
                        <input type="text" placeholder="Keywords" className="search-filt"/>
                        <CiSearch className="icon-search"/>
                    </div>
                </div>
            </div>

            {/*Events*/}
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

            {/*Genre*/}
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
                        {["Action", "Action-Adventure", "Card Game", "Casual", "City Builder", "Comedy", "Dungeone Crawler", "Exploration", "Fantasy", "Fighting", "First Person", "Horror", "Indie", "MOBA", "Music", "Narration", "OpenWorld", "Party", "Platformer", "Puzzle", "Racing", "Retro", "Rogue-Lite", "RPG", "Shooter", "Simulation", "Space", "Sports", "Stealth", "Strategy", "Survival", "Tower Defense", "Trivia", "Turn-Based", "Turn-Based Strategy"].map((event, index) => (
                            <div key={index}>
                                <div className="name">
                                    <p>{event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </span>
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
                        {["Achievements", "Alexa Game Control", "Cloud Saves", "Co-op", "Competitive", "Controller Support", "Cross Platform", "Local Multiplayer", "MMO", "Multiplayer", "Online Multiplayer", "Single Player", "VR"].map((event, index) => (
                            <div key={index}>
                                <div className="name">
                                    <p>{event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </span>
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
                        {["Apps", "Editor", "Experience", "Game", "Game Add-On", "Game Bundle", "Game Demo", "Game Edition"].map((event, index) => (
                            <div key={index}>
                                <div className="name">
                                    <p>{event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </span>
            <span>
                <div className="btn">
                    <button onClick={handlePlatFormDropdownClick}>
                        <p>PlatForm</p>
                        {isPlatFormDropdownOpen ? (
                            <FaChevronUp className="icon-logo" color="#AAAAAE"/>
                        ) : (
                            <FaChevronDown className="icon-logo" color="#AAAAAE"/>
                        )}
                    </button>
                    <div className={`list ${isPlatFormDropdownOpen ? 'show' : 'hide'}`}>
                        {["Mac OS", "Windows"].map((event, index) => (
                            <div key={index}>
                                <div className="name">
                                    <p>{event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </span>
        </aside>
    );
};

export default Aside;