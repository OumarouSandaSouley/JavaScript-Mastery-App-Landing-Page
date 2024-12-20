import React from "react";
import { Download, Play, ChevronRight, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-50"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-16 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-56 w-56 rounded-full bg-blue-400 blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in-down">
              Learn, Build, and Master JavaScript
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                {" "}
                Anytime, Anywhere!
              </span>
            </h1>
            <p className="text-xl sm:text-2xl animate-fade-in-up">
              The ultimate mobile experience for JavaScript enthusiasts and
              professionals.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="https://www.github.com/OumarouSandaSouley/jsm"
                className="group bg-white text-blue-600 px-6 py-3 rounded-full flex items-center hover:bg-blue-100 transition duration-300 transform hover:scale-105"
              >
                <Github size={20} className="mr-2" />
                Get Source on GITHUB
                <ChevronRight
                  size={16}
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
              <a
                href="https://expo.dev/artifacts/eas/mPL9JLmXALPbYd1QvVaWPz.apk"
                className="group bg-white text-blue-600 px-6 py-3 rounded-full flex items-center hover:bg-blue-100 transition duration-300 transform hover:scale-105"
              >
                <Download size={20} className="mr-2" />
                Get Android Build by Expo
                <ChevronRight
                  size={16}
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </div>
          </div>

          {/* Right column: Image */}
          <div className="max-w-md mx-auto lg:mx-0 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-50 rounded-lg"></div>
              <img
                src="/images/hero.png"
                alt="JSM App Splash Screen"
                width="500"
                height="500"
                className="w-full h-auto rounded-lg shadow-sm object-contain heroImage"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-12 h-12 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default Hero;
