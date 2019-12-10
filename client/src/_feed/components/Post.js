import React from "react";
import "../styles/Post.scss";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import ngoIco from "../assets/ngo.svg";
import upVote from "../assets/upwote.svg";
import vote from "../assets/vote.svg";

import youthIco from "../assets/youth.svg";
import { Button } from "../../common/components/Button";

class Post extends React.Component {
  componentWillMount() {
    this.setState({ voted: this.props.voted });
  }
  stat = {
    voted: this.props.voted
  };
  //https://music.youtube.com/watch?v=sQKNaVKzjSI&list=RDMMDbBbnHI7JdU
  render() {
    return (
      <div className="Post">
        <div className="Header">
          <div className="Header__profileContainer">
            <img
              className="Header__profileContainer__img"
              src="https://api.adorable.io/avatars/400/42621c0aeeefffbef5421b9e7a02b389.png"
            />
            <div className="Header__profileContainer__nameContainer">
              <p className="Header__profileContainer__nameContainer__name">
                Memo Memisevic
              </p>
              <p className="Header__profileContainer__nameContainer__category">
                in <a>Picka Materina</a>
              </p>
            </div>
          </div>
          <div className="Header__supportContainer">{this.renderSupport()}</div>
        </div>

        <div className="Post__imgContainer">
          <img className="Post__imgContainer__img" src={this.props.image} />
        </div>
        <div className="Post__descriptionContainer">
          <p className="Post__descriptionContainer__title">
            {this.props.data.title}
          </p>
          <p className="Post__descriptionContainer__description">
            <b>
              {this.context.t("APP.PROBLEM")}
              {": "}
            </b>
            {this.props.data.detailed_description}
          </p>

          <p className="Post__descriptionContainer__solution">
            <b>
              {this.context.t("APP.SOLUTION")}
              {": "}
            </b>
            {this.props.data.proposed_solution}
          </p>
        </div>
        <div className="Action">
          <div className="Action__line">
            <div className="Action__container">
              <div
                onClick={() => {
                  this.setState({ voted: !this.state.voted });
                }}
                className="Action__upvoteContainer"
              >
                <img
                  src={this.state.voted ? upVote : vote}
                  className="Action__upvoteContainer__img"
                />
                <p className="Action__upvoteContainer__txt">
                  {this.context.t("APP.UPWOTE")}
                </p>
              </div>
              <div className="Action__supportContainer">
                <Button text={this.context.t("APP.SUPPORT")} type={"Support"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderSupport = () => {
    return <img className="Header__supportContainer__img" src={ngoIco} />;
  };
}
Post.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
  err: state.authReducer.NGO_ERR
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
