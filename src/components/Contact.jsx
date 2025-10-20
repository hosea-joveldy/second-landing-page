import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import github from "../assets/github.svg";

const Contact = () => {
  return (
    <div  id="contact" className="text-white w-full max-w-[90rem] py-[2rem] flex flex-col items-center">
      <p className="uppercase text-xs text-gray-400 tracking-[0.2em] ">Contact</p>
      <h1 className="text-[1.8rem] md:text-4xl font-[Roboto Slab] font-semibold text-center mt-[1.7rem]">
        Let Me Know
      </h1>
      <hr className="border border-white border-dashed w-[70%] mt-[2.4rem]"/>

      <div className="flex items-center justify-center gap-[4rem] lg:gap-10 flex-wrap py-6 px-10 mt-[4.6rem]">
        <div className="bg-gray-800 py-6 px-10 flex flex-col items-center text-center rounded-xl font-[Inter]">
          <img src={instagram} alt="Instagram" className="w-[7rem]" />
          <p className="w-[15rem] mt-[4rem]">
            Follow me on Instagram for my latest work, updates, and behind-the-scenes moments.
          </p>
          <a href="https://www.instagram.com/hoseaa_pp/">
            <button className="bg-blue-600 py-3 px-8 font-semibold mt-[1rem] hover:bg-blue-700 transition-colors duration-200">Follow</button>
          </a>
        </div>

        <div className="bg-gray-800 py-6 px-10 flex flex-col items-center text-center rounded-xl font-[Inter]">
          <img src={whatsapp} alt="Whatsapp" className="w-[7rem]" />
          <p className="w-[15rem] mt-[4rem]">
            Chat with me directly on WhatsApp — I'd love to hear from you.
          </p>
          <a href="https://wa.me/081223956015">
            <button className="bg-green-600 py-3 px-8 font-semibold mt-[1rem] hover:bg-green-700 transition-colors duration-200">Message</button>
          </a>
        </div>

        <div className="bg-gray-800 py-6 px-10 flex flex-col items-center text-center rounded-xl font-[Inter]">
          <img src={github} alt="Github" className="w-[7rem]" />
          <p className="w-[15rem] mt-[4rem]">
            Check out my latest projects and code contributions on GitHub.
          </p>
          <a href="https://github.com/hosea-joveldy">
            <button className="bg-gray-600 py-3 px-8 font-semibold mt-[1rem] hover:bg-gray-700    transition-colors duration-200">View Repo</button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Contact