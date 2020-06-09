import React, {useEffect} from "react";
import {createPortal} from "react-dom";
import './modal.css'
import {connect} from "react-redux";
import {getBigThunk} from "../redux/photoAndComments";
const Modal=(props)=>{
    useEffect(()=>{
        props.getBigThunk(props.id)
    })
    const onClose = e => {
        props.show = false;
    };
    if(props.currentId===props.show){
        return createPortal(<div className={'modal'} onClick={()=>{props.setModal(false)}}>{props.children}
        <div>{props.id.url}</div>
            <button
                onClose={e => {
                    onClose() }}
            >
                Close
            </button></div>, document.body)
    }

    return null
}

export default connect(null,{getBigThunk})(Modal)
