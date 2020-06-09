import React from "react";
import {createPortal} from "react-dom";
import './modal.css'
const Modal=(props)=>{
    const onClose = e => {
        props.show = false;
    };
    if(props.currentId===props.show){
        return createPortal(<div className={'modal'} onClick={()=>{props.setModal(false)}}>{props.children}
            <button
                onClose={e => {
                    onClose() }}
            >
                Close
            </button></div>, document.body)
    }

    return null
}

export default Modal;