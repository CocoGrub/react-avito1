import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {getPhotosThunk} from "./redux/redux-photo";
import {connect} from "react-redux";
import MainPage from "./mainPage/mainPage";

function App(props) {
  useEffect(()=>{
    props.getPhotosThunk()
  },[])
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default connect(null,{getPhotosThunk})(App);
