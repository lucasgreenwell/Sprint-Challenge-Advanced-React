import React from "react";
import axios from "axios";




class Players extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        //    console.log(res)
        this.setState({ data: res.data });
        console.log(this.state.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="cardContainer">
        {this.state.data.map(player => {
          return (
            <div className="card">
              <h2 className="carditem">{player.name}</h2>
              <div className="carditem">{player.country}</div>
              <div className="carditem">Searches:{player.searches}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Players;
