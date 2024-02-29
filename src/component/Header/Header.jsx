import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="">
      <nav className="flex justify-between py-4 ">
        <div>
          <div className=' px-10 py-3'>
            <Link to="/" className=""><img className="h-12" src="src/assets/images/image.png" alt="Logo" /></Link>
          </div>
        </div>

        <div className="flex space-x-4 mx-10 items-center">
             <NavLink to="/" className={({ isActive }) => ` ${isActive ? 'text-black   font-bold' : 'text-black text-'}`}>Home</NavLink>
             <NavLink to="about" className={({ isActive }) => ` ${isActive ? 'text-black   font-bold' : 'text-black text-'}`}>About</NavLink>
             <NavLink to="Projects" className={({ isActive }) => ` ${isActive ? 'text-black   font-bold' : 'text-black text-'}`}>Projects</NavLink>
        </div>
      </nav>
      
    </header>
  );
}
