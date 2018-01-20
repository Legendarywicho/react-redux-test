
import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux"
import constants from "./Constants"
import {setName} from "./actions/UserActions"


class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.user.user}</h1>
        <button onClick={()=> this.props.setName("Dr Strange")}>click me</button>
          <h3>Click me up</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return {
        user : state.userReducer,
        math : state.mathReducer,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setName : (name) =>{
            dispatch(setName(name))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)