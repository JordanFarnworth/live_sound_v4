import {Meteor} from 'meteor/meteor';

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

Entities.helpers({
  members(){
    return Entities.getLink(this._id, 'members').fetch()
  },

  currentUserInEntity(){
    let result = false;
    this.members().forEach((user) => {
      if(user._id === Meteor.user()._id){result = true;}
    })
    return result
  }
})

Entities.addLinks({
  members: {
    type: 'many',
    collection: Meteor.users,
    field: 'memberIds'
  }
});

Entities.attachSchema(entitySchema);
