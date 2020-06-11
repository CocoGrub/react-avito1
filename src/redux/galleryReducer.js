import axios from 'axios'
import {GET_PHOTOS} from "./action-types";

const initialState=[
]

const galleryReducer=(state=initialState, action)=>{
    switch (action.type) {
        case GET_PHOTOS:return  action.payload
        default:return state
    }
}


export const getPhotos=(x)=>{
    return{
        type:GET_PHOTOS,
        payload:x
    }
}

//thunk

export const getPhotosThunk=()=>{
    return (dispatch)=>{
        axios.get('https://boiling-refuge-66454.herokuapp.com/images').then((response)=>{
            dispatch(getPhotos(response.data))
        })
    }
}

export default galleryReducer;