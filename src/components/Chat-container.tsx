import { useState } from "react";

const ChatContainer = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (inputValue.trim()) {
            alert(inputValue);
        }
    }

    const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        setInputValue(event.currentTarget.value);
    }

    return (
        <div className="chat-container">
            <div className="dialog-container">
                <div className="dialog robot-answer">Hi</div>
                <div className="dialog user-answer">Hi55</div>
            </div>
            <form className="chat-form" onSubmit={handleSubmit}>
                <input className='input input-reset' type="text" onChange={handleChange} value={inputValue} placeholder='Enter your data' />
                <button className="button button-reset" type='submit'>Send</button>
            </form>
        </div>
    )
}

export default ChatContainer;