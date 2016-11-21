import Bands from '/imports/collections/bands/bands.collection.js';

const BandHelpers = () => {
return (
  {
    members() {
      return Bands.getLink(this._id, 'members').fetch();
    },

    currentUserInBand() {
      let result = false;
      this.members().forEach((user) => {
        if(user._id === Meteor.user()._id){result = true;}
      })
      return result;
    }
  }
)};

export default BandHelpers;
