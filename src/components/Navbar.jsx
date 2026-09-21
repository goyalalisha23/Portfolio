import { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">


        {/* LOGO */}

        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold"
        >

          <span className="text-purple-400">
            &lt;
          </span>

          Alisha

          <span className="text-purple-400">
            /&gt;
          </span>

        </a>


        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center gap-8">
a
          <NavLink href="#home" text="Home" />

          <NavLink href="#about" text="About" />

          <NavLink href="#skills" text="Skills" />

          <NavLink href="#projects" text="Projects" />

          <NavLink href="#contact" text="Contact" />

        </div>


        {/* MOBILE BUTTON */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl text-gray-300 hover:text-purple-400 transition"
        >

          {isOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* MOBILE MENU */}

      {isOpen && (

        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">

          <div className="flex flex-col px-6 py-6 gap-6">

          <MobileLink
            href="#home"
            text="Home"
            closeMenu={closeMenu}
          />

          <MobileLink
            href="#about"
            text="About"
            closeMenu={closeMenu}
          />

          <MobileLink
            href="#skills"
            text="Skills"
            closeMenu={closeMenu}
          />

          <MobileLink
            href="#projects"
            text="Projects"
            closeMenu={closeMenu}
          />

          <MobileLink
            href="#contact"
            text="Contact"
            closeMenu={closeMenu}
          />

        </div>
        </div>

      )}

    </nav>
  );
}


/* DESKTOP LINK */

function NavLink({
  href,
  text,
}) {

  return (
    <a
      href={href}
      className="relative text-gray-300 hover:text-white transition group"
    >

      {text}

      <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>

    </a>
  );
}


/* MOBILE LINK */

function MobileLink({
  href,
  text,
  closeMenu,
}) {

  return (
    <a
      href={href}
      onClick={closeMenu}
      className="text-gray-300 hover:text-purple-400 text-lg transition"
    >

      {text}

    </a>
  );
}


export default Navbar;