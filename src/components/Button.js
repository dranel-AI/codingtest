import PropTypes from "prop-types";

const Button = ({ text, color, event }) => {
  return (
    <button onClick={event} style={{ background: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button"
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  event: PropTypes.func
};

export default Button;
