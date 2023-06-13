import {
  RiShoppingCartLine,
  RiHeart2Line,
  RiMenu2Line,
  RiCloseLine,
} from "react-icons/ri";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="h-[7vh] lg:h-[10vh] text-gray-400 py-4 px-10 flex items-center justify-between bg-[#181A20] z-40">
      {/* Movil */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden text-2xl"
      >
        <RiMenu2Line />
      </button>
      <div
        className={`fixed left-0 bg-[#181A20] w-full h-full transition-all z-50 ${
          showMenu ? "top-0" : "-top-full"
        }`}
      >
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-3xl p-4 "
        >
          <RiCloseLine />
        </button>
        <ul className="mt-20">
          <li>
            <a href="#" className="text-4xl block text-center p-4">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-4xl block text-center p-4">
              Streams
            </a>
          </li>
          <li>
            <a href="#" className="text-[#E58D27] text-4xl block text-center p-4">
              Game store
            </a>
          </li>
          <li>
            <a href="#" className="text-4xl block text-center p-4">
              News
            </a>
          </li>
        </ul>
      </div>
      {/*Menu */}
      <ul className=" items-center gap-6 hidden lg:flex">
        <li>
          <a href="#" className="hover:text-[#E58D27] transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#E58D27] transition-colors">
            Streams
          </a>
        </li>
        <li>
          <a href="#" className="text-[#E58D27] transition-colors">
            Game store
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#E58D27] transition-colors">
            News
          </a>
        </li>
      </ul>

      {/* User menu */}

      <ul className="flex items-center gap-6 text-xl">
        <li>
          <button>
            <RiShoppingCartLine />
          </button>
        </li>
        <li>
          <button>
            <RiHeart2Line />
          </button>
        </li>
        <li>
          <button>
            <img
              src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=740&t=st=1686447795~exp=1686448395~hmac=a97d0ae5ef1ddcd1d1a2af2ce4c88e8e58b062f4bebaf44c11a584a629f0d812"
              className="w-8 h-8 object-cover rounded-full ring-2 ring-[#E58D27]"
            />
          </button>
        </li>
      </ul>
    </header>
  );
};
export default Header;
