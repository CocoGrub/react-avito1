import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import './modal.css'
import {connect} from "react-redux";
import {PostComment} from "../redux/photoAndComments";


const Modal = (props) => {

    const [Username,ChangeUserName]=useState(''
    )

    const [UserMessage,ChangeUserMessage]=useState(''
    )

    const handleChangeUser=(event)=>{
        ChangeUserName(event.target.value)
    }

    const handleChangeMessage=(event)=>{
        ChangeUserMessage(event.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.PostComment(props.comments[0].id,Username,UserMessage)
    }

    if (props.show !== false) {
        return createPortal(<div className={'modal'}>
            <div className={'main'}>
                <div className={'d'}>
                    <img src={props.pack.url}/>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input type="text" name="userName" onChange={handleChangeUser} placeholder={"Ваше имя"}/>
                        </label>
                        <br/>
                        <label>
                            <input type="text" name="userMessage" onChange={handleChangeMessage} placeholder={"Ваш комментарий"}/>
                        </label>
                        <input type="submit" value="Оставить комментарий"/>
                    </form>
                </div>
                <div>
                    <div>{props.comments.length > 0 ? props.comments.map((v, k) => {
                        const date = new Date(v.date)
                        return <div key={k}>
                            <div className={'time'}>{date.toLocaleString().split(',')[0].replace(/\//g, '.')} </div>
                            <div className={'comment'}>{v.text} </div>
                        </div>


                    }) : 'Комментариев пока нет'}</div>

                    <button className={"close-button"}
                            onClick={() => {
                                props.setModal(false)
                            }}>Close</button>

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

export default connect(mapStateToProps, {PostComment})(Modal)
