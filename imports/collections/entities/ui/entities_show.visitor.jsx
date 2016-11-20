import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class EntitiesShowMember extends TrackerReact(React.Component) {
  constructor(props){
    super(props);

  }

  render () {
    return (
      <div className="row">
        <h2>Visitor</h2>
      </div>
    )
  }
}

export default EntitiesShowMember;
