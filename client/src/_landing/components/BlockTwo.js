import React from 'react';
import '../styles/BlockTwo.scss'
import lottie from "lottie-web";


export class BlockTwo extends React.Component {

    componentDidMount() {
        lottie.loadAnimation({
          container: document.getElementById("animation"),
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "/lottie/megaphone.json" 
        });
      }

    render() {
        return (
            <div className="BlockTwo">
               
               <div className="BlockTwo__animation">
                   <div className="BlockTwo__animation__lottie" id="animation"/>
               </div>

               <div className="BlockTwo__content">
                    <p className="BlockTwo__content__txt">
                    Provides access to congue sit amet urna.
                     Interdum et malesuada fames ac ante ipsum 
                     primis in faucibus. Vivamus eu nibh quis
                      dui iaculis luctus. Mauris dolor velit,
                       lacinia eget turpis non, pulvinar faucibus
                        turpis. Nam non odio ipsum. Sed finibus
                         dui turpis,
                    </p>
                </div>

            </div>
        );
    }
}

