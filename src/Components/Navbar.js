import React,{useState} from 'react';
import { GoHome, GoGoal, GoCalendar, GoNote } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { GrTask } from "react-icons/gr";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav>
      <div className='navbar-inner'>
        <div className='logo'>
          <svg id="logo-35" width="100%" height="100%" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path>
            <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path>
          </svg>
        </div>
        <button onClick={toggleVisibility} className='toogle-btn'>
        {isVisible ? <FaChevronLeft /> : <FaChevronRight />} 
      </button>
        <ul className={`toggle-text ${isVisible ? 'visible' : 'hidden'}`}>
          <li><NavLink to="/"><GoHome /><p>Home</p></NavLink></li>
          <li><NavLink to="/task"><GrTask /><p>My Tasks</p></NavLink></li>
          <li><NavLink to="/goal"><GoGoal /><p>Goals</p></NavLink></li>
          <li><NavLink to="/calendar"><GoCalendar /><p>Calendar</p></NavLink></li>
          <li><NavLink to="/notes"><GoNote /><p>Notes</p></NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
