import React from "react";

const  TechStack =()=> {
  const technologies = [
    { name: "React Native", color: "bg-blue-500" },
    { name: "Expo", color: "bg-black" },
    { name: "Appwrite", color: "bg-pink-500" },
    { name: "Clerk", color: "bg-cyan-500" },
    { name: "React Native Reanimated", color: "bg-purple-500" },
  ];

  return (
    <section className="tech-stack bg-gray-100 py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          Powered by Modern Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`${tech.color} text-white px-4 py-2 rounded-full text-sm font-semibold animate-fade-in`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
