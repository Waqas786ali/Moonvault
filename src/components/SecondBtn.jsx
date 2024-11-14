import PropTypes from 'prop-types';

const SecondBtn = ({ className, text }) => {
  return (
    <button className={`SecondBtn leading-none px-2 py-2 transition-all hover:text-primary text-secondary text-xl flex items-center justify-center ${className}`}>
      <p className='leading-none m-0 p-0'>{text}</p>
    </button>
  );
};

SecondBtn.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default SecondBtn;
