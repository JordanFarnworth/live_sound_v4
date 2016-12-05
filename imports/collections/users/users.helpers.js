import Users from '/imports/collections/users/users.collection.js';
import Bands from '/imports/collections/bands/bands.collection.js';
import Entities from '/imports/collections/entities/entities.collection.js';

const UserHelpers = () => { return (
  {
    memberships() {
      let bands = Bands.find({
        memberIds: Meteor.user()._id
      }).fetch()
      let entities = Entities.find({
        memberIds: Meteor.user()._id
      }).fetch()
      return {bands: bands, entities: entities};
    }
  }
)};

export default UserHelpers;
