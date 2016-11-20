import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class EntityItem extends TrackerReact(React.Component) {
  constructor(props){
    super(props);

  }

  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <a href={"/entities/" + this.props.id} ><h5>{this.props.name}</h5></a>
        </div>
      </div>
    )
  }
}

export default EntityItem;
