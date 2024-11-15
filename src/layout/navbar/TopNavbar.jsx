import Marquee from "react-fast-marquee";

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
    <div className="overflow-hidden h-[45px] w-full bg-black border-primary border flex items-center text-xl">
      {/* Fixed Section */}
      <div className="w-[10%] min-w-[120px] flex justify-center items-center bg-black z-10">
        <p className="text-para italic font-ppneuebit">
          Now live <span className="text-xl animate-blink">•</span>
        </p>
      </div>
      <hr className="h-full border border-primary overflow-hidden bg-black" />

      {/* Scrolling Section */}
      <div className="w-[90%] overflow-hidden">
        <Marquee gradient={false} speed={50}>
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card flex items-center gap-2 whitespace-nowrap mx-6"
            >
              <p className="text-secondary">{card.title}</p>
              <p className="text-para italic font-ppneuebit">{card.description}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TopNavbar;
