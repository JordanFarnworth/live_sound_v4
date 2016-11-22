import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Entities from '/imports/collections/entities/entities.collection.js';
import EntitiesForm from '/imports/collections/entities/ui/entities_form.jsx';
import {AutoForm} from 'meteor/aldeed:autoform';
import {browserHistory} from 'react-router';
import ContentLoading from '/imports/ui/shared/content_loading.shared.jsx';
import { ReactiveVar } from 'meteor/reactive-var'

class EntitiesUpdate extends TrackerReact(React.Component) {
  constructor(props){
    super(props);

    this.query = Entities.createQuery({
      $filters: {
        _id: props.params.id
      },
      name: 1,
      email: 1,
      address: 1,
      phoneNumber: 1,
      aboutUs: 1,
      memberIds: 1
    }).subscribe();
    const entity = Entities.findOne(props.params.id)
    this.reactiveEntity = ReactiveVar(entity)
  }

  componentWillUnmount() {
    if(this.query.unsubscribe === "function"){
      this.query.unsubscribe();
    }
  }

  componentWillMount() {
    if(!!this.reactiveEntity || this.reactiveEntity.currentUserInEntity()){
      browserHistory.push('/');
    }
  }

  render () {

    if(!this.reactiveEntity){return <ContentLoading lineBreakCount={4} />}
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <h1 className="text-center"><a href={"/entities/" + this.reactiveEntity._id}>Update {this.reactiveEntity.name}</a></h1>
          <EntitiesForm id="entitiesUpdateForm" type="update" doc={this.reactiveEntity}/>
        </div>
      </div>
    )
  }
}

export default EntitiesUpdate;
