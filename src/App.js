import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Home from './components/Home/Home'
import Destination from './components/Destination/Destination'
import Delhi from './components/State/Delhi'
import Goa from './components/State/Goa'
import Uttarakhand from './components/State/Uttarakhand'
import Sikkim from './components/State/Sikkim'
import Gujarat from './components/State/Gujarat'
import Rajasthan from './components/State/Rajasthan'
import Maharashtra from './components/State/Maharashtra'
import Kerala from './components/State/Kerala'
import HimachalPradesh from './components/State/HimachalPradesh'
import JammuKashmir from './components/State/JammuKashmir'
import TamilNadu from './components/State/TamilNadu'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/destination" component={Destination} />
          <Route path="/contact" component={Contact} />
          <Route path="/goa" component={Goa} />
          <Route path="/uttarakhand" component={Uttarakhand} />
          <Route path="/delhi" component={Delhi} />
          <Route path="/jammu-kashmir" component={JammuKashmir} />
          <Route path="/maharashtra" component={Maharashtra} />
          <Route path="/kerala" component={Kerala} />
          <Route path="/sikkim" component={Sikkim} />
          <Route path="/rajasthan" component={Rajasthan} />
          <Route path="/himachal-pradesh" component={HimachalPradesh} />
          <Route path="/tamilnadu" component={TamilNadu} />
          <Route path="/gujarat" component={Gujarat} />
          <Footer />
          
        </div>
      </Router>
    );
  }
}

export default App;
