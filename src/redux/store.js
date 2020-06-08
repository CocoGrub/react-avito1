import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import PhotosPageReducer from "./redux-photo";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(PhotosPageReducer,composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store