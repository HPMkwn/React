import React, { Component } from 'react'

export default class Comp extends Component {
    constructor(props) {
        super(props);
        
        this.state = props;
    }
    
    render() {
        return (
            <div>
                 Name : `{this.props.first_name}`

            </div>
        )
    }
}
