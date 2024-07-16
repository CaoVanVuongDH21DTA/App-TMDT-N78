import React from "react";
import "../../styles/Support/Contact.css"
import {IoIosArrowBack, IoIosArrowForward, IoIosArrowRoundForward} from "react-icons/io";
import {Link} from "react-router-dom";

const Contact: React.FC = () => {
    return (
        <div className="main-contact">
            <div className="contact-header">
                <div className="contact-title">
                    <div className="title-contact-left">Main page <IoIosArrowForward className="icon-title"/></div>
                    <div className="title-contact-mid">Fortnite<IoIosArrowForward className="icon-title"/></div>
                    <div className="title-contact-right">Support request</div>
                    <Link to="/Support/Report">
                        <div className="title-mobile"><IoIosArrowBack className="icon-title-mobile"/>What are the system
                            requirements ...
                        </div>
                    </Link>
                </div>
            </div>
            <div className="contact-mid">
                <div className="contact-content">
                    <h1 className="main-content">
                        <span>We’re here to help!</span></h1>
                    <p className="secondary-content">
                        <span>If you have an Epic Games account, please log in first.</span>
                        <span>We can only provide support for the account you are logged in to.</span></p>
                </div>

                <div className="btn-contact-section">
                    <Link to="/login">
                        <button className="btn-contact-login">LOG IN</button>
                    </Link>
                    <button className="btn-contact-create">CREATE A PARENT/GUARDIAN REQUEST</button>
                </div>

                <hr className="separator"/>

                <div className="contact-help">
                    <span className="help-row1"><IoIosArrowRoundForward className="icon-help"/>I'm unable to log in to my account</span>
                    <span className="help-row2"><IoIosArrowRoundForward className="icon-help"/>I don’t have an account and I need support</span>
                </div>
            </div>
        </div>
    );
}
export default Contact;