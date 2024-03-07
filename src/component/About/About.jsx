import React from 'react';
import './about.css';
import image from "@/src/assets/images/image (3).jpeg";

export default function About() {
  return (
    <div className="about text-center">
      <h1 className="font-extrabold text-3xl">About Me</h1>

      <div className="flex flex-col md:flex-row justify-center mx-2 md:mx-20 my-10 px-4 md:px-40">
        <div className="mb-4 md:mb-0 md:mr-10">
          <img className="h-36 mx-auto md:mx-0 rounded-full" src={image} alt="Profile Picture" />
        </div>

        <div className="flex flex-wrap m-2">
          <div className="border flex flex-col items-center border-black rounded-3xl p-2 m-2">
            <h1 className="font-bold text-xl">Experience</h1>
            <h2>2+ years</h2>
            <h2>Full Stack Development</h2>
          </div>

          <div className="border flex flex-col items-center border-black rounded-3xl p-2 m-2">
            <h1 className="font-bold text-xl">Education</h1>
            <h2>Bachelor's Degree</h2>
            <h2>in Computer Science</h2>
          </div>
        </div>

        <div className="m-2">
          <p>
            Hello! I'm <strong>Shivank Mishra</strong>, and I'm passionate about bringing ideas to life through programming. I've fallen in love with the world of coding and have acquired proficiency in classics like <strong>C++</strong> and <strong>Javascript</strong>. 🚀
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold">Experience</h1>
        <div className="flex flex-col md:flex-row justify-center my-5">
          <div className="mb-4 md:mb-0 border border-black rounded-3xl px-4 md:px-20 py-4 md:py-9 mr-0 md:mr-8">
            <h1 className="font-bold text-2xl text-gray-500">Frontend</h1>
            <table className="table-auto font-bold mx-auto">
              <tbody>
                <tr className="mb-4">
                  <td className="p-2">HTML</td>
                  <td className="p-2">Javascript</td>
                  <td className="p-2">React</td>
                  <td className="p-2">React native </td>
                  
                </tr>
                <tr className="mb-4">
                  <td className="p-2">CSS</td>
                  <td className="p-2">C++</td>
                  <td className="p-2">three js</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border border-black rounded-3xl px-4 md:px-20 py-4 md:py-9">
            <h1 className="font-bold text-2xl text-gray-500">Backend</h1>
            <table className="table-auto font-bold mx-auto">
              <tbody>
                <tr className="mb-4">
                  <td className="p-2 ">Node.js</td>
                  <td className="p-2 ">Express.js</td>
                </tr>
                <tr className="mb-4">
                  <td className="p-2">MongoDB</td>
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
