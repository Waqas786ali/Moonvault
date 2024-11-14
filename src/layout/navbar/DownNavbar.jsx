import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Logo from "../../assets/images/logo.png";

const DownNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div  className={`flex justify-between items-center bg-black text-white border border-primary py-2.5 px-4 transition-all duration-300 z-50 w-full transform fixed left-0 ${
        isSticky ? 'top-0 shadow-lg' : ' top-[45px]'
      }`}
    >
      <div className='flex items-center gap-2 pl-4'>
        <img className='w-[30px]' src={Logo} alt="logo" />
        <h6 className='font-ppneuebit-mono tracking-widest font-bold text-heading'>MOONVAULT</h6>
      </div>
      <div className='flex items-center gap-14'>
        <ul className='flex items-center gap-12 text-base uppercase'>
          <li><a href="#">About</a></li>
          <li><a href="#">Blueprint</a></li>
          <li><a href="#">Tokenomics</a></li>
          <li><a href="#">Starr</a></li>
          <li><a href="#">Framework</a></li>
          <li><a href="#">Core Values</a></li>
          <li><a href="#">FAQ&#39;<small>s</small></a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <Button text={"BUY $VAULT"} />
          <Button fill text={"LAUNCH dAPP"} />
        </div>
      </div>
    </div>
  );
};

export default DownNavbar;
