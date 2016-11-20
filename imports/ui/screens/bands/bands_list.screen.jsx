import React, { PropTypes } from 'react'
import BandsList from '/imports/collections/bands/ui/bands_list.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {ReactiveVar} from 'meteor/reactive-var';
import {Tracker} from 'meteor/tracker';

class BandScreen extends TrackerReact(React.Component) {
  constructor(props){
    super(props);

  }

  render () {
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <h3 className="text-center">All Bands</h3>
          <BandsList />
        </div>
      </div>
    )
  }
}

export default BandScreen;
