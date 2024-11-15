import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Logo from "../../assets/images/logo.png";
import Svgs from '../../components/Svgs';

const DownNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex justify-between mx-auto'>
      <div
        className={`flex justify-between items-center bg-black text-white border border-primary py-2.5 px-4 transition-all duration-300 z-50 w-full fixed mx-auto max-w-[1600px] ${
          isSticky ? 'top-0 shadow-lg' : 'top-[45px]'
        }`}
      >
        <div className='flex items-center gap-2 pl-2 lg:pl-4'>
          <img className='w-[30px]' src={Logo} alt="logo" />
          <h6 className='font-ppneuebit-mono tracking-widest font-bold text-heading'>MOONVAULT</h6>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className='lg:hidden'>
          <button className='cursor-pointer'>
            <Svgs.Hamburger className={"size-8"} />
          </button>
        </div>
        <div className='hidden lg:flex items-center gap-14'>
          <ul className='flex items-center gap-12 text-base uppercase'>
            <li><a href="#ABOUT">About</a></li>
            <li><a href="#BLUEPRINT">Blueprint</a></li>
            <li><a href="#TOKENOMICS">Tokenomics</a></li>
            <li><a href="#OVERVIEW">Starr</a></li>
            <li><a href="#FRAMEWORK">Framework</a></li>
            <li><a href="#COREVALUES">Core Values</a></li>
            <li><a href="#FAQS">FAQ&#39;<small>s</small></a></li>
          </ul>
          <div className='flex items-center gap-4'>
            <Button text={"BUY $VAULT"} />
            <Button fill text={"LAUNCH dAPP"} />
          </div>
        </div>
      </div>

      <div
        className={`max-w-[1600px] block lg:hidden fixed top-0 left-0 right-0 bottom-0 z-50 h-screen w-full transform bg-black transition-transform ease-[cubic-bezier(0.68,_-0.55,_0.27,_1.55) ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-end pt-4 px-4'>
          <button onClick={() => setIsOpen(false)} className="cursor-pointer">
            <Svgs.Xmark className={"size-7 text-para"} />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-0 mt-10 text-lg uppercase text-white w-full">
          <li className='w-full'><a href="#ABOUT" className='mx-auto py-4 flex justify-center items-center border-t border-t-primary w-[90%] text-center'>About</a></li>
          <li className='w-full'><a href="#BLUEPRINT" className='mx-auto py-4 flex justify-center items-center border-t border-t-primary w-[90%] text-center'>Blueprint</a></li>
          <li className='w-full'><a href="#TOKENOMICS" className='mx-auto py-4 flex justify-center items-center border-t border-t-primary w-[90%] text-center'>Tokenomics</a></li>
          <li className='w-full'><a href="#OVERVIEW" className='mx-auto py-4 flex justify-center items-center border-t border-t-primary w-[90%] text-center'>Starr</a></li>
          <li className='w-full'><a href="#FRAMEWORK" className='mx-auto py-4 flex justify-center items-center border-t border-t-primary w-[90%] text-center'>Framework</a></li>
          <li className='w-full'><a href="#COREVALUES" className='mx-auto py-4 flex justify-center items-center border-t border-t-primary w-[90%] text-center'>Core Values</a></li>
          <li className='w-full'><a href="#FAQS" className='mx-auto py-4 flex justify-center items-center border-y border-y-primary w-[90%] text-center'>FAQ&#39;s</a></li>
        </ul>
        <div className='flex flex-col items-center gap-2 mt-4'>
          <Button className={"w-[90%] font-medium text-lg"} text={"BUY $VAULT"} />
          <Button className={"w-[90%] font-medium text-lg"} fill text={"LAUNCH dAPP"} />
        </div>
      </div>
    </div>
  );
};

export default DownNavbar;
