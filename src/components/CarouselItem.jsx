import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import Banner from '../assets/static/chacal.JPG';
const CarouselItem = () =>(

        <div className="panoptikum-carousel__item panoptikum-carousel__item--image">
            <div className="image-view">
                <div className="image-view__container">
                    <img className="image-view__content" src={Banner}
                    alt="" title="Red Bull Batalla de los Gallos – National Final Chile – Hero Art" /></div>
            </div>
        </div>
);

export default CarouselItem;