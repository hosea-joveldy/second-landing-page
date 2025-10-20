import animationOne from "../assets/bento/animationone.gif";
import animationTwo from "../assets/bento/animationtwo.gif";
import svgThree from "../assets/bento/svgthree.svg";
import animationFour from "../assets/bento/animationfour.gif";

const Features = () => {
  return (
    <div id="features" className="text-white flex flex-col items-center mt-[6rem] pb-[6rem] mx-[1.5rem]">
      <p className="uppercase text-xs text-gray-400 tracking-[0.2em] mb-[2rem]">Features</p>
      <h1 className="text-[1.8rem] md:text-4xl font-[Roboto Slab] font-semibold text-center">Everything You Need to Stay Organized</h1>
      <hr className="border border-white border-dashed w-[70%] mt-[2.4rem]"/>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[55rem] gap-[3rem] md:gap-3 mt-[5rem]">
        <div className="md:col-span-2 border border-gray-400/25 rounded-xl p-8 space-y-3 flex flex-col justify-center items-center">
          <div>
            <h3 className="font-semibold font-[Inter]">
              Task Management
            </h3>
            <p className="text-sm font-light text-gray-300">
              Organize your work your way.
              Create, assign, and prioritize tasks in an intuitive dashboard that keeps your projects moving.
            </p>
          </div>

          <div>
            <img src={animationOne} alt="Task" className="object-center object-cover w-[12.5rem] md:w-[15.625rem]" />
          </div>
        </div>

        <div className="border border-gray-400/25 rounded-xl p-8 space-y-3 flex flex-col justify-between items-center bg-[radial-gradient(circle_at_right_top,_rgba(255,255,255,0.2),_transparent_70%)]">
          <div>
            <img src={animationTwo} alt="Teamwork" className="object-center object-cover w-[12.5rem] md:w-[15.625rem]" />
          </div>

          <div>
            <h3 className="font-semibold font-[Inter]">
              Real-Time Collaboration
            </h3>
            <p className="text-sm font-light text-gray-300">
              Work together seamlessly.
              Share updates, comments, and progress instantly so your team always stays aligned.
            </p>
          </div>
        </div>

        <div className="border border-gray-400/25 rounded-xl p-8 space-y-10 flex flex-col justify-end bg-[radial-gradient(circle_at_left_top,_rgba(255,255,255,0.2),_transparent_70%)]">
          <div>
            <img src={svgThree} width={100} alt="Smart Notification" />
          </div>

          <div>
            <h3 className="font-semibold font-[Inter]">
              Smart Notifications
            </h3>
            <p className="text-sm font-light text-gray-300">
              Stay in the loop — without the noise.
              Get meaningful updates when tasks change, deadlines approach, or someone mentions you.
            </p>
          </div>
        </div>

        <div className="md:col-span-2 border border-gray-400/25 rounded-xl p-8 space-y-5 flex flex-col justify-center items-end">
        <div className="text-end">
          <h3 className="font-semibold font-[Inter]">
            Analytics & Insights
          </h3>
          <p className="text-sm font-light text-gray-300">
            Make data-driven decisions.
            Visualize productivity with built-in charts that show progress, completion rates, and workload balance.
          </p>
        </div>

        <div>
          <img src={animationFour} alt="Chart" className="w-[9.375rem] md:w-[12.5rem]" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Features