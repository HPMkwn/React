import React, { Component } from 'react'

export default class Classcomp extends Component {


    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(()=>this.clockTime(),1000);
    }

    clockTime(){
        this.setState({date : new Date()});
    }

    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}
