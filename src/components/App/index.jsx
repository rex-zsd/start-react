import React, { PropTypes } from 'react';
import styles from './style.less';

const propTypes = {
  children: PropTypes.object.isRequired,
};

function App(props) {
  return (
    <div className={styles.a}>
      hello world! {props.children}
    </div>
  );
}

App.propTypes = propTypes;

module.exports = App;
