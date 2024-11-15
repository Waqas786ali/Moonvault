import Service1Video from "../../assets/videos/lp.mp4";
import Service2Video from "../../assets/videos/reflect.mp4";
import Service3Video from "../../assets/videos/burn.mp4";

const Services = () => {
    const servicesData = [
        {
            id: 1,
            sub_heading: "Replenish",
            heading: "Liquidity Infusions",
            para: "Initial liquidity for $VAULT is burned. The replenishment functions trigger decentralized liquidity infusions, enhancing market stability and reducing price impact for future trades. These infusions grow LP depth without causing sells on the chart, ensuring a stable and resilient liquidity pool.",
            src: Service1Video,
        },
        {
            id: 2,
            sub_heading: "Redistribute",
            heading: "Dual Dividends, Auto Buybacks",
            para: "The redistribution functions rotate between automatic $ETH rewards as $WETH and auto-buyback-and-reflect as $VAULT. This mechanism promotes long-term engagement and value growth by distributing both $ETH and $VAULT to holders, while supporting $VAULT's market price through buybacks.",
            src: Service2Video,
        },
        {
            id: 3,
            sub_heading: "Rebalance",
            heading: "Auto Burn",
            para: "The rebalancing mechanism reduces the total supply of $VAULT tokens through randomized True burns, ensuring a stable and appreciating token value while balancing the growing reserves accumulated through LP Infusions.",
            src: Service3Video,
        }
    ];

    return (
        <section id="SERVICES">
            <div className="w-[95%] sm:w-[85%] mx-auto py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 sm:px-[10%] md:px-[20%] lg:px-0">
                    {servicesData.map((data) => (
                        <div key={data.id} className="card border border-primary p-6">
                            <div className="h-auto lg:h-80">
                                <h4 className="text-subheading text-base mb-2">{data.sub_heading}</h4>
                                <h3 className="text-heading tracking-widest text-[1.7rem] font-bold mb-4">{data.heading}</h3>
                                <div className="text-para w-full text-xl space-y-4">
                                    <p>{data.para}</p>
                                </div>
                            </div>
                            <div className="relative lg:h-80 overflow-hidden flex items-end">
                                <video
                                    playsInline
                                    autoPlay
                                    muted
                                    loop
                                    preload="auto"
                                    className="object-contain w-full h-full pointer-events-none select-none"
                                    onError={(e) => console.error("Video failed to load:", e)} >
                                    <source src={data.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
