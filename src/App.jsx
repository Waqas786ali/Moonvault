import './App.css';
import Footer from './layout/footer/Footer';
import Nav from './layout/navbar/Navbar';
import About from './sections/about/About';
import BluePrint from './sections/blueprint/BluePrint';
import Clients from './sections/clients/Clients';
import Community from './sections/community/Community';
import FAQs from './sections/faqs/FAQs';
import Features from './sections/features/Features';
import Framework from './sections/framework/Framework';
import Header from './sections/header/Header';
import Overview from './sections/overview/Overview';
import Services from './sections/services/Services';
import TokenOmics from './sections/tokenomics/TokenOmics';
import CoreValues from './sections/values/CoreValues';

function App() {
  return (
    <div className='overflow-x-hidden w-full max-w-[1600px] mx-auto'>
      <Nav />
      <main>
        <Header />
        <About />
        <Clients />
        <BluePrint />
        <TokenOmics />
        <Overview />
        <Features />
        <Framework />
        <Services />
        <CoreValues />
        <FAQs />
        <Community />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
