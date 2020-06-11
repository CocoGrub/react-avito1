import React, {useState} from "react";
import {createPortal} from "react-dom";
import './modal.css'
import {connect} from "react-redux";
import {PostComment,postAnswer} from "../../redux/modalReducer";


const Modal = (props) => {

    const [Username,ChangeUserName]=useState('')

    const [UserMessage,ChangeUserMessage]=useState('')

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
                    <img src={props.pack.url} alt={'photoModal'}/>
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
                        const date = new Date(v.date).toLocaleString().split(',')[0].replace(/\//g, '.')
                        return <div key={k}>
                            <div className={'time'}>{date} </div>
                            <div className={'comment'}>{v.text} </div>
                        </div>


                    }) : 'Комментариев пока нет'}</div>

                    <button className={"close-button"}
                            onClick={() => {
                                props.setModal(false)
                                props.postAnswer(null)
                            }}>Close</button>
                    <div className={'message'}>{props.pack.postStatus}</div>
                </div>

            </div>

        </div>, document.body)
    }

    return null
}
const mapStateToProps = (state) => {
    return {
        pack: state.modalReducer,
        comments: state.modalReducer.comments

    }
}

export default connect(mapStateToProps, {PostComment,postAnswer})(Modal)
