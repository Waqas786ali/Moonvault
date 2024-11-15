import { useState } from 'react';
import PropTypes from 'prop-types'; 
import Svgs from './Svgs';

const Accordion = ({ index,title,para,children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="last:border-b border-t border-primary text-white p-4 py-8 my-2 flex items-start justify-between gap-5 cursor-pointer" onClick={toggleAccordion} {...props}>
       <div className='flex items-start gap-5'>
            <div className='font-semibold'>
                <h3>{(index<10)&&`0${index}`}</h3>
            </div>
            <div className='flex flex-col gap-0'>
                <h4 className="text-base font-semibold">{title}</h4>
                {isOpen && (
                    <div className="text-para">
                    {para && (<p className='text-xl'>{para}</p>)}
                    {children && children }
                    </div>
                )}
            </div>
       </div>
        <div>
            <p className={`transform transition-transform duration-500 ${isOpen && "-rotate-90"}`}>
                <Svgs.RightArrow className={"rotate-45 size-6 text-primary"} />
            </p>
        </div>
    </div>
  );
};

Accordion.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Accordion;
