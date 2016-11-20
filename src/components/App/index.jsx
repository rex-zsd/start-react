import React, { PropTypes, Component } from 'react';
import styles from './style.less';

class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    }

    render() {
        const {props} = this;
        return (
            <div className={styles.a}>
                hello world! {props.children}
            </div>
        );
    }
}

module.exports = App;
