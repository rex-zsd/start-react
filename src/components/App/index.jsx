import React, { PropTypes } from 'react';
import './style.less';

const propTypes = {
  children: PropTypes.object.isRequired,
};

function App(props) {
  return (
    <div>
      hello world! {props.children}
    </div>
  );
}

App.propTypes = propTypes;

module.exports = App;
