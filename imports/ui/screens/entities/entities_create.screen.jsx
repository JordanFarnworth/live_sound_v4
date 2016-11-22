import React, { PropTypes } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import EntitiesForm from '/imports/collections/entities/ui/entities_form.jsx';
import {browserHistory} from 'react-router';

class EntitiesCreate extends TrackerReact(React.Component) {
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
          <h3 className="text-center">Create your Company/Hiring Entity</h3>
          <EntitiesForm id="entitiesCreateForm" type="insert"/>
        </div>
      </div>
    )
  }
}

export default EntitiesCreate;
