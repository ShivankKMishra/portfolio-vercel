import React from 'react';
import { Link } from 'react-router-dom';
import github from "@/src/assets/images/github-icon.png";
import codeicon from "@/src/assets/images/icon-code-0.jpg";
import image1 from '@/src/assets/images/cardsImage/keeperApp.png';
import image3 from '@/src/assets/images/cardsImage/currencyConverter.png';
import image2 from '@/src/assets/images/cardsImage/passwordGenrator.png';
import image4 from '@/src/assets/images/cardsImage/Campus connect.png';

function Projects() {
  const ProjectCard = ({ projectName, Linking, image, githubLink }) => (
    <div className='flex flex-col items-center border-2 border-gray-200 bg-white rounded-2xl m-5 p-5 w-72 h-96 shadow-xl transition-transform hover:scale-105 hover:shadow-2xl'>
      <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
        <img className="object-cover w-full h-full" src={image} alt="Project Image" />
      </div>
      <h1 className='text-xl mb-2 text-center font-bold text-gray-800 tracking-tight'>{projectName}</h1>
      <div className='flex items-center justify-center w-full my-4 font-bold'>
        <a href={githubLink} target="_blank" rel="noopener noreferrer"><img className='h-10 m-1 hover:opacity-80' src={github} alt="GitHub Logo" /></a>
        <a href={Linking} target="_blank" rel="noopener noreferrer"><img className='h-10 m-1 hover:opacity-80' src={codeicon} alt="Code Icon" /></a>
      </div>
    </div>
  );

  return (
    <div className='container mx-auto flex flex-wrap justify-center bg-gradient-to-b from-gray-100 via-white to-gray-200 min-h-screen py-8'>
      <ProjectCard 
        projectName="Campus Connect (minorProject)"
        Linking="https://jaishree-raam-minor-project.vercel.app/"
        image={image4}
        githubLink="https://github.com/ShivankKMishra/jaishreeRaam-minorProject/"
      />
      <ProjectCard 
        projectName="my own keeperapp"
        Linking="https://my-own-keeperapp.vercel.app/"
        image={image1}
        githubLink="https://github.com/ShivankKMishra/myOwnKeeperapp"
      />
      <ProjectCard 
        projectName="currency-converter"
        Linking="https://currency-converter-react-phi.vercel.app/"
        image={image2}
        githubLink="https://github.com/ShivankKMishra/currencyConverter-react"
      />
      <ProjectCard 
        projectName="password Genrator"
        Linking="https://password-genrator-jet.vercel.app/"
        image={image3}
        githubLink="https://github.com/ShivankKMishra/passwordGenrator"
      />
    </div>
  );
}

export default Projects;
