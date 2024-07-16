import React, { useState } from "react";
import "../../../../styles/Store/MainStore/PayPage/PayPage.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import fi24 from "../../../../img/Store/fi24.jpg"
import mainfi24 from  "../../../../img/Store/mainfi24.jpg"
import { FiPlusCircle } from "react-icons/fi";
import {IoHeartCircle, IoShareSocial} from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import { FaWindows } from "react-icons/fa";
import {TiWarningOutline} from "react-icons/ti";

const Paypage: React.FC = () => {
    const [rating] = useState<number>(4.5);

    return (
        <main className="Paypagemain" id="mainPay">
            <div className="content">
                <div className="overview-section">
                <h1 className="title_pay">F1® 24</h1>
                    <div className="top-bar">
                        <div className="icon_rated">
                            {[...Array(4)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className={index < Math.floor(rating) ? "star-icon filled" : "star-icon"}
                                />
                            ))}
                            <FaStarHalfAlt className={rating >= 4.5 ? "star-icon filled" : "star-icon"}/>
                            <span className="rating">4.5</span>
                        </div>

                        <div className="nav-selected">
                            <li className="nav-item">Overview</li>
                            <li className="nav-item">Add-Ons</li>
                            <li className="nav-item">Achievements</li>
                        </div>

                        <div className="content-mid">
                            <div className="img-container">
                                <img
                                    className="main-img"
                                    src={mainfi24}
                                    alt="Fortnite Games-img"
                                />
                            </div>

                            <div className="details">
                                <div className="right-pay">
                                    <div className="img-details">
                                        <img src={fi24} className="img-detailsmain"/></div>
                                    <p className="title-details">Base Game</p>
                                    <p className="price">₫1,090,000</p>
                                    <button className="buy-now">BUY NOW</button>
                                    <button className="add-to-cart">ADD TO CART</button>
                                    <button className="add-to-wishlist"><FiPlusCircle className="add-icon"/>ADD TO
                                        WISHLIST
                                    </button>
                                </div>
                                <div className="extra-info">
                                    <div className="info-row">
                                        <div className="info">
                                            <span className="item-left">Epic Rewards</span>
                                            <div className="item-right">Earn 5% Back <IoHeartCircle
                                                className="icon-earn"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-row">
                                        <div className="info">
                                            <span className="item-left">Refund Type</span>
                                            <div className="item-right">Self-Refundable <CiCircleQuestion
                                                className="icon-earn"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-row">
                                        <div className="info">
                                            <span className="item-left">Developer</span>
                                            <div className="item-right">Codemasters</div>
                                        </div>
                                    </div>
                                    <div className="info-row">
                                        <div className="info">
                                            <span className="item-left">Publisher</span>
                                            <div className="item-right">Electronic Arts</div>
                                        </div>
                                    </div>
                                    <div className="info-row">
                                        <div className="info">
                                            <span className="item-left">Epic Rewards:</span>
                                            <div className="item-right">05/31/24</div>
                                        </div>
                                    </div>
                                    <div className="info-row">
                                        <div className="info">
                                            <span className="item-left">Platform</span>
                                            <div className="item-right"><FaWindows className="icon-windown"/></div>
                                        </div>
                                    </div>
                                    <div className="row-end">
                                        <button className="button-rowend"><IoShareSocial className="icon-end"/>SHARE
                                        </button>
                                        <button className="button-rowend"><TiWarningOutline className="icon-end"/>REPORT
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="system-requirements">
                    <span className="title-requirements">F1® 24 System Requirements</span>
                    <div className="table-requirements">
                        <div className="nav-windows">
                            <div className="item-windows">WINDOWS</div>
                        </div>
                        <div className="content-table">
                            <div className="col-left">
                                <div className="title-left"> Minimum</div>
                                <li className="system">OS</li>
                                <span className="requirements">Windows 10 64-bit Version 21H1 or newer</span>
                                <li className="system">Processor</li>
                                <span className="requirements">Intel Core i3-2130 | Core i5-9600k (VR) or AMD FX 4300 | Ryzen 5 2600X (VR)</span>
                                <li className="system">Memory</li>
                                <span className="requirements">8 GB</span>
                                <li className="system">Storage</li>
                                <span className="requirements">100 GB</span>
                                <li className="system">Direct X</li>
                                <span className="requirements">12</span>
                                <li className="system">Graphics</li>
                                <span className="requirements">NVIDIA GTX 1060 (6Gb) | GTX 1660Ti (VR) | RTX 2060 (RT) // AMD RX 480 | RX 590 (VR) | 6700XT (RT) // Intel Arc A380 (VR/RT)</span>
                                <li className="system">Other</li>
                                <span className="requirements">VR Support: SteamVR. Keyboard and mouse required. GPU must support D3D_SHADER_MODEL_6_6.</span>
                                <li className="system">Login Accounts Required</li>
                                <span className="requirements">EA app</span>
                            </div>
                            <div className="col-right">
                                <div className="title-right"> Recommended</div>
                                <li className="system">OS</li>
                                <span className="requirements">Windows 10 64-bit Version 21H1 or newer</span>
                                <li className="system">Processor</li>
                                <span className="requirements">Intel Core i5-9600k or AMD Ryzen 5 2600X</span>
                                <li className="system">Memory</li>
                                <span className="requirements">16 GB</span>
                                <li className="system">Storage</li>
                                <span className="requirements">100 GB</span>
                                <li className="system">Direct X</li>
                                <span className="requirements">12</span>
                                <li className="system">Graphics</li>
                                <span className="requirements">NVIDIA RTX 2070 (+VR) | RTX 3070 (RT) // AMD RX 6600XT | RX 6700XT (VR) | RX 6800 (RT) // Intel Arc A580 (VR/RT)</span>
                                <li className="system">Other</li>
                                <span className="requirements">VR Support: SteamVR. Keyboard and mouse required. GPU must support D3D_SHADER_MODEL_6_6.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Paypage;
