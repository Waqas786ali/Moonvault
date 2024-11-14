import './App.css';
import Footer from './layout/footer/Footer';
import Nav from './layout/navbar/Navbar';
import About from './sections/about/About';
import BluePrint from './sections/blueprint/BluePrint';
import Clients from './sections/clients/Clients';
import Community from './sections/community/Community';
import Header from './sections/header/Header';

function App() {
  return (
    <div className='overflow-x-hidden w-full max-w-[1600px] mx-auto'>
      <Nav />
      <main>
        <Header />
        <About />
        <Clients />
        <BluePrint />
        <Community />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
