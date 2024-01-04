
const classNames = (...rest) => {
    return (
        rest.filter(Boolean).join(" ")
    )
};

export default classNames;