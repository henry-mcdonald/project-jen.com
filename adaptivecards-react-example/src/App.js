import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardExample from './CardExample';
import CardFromTemplate from './Components/Sandbox/CardWithControl'

import hmacpoppa from './Components/Sandbox/Card/payloads/hmacpoppa';
import EmployeeCardTemplate from './Components/Sandbox/Card/ac-templates/EmployeeCardTemplate';


import AuthLayer from './Components/AuthLayer'
import Toolbar from './Components/Toolbar'
import Sandbox from './Components/Sandbox'
class App extends Component {

  // _cardActionExecuted = (action) => {
  //   console.log("executed action:"+JSON.stringify(action));
  // }

  render() {
    return ( <div className="appContainer">

          <div className="layer">
            <AuthLayer />
            </div>
              <div className="layer">
                <Toolbar />
              </div>

              <div className="window">
                <Sandbox />
              
              {//sample card to be removed later
              }
              
              <CardFromTemplate
              templateJSON={EmployeeCardTemplate}
              payloadJSON={hmacpoppa}
              />
              </div>



          </div>) //finito
  }
}

export default App;
