"use client"
import Image from "next/image";

// src/components/Portfolio.js
const Portfolio = () => (
    <div id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <div
              key={project}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <Image
              width={200}
              height={200}
                src={`/images/project${project}.jpg`}
                alt={`Project ${project}`}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="font-bold">Project {project}</h3>
                <p>Short description of the project.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  export default Portfolio;
  