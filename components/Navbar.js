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
    <nav className="h-16 flex items-center justify-between p-6 text-white font-libre relative">
        <ul className="absolute hidden md:flex space-x-8 ml-8 mt-2 items-center text-lg font-light left-10">
            <li className={`mr-4 cursor-pointer nav-item ${getNavLinkClass("/")}`} onClick={() => handleNavLinkClick("/")}>
            work
            </li>
            <li className={`mr-4 cursor-pointer nav-item ${getNavLinkClass("/self")}`} onClick={() => handleNavLinkClick("/self")}>
            self
            </li>
            <li className={`mr-4 cursor-pointer nav-item ${getNavLinkClass("/resume")}`} onClick={() => handleNavLinkClick("/resume")}>
            resume
            </li>
        </ul>
        <div className="flex items-center space-x-6 mr-8 mt-2 absolute right-10">
            <a href="https://github.com/zoeychenrui" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-2xl cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/zoey-chen/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl cursor-pointer" />
            </a>
            <a href="mailto:zoeychen2013@gmail.com" target="_blank" rel="noopener noreferrer">
            <HiOutlineMail className="text-white text-2xl cursor-pointer" />
            </a>
        </div>
    </nav>
    )
}

export default Navbar
