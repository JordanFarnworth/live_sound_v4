import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Entities from '/imports/collections/entities/entities.collection.js';
import EntitiesForm from '/imports/collections/entities/ui/entities_form.jsx';
import {AutoForm} from 'meteor/aldeed:autoform';
import {browserHistory} from 'react-router';

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
    const entity = Entities.findOne(this.props.params.id)
    if(!entity){return <h1>Loading..</h1>}
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <h1 className="text-center"><a href={"/entities/" + entity._id}>Update {entity.name}</a></h1>
          <EntitiesForm id="entitiesUpdateForm" type="update" doc={entity}/>
        </div>
      </div>
    )
  }
}

export default EntitiesUpdate;
