import '/node_modules/bootswatch/flatly/bootstrap.css';
import '/node_modules/bootstrap/dist/js/bootstrap.js';

import '/imports/startup/startup.both.js';

import {AppRoutes} from '/imports/ui/routes.jsx'

import { render } from 'react-dom';
Meteor.startup(() => {
  render(AppRoutes(), document.getElementById('app'));
});
