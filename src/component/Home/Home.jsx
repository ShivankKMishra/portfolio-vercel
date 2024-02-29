import React from 'react'
import { Link } from 'react-router-dom'
import './home.css';
function Home() {
  return (
    <>
      <div className=' mx-20 my-9'>
        <div className='container h- flex px-20 py-1 items-center'>
              <img className=' my-image' src='src/assets/images/profile-pic.png'/>
              <div >
                  <div className=' '> <h1 className='flex justify-center my-4 text-2xl text-gray-600  font-bold '>Hello, I'm</h1>
                  <h1 className='font-bold  text-5xl'>Shivank Mishra</h1>
                  <h1 className='flex justify-center my-4 text-2xl text-gray-600  font-bold '>Full-stack Web Developer</h1>
                  </div>
                   <div className='flex justify-center my-7    font-bold '>
                    <button className='border hover:bg-blue-900 hover:text-white  rounded-3xl mx-2 border-black p-3 hover:border-white'><Link to="CV">Download CV</Link></button>
                    <button className='border rounded-3xl mx-2 hover:bg-blue-900 hover:text-white bg-gray-900 text-white border-black hover:border-white p-3'><Link to="ContactUS">Contact Info</Link></button>
                   </div>
                   <div className='flex justify-center my-7    font-bold '>
                    <button > <Link to="https://github.com/ShivankKMishra"><img className='h-12' src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"/></Link></button>
                    <button > <Link to="https://www.linkedin.com/in/shivank-mishra-0b6a74224/"><img className='h-12' src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-linkedin-512.png"/></Link></button>
                   
                   </div>
               </div>
        </div>
        
      </div>
    </>
  )
}

export default Home