import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './layout/footer/Footer';
import Nav from './layout/navbar/Navbar';
import Home from './pages/home/Home';
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);
  
  return (
    <div className='overflow-x-hidden w-full max-w-[1600px] mx-auto'>
      <Nav />
        {/* // Pages */}
        <Home />
      <Footer/>
    </div>
  );
}

export default App;
