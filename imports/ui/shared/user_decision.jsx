import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class UserDecision extends TrackerReact(React.Component) {
  constructor(props){
    super(props);

  }

  render () {
    return (
      <div className="row">
        <div className="col-md-6 text-center">
          <h1>Sign up as a Band</h1>
          <a href="/bands/create">Create your Band</a>
        </div>
        <div className="col-md-6 text-center">
          <h1>Sign up as a Business</h1>
          <a href="/entities/create">Create your Business</a>
        </div>
      </div>
    )
  }
}

export default UserDecision;
