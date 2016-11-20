import React, { PropTypes } from 'react'
import BandsForm from '/imports/collections/bands/ui/bands_form.jsx';
import {browserHistory} from 'react-router';

class bands_create extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    if(!Meteor.user()){
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

export default bands_create;
