import React, {useEffect} from "react";
import {createPortal} from "react-dom";
import './modal.css'
import {connect} from "react-redux";


const Modal = (props) => {

    console.log(props.pack.comments)
    if (props.show !== false) {
        return createPortal(<div className={'modal'}>
            <div className={'main'}>
                <div className={'d'}>
                    <img src={props.pack.url}/>
                    <form>
                        <label>
                            <input type="text" name="userName" placeholder={"Ваше имя"}/>
                        </label>
                        <label>
                            <input type="text" name="userMessage" placeholder={"Ваш комментарий"}/>
                        </label>
                        <input type="submit" value="Оставить комментарий"/>
                    </form>
                </div>
                <div>
                    <div>{props.comments.length > 0 ? props.comments.map((v, k) => {
                        const date = new Date(v.date)
                        return <div key={k}>{date.toLocaleString().split(',')[0].replace(/\//g, '.')}
                            <div></div>
                            <div>{v.text} </div>
                        </div>


                    }) : 'Комментариев пока нет'}</div>

                    <button
                        onClick={() => {
                            props.setModal(false)
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>, document.body)
    }

    return null
}
const mapStateToProps = (state) => {
    return {
        pack: state.BigPhotoReducer,
        comments: state.BigPhotoReducer.comments

    }
}

export default connect(mapStateToProps, {})(Modal)
