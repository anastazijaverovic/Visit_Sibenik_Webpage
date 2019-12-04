import React from 'react'
import classnames from 'classnames'

const SendButton = props => (
    <div className={classnames('button', props.className)} 
        onClick={props.onClick}>
        {props.text}
    </div>
)

export default SendButton
