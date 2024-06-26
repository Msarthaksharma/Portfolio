import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaBars,FaGithub,FaLinkedin,FaTimes, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {Link} from 'react-scroll'
import SarthakSharma from '../assets/SarthakSharma.pdf'

const Navbar = () => {

    const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[--primary-color] text-gray-300'>
        <div>
            <img src={logo} alt='Logo' style={{width:'80px'}}/>
        </div>
            <ul className='hidden md:flex'>
                <li><Link to='home'smooth={true} duration={500}>Home</Link></li>
                <li><Link to='about'smooth={true} duration={500}>About</Link></li>
                <li><Link to='skills'smooth={true} duration={500}>Skills</Link></li>
                <li><Link to='work'smooth={true} duration={500}>Work</Link></li>
                <li><Link to='contact'smooth={true} duration={500}>Contact</Link></li>
            </ul>
        {/* Hamburger */}
        <div onClick= {handleNav}className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/* Mobile Dropdown */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[--primary-color] flex flex-col justify-center items-center"} >
            <li><Link onClick={handleNav} to='home'smooth={true} duration={500}>Home</Link></li>
            <li><Link onClick={handleNav} to='about'smooth={true} duration={500}>About</Link></li>
            <li><Link onClick={handleNav} to='skills'smooth={true} duration={500}>Skills</Link></li>
            <li><Link onClick={handleNav} to='work'smooth={true} duration={500}>Work</Link></li>
            <li><Link onClick={handleNav} to='contact'smooth={true} duration={500}>Contact</Link></li>
        </ul>
        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300 '
                        href='https://www.linkedin.com/in/msarthaksharma/'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300 '
                        href='https://github.com/Msarthaksharma'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300 '
                        href={'mailto: sarthaksharmaca11@gmail.com'}>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300 '
                        href={SarthakSharma} download="Resume">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar