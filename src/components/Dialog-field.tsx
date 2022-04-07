import { Author } from '../types';

interface DialogProps {
    text: string,
    author: Author
}

const DialogField = ({text, author}: DialogProps): JSX.Element => {
    const getClass = (): string => {
        return `dialog ${author}-answer`;
    }

    return <div className={getClass()}>{text}</div>;
}

export default DialogField