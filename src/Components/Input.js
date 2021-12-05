import React from 'react';
import '../Styles/Input.css';

export const Input = (props) => (
    <div className={props.styleToggle? 'invalidInput' : 'input'}>
        {props.input}
    </div>
)

export default Input;