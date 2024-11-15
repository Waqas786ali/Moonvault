

import SecondBtn from "../../../components/SecondBtn";
import Oval1 from "../../../assets/images/ovaal1.png";
import Oval2 from "../../../assets/images/ovaal2.png";

const TokenOmics = () => {

    const tokenOmicsData1 = [
        {
            id: 1,
            heading: "5% BUY TAX",
        },
        {
            id: 2,
            heading: "5% SELL TAX",
        },
        {
            id: 3,
            heading: "LP BURNED",
        },
       
    ];
    const tokenOmicsData2    = [
        {
            id: 1,
            heading: "3% S.T.A.R.R",
        },
        {
            id: 2,
            heading: "1% DEVELOPMENT",
        },
        {
            id: 3,
            heading: "1% MARKETING",
        },
       
    ];
 
  return (
    <section id="TOKENOMICS">
            <div className="w-[95%] sm:w-[85%] mx-auto py-10">
                <div className="py-4">
                    <h4 className="text-subheading text-base mb-4">/ TOKENOMICS</h4>
                    <h3 className="text-heading tracking-widest text-3xl font-bold mb-6">Optimized Tokenomics for Sustainability and Growth</h3>
                    <div className="text-para w-full lg:w-[46%] text-xl space-y-4 mb-6">
                        <p>The decentralized tokenomics of $VAULT, supported by MoonVault’s technological advancements, are designed to ensure long-term value and utility.</p>
                    </div>
                    <div className="pl-1 flex items-center gap-8 md:gap-12">
                        <SecondBtn text={"COPY ADDRESS"} />
                        <SecondBtn text={"UNSWAP"} />
                        <SecondBtn text={"DEXTOOLS"} />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-4 pt-20 py-10 w-full">

                    <div className="w-full md:w-[30%] flex flex-col md:items-center md:justify-start gap-6 h-full">
                        {tokenOmicsData1?.map((data) => (
                            <div key={data.id} className="card flex items-center w-full">
                                <h4 className="flex justify-center items-center mx-auto w-full md:w-[90%] xl:w-[75%] py-5 border border-primary text-subheading font-bold text-base mb-2">{data.heading}</h4>
                            </div>
                        ))}
                    </div>
                    <div className="h-[500px] md:h-full w-full  md:w-[40%] flex justify-center items-center relative">
                        <div className="animationOvals absolute top-28 mxs:top-24 xs:top-16 sm:top-6 md:top-[-120px] lg:top-[-140px] xl:top-[-170px] w-[80%] md:w-full">
                            <img className="animate-SlowOvalspin top-0 absolute w-full" src={Oval1} alt="Ovaal1" />
                            <img className="animate-SlowOvalspin top-0 absolute w-full" src={Oval2} alt="Ovaal2" />
                        </div>
                        <div className="flex items-center justify-center gap-5">
                            <h4 className="text-subheading font-bold text-2xl md:text-2xl xl:text-4xl">MOONVAULT</h4>
                            <div>
                                <p className="text-para">TOTAL SUPPLY</p>
                                <p className="text-primary">1,000,000,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[30%] flex flex-col md:items-center md:justify-start gap-4 h-full">
                        {tokenOmicsData2?.map((data) => (
                            <div key={data.id} className="card flex items-center justify-end w-full">
                              <h4 className="flex justify-center items-center w-full md:w-[90%] xl:w-[75%] mx-auto py-5 border border-primary text-subheading font-bold text-base mb-2">{data.heading}</h4>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
  )
}

export default TokenOmics