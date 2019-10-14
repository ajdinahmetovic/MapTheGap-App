import React from 'react';
import '../styles/CarouselBlock.scss'
import { Card } from './Card';
import Carousel from 'react-spring-3d-carousel';


const slides = [
    {
        key: 0,
        content: <Card/>
      },
      {
        key: 0,
        content: <Card/>
      },
    ];
export class CarouselBlock extends React.Component {
    render(){
        return (
              <div className="CarouselBlock">
                  <Carousel slides={slides} />
              </div>
        );
    }
}

