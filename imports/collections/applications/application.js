Applications = new Mongo.Collection("applications");

var Schemas = {};

Schemas.Application = new SimpleSchema({
    description: {
        type: String,
        label: "Why do you want to play for this company, or at this event?",
        optional: false,
        max: 1000
    }
});

Applications.attachSchema(Schemas.Application);
