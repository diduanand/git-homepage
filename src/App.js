import React, { Component } from 'react';
import './App.css';
import LeftPanel from './LeftPanel';
import MainContent from './MainContent';
import Header from './Header';

class App extends Component {

  state = {
    userInfo: {},
    repoS: []
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="twoPanel">
          <div className="leftPanel">
          <LeftPanel userInfo={this.state.userInfo}/>
          </div>
        <div>
          <MainContent repoS={this.state.repoS} />
        </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch('https://api.github.com/users/supreetsingh247')
    .then(res => res.json())
    .then((data) => {
      this.setState({ userInfo: data })
    })
    .catch(console.log)

    fetch('https://api.github.com/users/supreetsingh247/repos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ repoS: data })
    })
    .catch(console.log)
  }
}

export default App;
