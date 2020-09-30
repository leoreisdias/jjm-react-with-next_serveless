/* eslint-disable indent */
import React, { InputHTMLAttributes } from 'react'

import styles from './input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className={styles.inputBlock}>
            <input type="text" id={name} {...rest} placeholder={label} />
        </div>
    )
}

export default Input
