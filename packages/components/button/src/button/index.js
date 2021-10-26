import './styles.scss';

const Button = ({
    variant = "primary",
    label,
    size,
    onClick,
    disabled,
    loading,
    loadingText
}) => {
    return <button
        className={`button
            -${variant}
            ${size}
            ${loading || disabled ? 'disabled' : ''}`}
        onClick={onClick}
        disabled={disabled || loading}
    >
        {loading ? loadingText : label}
    </button >
}

export default Button;