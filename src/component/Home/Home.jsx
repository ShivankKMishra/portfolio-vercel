import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the CSS file
import image from "@/src/assets/images/profile-pic.png";
import Scene from "./threejscomponent/Scene";
function Home() {
  return (
    <>
      <div className='mx-20 my-9 px-2 sm:px-0'>
        <div className='container flex flex-col md:flex-row px-2 sm:px-20 py-1 md:flex-between-360-and-700 items-center'>
          <div className='md:mr-10 flex justify-center w-full md:w-auto mb-4 md:mb-0'>
            <img className='my-image w-32 h-32 md:w-auto md:h-auto object-contain rounded-full shadow-lg' src={image} alt="Profile Picture" />
          </div>
          <div className='w-full md:w-auto'>
            <div>
              <h1 className='flex justify-center my-4 text-xl sm:text-2xl text-gray-600 font-bold'>Hello, I'm</h1>
              <h1 className='font-bold text-3xl sm:text-5xl text-center md:text-left'>Shivank Mishra</h1>
              <h1 className='flex justify-center my-4 text-xl sm:text-2xl text-gray-600 font-bold'>Full-stack Web Developer</h1>
            </div>
            <div className='flex flex-col sm:flex-row justify-center md:justify-center my-7 font-bold items-center'>
              <button className='border hover:bg-blue-900 hover:text-white rounded-3xl mx-2 border-black p-3 hover:border-white mb-2 sm:mb-0'><Link to="Resume">Download Resume</Link></button>
              <button className='border rounded-3xl mx-2 hover:bg-blue-900 hover:text-white bg-gray-900 text-white border-black hover:border-white p-3 mb-2 sm:mb-0'><Link to="ContactUS">Contact Info</Link></button>
            </div>
            <div className='flex flex-col sm:flex-row justify-center md:justify-center my-7 font-bold items-center'>
              <button className='mx-2 mb-2 sm:mb-0'><Link to="https://github.com/ShivankKMishra"><img className='h-10 sm:h-12' src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" /></Link></button>
              <button className='mx-2 mb-2 sm:mb-0'><Link to="https://www.linkedin.com/in/shivank-mishra-0b6a74224/"><img className='h-10 sm:h-12' src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-linkedin-512.png" alt="LinkedIn" /></Link></button>
              <Scene position={[-0.2, 0.3, -2]} style={{ width: '100%', position: 'absolute', zIndex: -1 }}  />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
