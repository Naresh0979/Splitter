import React from 'react';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import {Home}  from './components/Home';
 import {SignUp}  from './components/signup';
 import {Login}  from './components/login';
import {Dashboard} from './components/containers/Dashboard';
export default function App() {
  return ( 
    <div className="App">
      <BrowserRouter> 

<Routes>   
          
          <Route  path = "/" element= {<Login/>}></Route>
          <Route  path = "/signup" element= {<SignUp/>}></Route>
          <Route  path = "/login" element= {<Login/>}></Route>
          <Route  path = "/Dashboard" element= {<Dashboard/>}></Route>
          
          {/* <Route exact path = "/login" component = {Login_smart}></Route> */}
          
       </Routes>
       </BrowserRouter>
      </div>
  );
}


