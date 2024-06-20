import React from "react";
import { FaFacebookSquare,  FaYoutube} from "react-icons/fa";
import {BsArrowUpSquare} from "react-icons/bs";
import '../../../styles/Distribute/Footer_Distri.css'
import {FaXTwitter} from "react-icons/fa6";

function Footer_Distri (){
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer-distri">
            <div className="row footer-social-container">
                <div className="social-media">
                    <a href="#">
                        <FaFacebookSquare  size={30} className="icon" color="white" />
                    </a>
                    <a href="#">
                        <FaXTwitter size={30} className="icon" color="white" />
                    </a>
                    <a href="#">
                        <FaYoutube size={30} className="icon" color="white" />
                    </a>
                </div>
                <div className="back-to-top">
                    <button id="back-to-top" onClick={scrollToTop}>
                        <BsArrowUpSquare size={40} className="icon" color="white" />
                        <p>back to top</p>
                    </button>
                </div>
            </div>
            <div className="footer-content">
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
                        those sites or resources, and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
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

export default Footer_Distri;