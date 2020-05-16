import React, { Component } from 'react'
import axios from 'axios'
 

export default class MountingLifeCycle extends Component {
    
    constructor(props) {
        super(props);
        this.state ={
            data : {first_name : "herat makwana"},
            fetching : false,
            err : null
        }
    }


    componentDidMount(){
        console.log('component did mount lifecycle');
        this.setState({fetching : true});
        
        axios.get('https://reqres.in/api/users/2').then((result) => {
            console.log(result.data.data);
            
            this.setState({ data : result.data.data,fetching : false });
            console.log(this.state.data);
                
        }).catch((err) => {
            this.setState({err ,fetching : false })    
        });
    }


    render() {
        
        if(this.state.fetching)return <div>Loading ...</div>

        if(this.state.err) return(<div>{this.state.err.message}</div>)
        
        return (
            <div>
            {this.state.data.first_name}
            </div>
        )
    }

}
