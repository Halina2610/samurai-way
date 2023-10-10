import React, {useEffect, useRef, useState} from 'react'
import s from './MessageSender.module.css'
import {Button} from "../../ common/Button";

const MessageSender = (props: any) => {
    const M = props.M
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [messages, setMessages] = useState<any[]>([])
    const [text, setText] = useState<any>('')

    const onChange = (e: any) => {
        setText(e.currentTarget.value)
    }

    useEffect(() => {
        if (textareaRef?.current) {
            textareaRef.current.style.height = '0px'
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
        }
    }, [text])

    const addMessage = () => {
    }

    const onKeyDown = (e: any) => {
        e.key === 'Enter' && e.shiftKey && addMessage()
    }

    return (
        <>
            <div className={s.sendForm}>
                <textarea
                    id={'hw1-textarea'}
                    className={s.textarea}
                    ref={textareaRef}

                    title={'Shift+Enter for send'}
                    placeholder={'Enter your message'}
                    value={text}

                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <Button onClick={addMessage} name={"Send"}/>

            </div>
        </>
    )
}

export default MessageSender
