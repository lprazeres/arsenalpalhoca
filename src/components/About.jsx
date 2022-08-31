import styles from './About.module.css';
import logoArsenalHeader from '../assets/logoArsenalHeader.svg';

import Container from 'react-bootstrap/Container';

export function About() {
    return (
        <Container className={styles.about}>
            <div className={styles.borderA}>
                <div className={styles.borderB}>
                    <img className={styles.aboutLogo} src={logoArsenalHeader}></img>
                    <p>
                        Fundada em 2006, somos a maior torcida organizado do Arsenal da Palhoça. Nossa missão é apoiar o Arsenal nas vitórias (que sejam muitas), ou nas derrotas.
                    </p>
                    <p>
                        Nos encontramos todas as semanas no bar do seu Ori, Jardim Aquários, e ficamos TPM (Totalmente Pirados e Malucos), enquanto apoiamos o maior de Londres.
                    </p>
                    <p>
                        Sim, exatamente o que você está pensando. Venha fazer parte do nosso time!!
                    </p>
                </div>
            </div>
        </Container>
    );
}