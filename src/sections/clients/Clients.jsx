import Marquee from "react-fast-marquee";
import Bar1Img1 from "../../assets/images/gecko-terminal.svg";
import Bar1Img2 from "../../assets/images/dextools.svg";
import Bar1Img3 from "../../assets/images/uniswap.svg";
import Bar1Img4 from "../../assets/images/dexCleaner.svg";
import Bar1Img5 from "../../assets/images/coinGecko.svg";
import Bar2Img1 from "../../assets/images/hostinger.svg";
import Bar2Img2 from "../../assets/images/metaMask.svg";
import Bar2Img3 from "../../assets/images/infura.svg";
import Bar2Img4 from "../../assets/images/etherScan.svg";
import Bar2Img5 from "../../assets/images/CoinMarketCap.svg";

const Clients = () => {
  const bar1Images = [Bar1Img1, Bar1Img2, Bar1Img3, Bar1Img4, Bar1Img5];
  const bar2Images = [Bar2Img1, Bar2Img2, Bar2Img3, Bar2Img4, Bar2Img5];

  return (
    <section className="py-10 overflow-hidden ">

      <div className="flex flex-col gap-8">
        {/* First Row */}
        <Marquee gradient={false} speed={50}>
          {[...bar1Images, ...bar1Images].map((src, index) => (
            <div
              key={index}
              className="h-16 w-[250px] mx-4 flex-shrink-0 rounded-xl border border-[#6142FF] py-3 px-6 flex justify-center items-center"
            >
              <img className="w-[80%] sm:w-full" src={src} alt={`Bar1Img${index + 1}`} />
            </div>
          ))}
        </Marquee>

        {/* Second Row (Reverse Direction) */}
        <Marquee gradient={false} speed={50} direction="right">
          {[...bar2Images, ...bar2Images].map((src, index) => (
            <div
              key={index}
              className="h-16 w-[250px] mx-4 flex-shrink-0 rounded-xl border border-[#6142FF] flex justify-center items-center px-6 py-3"
            >
              <img className="w-[80%] sm:w-full" src={src} alt={`Bar2Img${index + 1}`} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
