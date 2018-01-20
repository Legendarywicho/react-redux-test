
import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux"
import constants from "./Constants"


class App extends Component {
  render() {

    return (
      <div>
        <h1>{this.props.user.user}</h1>
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
            dispatch({
                type : constants.set_name,
                payload : name
            })
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)