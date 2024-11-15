import Logo from "../../assets/images/logo.png";
import Svgs from "../../components/Svgs";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="w-[95%] md:w-[85%] mx-auto border border-primary bg-gradient-to-t from-[#00002f] to-transparent text-white">
        <section>
          <div className="lg:px-12 px-6 py-6">
            <div className='flex items-center gap-4'>
              <img className='w-[38px]' src={Logo} alt="logo" />
              <h6 className='font-ppneuebit-mono tracking-normal font-medium text-heading text-[1.93rem]'>MOONVAULT</h6>
            </div>
            <div className="pt-6 flex flex-col lg:flex-row items-start gap-14">
                <div className="w-full lg:w-[35%]">
                    <h4 className="text-subheading text-base mb-4">Transform Your Crypto Experience</h4>
                    <div className="text-para text-xl space-y-4 w-[95%]">
                      <p>Our core values reflect our mission to build a blockchain platform that merges cutting-edge technology with innovative solutions.</p>
                      <p>The unique framework, enhanced by dynamic scenarios and a suite of custom Telegram bots, unveils groundbreaking decentralized tokenomics designed for lasting impact.</p>
                    </div>
                </div>
                <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center gap-6 md:gap-4">
                    <div>
                        <h4 className="text-subheading text-base mb-2 md:mb-4 uppercase">MoonVault</h4>
                        <ul className='flex flex-col gap-2 text-[1.2rem] text-white'>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Blueprint</a></li>
                          <li><a href="#">Tokenomics</a></li>
                          <li><a href="#">Starr</a></li>
                          <li><a href="#">Framework</a></li>
                          <li><a href="#">Core Values</a></li>
                          <li><a href="#">FAQ&#39;s</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-subheading text-base mb-2 md:mb-4 uppercase">MoonVault</h4>
                        <ul className='flex flex-col gap-2 text-[1.2rem] text-white'>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Blueprint</a></li>
                          <li><a href="#">Tokenomics</a></li>
                          <li><a href="#">Starr</a></li>
                          <li><a href="#">Framework</a></li>
                          <li><a href="#">Core Values</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-subheading text-base mb-2 md:mb-4 uppercase">MoonVault</h4>
                        <ul className='flex flex-col gap-2 text-[1.2rem] text-white'>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Framework</a></li>
                          <li><a href="#">Core Values</a></li>
                          <li><a href="#">FAQ&#39;s</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-subheading text-base mb-2 md:mb-4 uppercase">MoonVault</h4>
                        <ul className='flex flex-col gap-2 text-[1.2rem] text-white'>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Blueprint</a></li>
                          <li><a href="#">Tokenomics</a></li>
                          <li><a href="#">Starr</a></li>
                          <li><a href="#">Framework</a></li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </section>
        <section>
          <div className="px-6 lg:px-12">
            <div className="py-5 border-y border-primary flex items-center justify-center">
              <div className="flex items-center gap-5">
                    <h3>Social Links:</h3>
                    <div className="flex items-center gap-5">
                        <Svgs.TelegramIcon className={"size-5"} />
                        <Svgs.DiscordIcon className={"size-5"} />
                        <Svgs.XIcon className={"size-5"} />
                        <Svgs.MediumIcon className={"size-5"} />
                    </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="lg:px-12 px-6 py-6">
            <div className="text-sm text-para p-0 m-0">
              <p className="m-0 p-0 leading-none">© All Rights Reserved</p>
              <p className="m-0 p-0 ">Disclaimer: MoonVault is an experimental DeFi project and not intended as financial advice, an investment, or any form of security. MoonVault and $VAULT have no intrinsic value. Always conduct your own research before participating.</p>
              <p className="m-0 p-0 leading-none">* - claiming rewards via dApp or Telegram incurs nominal gas fees, iterative processing does not ensure selection.</p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer