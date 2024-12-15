"use client"
import Image from "next/image";

// src/components/About.js
const About = () => (
    <div id="about" className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <Image
          width={200}
          height={200}
            src="/images/profile.jpg"
            alt="Profile"
            className="rounded-lg shadow-md w-full"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700">
            I’m a passionate Frontend Developer who loves creating amazing web experiences. 
            I specialize in React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
  
  export default About;
  