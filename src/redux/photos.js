import axios from 'axios'

const GET_PHOTOS = 'photos/GET_PHOTOS';

const initialState={
    photos:[],
    bigPhoto:[],
}

const PhotosPageReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_PHOTOS:return {...state,photos: action.payload}
        default:return state
    }
}


export const getPhotos=(x)=>{
    return{
        type:GET_PHOTOS,
        payload:x
    }
}
export const getPhotosThunk=()=>{
    return (dispatch)=>{
        axios.get('https://boiling-refuge-66454.herokuapp.com/images').then((response)=>{
            console.log(response)
            dispatch(getPhotos(response.data))
        })
    }
}

export default PhotosPageReducer;