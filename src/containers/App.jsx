import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const App = () =>(
    <div className="App">
        <Header/>
        <Carousel>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
        </Carousel>
    </div>
);

export default App;