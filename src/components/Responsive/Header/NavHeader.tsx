import React, { useState } from "react";
import '../../../styles/Responsive/Header/NavHeader.css';
import { IoClose } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function NavHeader() {
    const navigate = useNavigate();
    const [showLanguages, setShowLanguages] = useState(false);
    const [showDistribute, setShowDistribute] = useState(false);

    const handlePersonClick = () => {
        navigate('/login');
    };

    const buttonbackhome = () =>{
        navigate('/')
    }

    const toggleLanguages = () => {
        setShowLanguages(prevState => !prevState);
    };

    const toggleDistribute = () => {
        setShowDistribute(prevState => !prevState);
    };

    return (
        <div className="NavHeader">
            <header>
                <div>
                    <h1>Store</h1>
                </div>
                <div className="btn_close-header" onClick={buttonbackhome}>
                    <IoClose size={25} />
                </div>
            </header>
            <main>
                <div className="tools">
                    <div className="languages">
                        <div className="img-languages" onClick={toggleLanguages}>
                            <FaGlobe size={24} color="#AAAAAE" />
                        </div>
                        <div className={`language ${showLanguages ? 'active' : ''}`}>
                            <button onClick={toggleLanguages}><GrFormPrevious size={20} /> Back</button>
                            <ul className="list-languages">
                                <li><a href="#">English</a></li>
                                <li><a href="#">French</a></li>
                                <li><a href="#">Tiếng Việt</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="person" onClick={handlePersonClick}>
                        <a className="profile">
                            <BsPersonCircle size={24} color="#AAAAAE" />
                        </a>
                    </div>
                </div>
                <div className="main-nav">
                    <ul className="main-nav-list">
                        <li className="main-nav-list-item">Support</li>
                        <li className="main-nav-list-item">
                            <button className="show-list-distri" onClick={toggleDistribute}>
                                <span>Distribute</span>
                                <div><GrFormNext size={20} /></div>
                            </button>
                            <div className={`list-distribute ${showDistribute ? 'active' : ''}`}>
                                <button onClick={toggleDistribute}><GrFormPrevious size={20} /> Back</button>
                                <ul className="list">
                                    <li><a href="#">Distribute on Epic Games Store</a></li>
                                    <li><a href="#">Developer Forums</a></li>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Learning</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="download">
                    <a href="https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi?trackingId=00c38629eacd45eeaa9835c1d4015b8c"
                       className="download-btn"> Download
                    </a>
                </div>
            </main>
        </div>
    );
}

export default NavHeader;
