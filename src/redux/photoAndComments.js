import axios from 'axios'

const GET_PHOTO_COMMENTS = 'photoAndComments/GET_PHOTO_COMMENTS';

const initialState={
    id:null,
    url:null,
comments:[]
}

const BigPhotoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_PHOTO_COMMENTS:return {...state,id:action.payload.id,url:action.payload.url,comments:action.payload.comments}
        default:return state
    }
}


export const getPhotos=(x)=>{
    return{
        type:GET_PHOTO_COMMENTS,
        payload:x
    }
}
export const getBigThunk=(imageId)=>{
    return (dispatch)=>{
        axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${imageId}`).then((response)=>{
            console.log(response)
            dispatch(getPhotos(response.data))
        })
    }
}

export const postThem=(x)=>{
    return{
        action:'POST',
        payload:x
    }
}

export const PostComment=(imageId,id,comment)=>{
    return (dispatch)=>{
        axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${imageId}/comments`,{
            id:id,
            comment:comment
        }).then((response)=>{
            console.log(response)
            dispatch(postThem())
        })
    }
}

export default BigPhotoReducer;