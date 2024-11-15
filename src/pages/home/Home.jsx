
import Header from './header/Header'
import About from './about/About'
import Clients from './clients/Clients'
import BluePrint from './blueprint/BluePrint'
import TokenOmics from './tokenomics/TokenOmics'
import Overview from './overview/Overview'
import Features from './features/Features'
import Framework from './framework/Framework'
import Services from './services/Services'
import CoreValues from './values/CoreValues'
import FAQs from './faqs/FAQs'
import Community from './community/Community'

const Home = () => {
  return (
    <main id='HOME'>
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
  )
}

export default Home