import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import DashboardNav from '/imports/ui/shared/dashboard/dashboard_nav.shared.jsx';
import ContentLoading from '/imports/ui/shared/content_loading.shared.jsx';

class Dashboard extends TrackerReact(React.Component) {
  constructor(props){
    super(props);
    this.state = {viewDeclaration: 'home', transitioning: false};
  }

  viewManager(){
    if(this.state.transitioning){
      return <ContentLoading />
    }
    switch (this.state.viewDeclaration) {
      case "home":
        return <h1>Home</h1>
      case "bands.applications":
        return <h1>Bands Applications</h1>
      case "bands.invitations":
        return <h1>Bands Invitations</h1>
      case "bands.events":
        return <h1>Bands Events</h1>
      case "bands.calendar":
        return <h1>Entities Calendar</h1>
      case "bands.settings":
        return <h1>Bands Settings</h1>
      case "entities.applications":
        return <h1>Entities Applications</h1>
      case "entities.invitations":
        return <h1>Entities Invitations</h1>
      case "entities.events":
        return <h1>Entities Events</h1>
      case "entities.calendar":
        return <h1>Entities Calendar</h1>
      case "entities.settings":
        return <h1>Entities Settings</h1>
    }
  }

  updateView(view){
    this.state.viewDeclaration = view;
    this.setState(this.state)
  }

  render () {
    return (
      <div className="container-fluid" style={{height: "height:100vh"}}>
        <div className="row" style={{height: "height:100vh"}}>
          <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3" style={{height: "height:100vh", paddingLeft: 0}}>
            <DashboardNav viewManager={this.updateView.bind(this)} />
          </div>
          <div className="col-md-9 col-sm-9 col-xs-9 col-lg-9" style={{height: "height:100vh"}}>
            {this.viewManager()}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
