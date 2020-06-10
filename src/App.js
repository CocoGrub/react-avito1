import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {getPhotosThunk} from "./redux/photos";
import {connect} from "react-redux";
import MainPage from "./mainPage/mainPage";

function App(props) {
    useEffect(() => {
        props.getPhotosThunk()
    }, [props.onePhoto])


    return (
        <div className="App"><MainPage/></div>
    )
}

const mapStateToProps = (state) => {
    return {
        onePhoto: state.photos

    }
}
export default connect(mapStateToProps, {getPhotosThunk})(App);
