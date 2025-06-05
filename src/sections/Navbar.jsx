import { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
    const handleClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <a className="nav-link" href="#home"
                    onClick={(e) => handleClick(e, 'home')}>Home</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#about" onClick={(e) => handleClick(e, 'about')}>About</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#myProjects" onClick={(e) => handleClick(e, 'myProjects')}>My projects</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#work" onClick={(e) => handleClick(e, 'work')}>Work</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a>
            </li>
        </ul>
    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40" >
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a href="/"
                        className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                        HienTrang
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
                        <img src={isOpen ? "/public/assets/close.svg" : "/public/assets/menu.svg"} alt="toggle" className="w-6 h-6" />
                    </button>
                    <nav className="hidden sm:flex"><Navigation /></nav>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className="block overflow-hidden text-center sm:hidden"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ maxHeight: "100vh" }}
                    transition={{ duration: 0.3 }}
                >
                    <nav className="pb-5">
                        <Navigation />
                    </nav>
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;