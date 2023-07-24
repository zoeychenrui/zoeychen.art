import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

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
        <ul className="absolute hidden md:flex space-x-8 ml-8 mt-2 items-center text-lg font-light left-5">
            <li className={`mr-4 cursor-pointer nav-item ${getNavLinkClass("/")}`} onClick={() => handleNavLinkClick("/")}>
            work
            </li>
            <li className={`mr-4 cursor-pointer nav-item ${getNavLinkClass("/painting")}`} onClick={() => handleNavLinkClick("/painting")}>
            painting
            </li>
            <li className={`mr-4 cursor-pointer nav-item ${getNavLinkClass("/vr-ar")}`} onClick={() => handleNavLinkClick("/vr-ar")}>
            VR/AR
            </li>
            <li className={`mr-4 cursor-pointer nav-item ${getNavLinkClass("/resume")}`} onClick={() => handleNavLinkClick("/resume")}>
            resume
            </li>
        </ul>
        <div className="flex items-center space-x-6 mr-8 mt-2 absolute right-5">
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
    </nav>
    )
}

export default Navbar
