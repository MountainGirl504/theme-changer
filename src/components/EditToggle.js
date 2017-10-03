import React, { Component } from 'react';

export default class EditToggle extends Component {
  constructor(props){
    super(props)

    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  

  render() {
    return (
      <select className="dropDownContainer ml0" 
              onChange = { (e) => {this.props.update(e.target.value)} }>
        <option value="true"> Allow Edit </option>
        <option value="false"> Disable Edit </option>
      </select>
    )
  }
}