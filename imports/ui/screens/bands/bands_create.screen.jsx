import React, { PropTypes } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import BandsForm from '/imports/collections/bands/ui/bands_form.jsx';
import {browserHistory} from 'react-router';

class asdf extends TrackerReact(React.Component) {
  constructor(props){
    super(props);
  }


  loggedIn(){
    return Meteor.loggingIn()
  }

  enforceAuth(){
    if(!this.loggedIn()){
      browserHistory.push('/');
    }
  }

  render () {
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <h3 className="text-center">Create a new band</h3>
          <BandsForm id="bandsCreateForm" type="insert"/>
        </div>
      </div>
    )
  }
}
export default asdf;
