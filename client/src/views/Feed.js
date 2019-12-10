import React from "react";
import "./styles/Feed.scss";
import NavBar from "../_feed/components/NavBar";
import SideNav from "../_feed/components/SideNav";
import Post from "../_feed/components/Post";
import Create from "../_feed/components/Create";
import history from "../history";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getPosts } from "../actions/post_actions";

class Feed extends React.Component {
  componentWillMount() {
    this.props.getPosts();
    if (typeof localStorage.getItem("token") !== "string") {
      history.push("/login");
    }
  }
  state = {
    voted: false
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="Feed">
          <div className="Feed__sideNav">
            <SideNav />
          </div>
          <div className="Feed__feed">
            <Create />
            {this.renderPosts()}
          </div>
          <div className="Feed__other">
            <p>djes</p>
          </div>
        </div>
      </div>
    );
  }

  renderPosts = () => {
    console.log(this.props.problems);
    return this.props.problems.map(problem => {
      return <Post data={problem} key={problem.id} />;
    });
  };
}

Feed.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => ({
  problems: state.postReducer.problems
});
const mapDispatchToProps = {
  getPosts: () => getPosts()
};
export default connect(mapStateToProps, mapDispatchToProps)(Feed);
