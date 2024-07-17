import React, {useState} from 'react';
import '../../styles/Support/Mid.css';

import { IoGameControllerOutline } from "react-icons/io5";
import {FaSearch, FaCircle} from 'react-icons/fa';
import { GoArrowDownRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { SiEpicgames } from "react-icons/si";
import { MdAccountBox } from "react-icons/md";
import { RiShieldStarLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa6";
import { SiUnrealengine } from "react-icons/si";
import fortnite_games from "../../img/Support/fortnite_games.jpg";
import lego_games from "../../img/Support/lego_games.jpg";
import rocketleague_games from "../../img/Support/rocketleague_games.jpg";
import fall_guys_games from "../../img/Support/fall_guys_games.png";
import festival_games from "../../img/Support/festival_games.jpg";
import rocket_racing_games from "../../img/Support/rockket_racing_games.jpg"
import rocket_leaguewipe_games from "../../img/Support/rocket_leaguewipe_games.jpg"
import image_gamebutton from "../../img/Support/image_gamebutton.jpg";
import image_accountsbutton from "../../img/Support/image_accountsbutton.jpg";
import image_enterprisebutton from "../../img/Support/image_enterprisebutton.jpg";
import epicgames_accounts from "../../img/Support/epicgames_accounts.jpg";
import Accounts_accounts from "../../img/Support/Accounts_accounts.jpg";
import ourcreate_accounts from "../../img/Support/ourcreate_accounts.jpg";
import payments_accounts from "../../img/Support/payments_accounts.jpg";
import anhdomixi_enterprise from "../../img/Support/anhdomixi_enterprise.jpg"
import alanwake_games from "../../img/Support/alanwake_games.jpg";
import horizonchase_games from "../../img/Support/horizonchase_games.jpg";
import pcbuild_games from "../../img/Support/pcbuild_games.jpg";
import pcbuild2_games from "../../img/Support/pcbuild2_games.jpg";
import alanwakeR_games from "../../img/Support/alanwakeR_games.jpg";
import enterprise_1 from "../../img/Support/enterprise_1.jpg";
import enterprise_2 from "../../img/Support/enterprise_2.jpg";
import enterprise_3 from "../../img/Support/enterprise_3.jpg";
import {Link} from "react-router-dom";
import Service from "../../service/Service";

const Mid = () => {

    // kiem tra da login hay chua
    const isAuthenticated = Service.isAuthenticated();

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
            <div className="top_headermid">

                {/*dang nhap thanh cong mat thong bao */}
                {!isAuthenticated &&
                    <div className="bg-alert">
                        <div className="container">
                            <span>!</span>
                            <h1>You are not currently logged in. Log in to your Epic Games account <a
                                href="/login">here</a> to view, update, and submit requests for support.</h1>
                        </div>
                    </div>
                }

                <div className="search">
                    <div className="text-welcome">
                        <h1>Welcome to Epic Games Player Support</h1>
                        <a href="https://status.epicgames.com/" className="server-status">
                            SERVER STATUS: <strong> ALL SYSTEMS OPERATIONAL</strong> <FaCircle
                            className="icon-online"/>
                        </a>
                    </div>
                    <div className="search-container">
                        <FaSearch className="search-icon"/>
                        <input type="text" placeholder="SEARCH HELP CENTER..." className="search-input"/>
                    </div>
                </div>
            </div>

            <div className="categories">
                <div className="list-category">
                    <a className="category" onClick={() => scrollToSection({sectionId: 'Games'})}>
                        <div className="category-image">
                            <img src={image_gamebutton} alt='Game' className="image"/>
                            <img src="https://cdn2.unrealengine.com/games-icon-e0db3c848dfd.svg" className="icon"/>
                        </div>
                        <span className="category-text">Games</span>
                    </a>
                    <a className="category" onClick={() => scrollToSection({sectionId: 'Accounts'})}>
                        <div className="category-image">
                            <img src={image_accountsbutton} alt='Accounts' className="image"/>
                            <img src="https://cdn2.unrealengine.com/accounts-icon-d346f9e011ca.svg" className="icon"/>
                        </div>
                        <span className="category-text">Accounts</span>
                    </a>
                    <a className="category" onClick={() => scrollToSection({sectionId: 'Enterprise'})}>
                        <div className="category-image">
                            <img src={image_enterprisebutton} alt='Enterprise' className="image"/>
                            <img src="https://cdn2.unrealengine.com/enterprise-icon-ba12af4611a7.svg" className="icon"/>
                        </div>
                        <span className="category-text">Enterprise</span>
                    </a>
                </div>
            </div>

            {/*==================================== Game ==================================*/}
            <div className="container_mid">
                <div className="regional_game" id="Games">
                    <h2 className="text_regional_game" id="text_game">Games</h2>
                    <div className="button_games_row1">
                        <div className="game-button">
                            <Link to="/support/report">
                                <button className="fortnite_games">
                                    <img src={fortnite_games} alt='Fortnite' className="fortnite-image"/>
                                </button>
                            </Link>
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
                </div>

                {/*==================================== Enterprise ==================================*/}
                <div className="regional_enterprise" id="Enterprise">
                    <h2 className="text_regional-enterprise">Enterprise</h2>
                    <div className="button_enterprise_row1">
                        <button className="unrealengine_enterprise">
                            <img src={enterprise_3} alt='unrealengine'
                                 className="unrealengine-image"/>
                            <span className="icon_u"><SiUnrealengine/></span>
                            <span className="text_unrealengine">UNREAL ENGINE</span>
                            <span className="icon_muiten" style={{fontSize: '25px'}}><GoArrowUpRight/></span>
                        </button>
                    </div>

                    <div className="button_enterprise_row2">
                        <button className="marketplace_enterprise">
                            <img src={enterprise_1} alt='marketplace'
                                 className="marketplace-image"/>
                            <span className="icon_u"><SiUnrealengine/></span>
                            <span className="text_marketplace">MARKETPLACE</span>
                            <span className="icon_muiten" style={{fontSize: '25px'}}><GoArrowUpRight/></span>
                        </button>

                        <button className="unrealeditor_enterprise">
                            <img src={enterprise_2} alt='unrealeditor'
                                 className="unrealeditor-image"/>
                            <span className="text_unrealeditor">UNREAL EDITOR FOR FORTNITE</span>
                            <span className="icon_muiten" style={{fontSize: '25px'}}><GoArrowUpRight/></span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Mid;
