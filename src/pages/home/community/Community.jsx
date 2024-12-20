import SecondBtn from "../../../components/SecondBtn"
import socialSectionEarth from "../../../assets/images/socialSectionEarth.jpg"


const Community = () => {
  return (
    <section id='COMMUNITY'>
           <div className="w-[95%] md:w-[85%] md:mb-6 mx-auto border border-primary bg-black text-white">
            <div className="px-8 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div>
                        <h4 className="text-subheading text-base mb-4">You’re Invited</h4>
                        <h3 className="text-heading tracking-widest text-3xl font-bold mb-6">COMMUNITY</h3>
                        <div>
                            <div className="text-para w-full text-xl mb-4">
                                <p>The $VAULT token is built to drive decentralized engagement across the globe. MoonVault acts as a hub where users can connect, collaborate, and navigate their journey in the crypto space securely.</p>
                            </div>
                            <div className="pl-1 flex items-center gap-8 md:gap-12">
                                <SecondBtn text={"TELEGRAM"} />
                                <SecondBtn text={"X/TWITTER"} />
                                <SecondBtn text={"DISCORD"} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="w-full" src={socialSectionEarth} alt="socialSectionEarth" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Community