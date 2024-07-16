import React from "react";
import dataMostPlayed from '../../../../Data/mostPlayed.json'
import {IoAdd} from "react-icons/io5";
import '../../../../styles/Store/MainStore/Discover/ShowMore.css';

function MostPlayed() {
    return(
        <div className="page_showmore">
            <h1>Most Played</h1>
            <div className="list">
                {dataMostPlayed.map((game, index) => (
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
                ))}
            </div>
        </div>
    );
};

export default MostPlayed;