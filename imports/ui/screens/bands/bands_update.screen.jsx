import React, { PropTypes } from 'react'
import BandsForm from '/imports/collections/bands/ui/bands_form.jsx';
import Bands from '/imports/collections/bands/bands.collection.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {ReactiveVar} from 'meteor/reactive-var';
import {Tracker} from 'meteor/tracker';
import {browserHistory} from 'react-router';
import ContentLoading from '/imports/ui/shared/content_loading.shared.jsx';


class BandsUpdate extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);

    this.query = Bands.createQuery({
      $filters: {
        _id: props.params.id
      },
      name: 1,
      email: 1,
      address: 1,
      genre: 1,
      phoneNumber: 1,
      aboutUs: 1,
      memberIds: 1
  }).subscribe();
  const band = Bands.findOne(props.params.id)
  this.reactiveBand = ReactiveVar(band);
}
  componentWillUnmount() {
    if(this.query.unsubscribe === "function"){
      this.query.unsubscribe();
    }
  }

  componentWillMount() {
    if(!!this.reactiveBand || !this.reactiveBand.currentUserInBand()){
      browserHistory.push('/');
    }
  }

  render () {

    if (!this.reactiveBand) {
      return <ContentLoading lineBreakCount={4} />
    }
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <h1 className="text-center"><a href={"/bands/" + this.reactiveBand._id}>{this.reactiveBand.name}</a></h1>
          <BandsForm id="bandsUpdateForm" type="update" doc={this.reactiveBand}/>
        </div>
      </div>
    )
  }
}

export default BandsUpdate;
