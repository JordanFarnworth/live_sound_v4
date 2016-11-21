import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Entities from '/imports/collections/entities/entities.collection.js'
import EntityItem from '/imports/collections/entities/ui/entities_item.jsx'
import ContentLoading from '/imports/ui/shared/content_loading.jsx';

class EntitiesList extends TrackerReact(React.Component) {
  constructor(props){
    super(props);

    this.query = Entities.createQuery({
      name: 1
    }).subscribe();
  }

  componentWillUnmount() {
    this.query.unubscribe();
  }

  renderEntityItems(){
    let entities = Entities.find().fetch();
    if(!entities){
      return <ContentLoading lineBreakCount={4} />
    }
    return entities.map((entity) => {
      return <EntityItem id={entity._id} key={entity._id + entity.name} name={entity.name} />
    });
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          {this.renderEntityItems()}
        </div>
      </div>
    )
  }
}

export default EntitiesList;
