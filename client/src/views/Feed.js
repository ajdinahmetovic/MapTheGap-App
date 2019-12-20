import React from 'react';
import './styles/Feed.scss';
import NavBar from '../_feed/components/NavBar';
import SideNav from '../_feed/components/SideNav';
import Post from '../_feed/components/Post';
import Create from '../_feed/components/Create';
import history from '../history';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getPosts } from '../actions/post_actions';
import { BrowserView, MobileView } from 'react-device-detect';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Feed extends React.Component {
  componentWillMount() {
    this.props.getPosts();
    if (typeof localStorage.getItem('token') !== 'string') {
      history.push('/login');
    }
  }

  render() {
    return (
      <div>
        <BrowserView>
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
        </BrowserView>
        <MobileView>
          <NavBar />
          <div className="Feed_mobile">
            <div className="Feed_mobile__feed">
              <Create />
              {this.renderPosts()}
            </div>
          </div>
        </MobileView>
      </div>
      /*
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
      */
    );
  }

  renderPosts = () => {
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
