Events = new Mongo.Collection("events");

var Schemas = {};

Schemas.Event = new SimpleSchema({
    title: {
        type: String,
        label: "Name",
        max: 200
    },
    startDate: {
        type: Date,
        label: "When does your event start"
    },
    endDate: {
        type: Date,
        label: "When does your event end"
    },
    address: {
        type: String,
        label: "Address of the event"
    },
    description: {
        type: String,
        label: "About the event",
        optional: false,
        max: 1000
    }
});

Events.attachSchema(Schemas.Event);
