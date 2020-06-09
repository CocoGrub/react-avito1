import axios from 'axios'

const GET_PHOTO_COMMENTS = 'photoAndComments/GET_PHOTO_COMMENTS';

const initialState={
    photos:[],
    bigPhoto:[],
}

const BigPhotoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_PHOTO_COMMENTS:return {...state,bigPhoto: action.payload}
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

export default BigPhotoReducer;