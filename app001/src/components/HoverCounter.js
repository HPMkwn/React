import React, { Component } from 'react'

import Counter from './Counter'
class HoverCounter extends Component {
    render() {
        const {name , count , countHandler} = this.props;
        return (
            <div>
                <h1 onMouseOver={countHandler}>
                    {name} over {count} times
                </h1>
            </div>
        )
    }
}

export default Counter(HoverCounter);