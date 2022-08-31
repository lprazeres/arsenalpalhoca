import './global.css';
import {Header} from './components/Header';
import { CarouselNotice } from './components/CarouselNotice';
import {About} from './components/About';
import {Notice} from './components/Notice';
import {Footer} from './components/Footer';

import Container from 'react-bootstrap/Container';


export function App() {

  return (
    <Container>
    <div className='body'>
      <div className='globalStyles'>
        <Header />
        <CarouselNotice />
        <About />
        <Notice />
        <Footer />
      </div>
    </div>
    </Container>
  );
};


