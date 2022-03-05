import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
    }) => {
        const checkButtonStyle = STYLES.indexOf(buttonStyle)
        ? buttonStyle 
        : STYLES[0];
        
        const checkButtonSize = SIZES.indexOf(buttonSize) 
        ? buttonSize 
        : SIZES[0]

        return (
            <Link to='/SignInOut' className='btn--mobile'>
                <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </Link>
        )
    }
