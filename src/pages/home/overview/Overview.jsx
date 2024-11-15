import StarEngineBG from "../../../assets/images/star-engine-bg.svg"
import Earth from "../../../assets/images/earth.svg"
import ThreePlanes from "../../../assets/images/overview-three-planes-two.png"

const Overview = () => {
    
    const isMobile = window.innerWidth <= 1023;
  return (
    <section id='OVERVIEW'>
        <div className="w-[95%] sm:w-[85%] mx-auto h-full py-[15%] pb-[15%] star_img"
           style={
            !isMobile
                ? {
                    backgroundImage: `url(${StarEngineBG})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "75%",
                }
                : {}
        }
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center  gap-28 lg:gap-5">
                    <div className="relative flex flex-col lg:flex-row justify-center items-center lg:items-end gap-5 text-center w-full lg:w-auto">
                        <img className="earthMobile w-[80%] lg:hidden" src={Earth} alt="Earth" />
                        <img className="animate-Slowspin transition-all absolute top-[-14%] md:top-[-10%] lg:top-[-7%] 2xl:top-[-5%] left-0 w-full" src={ThreePlanes} alt="ThreePlanes" />
                        <div className="star_content absolute lg:static w-[40%] sm:w-full lg:w-[35%] xl:w-[30%] 2xl:w-[25%]">
                            <h3 className="text-heading tracking-widest text-[1.4rem] font-bold mb-2 xl:mb-4 2xl:mb-6 text-center">The S.T.A.R.R. Engine</h3>
                            <p className="text-para text-center">(Self-Triggered Automatic Regeneration and Redistribution)</p>
                        </div>
                    </div>
                    <div className="-order-1 lg:order-none flex justify-center items-center lg:pt-[25%]">
                        <div className="relative border border-white p-8 sm:p-10 w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[67%]">
                            <div className="absolute top-[10%] -left-[1.5%] h-[80%] bg-primary w-[5px]"></div>
                            <div>
                                <h3 className="text-heading tracking-wide text-2xl font-medium mb-6">Overview</h3>
                                <div className="space-y-4 text-para">
                                    <p>The $VAULT token features first-of-its-kind technology that implements automatic rotational tokenomic functionality featuring: Buyback-and-Reflect in $VAULT, $ETH rewards (as $WETH), Supply Reductions, and Decentralized Liquidity Infusions.</p>
                                    <p>This is all made possible, with minimal gas fees, by the S.T.A.R.R. Engine.</p>
                                </div>
                            </div>
                            <div className="absolute top-[10%] -right-[1.5%] h-[80%] bg-primary w-[5px]"></div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Overview


