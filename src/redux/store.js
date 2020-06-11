import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import galleryReducer from "./galleryReducer";
import modalReducer from "./modalReducer";
const reducers=combineReducers({
    galleryReducer,modalReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store