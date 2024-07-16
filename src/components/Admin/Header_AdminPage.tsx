import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../styles/Admin/Header_admin.css';
import { IoClose, IoMenu } from "react-icons/io5";

export function Header_AdminPage() {
    const [showList, setShowList] = useState(false);
    const [isMenuHeaderOpen, setIsMenuHeaderOpen] = useState(false);

    const ShowMenuHeader = () => {
        setIsMenuHeaderOpen(!isMenuHeaderOpen);
    };

    const toggleList = () => {
        setShowList(!showList);
    };

    const handleItemClick = () => {
        setIsMenuHeaderOpen(false);
        setShowList(false)
    };

    return (
        <div className="header_admin">
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand><strong>Admin Page</strong></Navbar.Brand>
                    <Nav className={`ml-auto nav_header ${isMenuHeaderOpen ? 'show' : ''}`}>
                        <div className="item-nav">
                            <Nav.Link as={Link} to="/" className="nav-link">Store</Nav.Link>
                        </div>
                        <div className="item-nav">
                            <button className="showList" onClick={toggleList}>
                                <span>List</span>
                            </button>
                            <div className={`dropdown-list ${showList ? 'active' : ''}`}>
                                <div className="backgroungd_none"></div>
                                <div className="list-profile-page">
                                    <ul className="list">
                                        <li><Nav.Link as={Link} to="/admin/list-game" onClick={handleItemClick}>List
                                            Game</Nav.Link></li>
                                        <li><Nav.Link as={Link} to="/admin/list-user" onClick={handleItemClick}>List
                                            User</Nav.Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Nav>
                    <div className="btn_menu-header" onClick={ShowMenuHeader}>
                        {isMenuHeaderOpen ? <IoClose size={25} className="btn-menu"/> :
                            <IoMenu size={25} className="btn-menu"/>}
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}
