import React, { PropTypes } from 'react'
import {SimpleSchema} from 'meteor/aldeed:simple-schema'
import Blaze from 'meteor/gadicc:blaze-react-component';
import {browserHistory} from 'react-router';
import { ReactiveVar } from 'meteor/reactive-var'

const logInSchema = new SimpleSchema({
  email: {
    label: 'Email',
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  password: {
    type: String,
    label: "Enter a password",
    min: 8,
    autoform: {
      type: 'password'
    }
  }
});

class LogInScreen extends React.Component {
  constructor() {
    super();

    AutoForm.addHooks('logInForm', {
      onSubmit: function (formFields, updateDoc, currentDoc) {
        Meteor.loginWithPassword(formFields.email, formFields.password, (error) => {
          this.done(error);
        });
        return false;
      }
    });
    this.reactiveUser = new ReactiveVar(Meteor.user());
  }
  render () {
    return (
      <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h5 className="text-center">
                Please log in
              </h5>
              <hr />
              <div>
                <Blaze template="quickForm" schema={logInSchema} id="logInForm" buttonContent="Log In"/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default LogInScreen;
