import heroSection from '../../../assets/images/heroSection.png';
import moonBaseEarth from '../../../assets/images/moonbase-earth.png';
import gifComputers from '../../../assets/videos/gifComputers.gif';

const Header = () => {
  return (
    <section id='HEADER'>
      <div className='relative h-screen w-[1600px] mt-16'>
        <div
          className="moonBaseEarth absolute left-0 h-full w-full"
          style={{
            backgroundImage: `url(${moonBaseEarth})`,
          }}
        ></div>
        <div
          className="z-[1] absolute left-0 h-full w-full"
          style={{
            backgroundImage: `url(${gifComputers})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div
          className="absolute h-full w-full left-0"
          style={{
            backgroundImage: `url(${heroSection})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full h-[200px] sm:h-[250px] md:h-[300px] bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Header;
