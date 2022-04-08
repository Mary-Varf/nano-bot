import { useEffect, useState } from "react";
import DialogField from "./Dialog-field";
import { Author } from "../types";
import apiService from '../service/apiService';

interface DialogItem {
    id: number,
    text: string,
    author: Author,
}

const initialDialog1 = [
    {id: 0, text: 'a', author: Author.Bot},
    {id: 1, text: 'a', author: Author.Bot},
    {id: 2, text: 'a', author: Author.User},
    {id: 3, text: 'a', author: Author.Bot},
    {id: 4, text: 'a', author: Author.User},
]

const getInitialDialog = (): DialogItem[] => {
    const storeDialog = localStorage.getItem('dialog');
    if (!storeDialog) return [];

    return JSON.parse(storeDialog);
}
const ChatContainer = () => {
    const [ inputValue, setInputValue ] = useState('');
    const [ dialog, setDialog ] = useState(getInitialDialog() as DialogItem[]);
    const [ newItemId, setNewItemId ] = useState(dialog[dialog.length - 1]?.id ?? 0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (!inputValue) return;

        if (inputValue.trim()) {
            setDialog(dialog.concat({id: newItemId, text: inputValue, author: Author.User}));
            apiService.initialization();
            setInputValue('');
        }
    }

    const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        const value = event.currentTarget.value;
        if (!value) return;

        if (value.trim()) {
            setInputValue(value);
        }
    }
    const handleClear = () => {
        setDialog([]);
        localStorage.setItem('dialog', '');
    }

    useEffect(() => {
        const dialogContainer = document.querySelector('.dialog-container');
        console.log(dialogContainer.scrollHeight);
        dialogContainer.scrollTo({top: dialogContainer.scrollHeight});
        setNewItemId(newItemId + 1);
        localStorage.setItem('dialog', JSON.stringify(dialog));
    }, [dialog]);

    return (
        <div className="chat-container">
            <div className="dialog-container">
                { dialog.map(item => {
                    return <DialogField text={ item.text } author={ item.author } key={ item.id } />
                }) }
            </div>
            <form className="chat-form" onSubmit={ handleSubmit }>
                <input className='input input-reset' type="text" onChange={ handleChange } value={inputValue} placeholder='Enter your data' />
                <button className="button button-reset button-send form-button" type='submit'>
                </button>
                <button className="button button-reset button-clear form-button" onClick={handleClear}>
                </button>
            </form>
        </div>
    )
}

export default ChatContainer;