import React from 'react';
import './about.css';
import image from "@/src/assets/images/image (3).jpeg";

export default function About() {
  return (
    <div className="about text-center bg-gradient-to-b from-gray-100 via-white to-gray-200 min-h-screen py-8">
      <h1 className="font-extrabold text-4xl md:text-5xl text-gray-800 mb-8 drop-shadow-lg tracking-tight">About Me</h1>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center mx-2 md:mx-20 my-10 px-4 md:px-40 gap-8 bg-white rounded-3xl shadow-2xl py-8 border border-gray-200">
        <div className="mb-4 md:mb-0 flex justify-center w-full md:w-auto">
          <img className="h-32 w-32 md:h-44 md:w-44 mx-auto rounded-full shadow-lg border-4 border-gray-300 object-cover" src={image} alt="Profile Picture" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="border-2 border-gray-300 bg-white flex flex-col items-center rounded-3xl p-4 m-2 shadow-md min-w-[160px]">
            <h1 className="font-bold text-lg text-gray-700 mb-1">Current Role</h1>
            <h2 className="text-gray-600">Intern</h2>
            <h2 className="text-gray-600">at Cognizant</h2>
          </div>
          <div className="border-2 border-gray-300 bg-white flex flex-col items-center rounded-3xl p-4 m-2 shadow-md min-w-[160px]">
            <h1 className="font-bold text-lg text-gray-700 mb-1">Education</h1>
            <h2 className="text-gray-600">Bachelor's Degree</h2>
            <h2 className="text-gray-600">in Computer Science</h2>
          </div>
        </div>

        <div className="m-2 w-full md:w-auto mt-6 md:mt-0">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed bg-gray-50 rounded-2xl p-4 shadow-sm">
            Hello! I'm <strong className="text-gray-800">Shivank Mishra</strong>, currently an intern at <strong className="text-gray-800">Cognizant</strong>. I'm passionate about bringing ideas to life through programming. I've gained hands-on experience with <strong className="text-gray-700">C# .NET</strong>, <strong className="text-gray-700">Azure DevOps Services</strong>, <strong className="text-gray-700">MS SQL Server</strong>, <strong className="text-gray-700">AngularJS</strong>, and <strong className="text-gray-700">HTML</strong>. 🚀
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 tracking-tight">Experience</h1>
        <div className="flex flex-col md:flex-row justify-center gap-8 my-5">
          <div className="mb-4 md:mb-0 border-2 border-gray-200 bg-white rounded-3xl px-4 md:px-16 py-4 md:py-8 shadow-md flex-1">
            <h1 className="font-bold text-2xl text-gray-700 mb-4">Frontend</h1>
            <table className="table-auto font-bold mx-auto text-gray-700">
              <tbody>
                <tr>
                  <td className="p-2">HTML</td>
                  <td className="p-2">AngularJS</td>
                  <td className="p-2">React</td>
                  <td className="p-2">React Native</td>
                </tr>
                <tr>
                  <td className="p-2">CSS</td>
                  <td className="p-2">JavaScript</td>
                  <td className="p-2">Three.js</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-2 border-gray-200 bg-white rounded-3xl px-4 md:px-16 py-4 md:py-8 shadow-md flex-1">
            <h1 className="font-bold text-2xl text-gray-700 mb-4">Backend</h1>
            <table className="table-auto font-bold mx-auto text-gray-700">
              <tbody>
                <tr>
                  <td className="p-2">C# .NET</td>
                  <td className="p-2">Node.js</td>
                </tr>
                <tr>
                  <td className="p-2">Express.js</td>
                  <td className="p-2">MongoDB</td>
                </tr>
                <tr>
                  <td className="p-2">MS SQL Server</td>
                  <td className="p-2">Azure DevOps</td>
                </tr>
                <tr>
                  <td className="p-2">Git</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
