import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import UserDecision from '/imports/ui/shared/user_decision.jsx';

class DecisionScreen extends TrackerReact(React.Component) {
  constructor(props){
    super(props);

  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <UserDecision />
          </div>
        </div>
      </div>
    )
  }
}

export default DecisionScreen;
