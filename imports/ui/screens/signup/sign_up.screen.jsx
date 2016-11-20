import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import Blaze from 'meteor/gadicc:blaze-react-component';
import React, { PropTypes } from 'react'
import {browserHistory} from 'react-router';

const signUpSchema = new SimpleSchema({
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

AutoForm.addHooks('signUpForm', {
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
    Accounts.createUser(insertDoc, (error) => {
      if (error) {
        console.log(error);
      } else {
        browserHistory.push('/band_or_entity')
      }
    });
    this.done();
    return false;
  }
  //TODO: make this error handling more robuse
});

class SignUpScreen extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (
      <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h4 className="text-center">
                Sign Up for LiveSound
              </h4>
              <hr />
              <div>
                <Blaze template="quickForm" schema={signUpSchema} id="signUpForm" />
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default SignUpScreen;
