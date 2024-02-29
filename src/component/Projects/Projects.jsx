import React from 'react';
import ProjectsCards from '../ProjectsCards/ProjectsCards';
import Data from '../../../public/Data';
import './project.css';
function Projects() {
  return (
    <>
    <div className='container flex justify-center'>
      {Array.from({ length: 3 }).map((_, index) => (
        <ProjectsCards 
          key={index} // Adding a unique key for each iteration
          projectName={Data[index].projectName}
          Linking={Data[index].Linking}
          image={Data[index].image}
          githubLink={Data[index].githubLink}
        />
    
      ))}
      </div>
    </>
  );
}

export default Projects;

