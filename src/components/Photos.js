import React, {useState} from "react";
import styles from '../mainPage/mainPage.module.css'
import {connect} from "react-redux";
import Modal from "./modal";
import PhotosPageReducer from "../redux/photos";
import {getBigThunk} from "../redux/photoAndComments";

const Photos = (props) => {

    const [modal, setModal] = useState(false)
    // const [currentId,setCurrentId] =useState('')

    const showModal = (v,k) => {
        // setCurrentId(k)

        setModal(k)
        props.getBigThunk(v.id)
    }
    const closeModal = (k) => {
        // setCurrentId(k)
        if (k !== false) {
            setModal(false)
        }

    }

    return <div>
        <div className={styles.main}>
            <ul>
                {props.photos.map((v, k) => {
                    return <li key={k} onClick={() => {

                        showModal(v,k)
                    }}><img src={v.url} /></li>
                })}
            </ul>
            < Modal id={modal} onClose={closeModal} currentId={modal} setModal={setModal} show={modal}/>
        </div>
    </div>

}
const mapStateToProps = (state) => {
    return {
        photos: state.PhotosPageReducer
    }
}
export default connect(mapStateToProps, {getBigThunk})(Photos)
