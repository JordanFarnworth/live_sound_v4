import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { ReactiveVar } from 'meteor/reactive-var'
import ContentLoading from '/imports/ui/shared/content_loading.shared.jsx';
import NavDropdownOption from '/imports/ui/shared/dashboard/nav_dropdown_option.shared.jsx'

class DashboardNav extends TrackerReact(React.Component) {
  constructor(props){
    super(props);


    this.queries = [
      Bands.createQuery({
        name: 1,
        memberIds: 1
      }).subscribe(),
      Entities.createQuery({
        name: 1,
        memberIds: 1
      }).subscribe()
    ]
  }

  componentWillUnmount() {
    this.queries.forEach((query) => {
      query.unubscribe();
    })
  }

  styleBuilder(){
    return (
      {
        border: "2px solid red",
        borderRadius: "5px",
        height: "100vh"
      }
    )
  }

  renderUserInfo(){
    return Meteor.user().emails[0].address
  }

  renderDropdowns() {
    let dropdowns = [];
    const memberships = Meteor.user().memberships();
    for(let type in memberships) {
      memberships[type].forEach((entity) => {
        entity.type = type;
        dropdowns.push(entity)
      });
    };
    return dropdowns.map((membership) => {
      return <NavDropdownOption viewManager={this.props.viewManager} iconName={membership.type === "bands" ? "fa fa-headphones" : "fa fa-briefcase"} key={membership._id} type={membership.type} title={membership.name} />
    });
  }

  render () {
    if(!Meteor.user()){
      return <ContentLoading />
    }
    return (
      <div style={this.styleBuilder()} className="row-fluid" id="dashboard-nav">
        <div className="col-md-12 text-center">
          <div className="row">
            <img src="http://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="profile_picture" style={{height: "150px", width: "200px", marginTop: "25px"}} className="img-thumbnail"></img>
            <h3>{this.renderUserInfo()}</h3>
          </div>
          <div className="row">
            {this.renderDropdowns()}
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardNav;
