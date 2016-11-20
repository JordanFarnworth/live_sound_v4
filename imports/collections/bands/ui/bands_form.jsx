import React, { PropTypes } from 'react'
import Bands from '/imports/collections/bands/bands.collection.js';
import Blaze from 'meteor/gadicc:blaze-react-component';
import {AutoForm} from 'meteor/aldeed:autoform';
import {browserHistory} from 'react-router';

class BandsForm extends React.Component {
  constructor(props){
    super(props);

    AutoForm.addHooks('bandsUpdateForm', {
       onSuccess(formType, result) {
         browserHistory.push("/bands/" + this.currentDoc._id)
       },
       onError(formType, error) {
         alert('there was a problem with your shit');
       }
    });

    AutoForm.addHooks('bandsCreateForm', {
       onSuccess(formType, result) {
         browserHistory.push("/bands/" + result)
       },
       onError(formType, error) {
         alert('there was a problem with your shit');
       }
    });

  }

  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <Blaze {...this.props} template="quickForm" omitFields="memberIds" collection={Bands}/>
        </div>
      </div>
    )
  }
}

export default BandsForm;
