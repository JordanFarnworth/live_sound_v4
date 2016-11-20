import React, { PropTypes } from 'react'
import Bands from '/imports/collections/bands/bands.collection.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class BandShowVisitor extends TrackerReact(React.Component) {
  constructor(props){
    super(props);

  }

  render () {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <h4>You are a visitor</h4>
          <h5>
            Genre: {this.props.band.genre}
          </h5>
          <h5>
            Email: {this.props.band.email}
          </h5>
          <h5>
            Address: {this.props.band.address}
          </h5>
          <h5>
            Phone Number: {this.props.band.phoneNumber}
          </h5>
          <h5>
            About: {this.props.band.aboutUs}
          </h5>
        </div>
      </div>
    )
  }
}

export default BandShowVisitor;
