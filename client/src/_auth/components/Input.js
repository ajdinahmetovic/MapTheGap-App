import React from 'react';
import '../styles/Input.scss'

export class Input extends React.Component {
    render() {
        return (
            <div className="Input">
                <div className="Input__box">
                    <input
                      type={this.props.type}
                      placeholder={this.props.placeholder}
                      className="Input__box__field"
                      />
                </div>
            </div>
        );
    }
}

