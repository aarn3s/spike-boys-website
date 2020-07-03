import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home'
import { AboutTheSport } from './AboutTheSport'
import { Contact } from './Contact'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import { Jumbotron } from './components/Jumbotron'
import { Learn } from './Learn'
import { Shop } from './Shop'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/opi" component={Learn} />
              <Route exact path="/osta" component={Shop} />
              <Route path="/tietoa-lajista" component={AboutTheSport} />
              <Route path="/ota-yhteytta" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>       
      </React.Fragment>
    );
  }
}

export default App;
