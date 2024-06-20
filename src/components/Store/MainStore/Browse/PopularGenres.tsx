import React from "react";

import '../../../../styles/Store/MainStore/Browse/PopularGenres.css'
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import img_1 from "../../../../img/Store/popular_action-game.png";
import img_2 from "../../../../img/Store/popular_action-game-2.png";
import img_3 from "../../../../img/Store/popular_action-game-3.png";

const PopularGenres = () => {
    return (
        <div className="PopularGenres">
            <div className="top-popular">
                <p>Popular Genres</p>
                <div className="next-prev">
                    <button className="btn-left"><BsChevronLeft className="btn-next-prev"/></button>
                    <button className="btn-right"><BsChevronRight className="btn-next-prev"/></button>
                </div>
            </div>
            <div className="list_item-popular">
                <div className="item">
                    <div className="img-popular">
                        <div className="img">
                            <img src={img_1} alt="img-popular" className="img-1"/>
                        </div>
                        <div className="img">
                            <img src={img_2} alt="img-popular" className="img-2"/>
                        </div>
                        <div className="img">
                            <img src={img_3} alt="img-popular" className="img-3"/>
                        </div>
                    </div>
                    <h2 className="name-popular">Action Games</h2>
                </div>
                <div className="item">
                    <div className="img-popular">
                        <div className="img">
                            <img src={img_1} alt="img-popular" className="img-1"/>
                        </div>
                        <div className="img">
                            <img src={img_2} alt="img-popular" className="img-2"/>
                        </div>
                        <div className="img">
                            <img src={img_3} alt="img-popular" className="img-3"/>
                        </div>
                    </div>
                    <h2 className="name-popular">Action Games</h2>
                </div>
                <div className="item">
                    <div className="img-popular">
                        <div className="img">
                            <img src={img_1} alt="img-popular" className="img-1"/>
                        </div>
                        <div className="img">
                            <img src={img_2} alt="img-popular" className="img-2"/>
                        </div>
                        <div className="img">
                            <img src={img_3} alt="img-popular" className="img-3"/>
                        </div>
                    </div>
                    <h2 className="name-popular">Action Games</h2>
                </div>
                <div className="item">
                    <div className="img-popular">
                        <div className="img">
                            <img src={img_1} alt="img-popular" className="img-1"/>
                        </div>
                        <div className="img">
                            <img src={img_2} alt="img-popular" className="img-2"/>
                        </div>
                        <div className="img">
                            <img src={img_3} alt="img-popular" className="img-3"/>
                        </div>
                    </div>
                    <h2 className="name-popular">Action Games</h2>
                </div>
                <div className="item">
                    <div className="img-popular">
                        <div className="img">
                            <img src={img_1} alt="img-popular" className="img-1"/>
                        </div>
                        <div className="img">
                            <img src={img_2} alt="img-popular" className="img-2"/>
                        </div>
                        <div className="img">
                            <img src={img_3} alt="img-popular" className="img-3"/>
                        </div>
                    </div>
                    <h2 className="name-popular">Action Games</h2>
                </div>
            </div>
        </div>
    );
};

export default PopularGenres;