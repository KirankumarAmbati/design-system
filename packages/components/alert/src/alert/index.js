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
    let icon;
    switch (variant) {
        case 'warning':
            icon = faExclamationCircle;
            break;
        case 'error':
            icon = faExclamationTriangle;
            break;
        case 'success':
            icon = faCheckCircle;
            break;
        case 'info':
        default:
            icon = faInfoCircle;
            break;
    }
    return <div
        className={`
            alert
            -${variant}
        `}
    >
        <div className="message-container">
            <FontAwesomeIcon className='icon' icon={icon} />
            <p>{label}</p>
        </div>
        <button
            onClick={e => {
                e.target.parentElement.parentElement.removeChild(e.target.parentElement)
            }}
        >
            X
        </button>
    </div>
}

export default Alert;