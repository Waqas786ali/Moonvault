import overiewCard from "../../../assets/images/overiew-card.svg";

const Features = () => {
    const featureData = [
        {
            id: 1,
            heading: "Replenish",
            para: "Automated liquidity pool infusions help mitigate the price impact of future trades and stabilize the market, providing direct LP rewards while boosting pool depth, all without triggering chart sales.",
        },
        {
            id: 2,
            heading: "Redistribute",
            para: "Auto dividends alternate between distributing $ETH rewards as $WETH and performing auto-buybacks, reflecting as $VAULT. This system drives long-term growth by rewarding holders with both $ETH and $VAULT tokens.",
        },
        {
            id: 3,
            heading: "Rebalance",
            para: "An automatic rebalancing process that reduces the total supply of $VAULT tokens via automated burns, supporting long-term stability and value appreciation.",
        }
    ];

    return (
        <section id='FEATURES'>
            <div className="w-[95%] sm:w-[85%] mx-auto py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
                    {featureData.map((data) => (
                        <div key={data.id} className="card p-4 w-full flex justify-center items-center 2xl:items-center relative">
                            <img className="absolute top-0 object-fill w-full h-[230px] sm:h-[220px] lg:h-full" src={overiewCard} alt="overiewCard" />
                            <div className="z-[1] flex flex-col justify-center items-center gap-1 2xl:gap-5 bg-cover bg-center text-center p-4 xl:p-6">
                                <h4 className="text-subheading text-lg font-semibold mb-2">
                                    {data.heading}
                                </h4>
                                <div className="text-para text-md space-y-2 w-[70%] mxs:w-[60%] xs:w-[40%] sm:w-[75%]">
                                    <p>{data.para}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
