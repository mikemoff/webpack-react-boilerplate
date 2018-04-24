import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class MyComponent extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (<div className="my-component" id={this.props.id}><h1>{this.props.title}</h1></div>);
  }
}

MyComponent.defaultProps = {
  title: "My Component"
}

MyComponent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string
}


export default MyComponent;

const wrapper = document.getElementById('wrapper');
wrapper ? ReactDOM.render(<MyComponent />, wrapper) : false;
