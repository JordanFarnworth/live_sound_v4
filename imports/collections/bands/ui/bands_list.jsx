import React, { PropTypes } from 'react'
import BandItem from '/imports/collections/bands/ui/bands_item.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Bands from '/imports/collections/bands/bands.collection.js';

class BandsList extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);

    this.query = Bands.createQuery({
      name: 1
    }).subscribe();
  }

  componentWillUnmount() {
    this.query.unubscribe();
  }

  renderBandItems() {
    return Bands.find().fetch().map((band) => {
      return <BandItem id={band._id} key={band._id + band.name} name={band.name} />
    });
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          {this.renderBandItems()}
        </div>
      </div>
    )
  }
}

export default BandsList;
