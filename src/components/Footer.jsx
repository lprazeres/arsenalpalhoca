import styles from './Footer.module.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { InstagramLogo, FacebookLogo, TwitterLogo, TiktokLogo } from 'phosphor-react';

export function Footer() {
    return (
        <Container className={styles.footer}>

            <Col className={styles.rightColum}>
                <p>Copyrights © 2022 - Arsenal Brasil</p>
                <p>Todos os direitos reservados.</p>
                <p>arsenalpalhoca@gmail.com</p>
            </Col>
            <Col className={styles.leftColum}>
                    <InstagramLogo size={32} className={styles.icon} color="#cc0000" />
                    <FacebookLogo size={32} className={styles.icon} color="#cc0000" />
                    <TwitterLogo size={32} className={styles.icon} color="#cc0000" />
                    <TiktokLogo size={32} className={styles.icon} color="#cc0000" />
            </Col>

        </Container>
    );
}