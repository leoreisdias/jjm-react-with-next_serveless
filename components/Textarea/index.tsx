/* eslint-disable prettier/prettier */
/* eslint-disable indent */

import React, { TextareaHTMLAttributes } from 'react'

import styles from './textarea.module.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className={styles.textareaBlock}>
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    )
}

export default Textarea
