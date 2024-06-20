import React from 'react';
import '../../styles/Store/Footer.css';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsArrowUpSquare } from "react-icons/bs";

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
                        <FaFacebook size={30} className="icon" color="white" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} className="icon" color="white" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={30} className="icon" color="white" />
                    </a>
                </div>
                <div className="back-to-top">
                    <button id="back-to-top" onClick={scrollToTop}>
                        <BsArrowUpSquare size={40} className="icon" color="white" />
                    </button>
                </div>
            </div>
            <div className="footer-content">
                <div className="resources">
                    <h4>Resources</h4>
                    <div className="list-resources">
                        <ul className="footerLinks first-column">
                            <li><a href="/support-a-creator">Support-A-Creator</a></li>
                            <li><a href="/distribute">Distribute on Epic Games</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/company">Company</a></li>
                        </ul>
                        <ul className="footerLinks two-column">
                            <li><a href="/fan-art-policy">Fan Art Policy</a></li>
                            <li><a href="/ux-research">UX Research</a></li>
                            <li><a href="/store-eula">Store EULA</a></li>
                        </ul>
                        <ul className="footerLinks three-column">
                            <li><a href="/online-services">Online Services</a></li>
                            <li><a href="/community-rules">Community Rules</a></li>
                            <li><a href="/epic-newsroom">Epic Newsroom</a></li>
                        </ul>
                    </div>
                </div>
                <div className="made-by-epic-games">
                    <h4>Made By Epic Games</h4>
                    <div className="list-made-epic">
                        <ul className="footerLinks first-column">
                            <li><a href="/battle-breakers">Battle Breakers</a></li>
                            <li><a href="/fortnite">Fortnite</a></li>
                            <li><a href="/infinity-blade">Infinity Blade</a></li>
                        </ul>
                        <ul className="footerLinks two-column">
                            <li><a href="/robo-recall">Robo Recall</a></li>
                            <li><a href="/shadow-complex">Shadow Complex</a></li>
                            <li><a href="/unreal-tournament">Unreal Tournament</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="copyright">
                    <p>© 2024, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners.</p>
                    <p>Our websites may contain links to other sites and resources provided by third parties. These links are provided for your convenience only. Epic Games has no control over the contents of those sites or resources, and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
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
                                <a href="#">
                                    <div className="logo" style={{
                                        maskImage: 'url(https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM)',
                                        WebkitMaskImage: 'url(https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM)',
                                    }}>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="logo" style={{
                                        maskImage: 'url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)',
                                        WebkitMaskImage: 'url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)',
                                    }}>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
