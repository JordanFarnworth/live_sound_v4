import React, { PropTypes } from 'react'
import BandsForm from '/imports/collections/bands/ui/bands_form.jsx';
import Bands from '/imports/collections/bands/bands.collection.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {ReactiveVar} from 'meteor/reactive-var';
import {Tracker} from 'meteor/tracker';
import {browserHistory} from 'react-router';
import ContentLoading from '/imports/ui/shared/content_loading.jsx';


class bands_update extends TrackerReact(React.Component) {
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

  }
  componentWillUnmount() {
    if(this.query.unsubscribe === "function"){
      this.query.unsubscribe();
    }
  }

  componentWillMount() {
    if(!Meteor.user()){
      browserHistory.push('/');
    }
  }

  render () {
    const band = Bands.findOne(this.props.params.id)
    if (!band) {
      return <ContentLoading lineBreakCount={4} />
    }
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <h1 className="text-center"><a href={"/bands/" + band._id}>{band.name}</a></h1>
          <BandsForm id="bandsUpdateForm" type="update" doc={band}/>
        </div>
      </div>
    )
  }
}

export default bands_update;
