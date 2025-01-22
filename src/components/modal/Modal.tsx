import React, { useState, useEffect, useRef, ReactNode } from 'react';
import './modal.scss';

interface ModalProps {
    active?: boolean;
    id?: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ active = false, id, children }) => {
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        setActive(active);
    }, [active]);

    return (
        <div id={id} className={`modal ${isActive ? 'active' : ''}`}>
            {children}
        </div>
    );
};

interface ModalContentProps {
    children: ReactNode;
    onClose?: () => void;
}

export const ModalContent: React.FC<ModalContentProps> = ({ children, onClose }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        contentRef.current?.parentNode?.classList.remove('active');
        if (onClose) onClose();
    };

    return (
        <div ref={contentRef} className="modal__content">
            {children}
            <div className="modal__content__close" onClick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    );
};

export default Modal;