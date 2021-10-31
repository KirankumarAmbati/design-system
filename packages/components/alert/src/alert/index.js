import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInfoCircle,
    faExclamationTriangle,
    faExclamationCircle,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import "./styles.scss";

const Alert = ({
    variant,
    label,
}) => {
    const [isOpen, setIsOpen] = useState(true);

    let icon;
    switch (variant) {
        case 'warning':
        case 'warning-light':
            icon = faExclamationCircle;
            break;
        case 'error':
        case 'error-light':
            icon = faExclamationTriangle;
            break;
        case 'success':
        case 'success-light':
            icon = faCheckCircle;
            break;
        case 'info':
        case 'info-light':
        default:
            icon = faInfoCircle;
            break;
    }

    return isOpen && <div
        className={`
            alert
            -${variant}
            ${variant.includes('light') ? 'light' : ''}
        `}
    >
        <div className="message-container">
            <FontAwesomeIcon className='icon' icon={icon} />
            <p>{label}</p>
        </div>
        <button onClick={() => setIsOpen(false)}>
            X
    </button>
    </div>
}

export default Alert;