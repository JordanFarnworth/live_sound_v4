import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
// if you cant find these modules, you may need to clone the repo into your node modules manually
// https://github.com/vctrfrnndz/jquery-accordion
require('jquery-accordion/js/jquery.accordion.js')
require('jquery-accordion/css/jquery.accordion.css')

class NavDropdownOption extends TrackerReact(React.Component) {
  constructor(props){
    super(props);

    this.state = {selected: 'home'};
  }

  componentDidMount(){
    $('.accordion').accordion({
        "transitionSpeed": 400
    });
  }

  navTitleStyles(){
    return ({
      width: "100%",
      border: ".5px black solid",
      cursor: "pointer",

    })
  }

  navOptionStyles(){
    return ({
      cursor: "pointer",
    })
  }

  renderBandOptions(){
    let options = [
      {name: "My Applications", stateDeclaration: "bands.applications"},
      {name: "My Invitations", stateDeclaration: "bands.invitations"},
      {name: "My Events", stateDeclaration: "bands.events"},
      {name: "My Calendar", stateDeclaration: "bands.calendar"},
      {name: this.props.title + "\'s Settings", stateDeclaration: "bands.settings"}
    ]
    return options.map((option) => {
      return <div onClick={() => {this.updateDashboardView(option.stateDeclaration)}} style={this.navOptionStyles()} key={option.stateDeclaration} className="nav-option">{option.name}</div>
    })
  }

  renderEntityOptions(){
    let options = [
      {name: "My Applications", stateDeclaration: "entities.applications"},
      {name: "My Invitations", stateDeclaration: "entities.invitations"},
      {name: "My Events", stateDeclaration: "entities.events"},
      {name: "My Calendar", stateDeclaration: "entities.calendar"},
      {name: this.props.title + "\'s Settings", stateDeclaration: "entities.settings"}
    ]
    return options.map((option) => {
      return <div onClick={() => {this.updateDashboardView(option.stateDeclaration)}} style={this.navOptionStyles()} key={option.stateDeclaration} className="nav-option">{option.name}</div>
    })
  }

  renderOptions(){
    if(this.props.type === "bands"){
      return this.renderBandOptions()
    } else {
      return this.renderEntityOptions()
    }
  }

  updateDashboardView(option){
    this.props.viewManager(option)
  }

  render () {
    return (
      <div className="row-fluid">
        <div className="col-md-12">
          <div data-accordion-group>
            <div className="accordion" data-accordion>
                <div style={this.navTitleStyles()} data-control>
                  <h4><i className={this.props.iconName} aria-hidden="true"></i>{this.props.title}</h4>
                </div>
                <div data-content>
                  {this.renderOptions()}
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavDropdownOption;
