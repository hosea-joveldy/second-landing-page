import { pricingPlans } from "../data/pricingPlans"
import checkmark from "../assets/pricing/checklist.png"
import backgroundImg from "../assets/pricing/background.jpg"

const Pricing = () => {
  return (
    <div id="pricing" className="flex flex-col items-center text-white w-full max-w-[60rem] mt-[1rem] md:mt-[3rem] lg:mt-[5rem] mx-auto py-[6rem]">
      <p className="uppercase text-xs text-gray-400 tracking-[0.2em] mb-[2rem]">Pricing</p>
      <h1 className="text-[1.8rem] md:text-4xl font-[Roboto Slab] font-semibold text-center">
        Simple, Transparent Pricing
      </h1>
      <p className="text-gray-400 mt-[0.3rem]">
        <b>No hidden fees.</b> Choose the plan that fits your workflow.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-6 md:gap-8 lg:gap-10 w-full mt-[4rem] bg-cover bg-center" style={{backgroundImage: `url(${backgroundImg})`}}>

        {pricingPlans.map(plan => (
          <div className={`flex flex-col rounded-2xl border border-white text-center lg:text-left w-full max-w-[24rem] hover:shadow-lg hover:scale-101 transition-all duration-200 py-8 px-6 ${plan.differentThanOther ? "bg-[radial-gradient(circle_at_right_top,_rgba(255,255,255,0.2),_transparent_70%)]" : "bg-black/65"}`}>
            {plan.differentThanOther 
              ? (
                <div className="flex items-center flex-col-reverse gap-3 lg:flex-row lg:gap-0 lg:justify-between">
                <h3 className="text-[1.3rem] text-gray-400">
                  {plan.name} 
                </h3>
                <p className="bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-[0.9rem] font-semibold rounded-xl">Most Popular</p>
                </div>
              )
              : (
                <h3 className="text-[1.3rem] text-gray-400">
                  {plan.name} 
                </h3>
              )
            }

            <p className="text-gray-500 mt-[1.4rem]"><span className="text-3xl text-white font-semibold">
              {plan.price}</span>/month</p>
            <p className="text-gray-400 mt-[1rem]">{plan.description}</p>
            <button className={`px-[1.1rem] py-2 rounded-3xl border border-white transition-colors duration-200 mt-[1.6rem] ${plan.differentThanOther ? "bg-orange-500 hover:bg-amber-400" : "bg-gray-900 hover:bg-white hover:text-black"}`}>
              {plan.buttonText}
            </button>
            <div className="flex mt-[2rem] items-center gap-[0.7rem]">
              <hr className="inline w-full border border-white" />
              <p className="uppercase text-xs text-gray-400 tracking-[0.2em]">Features</p>
              <hr className="inline w-full border border-white" />
            </div>

            <ul className="mt-[2rem] space-y-3">
            {plan.features.map(featureItem => (
              <li className="flex items-center gap-3">
                <img src={checkmark} className="w-[1.3rem]" alt="Checkmark" />
                {featureItem}
              </li>
            ))}
            </ul>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Pricing;