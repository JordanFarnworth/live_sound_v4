import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import EntitiesList from '/imports/collections/entities/ui/entities_list.jsx'

class EntitiesListScreen extends TrackerReact(React.Component) {
  constructor(props){
    super(props);

  }

  render () {
    return (
      <div className="container">
        <div className="col-md-12">
          <h3 className="text-center">All Hiring Entities</h3>
          <EntitiesList />
        </div>
      </div>
    )
  }
}

export default EntitiesListScreen;
