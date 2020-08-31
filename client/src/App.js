import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


import Home from './Components/home/home'
import Navbar from './Components/navbar/navbar'
import Rooms from './Components/Rooms/rooms'
import SingleRoom from  './Components/SingleRoom/singleroom'
import Gallery from './Components/Gallery/gallery'

function App() {

  

  return (
    <div className="App">
              <BrowserRouter>
                    <Navbar />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/rooms" component={Rooms} />
                  <SingleRoom exact path="/rooms/:roomid" component={SingleRoom} />
                  <Gallery exact path="/gallery" component={Gallery} />
                </Switch>
              </BrowserRouter>
    </div>
  );
}

export default App;
