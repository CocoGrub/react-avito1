import axios from 'axios'
import {GET_PHOTO_COMMENTS, POST_COMMENT} from "./action-types";


const initialState={
    id:null,
    url:null,
comments:[],
    postStatus:null,
}

const modalReducer=(state=initialState, action)=>{
    switch (action.type) {
        case GET_PHOTO_COMMENTS:return {...state,id:action.payload.id,url:action.payload.url,comments:action.payload.comments}
        case POST_COMMENT:return {...state,postStatus: action.payload}
        default:return state
    }
}


export const getPhotos=(x)=>{
    return{
        type:GET_PHOTO_COMMENTS,
        payload:x
    }
}

export const postAnswer=(x)=>{
    return{
        type:POST_COMMENT,
        payload:x
    }
}

//thunks

export const getFormThunk=(imageId)=>{
    return (dispatch)=>{

        axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${imageId}`).then((response)=>{
            console.log(response)
            dispatch(getPhotos(response.data))
        })
    }
}
export const PostComment=(imageId,id,comment)=>{
    return (dispatch)=>{

        axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${imageId}/comments`).then((response)=>{

            dispatch(postAnswer('success'))
        }).catch((response)=>{
            dispatch(postAnswer('server currently is inactive'))

        })
    }
}

export default modalReducer;