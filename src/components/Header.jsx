import styles from './Header.module.css';
import logoArsenalHeader from '../assets/logoArsenalHeader.svg';
import { InstagramLogo, FacebookLogo, TwitterLogo, TiktokLogo } from 'phosphor-react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Header() {

    return (

        <div className={styles.header}>


            <div className={styles.titleArea}>
                <img src={logoArsenalHeader}></img>
                <p>PALHOÇA</p>
            </div>

            <div className={styles.navBarArea}>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#">HOME</Nav.Link>
                                <Nav.Link href="#">QUEM SOMOS</Nav.Link>
                                <Nav.Link href="#">NOTICIAS</Nav.Link>
                                <Nav.Link href="#">JOGOS</Nav.Link>
                                <NavDropdown title='REDES' id="basic-nav-dropdown">
                                    <div className={styles.drompdownArea}>
                                        <NavDropdown.Item href="#action/3.1"><InstagramLogo size={32} color="#0d0c0c" /></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2"><FacebookLogo size={32} color="#0d0c0c" /></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"><TwitterLogo size={32} color="#0d0c0c" /></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"><TiktokLogo size={32} color="#0d0c0c" /></NavDropdown.Item>
                                    </div>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </div>

    );
};
