import './styles.scss';

const Button = ({
    variant = "primary",
    label,
    size = 'lg',
    onClick,
    disabled = false,
    loading = false,
    loadingText,
    bare = false,
}) => {
    if(!loadingText) {
        loadingText = label;
    }

    return <button
        className={`
            button
            ${size}
            ${loading || disabled ? 'disabled' : ''}
            ${bare ? `-${variant}-inverted bare` : `-${variant}`}
        `}
        onClick={onClick}
        disabled={disabled || loading}
        title={loading ? loadingText : label}
        aria-label={loading ? loadingText : label}
        aria-disabled={String(disabled || loading)}
    >
        {loading ? loadingText : label}
    </button >
}

export default Button;