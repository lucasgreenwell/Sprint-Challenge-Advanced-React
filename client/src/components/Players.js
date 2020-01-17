import React from 'react';
import axios from 'axios'

class Players extends React.Component{
    constructor(){
        super();
        this.state={
            data: []
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:5000/api/players`)
           .then(res => {
            //    console.log(res)
               this.setState({data:res.data})
               console.log(this.state.data)
               })
           .catch(err => {console.log(err)})
    }

    render(){
        return (<div>
            {this.state.data.map(player => {
            return (<div>
                <div>{player.name}</div>
                <div>{player.country}</div>
                <div>{player.searches}</div>
            </div>)
            })}
        </div>)
    }
}

export default Players 