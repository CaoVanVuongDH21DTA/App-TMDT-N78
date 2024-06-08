import React, {useState} from 'react';
import '../Style/Mid.css';

import { IoGameControllerOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { AiFillAliwangwang } from "react-icons/ai";
import { FaSearch, FaCircle } from 'react-icons/fa';
import { GoArrowDownRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { SiEpicgames } from "react-icons/si";
import { MdAccountBox } from "react-icons/md";
import { RiShieldStarLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa6";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { SiUnrealengine } from "react-icons/si";
import { SiMercedes } from "react-icons/si";
import { BsWrenchAdjustableCircle } from "react-icons/bs";
import fortnite_games from "../img/fortnite_games.jpg";
import lego_games from "../img/lego_games.jpg";
import rocketleague_games from "../img/rocketleague_games.jpg";
import fall_guys_games from "../img/fall_guys_games.png";
import festival_games from "../img/festival_games.jpg";
import rocket_racing_games from "../img/rockket_racing_games.jpg"
import rocket_leaguewipe_games from "../img/rocket_leaguewipe_games.jpg"
import image_gamebutton from "../img/image_gamebutton.jpg";
import image_accountsbutton from "../img/image_accountsbutton.jpg";
import image_enterprisebutton from "../img/image_enterprisebutton.jpg";
import epicgames_accounts from "../img/epicgames_accounts.jpg";
import Accounts_accounts from "../img/Accounts_accounts.jpg";
import ourcreate_accounts from "../img/ourcreate_accounts.jpg";
import payments_accounts from "../img/payments_accounts.jpg";
import technical_accounts from "../img/technical_accounts.jpg";
import parent_accounts from "../img/parent_accounts.jpg";
import anhdomixi_enterprise from "../img/anhdomixi_enterprise.jpg"
import alanwake_games from "../img/alanwake_games.jpg";
import horizonchase_games from "../img/horizonchase_games.jpg";
import pcbuild_games from "../img/pcbuild_games.jpg";
import pcbuild2_games from "../img/pcbuild2_games.jpg";
import alanwakeR_games from "../img/alanwakeR_games.jpg";
import kida_games from "../img/kida_games.jpg";
import shadow_games from "../img/shadow_games.jpg";
import postparty_games from "../img/postparty_games.jpg";

const Mid = () => {

 // ========================================== Onclick categories =========================================

    const scrollToSection = ({sectionId}: { sectionId: any }) => {
        const section = document.getElementById(sectionId);
        console.log(section);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with ID '${sectionId}' not found!`);
        }
    };

    // ============================================= Show game ============================================

    const [showAllGames, setShowAllGames] = useState(false);

    const handleShowGamesClick = () => {
        setShowAllGames(!showAllGames);
    };


// =================================================== Giao dien ==========================================
    return (
        <main className="mid">
            <div className="regional_headermid">
                <div className="background-container">
                    <div className="alert">
                        <span>!</span> You are not currently logged in. Log in to your Epic Games account <a
            href="https://www.epicgames.com/id/login?product
Name=epic-games&lang=en_US&redirectUrl=https%3A%2F%2Fwww.epicgames.com%2Fhelp">here</a> to view, update, and submit requests for support.
                    </div>
                    <div className="text-welcome">
                        <h1>Welcome to Epic Games Player Support</h1>
                        <a href="https://status.epicgames.com/" className="server-status">
                            SERVER STATUS: <strong>ALL SYSTEMS OPERATIONAL</strong> <FaCircle className="icon-online"/>
                        </a>
                    </div>
                    <div className="search-container">
                        <FaSearch className="search-icon"/>
                        <input type="text" placeholder="SEARCH HELP CENTER..." className="search-input"/>
                    </div>
                </div>

            </div>
            <div className="categories">
   <button className="category game" onClick={() => scrollToSection({sectionId: 'Games'})}>
                    <img src={image_gamebutton} alt='Game' className="category-image"/>
                    <span className="category-icon"><IoGameControllerOutline/></span>
                    <span className="category-text">Games</span>
                </button>
   <button className="category accounts" onClick={() => scrollToSection({sectionId: 'Accounts'})}>
                    <img src={image_accountsbutton} alt='Accounts' className="category-image"/>
                    <span className="category-icon"><VscAccount/></span>
                    <span className="category-text">Accounts</span>
                </button>

   <button className="category enterprise" onClick={() => scrollToSection({sectionId: 'Enterprise'})}>
                    <img src={image_enterprisebutton} alt='Enterprise' className="category-image"/>
                    <span className="category-icon"><AiFillAliwangwang/></span>
                    <span className="category-text">Enterprise</span>
                </button>

            </div>

            {/*==================================== Game ==================================*/}

            <div className="regional_game" id="Games">
                <h2 className="text_regional_game" id="text_game">Games</h2>
                <div className="button_games_row1">
                    <div className="game-button">
                        <button className="fortnite_games">
                            <img src={fortnite_games} alt='Fortnite' className="fortnite-image"/>
                        </button>
                        <div className="game-text">Fortnite</div>
                    </div>
                    <div className="game-button">
                        <button className="lego_games">
                            <img src={lego_games} alt='Lego' className="lego-image"/>
                        </button>
                        <div className="game-text">LEGO Fortnite</div>
                    </div>
                    <div className="game-button">
                        <button className="rocket-racing_games">
                            <img src={rocket_racing_games} alt='rocket_racing' className="rocket_racing-image"/>
                        </button>
                        <div className="game-text">Rocket Racing</div>
                    </div>
                </div>
                <div className="button_games_row2">
                    <div className="game-button">
                        <button className="festival_games">
                            <img src={festival_games} alt='festival_games' className="festival-image"/>
                        </button>
                        <div className="game-text">Festival Games</div>
                    </div>

                    <div className="game-button">
                        <button className="rocketleague_games">
                            <img src={rocketleague_games} alt='rocketleague_games' className="rocketleague-image"/>
                        </button>
                        <div className="game-text">Rocket League</div>
                    </div>
                    <div className="game-button">
                        <button className="fall_guys_games">
                            <img src={fall_guys_games} alt='fall_guys' className="fall_guys-image"/>
                        </button>
                        <div className="game-text">Fall Guys</div>
                    </div>
                    <div className="game-button">
                        <button className="rocket_leaguewipe">
                            <img src={rocket_leaguewipe_games} alt='rocket_leaguewipe'
                                 className="rocket_leaguewipe-image"/>
                        </button>
                        <div className="game-text">Rocket League Sideswipe</div>
                    </div>

                    <button className="show_games" id="Show" onClick={handleShowGamesClick}>
                        <span className="show_gamesicon"><IoGameControllerOutline/></span>
                        <span className="icon_show"><GoArrowDownRight size={30}/></span>
                        <span className="text_showgames">Show / hide games</span>
                    </button>
                </div>

                {showAllGames && (
                    <div className="button_games_row3">

                        <div className="game-button">
                            <button className="alanwake_games">
                                <img src={alanwake_games} alt='alanwake_games'
                                     className="alanwake-image"/>
                            </button>
                            <div className="game-text">Alan Wake 2</div>
                        </div>

                        <div className="game-button">
                            <button className="horizonchase_games">
                                <img src={horizonchase_games} alt='horizonchase_games'
                                     className="horizonchase-image"/>
                            </button>
                            <div className="game-text">Horizon Chase 2</div>
                        </div>

                        <div className="game-button">
                            <button className="pcbuild_games">
                                <img src={pcbuild_games} alt='pcbuild_games' className="pcbuild-image"/>
                            </button>
                            <div className="game-text">PC Building Simulator</div>
                        </div>

                        <div className="game-button">
                            <button className="pcbuild2_games">
                                <img src={pcbuild2_games} alt='pcbuild2_games'
                                     className="pcbuild2-image"/>
                            </button>
                            <div className="game-text">PC Building Simulator 2</div>
                        </div>

                        <div className="game-button">
                            <button className="alanwakeR_games">
                                <img src={alanwakeR_games} alt='alanwakeR_games'
                                     className="alanwakeR-image"/>
                            </button>
                            <div className="game-text">Alan Wake Remastered</div>
                        </div>
                    </div>
                )}
                {showAllGames && (
                    <div className="button_games_row4">
                        <div className="game-button">
                            <button className="kida_games">
                                <img src={kida_games} alt='kida_games'
                                     className="kida-image"/>
                            </button>
                            <div className="game-text">Kia A Mnesia Exhibition</div>
                        </div>

                        <div className="game-button">
                            <button className="shadow_games">
                                <img src={shadow_games} alt='shadow_games'
                                     className="shadow-image"/>
                            </button>
                            <div className="game-text">Shadow Complex</div>
                        </div>

                        <div className="game-button">
                            <button className="postparty_games">
                                <img src={postparty_games} alt='postparty_games'
                                     className="postparty-image"/>
                            </button>
                            <div className="game-text">Postparty</div>
                        </div>
                    </div>
                )}

            </div>

            {/*========================================== Accounts ====================================*/}
            <div className="regional_accounts" id="Accounts">
                <h2 className="text_regional-accounts">Accounts</h2>
                <div className="button_accounts_row1">
                    <button className="epicgamesstore_accounts">
                        <div className="captions_epicgamesstore">
                            <span className="icon_epicgamesstore"><SiEpicgames/></span>
                            <span className="text_epicgamesstore">Epic Games Store</span>
                        </div>
                        <img src={epicgames_accounts} alt="Epic Games Store"
                             className="epicgamesstore-image"/>
                    </button>
                    <button className="Accounts_accounts">
                        <div className="captions_Accounts">
                            <span className="icon_Accounts"><MdAccountBox/></span>
                            <span className="text_Accounts">Accounts</span>
                        </div>
                        <img src={Accounts_accounts} alt="Accounts" className="Accounts-image"/>
                    </button>
                </div>

                <div className="button_accounts_row2">
                    <button className="ourcreator_accounts">
                        <div className="captions_ourcreator">
                            <span className="icon_ourcreator"><RiShieldStarLine/></span>
                            <span className="text_ourcreator">Our creator programs</span>
                        </div>
                        <img src={ourcreate_accounts} alt="Our creator"
                             className="ourcreator-image"/>
                    </button>

                    <button className="payments_accounts">
                        <div className="captions_payments">
                            <span className="icon_payments"><FaCcPaypal/></span>
                            <span className="text_payments">Payments</span>
                        </div>
                        <img src={payments_accounts} alt="Payments"
                             className="payments-image"/>
                    </button>
                </div>

                <div className="button_accounts_row3">
                    <button className="technical_accounts">
                        <div className="captions_technical">
                            <span className="icon_technical"><MdOutlineSettingsApplications/></span>
                            <span className="text_technical">Technical</span>
                        </div>
                        <img src={technical_accounts} alt="Technical"
                             className="technical-image"/>
                    </button>

                    <button className="parent-guardian_accounts">
                        <div className="captions_parent-guardian">
                            <span className="icon_parent-guardian"><IoPeopleCircleOutline/></span>
                            <span className="text_parent-guardian">Parent/ Guardian Support</span>
                        </div>
                        <img src={parent_accounts} alt="parent-guardian"
                             className="parent-guardian-image"/>
                    </button>
                </div>
            </div>

            {/*==================================== Enterprise ==================================*/}
            <div className="regional_enterprise" id="Enterprise">
                <h2 className="text_regional-enterprise">Enterprise</h2>
                <div className="button_enterprise_row1">
                    <button className="unrealengine_enterprise">
                        <img src={anhdomixi_enterprise} alt='unrealengine'
                             className="unrealengine-image"/>
                        <span className="icon_u"><SiUnrealengine/></span>
                        <span className="text_unrealengine">UNREAL ENGINE</span>
                        <span className="icon_muiten" style={{fontSize: '25px'}}><GoArrowUpRight/></span>
                    </button>
                </div>

                <div className="button_enterprise_row2">
                    <button className="marketplace_enterprise">
                        <img src={anhdomixi_enterprise} alt='marketplace'
                             className="marketplace-image"/>
                        <span className="icon_u"><SiUnrealengine/></span>
                        <span className="text_marketplace">MARKETPLACE</span>
                        <span className="icon_muiten" style={{fontSize: '25px'}}><GoArrowUpRight/></span>
                    </button>

                    <button className="unrealeditor_enterprise">
                        <img src={anhdomixi_enterprise} alt='unrealeditor'
                             className="unrealeditor-image"/>
                        <span className="text_unrealeditor">UNREAL EDITOR FOR FORTNITE</span>
                        <span className="icon_muiten" style={{fontSize: '25px'}}><GoArrowUpRight/></span>
                    </button>
                </div>

                <div className="button_enterprise_row3">
                    <button className="twinmotion_enterprise">
                        <img src={anhdomixi_enterprise} alt='twinmotion'
                             className="twinmotion-image"/>
                        <span className="icon_row3"><SiMercedes/></span>
                        <span className="text_twinmotion">Twinmotion</span>
                        <span className="icon_muiten" style={{fontSize: '25px'}}><GoArrowUpRight/></span>
                    </button>

                    <button className="onlineservices_enterprise">
                        <img src={anhdomixi_enterprise} alt='onlineservices'
                             className="onlineservices-image"/>
                        <span className="icon_row3"><SiEpicgames/></span>
                        <span className="text_onlineservices">Online Services</span>
                        <span className="icon_muiten" style={{fontSize: '25px'}}><GoArrowUpRight/></span>
                    </button>

                    <button className="kws_enterprise">
                        <img src={anhdomixi_enterprise} alt='kws'
                             className="kws-image"/>
                        <span className="icon_row3"><BsWrenchAdjustableCircle/></span>
                        <span className="text_kws">KWS|KIDS WEB SERVICES</span>
                        <span className="icon_muiten" style={{fontSize: '25px'}}><GoArrowUpRight/></span>
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Mid;
