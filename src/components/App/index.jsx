import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.less';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    const { props } = this;
    return <div className={styles.a}>hello world! {props.children}</div>;
  }
}
