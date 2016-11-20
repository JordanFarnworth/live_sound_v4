import Bands from '/imports/collections/bands/bands.collection.js';

Bands.permit('insert').ifLoggedIn().allowInClientCode();
Bands.permit('update').ifLoggedIn().allowInClientCode();

Bands.expose();
