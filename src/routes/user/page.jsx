import React, {Component, PropTypes} from 'react';
import styles from './style.less';

class Index extends Component {
    static propTypes = {
        getText: PropTypes.func.isRequired,
        str: PropTypes.string.isRequired,
        fetchDataSync: PropTypes.func.isRequired
    }
    componentWillMount() {
        console.log(444);
    }
    componentDidMount() {
        this.props.getText('this is user');
        // this.props.fetchDataSync();
        console.log(this.props);
    }
    render() {
        return (
            <div className={styles.home}>{this.props.str}</div>
        );
    }
}

export default Index;
