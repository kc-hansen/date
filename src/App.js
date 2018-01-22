import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';
//import './pictures/background.png';
import axios from 'axios';
import Crud from './component/crud';

class App extends Component {

  constructor() {
    super()
    this.state = {};

  }

  


  render() {
    return (


<Crud/>
//       <div className="App">

//         <header className="App-header">
//           <img src='/pictures/modnlogo.jpg' height="150px" width="150px" />
//           <h1 className="App-title"></h1>
//         </header>
//         <div className='background'>

//           <p className="App-intro">
//             Here to help you become a better date. Help increase your chances of a second date!
//         </p>
//           <div className="leftside">
//             <div className="create"><h1>CREATE</h1>
//               Location <input type="text" onChange={(e) => this.handleLocation(e.target.value)} />
//               Price <input type="text" onChange={(e) => this.handlePrice(e.target.value)} />
//               Result <input type="text" onChange={(e) => this.handleResult(e.target.value)} />
 //             <button onClick={this.submitdate}>Submit Date Idea</button>
//             </div>
//             <div className="readbox">
//               <div className="read"><h1>READ</h1>
//                 <input type="text" onChange={(e) => this.handleRead(e.target.value)} />
//                 <button onClick={this.getDate}>Display Date Idea</button>
//                 <li className="readdisp">this.id</li>
//                 <li className="readdisp">this.location</li>
//                 <li className="readdisp">this.price</li>
//                 <li className="readdisp">this.result</li>

//               </div>
//             </div>
//             <div className="update"><h1>UPDATE</h1>
//               Date ID<input type="text" onChange={(e) => this.handleLocation(e.target.value)} />
//               Location <input type="text" onChange={(e) => this.handleLocation(e.target.value)} />
//               Price <input type="text" onChange={(e) => this.handlePrice(e.target.value)} />
//               Result <input type="text" onChange={(e) => this.handleResult(e.target.value)} />
//               <button onClick={this.submitdate}>Submit Date Change</button>
//             </div>
//             <div className="delete"><h1>DELETE</h1>
//               Date ID<input type="text" onChange={(e) => this.handleLocation(e.target.value)} />
//             </div>
//             <li className="readdisp">Date has been deleted</li>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
    )
    };
  }
export default App;