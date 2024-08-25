import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaVk } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a
          className="mx-2 w-10 text-2xl sm:text-4xl tracking-widest transition ease-in-out delay-50  hover:scale-110"
          href="#"
          
        >
          Kipyusha
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/kipyusha"
          target="_blank"
          
          className="transition ease-in-out delay-50  hover:scale-110 hover:text-neutral-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://t.me/k1pyusha"
          target="_blank"
          
          className="transition ease-in-out delay-50  hover:scale-110 hover:text-blue-400"
        >
          <FaTelegram />
        </a>
        <a
          href="https://vk.com/kirill_grachev"
          target="_blank"
          
          className="transition ease-in-out delay-50  hover:scale-110 hover:text-blue-400"
        >
          <FaVk />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
