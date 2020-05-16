import React, { Component ,useE} from 'react'

export default class Calculator extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value : 0
        }
        this.updateValue = this.updateValue.bind(this);
    }
    
    updateValue(){
        this.setState({value : 5});    
    }
    
    render() {
        return (
            <div>
                {/* <Display></Display> */}
                <div className="display">
                <h1 className="value">{this.state.value}</h1>
                </div>
                <button onClick={this.updateValue}>click me</button>
            </div>
        )
    }
}
