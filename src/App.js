import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppStore from './stores/AppStore.js';
import Counter from './components/Counter.jsx';
import Picture from './components/Picture.jsx';

class App extends Component {

  constructor() {
    super();
    this.state = {
      counter: AppStore.getCounterNum(),
      showPicture: AppStore.getShowPicture()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AppStore.addChangeListener( this._onChange );
  }

  componentWillUnmount() {
    AppStore.removeChangeListener( this._onChange );
  }

  _onChange() {
    this.setState({
      counter: AppStore.getCounterNum(),
      showPicture: AppStore.getShowPicture()
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Counter counterNum={this.state.counter}/>
          <Picture showPicture={this.state.showPicture}/>
      </div>
    );
  }
}

export default App;
