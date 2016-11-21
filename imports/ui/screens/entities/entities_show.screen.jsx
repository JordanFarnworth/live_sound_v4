import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import EntitiesShowMember from '/imports/collections/entities/ui/entities_show.member.jsx'
import EntitiesShowVisitor from '/imports/collections/entities/ui/entities_show.visitor.jsx'
import ContentLoading from '/imports/ui/shared/content_loading.jsx';

class EntitiesShowScreen extends TrackerReact(React.Component) {
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
    this.query.unsubscribe();
  }

  renderEntity(entity) {
    if(!entity){
      return <ContentLoading lineBreakCount={4} />
    }
    if(entity.currentUserInEntity()){
      return <EntitiesShowMember entity={entity} loaded={true} />
    } else {
      return <EntitiesShowVisitor entity={entity} loaded={true} />
    }
  }

  render () {
    const entity = Entities.findOne(this.props.params.id);
    return (
      <div className="container">
        <div className="col-md-12">
          <h1 className="text-center">{!!entity ? entity.name : 'loading..'}</h1>
          {this.renderEntity(entity)}
        </div>
      </div>
    )
  }
}

export default EntitiesShowScreen;
