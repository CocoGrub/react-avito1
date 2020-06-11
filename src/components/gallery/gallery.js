import React, {useState} from "react";
import styles from '../../mainPage/mainPage.module.css'
import {connect} from "react-redux";
import Modal from "../modal/modal";
import {getFormThunk} from "../../redux/modalReducer";

const Gallery = (props) => {

    const [modal, setModal] = useState(false)

    const showModal = (v,k) => {
        setModal(k)
        props.getBigThunk(v.id)
    }
    const closeModal = (k) => {
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
                    }}><img src={v.url} alt={'photoGallery'}/></li>
                })}
            </ul>
            < Modal id={modal} onClose={closeModal} currentId={modal} setModal={setModal} show={modal}/>
        </div>
    </div>

}
const mapStateToProps = (state) => {
    return {
        photos: state.galleryReducer
    }
}
export default connect(mapStateToProps, {getBigThunk: getFormThunk})(Gallery)
