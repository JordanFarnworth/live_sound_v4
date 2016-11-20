import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class EntitiesShowMember extends TrackerReact(React.Component) {
  constructor(props){
    super(props);

  }

  render () {
    return (
      <div className="row">
        <div className="text-center col-md-12">
          <a href={"/entities/update/" + this.props.entity._id}>Edit {this.props.entity.name}</a>
          <h3>You are a member of this entity</h3>
        </div>
      </div>
    )
  }
}

export default EntitiesShowMember;
