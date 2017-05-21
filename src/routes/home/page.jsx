import React, { Component } from 'react';
import styles from './style.less';
import PropTypes from 'prop-types';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            user: 'rex'
        };
    }
    static propTypes = {
        getText: PropTypes.func.isRequired,
        str: PropTypes.string.isRequired,
        fetchDataSync: PropTypes.func.isRequired
    }
    componentWillMount() {
        // console.log(444);
    }
    componentDidMount() {
        this.props.getText('this is index');
        // this.props.fetchDataSync();
        console.log(this.props);
        // this.props.router.push('user');
    }
    render() {
        const state = this.state;
        return (
            <div className={styles.home}>{this.props.str} {state.user}</div>
        );
    }
}

export default Index;
