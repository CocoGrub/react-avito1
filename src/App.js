import React, {useEffect} from 'react';
import './App.css';
import {getPhotosThunk} from "./redux/galleryReducer";
import {connect} from "react-redux";
import MainPage from "./mainPage/mainPage";

function App(props) {
    useEffect(() => {
        props.getPhotosThunk()
    }, [props])


    return (
        <div className="App"><MainPage/></div>
    )
}

const mapStateToProps = (state) => {
    return {
        isFull: state.photos

    }
}
export default connect(mapStateToProps, {getPhotosThunk})(App);
