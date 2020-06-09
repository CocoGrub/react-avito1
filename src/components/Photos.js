import React, {useState} from "react";
import styles from '../mainPage/mainPage.module.css'
import {connect} from "react-redux";

const Photos=(props)=>{

    const [modal,setModal]=useState(false)
    // const [currentId,setCurrentId] =useState('')

    const showModal=(k)=>{
        // setCurrentId(k)
        setModal(k)
    }
    const closeModal=(k)=>{
        // setCurrentId(k)
        if(k!==false){
            setModal(false)
        }

    }

    return<div>
        <div className={styles.main}>
            <ul>
                {props.photos.map((v,k)=>{
                    console.log(v)
                    return <li key={k}><img src={v.url} onClick={()=>{showModal(k)}} ></img>< Modal onClose={closeModal} currentId={k} setModal={setModal} show={modal}>Message in Modal</Modal></li>
                })}
            </ul>
        </div>
    </div>

}
const mapStateToProps=(state)=>{
    return{
        photos:state.photos
    }
}
export default connect(mapStateToProps,{})(Photos)

const Modal=(props)=>{
    const onClose = e => {
        props.show = false;
    };
    if(props.currentId===props.show){
        return <div  onClick={()=>{props.setModal(false)}}>{props.children}
            <button
                onClose={e => {
                    onClose() }}
            >
                Close
            </button></div>
    }

    return null
}