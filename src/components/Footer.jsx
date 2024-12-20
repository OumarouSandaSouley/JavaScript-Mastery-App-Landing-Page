import React from "react";
import { Github, Youtube, Twitter, Linkedin, Facebook } from "lucide-react";

const  Footer=()=> {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.jsmastery.pro"
                  className="hover:text-blue-400 transition duration-300"
                >
                  JSM Website
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@javascriptmastery"
                  className="hover:text-blue-400 transition duration-300"
                >
                  YouTube Channel
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/OumarouSandaSouley/jsm"
                  className="hover:text-blue-400 transition duration-300"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.github.com/OumarouSandaSouley"
                className="hover:text-blue-400 transition duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.youtube.com/@javascriptmastery"
                className="hover:text-blue-400 transition duration-300"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.facebook.com/aajt.aajt.562"
                className="hover:text-blue-400 transition duration-300"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 animate-fade-in">
          <p>&copy; 2024 JavaScript Mastery by Oumarou Sanda Souley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
