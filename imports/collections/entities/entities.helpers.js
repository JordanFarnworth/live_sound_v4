import Entities from '/imports/collections/entities/entities.collection.js';

const EntityHelpers = () => {
  return (
    {
      members(BandHelpers){
        return Entities.getLink(this._id, 'members').fetch()
      },

      currentUserInEntity(){
        let result = false;
        this.members().forEach((user) => {
          if(user._id === Meteor.user()._id){result = true;}
        })
        return result
      }
    }
  )
}

export default EntityHelpers;
