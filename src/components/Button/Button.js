import "./Button.css";

const Button = ({ href, isPrimary, children }) => {
    return (
        <a className={`btn btn--${isPrimary ? "primary" : "default"}`} href={href}>{children}</a>
    );
}

export default Button;