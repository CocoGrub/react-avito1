import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import PhotosPageReducer from "./photos";
import BigPhotoReducer from "./photoAndComments";
const reducers=combineReducers({
    PhotosPageReducer,BigPhotoReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store