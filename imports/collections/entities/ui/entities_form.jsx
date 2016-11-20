import React, { PropTypes } from 'react'
import Entities from '/imports/collections/entities/entities.collection.js';
import Blaze from 'meteor/gadicc:blaze-react-component';
import {AutoForm} from 'meteor/aldeed:autoform';
import { browserHistory } from 'react-router'

class EntitiesForm extends React.Component {
  constructor(props) {
    super(props);

    AutoForm.addHooks('entitiesUpdateForm', {
       onSuccess(formType, result) {
         browserHistory.push("/entities/" + this.currentDoc._id)
       },
       onError(formType, error) {
         alert('there was a problem with your shit');
       }
    });

    AutoForm.addHooks('entitiesCreateForm', {
       onSuccess(formType, result) {
         browserHistory.push("/entities/" + result)
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
          <Blaze {...this.props} template="quickForm" omitFields="memberIds" collection={Entities}/>
        </div>
      </div>
    )
  }
}

export default EntitiesForm;
