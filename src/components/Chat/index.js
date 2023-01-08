import React from 'react';
import styles from './Chat.module.css';
import ChatItems from './ChatItems';

const Chat = (props) => {
    const messageArray = props.dialog.map((msg)=><ChatItems msg={msg}/>)
    return (
        <div className={styles.container}>
            {messageArray}
        </div>
    );
}

export default Chat;
