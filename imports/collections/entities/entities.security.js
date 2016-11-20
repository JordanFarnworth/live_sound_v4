import Entities from '/imports/collections/entities/entities.collection.js'

Security.defineMethod('ifIsMember', {
  fetch: [],
  allow(type, arg, userId, doc, fields, modifier) {
    return true
  }
});


Entities.permit('insert').ifLoggedIn().allowInClientCode();
Entities.permit('update').ifLoggedIn().ifIsMember().allowInClientCode();

Entities.expose();
