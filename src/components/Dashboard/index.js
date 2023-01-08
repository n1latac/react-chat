import React, {useState,useEffect, useReducer} from 'react';
import Chat from '../Chat';
import DialogList from '../DialogList';
import MessageArea from '../MessageArea';
import styles from './Dashboard.module.css';
import { UserContext } from '../../contexts';
import { getData } from '../../api';
import {reducer} from '../../reducers';
import  {CONSTANTS}  from '../../constants';
const {ACTIONS} = CONSTANTS;

const Dashboard = (props) => {
    const [user,setUser] = useState({
        id: 1,
        username: 'John',
        imageSrc: './images/user.png'
    })


    
    const initialState = {
        messages: [],
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        getData()
        .then((data)=>{
            dispatch({
                type: ACTIONS.DATA_LOAD_SUCCESS,
                data,
            })
            
        }
        )
        .catch((err)=>{
            dispatch({
                type: ACTIONS.DATA_LOAD_ERROR,
                err,
            })
        })
    },[])

    const createMessage = (text) => {
        const messageArea = {
            body: text,
            id: state.messages.length + 2,
            user,
        }
        dispatch({
            type:ACTIONS.ADD_NEW_MESSAGE,
            data:messageArea,
        })

    }


    return (
        <UserContext.Provider value={user}>
        <main className={styles.container}>
            <DialogList/>
            <section className={styles.wrapper}>
            <Chat dialog={state.messages}/>
            <MessageArea createMessage={createMessage}/>
            </section>
        </main>
        </UserContext.Provider>
    );
}

export default Dashboard;
