import React, { Component } from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      password: ''
    };
  }

  render(){
    const { password } = this.state;

    return (
      <div className="App">
        <div className="meter">
          <input type="password" 
                  autoComplete="off" 
                  onChange={ e => this.setState({ password: e.target.value }) } />
          <PasswordStrengthMeter password = { password } />
        </div>
      </div>
    );
  }
}

export default App;
