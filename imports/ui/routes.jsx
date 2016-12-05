import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
// HOME
import HomeScreen from '/imports/ui/screens/home/home.screen.jsx'
// PICK BAND OR COMPANY\
import DecisionScreen from '/imports/ui/screens/home/decision.screen.jsx';
// LOGIN && SIGNUP
import LogInScreen from '/imports/ui/screens/login/login.screen.jsx'
import SignUpScreen from '/imports/ui/screens/signup/sign_up.screen.jsx'
// DASHBOARD
import Dashboard from '/imports/ui/shared/dashboard/dashboard.shared.jsx';
// BANDS
import BandsCreateScreen from '/imports/ui/screens/bands/bands_create.screen.jsx';
import BandsUpdateScreen from '/imports/ui/screens/bands/bands_update.screen.jsx';
import BandShowScreen from '/imports/ui/screens/bands/bands_show.screen.jsx';
import BandsListScreen from '/imports/ui/screens/bands/bands_list.screen.jsx';
// ENTITIES
import EntitiesCreateScreen from '/imports/ui/screens/entities/entities_create.screen.jsx';
import EntitiesUpdateScreen from '/imports/ui/screens/entities/entities_update.screen.jsx';
import EntitiesListScreen from '/imports/ui/screens/entities/entities_list.screen.jsx';
import EntitiesShowScreen from '/imports/ui/screens/entities/entities_show.screen.jsx';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{height: "height:100vh"}}>
          {this.props.children}
      </div>
    );
  }
}
export const AppRoutes = () => (
  <Router history={browserHistory}>
    <Route path="" component={Layout}>
      <Route path="/" component={HomeScreen} />
      <Route path="login" component={LogInScreen} />
      <Route path="signup" component={SignUpScreen} />
      <Route path="decision_screen" component={DecisionScreen} />
      <Route path="dashboard" component={Dashboard} />
      // bands
      <Route path="bands/create" component={BandsCreateScreen} />
      <Route path="bands/:id" component={BandShowScreen} />
      <Route path="bands" component={BandsListScreen} />
      <Route path="bands/update/:id" component={BandsUpdateScreen} />
      // entities
      <Route path="entities/create" component={EntitiesCreateScreen} />
      <Route path="entities/update/:id" component={EntitiesUpdateScreen} />
      <Route path="entities/:id" component={EntitiesShowScreen} />
      <Route path="entities" component={EntitiesListScreen} />
    </Route>
  </Router>
);
