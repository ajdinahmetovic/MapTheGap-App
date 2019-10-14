import React from 'react';
import '../styles/BlockThree.scss'
import { Card } from './Card';
import { CarouselBlock } from './CarouselBlock'
export class BlockThree extends React.Component {
    render(){
        return (
              <div className="BlockThree">
                  <div className="BlockThree__content">
                      <p className="BlockThree__content__title">
                        TOP 3
                      </p>
                      <p className="BlockThree__content__title2">
                        SOLVED PROBLEMS IN YOUR AREA
                      </p>
                      <p className="BlockThree__content__description">
                      Provides access to congue sit amet urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                      </p>
                  </div>

                  <div className="BlockThree__carousel">
                    <Card/>
                  </div>

              </div>
        );
    }
}

