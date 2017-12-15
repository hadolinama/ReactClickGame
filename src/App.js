import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      clicks: 0
    }

    this.onclickhandler = this.onclickhandler.bind(this)
    
  }
  onclickhandler(){
  // Updating the state
    this.setState({clicks: this.state.clicks += 1})
  }
  render() {
    console.log('testing State', this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Guessing Dog Game</h1>
          <p>Click on a dog for the correct guess</p>
          <h1>Clicks:{this.state.clicks}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* hooking up onlickhandler */}
        <img onClick = {this.onclickhandler} src="https://images.unsplash.com/photo-1493916665398-143bdeabe500?auto=format&fit=crop&w=1567&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"></img>
        <img onClick = {this.onlclickhandler} src="https://images.unsplash.com/photo-1436658040953-a21ef6596481?auto=format&fit=crop&w=1653&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"></img>
        <img onClick = {this.onlclickhandler} src="https://images.unsplash.com/photo-1447684808650-354ae64db5b8?auto=format&fit=crop&w=1647&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"></img>
        <img onClick = {this.onlclickhandler} src="https://images.unsplash.com/photo-1500309725725-09d5f645646a?auto=format&fit=crop&w=2550&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"></img>
        <img onClick = {this.onlclickhandler} src="https://images.unsplash.com/photo-1506242395783-cec2bda110e7?auto=format&fit=crop&w=2550&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"></img>
        <img onClick = {this.onlclickhandler} src="https://images.unsplash.com/photo-1452447224378-04c089d77aa4?auto=format&fit=crop&w=2550&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"></img>
      </div>
    );
  }
}

export default App;
