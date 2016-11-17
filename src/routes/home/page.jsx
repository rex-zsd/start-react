import React, {Component, PropTypes} from 'react';
import styles from './style.less';

class Index extends Component {
    static propTypes = {
        getText: PropTypes.func.isRequired,
        str: PropTypes.string.isRequired,
        fetchDataSync: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.getText('this is index');
        // this.props.fetchDataSync();
    }
    render() {
        return (
            <div className={styles.home}>{this.props.str}</div>
        );
    }
}

export default Index;
