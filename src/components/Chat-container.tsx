import { useEffect, useState } from "react";
import DialogField from "./Dialog-field";
import { Author } from "../types";

interface DialogItem {
    id: number,
    text: string,
    author: Author,
}

const initialDialog = [
    {id: 0, text: 'a', author: Author.Bot},
    {id: 1, text: 'a', author: Author.Bot},
    {id: 2, text: 'a', author: Author.User},
    {id: 3, text: 'a', author: Author.Bot},
    {id: 4, text: 'a', author: Author.User},
]

const ChatContainer = () => {
    const [ inputValue, setInputValue ] = useState('');
    const [ dialog, setDialog ] = useState(initialDialog as Array<DialogItem>);
    const [ newItemId, setNewItemId ] = useState(dialog[dialog.length - 1].id);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (!inputValue) return;

        if (inputValue.trim()) {
            setDialog(dialog.concat({id: newItemId, text: inputValue, author: Author.User}));
        }
    }

    const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        const value = event.currentTarget.value;
        if (!value) return;

        if (value.trim()) {
            setInputValue(value);
        }
    }

    useEffect(() => {
        setNewItemId(newItemId + 1);
    }, [dialog]);

    return (
        <div className="chat-container">
            <div className="dialog-container">
                {dialog.map(item => {
                    return <DialogField text={item.text} author={item.author} key={item.id} />
                    })
                }
            </div>
            <form className="chat-form" onSubmit={handleSubmit}>
                <input className='input input-reset' type="text" onChange={handleChange} value={inputValue} placeholder='Enter your data' />
                <button className="button button-reset" type='submit'>Send</button>
            </form>
        </div>
    )
}

export default ChatContainer;