import Accordion from "../../components/Accordion"


const CoreValues = () => {
  const accordionData = [
    { id: 1, title: 'Security & Transparency', para: 'MoonVault makes sure that every transaction and procedure is safe and verifiable on the blockchain by prioritizing user confidence through strong security standards and open operations.' },
    { id: 2, title: 'Community-Driven Innovation', para: 'By fostering a collaborative ecosystem where community feedback and input drives ongoing platform development, MoonVault gives users the power to influence how decentralized finance is developed in the future.' },
    { id: 3, title: 'Balanced Measures', para: "MoonVault strives to separate it’s centralized supportive nature of $VAULT from the decentralized nature of the $VAULT token. The MoonVault project and the $VAULT token maintain a harmoniously balanced distinction." },
  ];
  return (
    <section id="COREVALUES">
      <div className="flex-col lg:flex lg:flex-row w-[95%] sm:w-[85%] mx-auto py-10">
          <div className="lg:w-[25%] pb-5 lg:pb-0">
            <h4 className="text-subheading text-base mb-4">/ CORE VALUES</h4>
          </div>
          <div className="lg:w-[75%] p-[0.25rem] lg:p-[1rem]">
            {accordionData?.map((item) => (
              <Accordion
                key={item.id}
                index={item.id}
                title={item.title}
                para={item.para}
              />
            ))}
          </div>
      </div>
    </section>
  )
}

export default CoreValues