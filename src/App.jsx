import './App.css';
import Footer from './layout/footer/Footer';
import Nav from './layout/navbar/Navbar';
import Home from './pages/home/Home';

function App() {
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
