import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-black">Shivank Mishra</h1>
        <p className="text-gray-600 mt-1">
          <FaPhone className="inline mr-1" />
          <a href="tel:9399463995" className="underline">9399463995</a>
          {' '}•{' '}
          <FaEnvelope className="inline mr-1" />
          <a href="mailto:shivank.vg.mishra@gmail.com" className="underline">shivank.vg.mishra@gmail.com</a>
          {' '}•{' '}
          <FaLinkedin className="inline mr-1" />
          <a href="https://linkedin.com/in/shivank-mishra-0b6a74224/" className="underline">LinkedIn</a>
          {' '}•{' '}
          <FaGithub className="inline mr-1" />
          <a href="https://github.com/ShivankKMishra" className="underline">GitHub</a>
          {' '}•{' '}
          <FaGlobe className="inline mr-1" />
          <a href="https://portfolio-vercel-dusky.vercel.app/" className="underline">Portfolio</a>
        </p>
      </header>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-darkcolor">Academic Qualification</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li><strong>Indore Institute of Science and Technology</strong> — Bachelor of Technology in Computer Science and Engineering (Nov. 2021 -- May 2025)</li>
          <li><strong>Govt. Model Higher Secondary School</strong> (2018 -- 2021)</li>
        </ul>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-darkcolor">Experience</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>
            <strong>Full-Stack Developer Intern, Patra Technology (paid)</strong> — Jun. 2024 -- Present
            <p>Worked on developing and enhancing web applications using Next.js and React Native. Contributed to both front-end and back-end development, ensuring seamless user experience and efficient data management.</p>
          </li>
        </ul>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-darkcolor">Projects</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>
            <strong>Campus Connect Web Application</strong> — Tech: React.js, Tailwind CSS, Firebase, React Router, ZEGOCLOUD, react-pdf/renderer
            <p>Developed a personalized web application to streamline communication, resource accessibility, and overall college experience. Implemented a chatbot feature to enhance user interaction and experience.</p>
          </li>
          <li>
            <strong>E-commerce Website</strong> — Tech: React.js, MongoDB, Express.js, Node.js, JavaScript
            <p>Developed a full-stack e-commerce website with user authentication, and product management functionality. Utilized MongoDB for database management and Express.js for server-side development.</p>
          </li>
        </ul>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-darkcolor">Technical Skills</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li><strong>Programming Languages:</strong> C++, JavaScript, HTML/CSS</li>
          <li><strong>Libraries/Frameworks:</strong> React.js, React Native, Git, Node.js, CSS3, Tailwind, Express.js, Next.js</li>
          <li><strong>Database:</strong> MongoDB, Firebase</li>
          <li><strong>Platforms:</strong> Firebase, Vercel, Google Cloud</li>
        </ul>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-darkcolor">Achievements</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>Rated 3 Stars at Codechef and Pupil at Codeforces</li>
          <li>Solved 300+ Problems on Various Coding Platforms like Codechef, GFG, Codeforces</li>
        </ul>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-darkcolor">Positions of Responsibility</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>
            <strong>Member of NSS</strong> — 2018 -- 2023
            <p>Involved in voluntary activities such as cleaning drives, literacy campaigns, health camps, and other initiatives.</p>
          </li>
        </ul>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-darkcolor">Certifications</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>Build a Google Firebase Web Application</li>
          <li>Build a MERN application using Next.js</li>
          <li>AI Chatbots with IBM</li>
          <li>SQL Certification from Cognitive Classes</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
