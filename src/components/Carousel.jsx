import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({children})=>(

        <div className="panoptikum__carousel">
        <div className="panoptikum-carousel">
            {children}
        </div>
        </div>
    );

export default Carousel;