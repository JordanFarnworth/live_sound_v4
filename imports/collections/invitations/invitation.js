Invitations = new Mongo.Collection("invitations");

var Schemas = {};

Schemas.Invitation = new SimpleSchema({
    description: {
        type: String,
        label: "Let the band know why you want them to play",
        optional: false,
        max: 1000
    }
});

Invitations.attachSchema(Schemas.Invitation);
