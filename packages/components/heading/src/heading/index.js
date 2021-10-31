import './styles.scss';

const Heading = ({
    variant = "primary",
    label,
    level = 1,
    bare = false,
}) => {
    const HeadingLevel = `h${level}`;
    return <div className={`heading -${variant}`}>
        <HeadingLevel
            className={`
                ${bare ? 'bare' : ''}
            `}
        >
            {label}
        </HeadingLevel>
    </div>
}

export default Heading;