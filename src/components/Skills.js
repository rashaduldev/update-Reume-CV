// src/components/Skills.js
"use client"
const Skills = () => (
    <div id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "MongoDB", "Express.js"].map((skill) => (
            <div key={skill} className="p-4 bg-white rounded shadow">
              <h3 className="text-lg font-bold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  export default Skills;
  