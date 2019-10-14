import React from 'react';
import '../styles/BlockOne.scss'
import { Button } from '../../common/components/Button';
import ideaVec from '../assets/idea.svg'
import { Link } from 'react-router-dom';


export class BlockOne extends React.Component {
    render() {
        return (
            <div className="BlockOne">
                <div className="BlockOne__nav">
                    <div className="BlockOne__nav__brand">
                        <div>
                        </div>
                    </div>
                    <Link to='/login'>
                        <Button
                            text={"Login"} 
                            type={"Login"}
                        />
                    </Link>
                    <div className="BlockOne__nav__brand__distancer">

                    </div>
                    <Button
                        text={"Register"}
                        type={"Register"}
                    />
                </div>
                <div className="BlockOne__heading">
                    <div className="BlockOne__heading__content">
                        <p className="BlockOne__heading__content__txt1">
                            Trying to find solution
                        </p>
                        <p className="BlockOne__heading__content__txt2">
                            for local problem ?
                        </p>
                        <p className="BlockOne__heading__content__txt3">
                            solve.it is platform for lorem ipsum dolorem sit
                            consectetur adipiscing elit. Integer felis mi, 
                            aliquam at aliquet pellentesque.
                        </p>
                     
                    </div>
                    <div className="BlockOne__heading__animation">
                        <img alt="img" className="BlockOne__heading__animation__img" src={ideaVec}/>
                    </div>
                </div>
            </div>
        );
    }
}

