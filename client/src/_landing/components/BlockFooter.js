import React from 'react';
import '../styles/BlockFooter.scss'
import mapVec from '../assets/map.png'

export class BlockFooter extends React.Component {
    render() {
        return (
            <div className="BlockFooter">
                <div className="BlockFooter__map">
                    <img alt="map" src={mapVec} className="BlockFooter__map__img"/>
                </div>
                
            </div>
        );
    }
}