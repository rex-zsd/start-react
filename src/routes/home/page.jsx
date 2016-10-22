import React, { Component, PropTypes } from 'react';
import styles from './style.less';

const propTypes = {
  getText: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
  fetchDataSync: PropTypes.func.isRequired,
};

class Index extends Component {
  componentDidMount() {
    this.props.getText('this is index');
    this.props.fetchDataSync();
  }
  render() {
    return (
      <div className={styles.home}>{this.props.str}</div>
    );
  }
}

Index.propTypes = propTypes;

export default Index;
