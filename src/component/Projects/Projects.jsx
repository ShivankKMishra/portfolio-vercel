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
    <div className='flex flex-col items-center border border-black rounded-2xl m-5 p-5 w-64 h-80'>
      <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
        <img className="object-cover w-full h-full" src={image} alt="Project Image" />
      </div>
      <h1 className='text-xl mb-2 text-center'>{projectName}</h1>
      <div className='flex items-center justify-center w-full my-4 font-bold'>
        <button><Link to={githubLink}><img className='h-10 m-1' src={github} alt="GitHub Logo" /></Link></button>
        <button><Link to={Linking}><img className='h-10 m-1' src={codeicon} alt="Code Icon" /></Link></button>
      </div>
    </div>
  );

  return (
    <div className='container mx-auto flex flex-wrap justify-center'>
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
