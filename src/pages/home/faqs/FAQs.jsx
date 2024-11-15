import Accordion from "../../../components/Accordion"


const FAQs = () => {

  const accordionData = [
    { id: 1, title: 'Do I have to wait for my dividends to be distributed?', para: '$VAULT rewards are available to claim every 15 minutes (since last claim), and buying, selling, or transferring $VAULT will automatically claim rewards.MoonVault funds an iterative script which processes $VAULT holder rewards randomly free of charge.' },
    { id: 2, title: 'Is there a fee on transfers?', para: 'Yes, transfers incur the same fee as buys and sells to ensure that rewards are accounted for accurately and securely. Adding LP through the Helper contract does not incur a Transfer fee, LP removal Transfer fees are unavoidable.' },
    { id: 3, title: 'Do I have to claim LP rewards?', para: "No, rewards for liquidity providers are automatic and decentralized through the Liquidity Infusion process. There is no need to manually claim them. A Helper contract is deployed alongside $VAULT to allow smooth addition and removal of liquidity via smart contract or dApp." },
  ];
  return (
    <section id='FAQS'>
      <div className="flex-col lg:flex lg:flex-row w-[95%] sm:w-[85%] mx-auto py-10">
          <div className="lg:w-[25%] pb-5 lg:pb-0">
            <h4 className="text-subheading text-base mb-4">/ FAQ &#39; S</h4>
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

export default FAQs