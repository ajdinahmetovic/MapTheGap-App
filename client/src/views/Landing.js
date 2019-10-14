import React from 'react';
import { BlockOne } from '../_landing/components/BlockOne';
import { BlockTwo } from '../_landing/components/BlockTwo';

export class Landing extends React.Component {
    render() {
        return (
            <div>
                <BlockOne/>
                <BlockTwo/>
            </div>
        );
    }
}

