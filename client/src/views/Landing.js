import React from 'react';
import { BlockOne } from '../_landing/components/BlockOne';
import { BlockTwo } from '../_landing/components/BlockTwo';
import { BlockFooter } from '../_landing/components/BlockFooter';
import { BlockThree } from '../_landing/components/BlockThree';

export class Landing extends React.Component {
    render() {
        return (
            <div>
                <BlockOne/>
                <BlockTwo/>
                <BlockThree/>
                <BlockFooter/>
            </div>
        );
    }
}

