import React, { Component, PropTypes } from 'react';

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
      <div>{this.props.str}</div>
    );
  }
}

Index.propTypes = propTypes;

export default Index;
