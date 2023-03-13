import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const Navbar = () => {

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  return (
    <header className='shadow-lg shadow-[#0F0F0F]/50 bg-[#0F0F0F]/50 z-50 fixed top-0 w-full p-4 lg:px-12 antialiased backdrop-blur-sm'>
        <nav className='flex items-center justify-between text-lg md:text-xl'>
          <ul className='flex items-center font-bold gap-x-4'>
            <li><a className='transition hover:text-violet-400 hover:underline underline-offset-8' href="#bio">Bio</a></li>
            <li><a className='transition hover:text-violet-400 hover:underline underline-offset-8' href="#projects">Projects</a></li>
          </ul>
          {showTopBtn && (
          <div>
            <FaArrowUp values='Go to top' className='cursor-pointer' onClick={goToTop} />
          </div>
          )}
        </nav>
    </header>
  )
}

export default Navbar