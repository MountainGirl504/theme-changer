import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor and state
constructor (){
  super()

  this.state = {
    fontColor: "black",
    fontSize: 12,
    fontFamily: "Arial",
    allowEdit: "true"
  }

  this.updateColor = this.updateColor.bind(this)
  this.updateSize = this.updateSize.bind(this)
  this.updateFamily = this.updateFamily.bind(this)
  this.updateEditStatus = this.updateEditStatus.bind(this)
}
  // updateColor function:
  updateColor(newColor) {
    this.setState({
      fontColor: newColor
    })
  }

  // updateSize function:

  updateSize (newSize){
    this.setState ({
      fontSize: newSize
    })
  }


  // updateFamily function
  updateFamily(newFamily){
    this.setState ({
      fontFamily: newFamily
    })
  }

  // updateEditStatus function
  updateEditStatus (value){
    this.setState({
      allowEdit: value
    })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update = {this.updateEditStatus}/>         {/*render EditToggle, and pass updateStatus fn.*/}
          <ColorChanger update= {this.updateColor}              
                        canUpdate = {this.state.allowEdit} />    { /* Render ColorChanger */ }
          <SizeChanger update={this.updateSize}
                        canUpdate = {this.state.allowEdit}/>     { /* Render SizeChanger */ }
          <FamilyChanger update = {this.updateFamily}
                        canUpdate = {this.state.allowEdit}/>     { /* Render FamilyChanger */ }
        </div>
        <div className="textArea">
          <TextContainer fontColor = {this.state.fontColor}
                        fontFamily = {this.state.fontFamily}
                        fontSize = {this.state.fontSize} />       { /* Render TextContainer */ }
          
        </div>
      </div>
    )
  }
}

export default App;
