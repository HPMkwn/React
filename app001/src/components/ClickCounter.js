import React, { Component } from 'react'
import Counter from './Counter';

class ClickCounter extends Component {
    render() {
        const {name ,count , countHandler} = this.props;
        return (
            <div>
                <h1  onClick={countHandler}>{name} clicked {count} times</h1>
            </div>
        )
    }
}

export default Counter(ClickCounter);
