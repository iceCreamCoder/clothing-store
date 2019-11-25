import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({ children, ...additionalProps}) => (
    <button className='custom-button' {...additionalProps} >
        {children}
    </button>
)

export default CustomButton;