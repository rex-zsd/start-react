import React, { Component, PropTypes } from 'react';

const propTypes = {
  getText: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};

class Index extends Component {
  componentDidMount() {
    this.props.getText('this is index');
  }

  render() {
    return (
      <div>{this.props.str}</div>
    );
  }
}

Index.propTypes = propTypes;

export default Index;
