import {Meteor} from 'meteor/meteor';
import BandHelpers from '/imports/collections/bands/bands.helpers.js';


Bands = new Mongo.Collection("bands");
export default Bands;

const bandSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
    email: {
        type: String,
        label: "Email"
    },
    address: {
        type: String,
        label: "Address"
    },
    genre: {
        type: String,
        label: "Genre"
    },
    phoneNumber: {
        type: SimpleSchema.Integer,
        label: "Phone Number"
    },
    aboutUs: {
        type: String,
        label: "About the Band",
        optional: false,
        max: 1000
    },
    memberIds: {
      type: [String],
      autoValue: function() {
        if (this.isInsert) {
          return [Meteor.userId()]
        }
      }
    }
});

Bands.helpers(BandHelpers());

Bands.addLinks({
  members: {
    type: 'many',
    collection: Meteor.users,
    field: 'memberIds'
  }
});

Bands.attachSchema(bandSchema);
