import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setText, fetchDataSync } from './reducer';
import styles from './style.less';

const mapStateToProps = (state, ownProps) => ({
  str: state.home.str,
});

const mapActionCreators = {
  setText,
  fetchDataSync,
};

@connect(mapStateToProps, mapActionCreators)
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: 'rex',
    };
  }

  componentDidMount() {
    // this.props.fetchDataSync();
    console.log(this.props);
    // this.props.router.push('user');
  }

  handleClick = () => {
    this.props.fetchDataSync();
  };

  render() {
    return (
      <div className={styles.home} onClick={this.handleClick}>
        {this.props.str} {this.state.user}
      </div>
    );
  }
}
