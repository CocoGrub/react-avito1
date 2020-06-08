import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {getPhotosThunk} from "./redux/redux-photo";
import {connect} from "react-redux";

function App(props) {
  useEffect(()=>{
    props.getPhotosThunk()
  },[])
  return (
    <div className="App">

    </div>
  );
}

export default connect(null,{getPhotosThunk})(App);
