import { useState } from "react";
import ChatContainer from "./Chat-container";

const ChatIcon = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (): void => {
        setIsOpen(!isOpen);

    }

    const getIconClass = (): string => {
        return `icon-container ${isOpen ? 'opened' : ''}`;
    }

    return (
        <>
            <div className={getIconClass()} onClick={handleClick}></div>
            {isOpen ? <ChatContainer /> : ''}
        </>
      );
}

export default ChatIcon;