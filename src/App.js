import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor (props) {
    super(props);
    this.state = {
      current_id: Math.floor((Math.random() * 5) + 1),
    };
    this.handleClick = this.handleClick.bind(this);
}
  handleClick() {
    this.setState({
      current_id: Math.floor((Math.random() * 5) + 1),
    });
  }
  render() {
    const id = this.state.current_id;
    const path = "/assets/image/" + id + ".jpg";
    
    return (
      <div>
        <button onClick={this.handleClick}>
          load another image
          </button>
        <img src={path} alt = "for user" width="250" height="250"/>;
      </div>
      );
  }
}

export default App;
