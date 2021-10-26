import './styles.scss';

const ButtonBare = ({
    variant = "primary",
    label,
    onClick,
    disabled,
    loading,
    loadingText
}) => {
    return <button
        className={`button bare -${variant} ${loading || disabled ? 'disabled' : ''}`}
        onClick={onClick}
        disabled={disabled || loading}
    >
        {loading ? loadingText : label}
    </button >
}

export default ButtonBare;