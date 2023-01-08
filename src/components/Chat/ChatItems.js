import React from 'react';
import styles from './Chat.module.css';

const ChatItems = (props) => {
    const {body, user, id} = props.msg;
    console.log(user);
    return (
        <div className={styles.msg}>
                <img 
                src={user.imageSrc ? user.imageSrc : './images/userMy.jpeg'}
                className={styles.userImg}>
                </img>
                <div className={styles.msgWrapper}>
                    <p>{user.username}</p>
                    <p>{body}</p>
                </div>
            </div>
    );
}

export default ChatItems;
