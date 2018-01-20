import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';
//import './pictures/background.png';
import axios from 'axios';

class App extends Component { 

  constructor() {
    super()
    this.state= {};
    this.submitdate = this.submitdate.bind(this);
  }

  handleLocation(location){
this.setState({location:location

})  
console.log(this.state)
}
submitdate (){
  axios.post('/api/dates', {location:this.state.location})
}

  render() {
    return (



      <div className="App">

        <header className="App-header">
          <img src='/pictures/modnlogo.jpg' height="100px" width="100px" />
          <h1 className="App-title">@Master Of Date Night</h1>
        </header>
        <div className='background'>
          

          <p className="App-intro">
            Here to help you become a better date. Help increase your chances of a second date!
        </p>
          <div className="leftside">
            <div className="create"><h1>CREATE</h1>
            Location <input type="text" onChange={(e) => this.handleLocation(e.target.value)}/>
            Price <input type="text"/>
            Result <input type="text"/>
            <button onClick={this.submitdate}>Submit Date Idea</button>
            </div>
            <div className="read"><h1>READ</h1></div>
            <div className="update"><h1>UPDATE</h1></div>
            <div className="delete"><h1>DELETE</h1></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
