import React, { PropTypes } from 'react'
import Bands from '/imports/collections/bands/bands.collection.js';
import BandsShowMember from '/imports/collections/bands/ui/bands_show.member.jsx';
import BandsShowVisitor from '/imports/collections/bands/ui/bands_show.visitor.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ContentLoading from '/imports/ui/shared/content_loading.jsx';

class bands_create extends TrackerReact(React.Component) {

  constructor(props){
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
    this.query.unsubscribe();
  }

  renderBand(band) {
    if(!band){
      return <ContentLoading lineBreakCount={4} />
    }
    if(band.currentUserInBand()){
      return <BandsShowMember band={band} loaded={true} />
    } else {
      return <BandsShowVisitor band={band} loaded={true} />
    }
  }

  render () {
    const band = Bands.findOne(this.props.params.id);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center">{!!band ? band.name : 'loading..'}</h3>
            {this.renderBand(band)}
          </div>
        </div>
      </div>
    )
  }
}

export default bands_create;
