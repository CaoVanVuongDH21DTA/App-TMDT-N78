import React from 'react';
import '../Style/Footer.css';
import { FaFacebook, FaTwitter, FaYoutube   } from "react-icons/fa";
import { BsArrowUpSquare } from "react-icons/bs";
import logo_epic from '../img/epic_games_logo.png'
import logo_unreal_engine from '../img/logo-Unreal-Engine.png'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer">
            <div className="row footer-social-container">
                <div className="social-media">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} className="icon" color="white"/>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} className="icon" color="white"/>
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={30} className="icon" color="white"/>
                    </a>
                </div>
                <div className="back-to-top">
                    <button id="back-to-top" onClick={scrollToTop}>
                        <BsArrowUpSquare size={40} className="icon" color="white"/>
                    </button>
                </div>
            </div>
            <div className="footer-content">
                <div className="resources">
                    <h4>Resources</h4>
                    <div className="list-resources">
                        <ul className="footerLinks first-column">
                            <li><a className="/GAMES">GAMES</a></li>
                            <li><a href="/Fortnite">Fortnite</a></li>
                            <li><a href="/Fall Guys">Fall Guys</a></li>
                            <li><a href="/Rocket League">Rocket League</a></li>
                            <li><a href="/Unreal Tournament">Unreal Tournament</a></li>
                            <li><a href="/Infinity Blade">Infinity Blade</a></li>
                            <li><a href="/Shadow Complex">Shadow Complex</a></li>
                            <li><a href="/Robo Recall">Robo Recall</a></li>
                        </ul>
                        <ul className="footerLinks two-column">
                            <li><a href="/MARKETPLACES">MARKETPLACES</a></li>
                            <li><a href="/Epic Games Store">Epic Games Store</a></li>
                            <li><a href="/Fab">Fab</a></li>
                            <li><a href="/Sketchfab">Sketchfab</a></li>
                            <li><a href="/Unreal Engine Marketplace">Unreal Engine Marketplace</a></li>
                            <li><a href="/ArtStation">ArtStation</a></li>
                            <li><a href="/Store Refund Policy">Store Refund Policy</a></li>
                            <li><a href="/Store EULA">Store EULA</a></li>
                        </ul>
                        <ul className="footerLinks three-column">
                            <li><a href="/TOOLS">TOOLS</a></li>
                            <li><a href="/Unreal Engine">Unreal Engine</a></li>
                            <li><a href="/UEFN">UEFN</a></li>
                            <li><a href="/MetaHuman">MetaHuman</a></li>
                            <li><a href="/Twinmotion">Twinmotion</a></li>
                            <li><a href="/Megascans">Megascans</a></li>
                            <li><a href="/RealityScan">RealityScan</a></li>
                            <li><a href="/Rad Game Tools">Rad Game Tools</a></li>
                        </ul>
                    </div>
                </div>
                <div className="made-by-epic-games">
                    <h4>Made By Epic Games</h4>
                    <div className="list-made-epic">
                        <ul className="footerLinks first-column">
                            <li><a href="/ONLINE SERVICES">ONLINE SERVICES</a></li>
                            <li><a href="/Epic Online Services">Epic Online Services</a></li>
                            <li><a href="/Kids Web Services">Kids Web Services</a></li>
                            <li><a href="/Services Agreement">Services Agreement</a></li>
                            <li><a href="/Acceptable Use Policy">Acceptable Use Policy</a></li>
                            <li><a href="/Trust Statement">Trust Statement</a></li>
                            <li><a href="/Subprocessor List">Subprocessor List</a></li>
                        </ul>
                        <ul className="footerLinks two-column">
                            <li><a href="/RESOURCES">RESOURCES</a></li>
                            <li><a href="/Dev Community">Dev Community</a></li>
                            <li><a href="/MegaGrants">MegaGrants</a></li>
                            <li><a href="/Support-A-Creator">Support-A-Creator</a></li>
                            <li><a href="/Creator Agreement">Creator Agreement</a></li>
                            <li><a href="/Publish on Epic Games Store">Publish on Epic Games Store</a></li>
                            <li><a href="/Unreal Engine Branding Guidelines">Unreal Engine Branding Guidelines</a></li>
                            <li><a href="/Fan Art Policy">Fan Art Policy</a></li>
                            <li><a href="/Community Rules">Community Rules</a></li>
                        </ul>
                        <ul className="footerLinks three-column">
                            <li><a href="/COMPANY">COMPANY</a></li>
                            <li><a href="/About">About</a></li>
                            <li><a href="/Newsroom">Newsroom</a></li>
                            <li><a href="/Careers">Careers</a></li>
                            <li><a href="/Students">Students</a></li>
                            <li><a href="/UX Research">UX Research</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <div className="copyright">
                    <p>© 2024, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite,
                        the
                        Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal
                        Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States
                        of
                        America and elsewhere. Other brands or product names are the trademarks of their respective
                        owners.</p>
                    <p>Our websites may contain links to other sites and resources provided by third parties. These
                        links are
                        provided for your convenience only. Epic Games has no control over the contents of those sites
                        or
                        resources, and accepts no responsibility for them or for any loss or damage that may arise from
                        your
                        use of them.</p>
                </div>
                <div className="footer-legal">
                    <div className="footer-links">
                        <a href="/terms-of-service">Terms of Service</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/store-refund-policy">Store Refund Policy</a>
                    </div>
                    <div className="legal">
                        <ul className="logos">
                            <li>
                                <a href="#"><img src={logo_epic} style={{height:60}}/></a>
                            </li>
                            <li>
                                <a href="#"><img src={logo_unreal_engine} style={{height:60, borderRadius:50}}/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

