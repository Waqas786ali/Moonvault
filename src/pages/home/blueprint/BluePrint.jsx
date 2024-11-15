import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Accordion from "../../../components/Accordion"

const BluePrint = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  const accordionData = [
    { id: 1, title: 'Innovative Technology', para: 'MoonVault leverages the latest in blockchain and financial tools to create a powerful and intuitive platform, ensuring users benefit from cutting-edge advancements across sectors.' },
    { id: 2, title: 'Integrated Experience', para: 'By supporting the $VAULT token, MoonVault combines decentralized rewards with advanced financial solutions, providing a seamless and enhanced on-chain experience.' },
    { id: 3, title: 'Sustainable Growth', para: "MoonVault’s commitment to long-term value is reflected in its support of $VAULT's decentralized tokenomics, designed to foster enduring utility and growth within the ecosystem." },
  ];
  return (
    <section id='BLUEPRINT'>
      <div className="flex-col lg:flex lg:flex-row w-[95%] sm:w-[85%] mx-auto py-10">
          <div className="lg:w-[25%] pb-5 lg:pb-0">
            <h4 className="text-subheading text-base mb-4">/ BLUEPRINT</h4>
          </div>
          <div className="lg:w-[75%] p-[0.25rem] lg:p-[1rem]">
            {accordionData?.map((item) => (
              <Accordion
                key={item.id}
                index={item.id}
                title={item.title}
                para={item.para}
                data-aos="fade-left"
              />
            ))}
          </div>
      </div>
    </section>
  )
}

export default BluePrint