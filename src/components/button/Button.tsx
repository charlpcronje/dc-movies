import React, { ReactNode } from 'react';
import './button.scss';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <button className={`btn ${className || ''}`} onClick={onClick}>
            {children}
        </button>
    );
};

export const OutlineButton: React.FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <Button className={`btn-outline ${className || ''}`} onClick={onClick}>
            {children}
        </Button>
    );
};

export default Button;