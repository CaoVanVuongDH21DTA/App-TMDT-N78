import React from 'react';
import '../styles/Footer.css';
import {FaFacebook, FaFacebookSquare, FaTwitter, FaYoutube} from "react-icons/fa";
import { BsArrowUpSquare } from "react-icons/bs";
import {Link, useLocation} from "react-router-dom";
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    const { pathname } = useLocation();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer_store">
            {!pathname.startsWith("/docs") && (
                <div className="footer-social-container">
                    <div className="social-media">
                        <Link to="/" target="_blank">
                            <FaFacebook size={30} className="icon" color="white"/>
                        </Link>
                        <Link to="/" target="_blank">
                            <FaTwitter size={30} className="icon" color="white"/>
                        </Link>
                        <Link to="/" target="_blank">
                            <FaYoutube size={30} className="icon" color="white"/>
                        </Link>
                    </div>
                    <div className="back-to-top">
                        <button id="back-to-top" onClick={scrollToTop}>
                            <BsArrowUpSquare size={40} className="icon" color="white"/>
                        </button>
                    </div>
                </div>
            )}
            {pathname.startsWith("/docs") && (
                <div className="footer-social-container">
                    <div className="social-media">
                        <a href="#">
                            <FaFacebookSquare size={30} className="icon" color="white"/>
                        </a>
                        <a href="#">
                            <FaXTwitter size={30} className="icon" color="white"/>
                        </a>
                        <a href="#">
                            <FaYoutube size={30} className="icon" color="white"/>
                        </a>
                    </div>
                    <div className="back-to-top">
                        <button id="back-to-top" onClick={scrollToTop}>
                            <BsArrowUpSquare size={40} className="icon" color="white"/>
                            <p>back to top</p>
                        </button>
                    </div>
                </div>
            )}
            {!pathname.startsWith("/Support") && !pathname.startsWith("/docs") && (
                <div className="footer-content">
                    <div className="content">
                        <h4>Resources</h4>
                        <div className="list">
                            <ul className="footerLinks">
                                <li><Link to="/">Support-A-Creator</Link></li>
                                <li><Link to="/">Distribute on Epic Games</Link></li>
                                <li><Link to="/">Careers</Link></li>
                                <li><Link to="/">Company</Link></li>
                            </ul>
                            <ul className="footerLinks">
                                <li><Link to="/">Fan Art Policy</Link></li>
                                <li><Link to="/">UX Research</Link></li>
                                <li><Link to="/">Store EULA</Link></li>
                            </ul>
                            <ul className="footerLinks">
                                <li><Link to="/">Online Services</Link></li>
                                <li><Link to="/">Community Rules</Link></li>
                                <li><Link to="/">Epic Newsroom</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <h4>Made By Epic Games</h4>
                        <div className="list">
                            <ul className="footerLinks">
                                <li><Link to="/">Battle Breakers</Link></li>
                                <li><Link to="/">Fortnite</Link></li>
                                <li><Link to="/">Infinity Blade</Link></li>
                            </ul>
                            <ul className="footerLinks">
                                <li><Link to="/">Robo Recall</Link></li>
                                <li><Link to="/">Shadow Complex</Link></li>
                                <li><Link to="/">Unreal Tournament</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            {pathname.startsWith("/Support") && (
                <div className="footer-content bottom-page-support">
                    <div className="content">
                        <h4>Resources</h4>
                        <div className="list">
                            <ul className="footerLinks">
                                <li><a className="/GAMES">GAMES</a></li>
                                <li><a href="/Fortnite">Fortnite</a></li>
                                <li><a href="/Fall Guys">Fall Guys</a></li>
                                <li><a href="/Rocket League">Rocket League</a></li>
                                <li><a href="/Unreal Tournament">Unreal Tournament</a></li>
                                <li><a href="/Infinity Blade">Infinity Blade</a></li>
                                <li><a href="/Shadow Complex">Shadow Complex</a></li>
                                <li><a href="/Robo Recall">Robo Recall</a></li>
                            </ul>
                            <ul className="footerLinks">
                                <li><a href="/MARKETPLACES">MARKETPLACES</a></li>
                                <li><a href="/Epic Games Store">Epic Games Store</a></li>
                                <li><a href="/Fab">Fab</a></li>
                                <li><a href="/Sketchfab">Sketchfab</a></li>
                                <li><a href="/Unreal Engine Marketplace">Unreal Engine Marketplace</a></li>
                                <li><a href="/ArtStation">ArtStation</a></li>
                                <li><a href="/Store Refund Policy">Store Refund Policy</a></li>
                                <li><a href="/Store EULA">Store EULA</a></li>
                            </ul>
                            <ul className="footerLinks">
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
                    <div className="content">
                        <h4>Made By Epic Games</h4>
                        <div className="list">
                            <ul className="footerLinks">
                                <li><a href="/ONLINE SERVICES">ONLINE SERVICES</a></li>
                                <li><a href="/Epic Online Services">Epic Online Services</a></li>
                                <li><a href="/Kids Web Services">Kids Web Services</a></li>
                                <li><a href="/Services Agreement">Services Agreement</a></li>
                                <li><a href="/Acceptable Use Policy">Acceptable Use Policy</a></li>
                                <li><a href="/Trust Statement">Trust Statement</a></li>
                                <li><a href="/Subprocessor List">Subprocessor List</a></li>
                            </ul>
                            <ul className="footerLinks">
                                <li><a href="/RESOURCES">RESOURCES</a></li>
                                <li><a href="/Dev Community">Dev Community</a></li>
                                <li><a href="/MegaGrants">MegaGrants</a></li>
                                <li><a href="/Support-A-Creator">Support-A-Creator</a></li>
                                <li><a href="/Creator Agreement">Creator Agreement</a></li>
                                <li><a href="/Publish on Epic Games Store">Publish on Epic Games Store</a></li>
                                <li><a href="/Unreal Engine Branding Guidelines">Unreal Engine Branding Guidelines</a>
                                </li>
                                <li><a href="/Fan Art Policy">Fan Art Policy</a></li>
                                <li><a href="/Community Rules">Community Rules</a></li>
                            </ul>
                            <ul className="footerLinks">
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
            )}
            {pathname.startsWith("/docs") && (
                <div className="footer-content bottom-page-docs">
                    <div className="list">
                        <h4>Games</h4>
                        <ul className="footerLinks">
                            <li><a href="#">Fotnine</a></li>
                            <li><a href="#">Fall Guys</a></li>
                            <li><a href="#">Rotket League</a></li>
                            <li><a href="#">Unreal Tournament</a></li>
                            <li><a href="#">Infinity Blade</a></li>
                            <li><a href="#">Shadow Complex</a></li>
                            <li><a href="#">Robo Recall</a></li>
                        </ul>
                    </div>
                    <div className="list">
                        <h4>Marketplaces</h4>
                        <ul className="footerLinks">
                            <li><a href="#">Epic Games Store</a></li>
                            <li><a href="#">Fab</a></li>
                            <li><a href="#">Sketchfab</a></li>
                            <li><a href="#">Unreal Engine Marketplace</a></li>
                            <li><a href="#">ArtStation</a></li>
                            <li><a href="#">Store Refund Policy</a></li>
                            <li><a href="#">Store EULA</a></li>
                        </ul>
                    </div>
                    <div className="list">
                        <h4>Tools</h4>
                        <ul className="footerLinks">
                            <li><a href="#">Unreal Engine</a></li>
                            <li><a href="#">UEFN</a></li>
                            <li><a href="#">MetaHuman</a></li>
                            <li><a href="#">Twinmotion</a></li>
                            <li><a href="#">Megascans</a></li>
                            <li><a href="#">Rad Game Tools</a></li>
                        </ul>
                    </div>
                    <div className="list">
                        <h4>Online Services</h4>
                        <ul className="footerLinks">
                            <li><a href="#">Epic Games Services</a></li>
                            <li><a href="#">Kids Web Services</a></li>
                            <li><a href="#">Services Agreement</a></li>
                            <li><a href="#">Acceptable Use Policy</a></li>
                            <li><a href="#">Trust Statement</a></li>
                            <li><a href="#">Subprocessor List</a></li>
                        </ul>
                    </div>
                    <div className="list">
                        <h4>Resources</h4>
                        <ul className="footerLinks">
                            <li><a href="#">Epic Games Store</a></li>
                            <li><a href="#">Fab</a></li>
                            <li><a href="#">Sketchfab</a></li>
                            <li><a href="#">Unreal Engine Marketplace</a></li>
                            <li><a href="#">ArtStation</a></li>
                            <li><a href="#">Store Refund Policy</a></li>
                            <li><a href="#">Store EULA</a></li>
                        </ul>
                    </div>
                    <div className="list">
                        <h4>Company</h4>
                        <ul className="footerLinks">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Newsroom</a></li>
                            <li><a href="#">careers</a></li>
                            <li><a href="#">Students</a></li>
                            <li><a href="#">Ux Research</a></li>
                        </ul>
                    </div>
                </div>
            )}
            <hr/>
            <div className="footer-bottom">
                <div className="copyright">
                    <p>© 2024, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite,
                        the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the
                        Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United
                        States of America and elsewhere. Other brands or product names are the trademarks of their
                        respective owners.</p>
                    <p>Our websites may contain links to other sites and resources provided by third parties. These
                        links are provided for your convenience only. Epic Games has no control over the contents of
                        those sites or resources, and accepts no responsibility for them or for any loss or damage that
                        may arise from your use of them.</p>
                </div>
                <div className="footer-legal">
                    <div className="footer-links">
                        <Link to="/">Terms of Service</Link>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Store Refund Policy</Link>
                    </div>
                    <div className="legal">
                        <ul className="logos">
                            <li>
                                <Link to="/">
                                    <div className="logo" style={{
                                        maskImage: 'url(https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM)',
                                        WebkitMaskImage: 'url(https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM)',
                                    }}>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <div className="logo" style={{
                                        maskImage: 'url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)',
                                        WebkitMaskImage: 'url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)',
                                    }}>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
