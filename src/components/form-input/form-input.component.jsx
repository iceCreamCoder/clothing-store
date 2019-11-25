import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...additionalProps }) => (
    <div className="group" >
        <input
            className='form-input'
            onChange={handleChange}
            {...additionalProps}
        />
        {
            label ? 
           ( <label 
             className={`${additionalProps.value.length ? 'shrink': '' } form-input-label`} >
                 {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;