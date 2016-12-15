/**
 * Created by Administrator on 2016/12/14.
 */
import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css'
class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}
                <span>我是辛勤的搬砖工！！！</span>
            </div>
        );
    }
}

export default Greeter