import React, { PropTypes } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class ContentLoading extends TrackerReact(React.Component) {
  constructor(props){
    super(props);

  }

  renderLineBreaks(count) {
    let c = 0;
    let breaks = [];
    while(c < count){
      breaks.push(<br key={c}></br>);
      c++;
    }
    return breaks;
  }

  render() {
    return (
      <div className="row">
        {this.props.lineBreakCount ? this.renderLineBreaks(this.props.lineBreakCount) : null}
        <div className="col-md-12 text-center">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
}

export default ContentLoading;
