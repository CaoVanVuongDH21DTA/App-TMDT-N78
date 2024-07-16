import React from "react";
import '../../styles/Support/Report.css';
import { IoIosArrowForward, IoIosList } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GiThunderStruck } from "react-icons/gi";
import { FiFacebook } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { TfiThemifyFavicon, TfiTwitter } from "react-icons/tfi";
import { TbCircleLetterV } from "react-icons/tb";
import {Link} from "react-router-dom";

const Report: React.FC = () => {
    return (
        <main className="report-page">
            <div className="report-page-header">
                <div className="title-report">
                    <div className="title-report-left">Main page <IoIosArrowForward className="icon-title" /></div>
                    <div className="title-report-right">Fortnite</div>
                </div>
                <div className="title-content-mid">Fortnite</div>
                <div className="search-container">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="SEARCH HELP CENTER..." className="search-input" />
                </div>
            </div>
            <div className="report-page-mid">
                <div className="content-report">
                    <div className="option-report">
                        <IoIosList />
                        TOPICS
                    </div>
                    <div className="option-report">
                        <MdAccountCircle />
                        ACCOUNT SETTINGS
                    </div>
                    <div className="option-report">
                        <TbCircleLetterV />
                        V-BUCKS CARD REDEMPTION
                    </div>
                    <div className="option-report">
                        <FiFacebook />
                        FORTNITE NEWS
                    </div>
                    <div className="option-report">
                        <TfiTwitter />
                        FORTNITE STATUS
                    </div>
                </div>
            </div>
            <div className="additional-content">
                <div className="trending">
                    <h2><GiThunderStruck /> TRENDING</h2>
                    <ul>
                        <li>How to redeem a V-Bucks card</li>
                        <li>How do I fix voice chat issues in Fortnite?</li>
                        <li>Troubleshooting low frame rate (FPS) in Fortnite</li>
                        <li>How does Gifting work in Fortnite?</li>
                        <li>How to download Fortnite on PC</li>
                    </ul>
                </div>
                <div className="contact-section">
                    <h3>Can't find what you're looking for?</h3>
                    <p>Have a look at these trending articles or let us know how we can help and we'll be happy to assist you.</p>
                    <div className="contact-options">
                        <div className="option-section">
                            <GiThunderStruck />
                            Two-factor authentication (2FA) and how to enable it
                        </div>
                        <div className="option-section">
                            <GiThunderStruck />
                            "This Epic Account was previously linked to a different external account" error
                        </div>
                        <div className="option-section">
                            <GiThunderStruck />
                            How to redeem a V-Bucks card
                        </div>
                    </div>
                    <Link to="/support/contact">
                        <button className="contact-us-btn">CONTACT US</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Report;
