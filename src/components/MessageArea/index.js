import React, {useState} from 'react';
import styles from './MessageArea.module.css';

const MessageArea = (props) => {
     const [state, setstate] = useState('');
    const changeHandler = ({target:{value}}) => {
        setstate(value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.createMessage(state)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
            <textarea
            value={state}
            onChange={changeHandler}/>
            <button>Submit</button>
            </form>
        </div>
    );
}

export default MessageArea;
