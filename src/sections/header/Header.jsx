import heroSection from '../../assets/images/heroSection.png';
import moonBaseEarth from '../../assets/images/moonbase-earth.png';
import gifComputers from '../../assets/videos/gifComputers.gif';


const Header = () => {
  return (
    <section className='relative h-screen' >
      <div className="absolute h-full w-full" style={{
          backgroundImage: `url(${moonBaseEarth})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      <div className="z-[1] absolute h-full w-full" style={{
          backgroundImage: `url(${gifComputers})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      <div className="absolute h-full w-full" style={{
          backgroundImage: `url(${heroSection})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      <div className="before:absolute before:bottom-0 before:left-0 before:w-full before:h-[300px] before:bg-gradient-to-t before:from-black before:to-transparent before:z-10"></div>
    </section>
  );
};

export default Header;
