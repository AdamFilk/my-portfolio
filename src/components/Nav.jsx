import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MobileSidebar from './MobileSidebar';

function Nav() {
  const [navState,setNavState]=useState(false);
  const handleClick=()=>{
    setNavState(!navState);
  }
  return (
    <header className="sticky top-0 z-50">
        <nav className="flex justify-between shadow-xl md:p-8 pl-4 py-8 pr-8  bg-white" id="navigation">
          <p className='text-2xl font-bold hover:text-green-600 cursor-pointer'>Aung Chan Oo's Portfolio</p>
          <div className="md:flex justify-evenly gap-4 hidden font-semibold">
              <a href="#bio" className="hover:text-green-600">Bio</a>
              <a href="#edu" className="hover:text-green-600">Education</a>
              <a href="#skills" className="hover:text-green-600">Skills</a>
              <a href="#exp" className="hover:text-green-600">Experiences</a>
              <a href="#projects" className="hover:text-green-600">Projects</a>
          </div>
          <div className="md:hidden leading-8">
                <FontAwesomeIcon icon={faBars} onClick={handleClick} className="text-xl"></FontAwesomeIcon>
          </div>
        </nav>
        {
          navState === true && <MobileSidebar handleClick={handleClick}></MobileSidebar>
        }
    </header>
  );
}

export default Nav;
