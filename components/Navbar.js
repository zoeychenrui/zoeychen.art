import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import GalaxyBackground from '../components/Galaxy';

function Navbar() {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };
    
    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavLinkClick = (path) => {
        setIsMobileMenuOpen(false);
        router.push(path);
    };

    const getNavLinkClass = (path) => {
        return router.pathname === path ? 'active' : '';
    }

    return (
    <nav className="h-16 flex items-center justify-between p-6 text-gray-800 font-libre relative">
        <ul className="absolute hidden md:flex space-x-8 ml-8 mt-2 items-center text-lg font-light left-10">
            <li className={`mr-4 cursor-pointer nav-item ${getNavLinkClass("/")}`} onClick={() => handleNavLinkClick("/")}>
            work
            </li>
            <li className={`mr-4 cursor-pointer nav-item ${getNavLinkClass("/painting")}`} onClick={() => handleNavLinkClick("/painting")}>
            painting
            </li>
            <li className={`mr-4 cursor-pointer nav-item ${getNavLinkClass("/vr-ar")}`} onClick={() => handleNavLinkClick("/vr-ar")}>
            VR/AR
            </li>
            <li className={`mr-4 cursor-pointer nav-item ${getNavLinkClass("/resume")}`} >
            <a href="https://drive.google.com/file/d/1CvaeJEz-xKl4irsst6jEtoBQSNtmWl4B/view?usp=drive_link" target="_blank" rel="noopener noreferrer">resume</a>
            </li>
        </ul>
        <div className="hidden md:flex items-center space-x-6 mr-8 mt-2 absolute right-10">
            <a href="https://github.com/zoeychenrui" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 text-2xl cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/zoey-chen/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-800 text-2xl cursor-pointer" />
            </a>
            <a href="mailto:zoeychen2013@gmail.com" target="_blank" rel="noopener noreferrer">
            <HiOutlineMail className="text-gray-800 text-2xl cursor-pointer" />
            </a>
        </div>
        {isMobileMenuOpen && (
            <div >
          
            <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-white">
           
          <div className="relative flex flex-col py-8 px-4 space-y-6">
            <button
              className="text-5xl mr-4 absolute right-10 top-10 font-extralight hover:text-gray-500"
              onClick={handleMobileMenuToggle}
            >
              <i className="">x</i>
            </button>
            <ul className="flex flex-col space-y-4 items-center font-light">
              <li
                className={`text-3xl pt-10 cursor-pointer nav-item ${getNavLinkClass("/")}`} 
                onClick={() => handleNavLinkClick("/")}
              >
                work
              </li>
              <li
                className={`text-3xl pt-10 cursor-pointer nav-item ${getNavLinkClass("/painting")}`} 
                onClick={() => handleNavLinkClick("/painting")}
              >
                painting
              </li>
              <li
               className={`text-3xl pt-10 cursor-pointer nav-item ${getNavLinkClass("/vr-ar")}`} 
                onClick={() => handleNavLinkClick("/vr-ar")}
              >
                VR/AR
              </li>
              <li
                className={`text-3xl pt-10 cursor-pointer nav-item ${getNavLinkClass("/resume")}`} 
                onClick={() => handleNavLinkClick("/resume")}
              >
                resume
              </li>
              <li className="flex flex-row pt-12">
              <a href="https://github.com/zoeychenrui" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 text-2xl cursor-pointer mr-8" />
            </a>
            <a href="https://www.linkedin.com/in/zoey-chen/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-800 text-2xl cursor-pointer mr-8" />
            </a>
            <a href="mailto:zoeychen2013@gmail.com" target="_blank" rel="noopener noreferrer">
            <HiOutlineMail className="text-gray-800 text-2xl cursor-pointer" />
            </a>
              </li>
            
            </ul>
          </div>
        </div>
            </div>
        
      )}
      <button
        className="md:hidden text-5xl mr-4 absolute right-10 top-10 font-extralight cursor-pointer hover:text-gray-500"
        onClick={handleMobileMenuToggle}
      >
        <i className="">+</i>
      </button>
    </nav>
    )
}

export default Navbar
