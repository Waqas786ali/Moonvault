// import React from 'react';

const cardData = [
  {
    title: "Socials:",
    description: "Stay tuned to our social media channels for the most recent updates.",
  },
  {
    title: "Our token is now live:",
    description: "Buy $VAULT now on Uniswap.",
  },
  {
    title: "Contract Address:",
    description: "Our contract address is 0x220125AF9DA649e368813733eC8702A4145F996b.",
  },
];

const TopNavbar = () => {
  return (
    <div className="overflow-hidden h-[45px] w-full bg-black border-primary border flex items-center justify-start text-xl">
      <div className="w-[10%] flex justify-center items-center">
        <p className="text-para italic font-ppneuebit">Now live <span className="text-xl animate-blink">•</span></p>
      </div>
      <hr className="h-full border border-primary" />
      <div className="w-[90%] flex justify-between items-center gap-10">
        {cardData.map((card, index) => (
          <div key={index} className="card flex items-center gap-2 whitespace-nowrap">
            <p className="text-secondary">{card.title}</p>
            <p className="text-para italic font-ppneuebit">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNavbar;
