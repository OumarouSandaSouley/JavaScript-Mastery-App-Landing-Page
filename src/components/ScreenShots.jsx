import React from "react";

const  Screenshots = () => {
  const screenshots = [
    { src: "/images/sc2.png", caption: "Browse Courses Effortlessly" },
    {
      src: "/images/sc1.png",
      caption: "Access Free Resources",
    },
    {
      src: "/images/sc3.png",
      caption: "Join the JSM Family community",
    },
    { src: "/images/sc4.png", caption: "Securely authenticate with avatar" },
  ];

  return (
    <section className="screenshots bg-gray-200 py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          App Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="screenshot-item bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-fade-in"
            >
              <img
                src={screenshot.src}
                alt={screenshot.caption}
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-center text-gray-600">{screenshot.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Screenshots;
