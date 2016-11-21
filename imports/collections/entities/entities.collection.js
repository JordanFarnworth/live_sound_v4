import {Meteor} from 'meteor/meteor';
import EntityHelpers from '/imports/collections/entities/entities.helpers.js'


Entities = new Mongo.Collection("entities");
export default Entities;

const entitySchema = new SimpleSchema({
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
    phoneNumber: {
        type: SimpleSchema.Integer,
        label: "Phone Number"
    },
    aboutUs: {
        type: String,
        label: "Let the bands know what kind of hiring entity you are.",
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

Entities.helpers(EntityHelpers())

Entities.addLinks({
  members: {
    type: 'many',
    collection: Meteor.users,
    field: 'memberIds'
  }
});

Entities.attachSchema(entitySchema);
