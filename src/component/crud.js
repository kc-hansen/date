import React, { Component } from 'react';
//import logo from './logo.svg';
//import './reset.css';
//import './App.css';
//import './pictures/background.png';
import axios from 'axios';



class Crud extends Component {

    constructor() {
      super()
      this.state = {
       
      };
      this.submitdate = this.submitdate.bind(this);
      this.subupdate = this.subupdate.bind(this);
      // this.handleLocation = this.handleLocation.bind(this);
      // this.handlePrice = this.handlePrice.bind(this);
      // this.handleResult = this.handleResult.bind(this);
    }
  
    handleLocation(location) {
      this.setState({
        location: location
      })
  
    }
    
    handleUpdate(id,location,price,result) {
      this.setState(
        this.state.originalDate.location(this.state.location),
        this.state.originalDate.price(this.state.price),
        this.state.originalDate.result(this.state.result),
    )
    }
    handlePrice(price) {
      this.setState({
        price: price
      })
    }
    handleResult(result) {
      this.setState({
        result: result
      })
      console.log(this.state)
    }
  
    submitdate() {
      axios.post('/api/dates', { location: this.state.location, price: this.state.price, result: this.state.result });
//    axios.post('/api/dates', {price:this.state.price});
 //   axios.post('/api/dates', {result:this.state.result});
    }
    subupdate() {
      axios.put('/api/dates:id', { location: this.state.location, price: this.state.price, result: this.state.result });
    }

     getDate() {
       axios.get('/api/dates:id')
       console.log("here is your date")
     }
  
     addDate() {
       axios.put('/api/dates:id')
     }
  
     deleteDate() {
       axios.delete('/api/dates:id')
     }
    render() {
      return (
  
  
  
        <div className="App">
  
          <header className="App-header">
            <img src='/pictures/modnlogo.jpg' height="150px" width="150px" />
            <h1 className="App-title"></h1>
          </header>
          <div className='background'>
  
            <p className="App-intro">
              Here to help you become a better date. Help increase your chances of a second date!
          </p>
            <div className="leftside">
              <div className="create"><h1>CREATE</h1>
                Location <input type="text" onChange={(e) => this.handleLocation(e.target.value)} />
                Price <input type="text" onChange={(e) => this.handlePrice(e.target.value)} />
                Result <input type="text" onChange={(e) => this.handleResult(e.target.value)} />
                <button onClick={this.submitdate}>Submit Date Idea</button>
              </div>
              <div className="readbox">
                <div className="read"><h1>READ</h1>
                  <input type="text" onChange={(e) => this.handleRead(e.target.value)} />
                  <button onClick={this.getDate}>Display Date Idea</button>
                  <li className="readdisp">this.id</li>
                  <li className="readdisp">this.location</li>
                  <li className="readdisp">this.price</li>
                  <li className="readdisp">this.result</li>
  
                </div>
              </div>
              <div className="update"><h1>UPDATE</h1>
                Date ID<input type="text" onChange={(e) => this.handleUpdate(e.target.value)} />
                Location <input type="text" onChange={(e) => this.handleLocation(e.target.value)} />
                Price <input type="text" onChange={(e) => this.handlePrice(e.target.value)} />
                Result <input type="text" onChange={(e) => this.handleResult(e.target.value)} />
                <button onClick={this.subupdate}>Submit Date Change</button>
              </div>
              <div className="delete"><h1>DELETE</h1>
                Date ID<input type="text" onChange={(e) => this.handleLocation(e.target.value)} />
              </div>
              <li className="readdisp">Date has been deleted</li>
            </div>
          </div>
        </div>
      );
    }
  }
  export default Crud;