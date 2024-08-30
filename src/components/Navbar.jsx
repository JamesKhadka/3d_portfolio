import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { menu, close } from '../assets';

import { navLinks } from '../constants';

const Navbar = () => {
  const logo = "/logo.png";  // replace with your actual logo file name

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState('false');

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-2"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
          to="/"
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            James &nbsp; <span className="sm:block hidden">  Khadka</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === Link.title ? "text-white" : "text-secondary"} hover:text-white  text-[18px] font-medium cursor-pointer`} onClick={() => setActive(Link.title)}>

              <a href={`#${link.id}`} >  {link.title}   </a>
            </li>
          ))}
        </ul>
        {/* //for mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-pointer">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} >

            <ul className="list-none flex  justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === Link.title ? "text-white" : "text-secondary"} font-poppins  text-[16px] cursor-pointer`} onClick={() => {
                  setToggle(!toggle);
                  setActive(Link.title);
                }}>

                  <a href={`#${link.id}`} >  {link.title}   </a>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
