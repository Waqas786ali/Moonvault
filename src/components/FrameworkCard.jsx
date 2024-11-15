import PropTypes from 'prop-types';
import RocketImg from "../assets/images/logo.png";

const FrameworkCard = ({ heading, para, ...props }) => {
  return (
    <div className="card h-[350px] xl:h-[300px] w-full lg:w-[47%] border border-primary p-6 flex flex-col gap-16 justify-between"
    {...props}
    >
      <div className="flex items-start justify-between">
        <h4 className="text-subheading text-base mb-2">{heading}</h4>
        <img className="w-[45px] lg:w-[55px]" src={RocketImg} alt="RocketImg" />
      </div>
      <div className="text-para w-full text-xl space-y-4">
        <p>{para}</p>
      </div>
    </div>
  );
};

FrameworkCard.propTypes = {
  heading: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};

export default FrameworkCard;
