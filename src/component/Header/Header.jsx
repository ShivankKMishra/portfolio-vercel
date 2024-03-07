import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import image from "@/src/assets/images/image.png";
export default function Header() {
  return (
    <header className="">
      <nav className="flex justify-between py-4 ">
        <div>
          <div className=' px-10 py-3'>
            <Link to="/" className=""><img className="h-12" src={image} alt="Profile Picture" /></Link>
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
