import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SecondBtn from "../../../components/SecondBtn"
import FrameworkCard from "../../../components/FrameworkCard";

const Framework = () => {

    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: 'ease-in-out',
        });
      }, []);

    const frameworkData1 = [
        {
            id: 1,
            heading: "Function Alerts: Real-Time Updates",
            para: "Our Token BuyBot keeps you informed with instant notifications of S.T.A.R.R. Engine function changes.",
        },
        {
            id: 2,
            heading: "Tokenomics Insights: Stay Informed",
            para: "The Statistics Bot provides easy access to the latest tokenomics data, allowing you to track $VAULT’s performance directly in the chat.",
        },
    ];
    const frameworkData2 = [     
        {
            id: 1,
            heading: "Seamless Rewards: Automated & Gas-Free*",
            para: "The $VAULT Rewards Telegram Bot streamlines reward checking and claiming, alongside the dApp. Legacy Protocol, an automated claims processing system funded by the project, processes rewards iteratively through a script ensuring long-term holders benefit without additional costs.",
        },
        {
            id: 2,
            heading: "Tech Innovations: Beyond the Bots",
            para: "MoonVault is committed to releasing new tools and features that will further enhance the user experience and ecosystem functionality.",
        }
    ];
  return (
    <section id='FRAMEWORK'>
            <div className="w-[95%] sm:w-[85%] mx-auto py-10">
                <div className="fle-4 py-4">
                    <h4 className="text-subheading text-base mb-4">/  FRAMEWORK</h4>
                    <h3 className="text-heading tracking-widest text-3xl font-bold mb-6">Unveiling the MoonVault Ecosystem</h3>
                    <div className="text-para w-full lg:w-[46%] text-xl space-y-4 mb-6">
                        <p>Discover the power of MoonVault’s advanced Telegram Bots and automated systems, designed to enhance your experience:</p>
                    </div>
                    <div className="pl-1">
                        <SecondBtn text={"MEDIUM"} />
                    </div>
                </div>
                <div className="flex flex-col gap-8 py-10">
                    <div className="flex flex-col lg:flex-row items-center justify-start gap-4">
                        {frameworkData1?.map((data) => (
                            <FrameworkCard
                                key={data.id}
                                heading={data.heading}
                                para={data.para}
                                aos="fade-left"
                            />
                        ))}
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-end gap-4">
                        {frameworkData2?.map((data) => (
                            <FrameworkCard
                                key={data.id}
                                heading={data.heading}
                                para={data.para}
                                aos="fade-left"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Framework