import React from "react";
import { ChevronRight, Download, Github } from "lucide-react";

const  CallToAction=()=> {
  return (
    <section className="call-to-action bg-blue-600 text-white py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in">
          Ready to Start Your JavaScript Journey?
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
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
            href="https://expo.dev/artifacts/eas/698pMzRgbYH1KnDDJY7bns.apk"
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
        <a
          href="https://www.jsmastery.pro"
          className="text-white underline hover:text-blue-200 transition duration-300 animate-fade-in"
        >
          Visit https://www.jsmastery.pro
        </a>
      </div>
    </section>
  );
}

export default CallToAction;
