import styles from './CarouselNotice.module.css';
import arsenalSupport from '../assets/arsenalSupport.png'
import arsenalWins from '../assets/arsenalWins.jpg'
import arsenalIvencible from '../assets/arsenalIvencible.jpg'


import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function CarouselNotice() {
    return (
        <Container>
            <Carousel className={styles.carousel}>    

                <Carousel.Item interval={1000}>
                    <Row>
                        <div className={styles.boxNotice}>
                            <Col className={styles.imageSupport}>
                                <img
                                    className="d-block w-100"
                                    src={arsenalSupport}
                                    alt="Arsenal Palhoça party"
                                />
                            </Col>
                            <Col>
                                <div className={styles.textAssosiation}>
                                    <h2 className={styles.titleAssosiation}>Venha Fazer parte do nosso time.</h2>
                                    <Button variant="outline-light">Renove seu contrato</Button>
                                    <Button variant="outline-light">Associe-se</Button>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <Row className={styles.arsenalWins}>
                        <Col>
                            <img
                                className="d-block w-100"
                                src={arsenalWins}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <div className={styles.notice}>
                                    <h3>Arsenal vence e segue na liderança da Premier League.</h3>
                                    <Button variant="outline-danger">Saiba mais.</Button>
                                </div>
                            </Carousel.Caption>
                        </Col>
                    </Row>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <Row>
                        <div className={styles.boxNotice}>
                            <Col className={styles.imageSupport}>
                                <img
                                    className="d-block w-100"
                                    src={arsenalIvencible}
                                    alt="Arsenal Palhoça party"
                                />
                            </Col>
                            <Col>
                                <h2 className={styles.titleArsenalIvencible}>O ÚNICO CAMPEÃO INVICTO DA PREMIER LEAGUE.</h2>
                            </Col>
                        </div>
                    </Row>
            </Carousel.Item>
        </Carousel>
        </Container >

    );
};

