import React from "react";
import dataTopUpcommingWishlisted from '../../../../Data/topUpcomingWishlisted.json'
import {IoAdd} from "react-icons/io5";
import '../../../../styles/Store/MainStore/Discover/ShowMore.css';

function TopUpcommingWishlisted() {
    return(
        <div className="container">
            <h1>Top Upcomming Wishlisted</h1>
            <div className="list">
                {dataTopUpcommingWishlisted.map((game, index) => (
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

export default TopUpcommingWishlisted;