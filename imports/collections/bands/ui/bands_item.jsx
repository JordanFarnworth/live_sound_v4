import React, { PropTypes } from 'react'
import Bands from '/imports/collections/bands/bands.collection.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class BandItem extends TrackerReact(React.Component) {
  constructor(props){
    super(props);

  }

  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <a href={"/bands/" + this.props.id} ><h5>{this.props.name}</h5></a>
        </div>
      </div>
    )
  }
}

export default BandItem;
