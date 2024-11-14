import PropTypes from 'prop-types';

const Button = ({ className, fill, text }) => {
  return (
    <button className={`px-6 py-2.5 border border-primary text-white transition-all ${fill ? "bg-primary hover:bg-transparent" : "bg-transparent hover:bg-primary"} ${className}`}>
      <p className={fill ? "hover:text-secondary" : ""}>{text}</p>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.bool,
  text: PropTypes.string,
};

export default Button;
