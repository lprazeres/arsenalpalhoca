import styles from './Notice.module.css';
import noticeOne from '../assets/noticeOne.jpg';
import artetaArsenal from '../assets/artetaArsenal.jpg';
import tomSmith from '../assets/tomSmith.jpg';
import brookeNorton from '../assets/brookeNorton.png';
import hurtigSigns from '../assets/hurtigSigns.jpg';
import ellenWhite from '../assets/ellenWhite.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export function Notice() {
    return (
        <Container className={styles.body}>
            <h1 className={styles.Maintitle}>Noticias</h1>
            <Row className={styles.rowNotice}>
                <Col className={styles.noticeBox} >
                <img src={noticeOne} alt="Arsenal Palhoça party"/>
                <h2>Salah-Eddine joins Hull City on loan</h2>
                <Button variant="outline-light">Saiba mais</Button>
                </Col>
                <Col className={styles.noticeBox}>
                <img src={artetaArsenal} alt="Arsenal Palhoça party"/>
                <h2>Arteta stunned by Saliba strike</h2>
                <Button variant="outline-light">Saiba mais</Button>
                </Col>
                <Col className={styles.noticeBox}>
                <img src={tomSmith} alt="Arsenal Palhoça party"/>
                <h2>Tom Smith joins Bromley on loan</h2>
                <Button variant="outline-light">Saiba mais</Button>
                </Col>
            </Row>
            <div className={styles.secondRow}>
            <Row className={styles.rowNotice}>
                <Col className={styles.noticeBox}>
                <img src={brookeNorton} alt="Arsenal Palhoça party"/>
                <h2>Brooke joins Rotherham on loan</h2>
                <Button variant="outline-light">Saiba mais</Button>
                </Col>
                <Col className={styles.noticeBox}>
                <img src={hurtigSigns} alt="Arsenal Palhoça party"/>
                <h2>Arsenal complete Lina Hurtig signing</h2>
                <Button variant="outline-light">Saiba mais</Button>
                </Col>
                <Col className={styles.noticeBox} >
                <img src={ellenWhite} alt="Arsenal Palhoça party"/>
                <h2>Ellen White announces her retirement</h2>
                <Button variant="outline-light">Saiba mais</Button>
                </Col>
            </Row>
            </div>
        </Container>
    );
}