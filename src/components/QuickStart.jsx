import React, { useState } from "react";
import {
  Copy,
  Check,
  Github,
  FileText,
  Key,
  Terminal,
  Code,
  Database,
  Zap,
} from "lucide-react";

const QuickStart = () => {
  const [copiedCommand, setCopiedCommand] = useState(null);

  const steps = [
    {
      text: "Clone the repository",
      command: "git clone https://github.com/OumarouSandaSouley/jsm.git",
      icon: <Github className="w-6 h-6" />,
    },
    {
      text: "Navigate to the project directory",
      command: "cd jsm",
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      text: "Install dependencies",
      command: "npm install",
      icon: <Code className="w-6 h-6" />,
    },
    {
      text: "Create a .env.local file in the root directory",
      command: "touch .env.local",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      text: "Add the following environment variables to .env.local",
      command: `APPWRITE_PROJECT_ID=your_appwrite_project_id
APPWRITE_DATABASE_ID=your_appwrite_database_id
APPWRITE_CATEGORY_COLLECTION_ID=your_appwrite_category_collection_id
APPWRITE_PROJECTS_COLLECTION_ID=your_appwrite_project_collection_id
APPWRITE_C0URSES_COLLECTION_ID=your_appwrite_courses_collection_id
APPWRITE_RESSOURCES_COLLECTION_ID=your_appwrite_ressources_collection_id
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key`,
      icon: <Key className="w-6 h-6" />,
    },
    {
      text: "Run the project",
      command: "npm start",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      text: "Scan the QR code with Expo Go app",
      command: null,
      icon: <Terminal className="w-6 h-6" />,
    },
  ];

  const copyToClipboard = (command, index) => {
    navigator.clipboard.writeText(command).then(() => {
      setCopiedCommand(index);
      setTimeout(() => setCopiedCommand(null), 2000);
    });
  };

  return (
    <section className="quick-start py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Quick Start for Developers
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {steps.slice(0, Math.ceil(steps.length / 2)).map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{step.text}</h3>
                </div>
                {step.command && (
                  <div className="relative mt-4">
                    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm">
                      <code>{step.command}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(step.command, index)}
                      className="absolute top-2 right-2 p-1 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors duration-200"
                      aria-label={
                        copiedCommand === index
                          ? "Copied!"
                          : "Copy to clipboard"
                      }
                    >
                      {copiedCommand === index ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-300" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {steps.slice(Math.ceil(steps.length / 2)).map((step, index) => (
              <div
                key={index + Math.ceil(steps.length / 2)}
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{step.text}</h3>
                </div>
                {step.command && (
                  <div className="relative mt-4">
                    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm">
                      <code>{step.command}</code>
                    </pre>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          step.command,
                          index + Math.ceil(steps.length / 2)
                        )
                      }
                      className="absolute top-2 right-2 p-1 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors duration-200"
                      aria-label={
                        copiedCommand === index + Math.ceil(steps.length / 2)
                          ? "Copied!"
                          : "Copy to clipboard"
                      }
                    >
                      {copiedCommand === index + Math.ceil(steps.length / 2) ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-300" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold mb-6 flex items-center text-blue-600">
            <Database className="w-8 h-8 mr-3" />
            How to Obtain Credentials
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-2">
                Appwrite Credentials
              </h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Sign up or log in to your Appwrite account</li>
                <li>Create a new project and copy its project ID</li>
                <li>Create a new database and copy its ID</li>
                <li>
                  Create collections: Projects, Courses, Resources, Categories
                </li>
                <li>Set up collection structures as follows:</li>
              </ol>
              <div className="bg-gray-100 p-4 rounded-md mt-2">
                <p className="font-semibold">Courses:</p>
                <p>
                  title(string), description(string), category(string),
                  youtubeUrl(URL), githubUrl(URL), ratings(double), image(URL),
                  videoID(string), duration(Integer)
                </p>
                <p className="font-semibold mt-2">Projects:</p>
                <p>
                  title(string), description(string), category(string),
                  youtubeUrl(URL), banner(URL), technologies(string array)
                </p>
                <p className="font-semibold mt-2">Resources:</p>
                <p>
                  title(string), description(string), category(string),
                  url(URL), image(URL)
                </p>
                <p className="font-semibold mt-2">Categories:</p>
                <p>name(string)</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-2">Clerk Credentials</h4>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Sign up or log in to your Clerk account</li>
                <li>Create a new application or select an existing one</li>
                <li>
                  Navigate to the API Keys section in your Clerk dashboard
                </li>
                <li>Copy the Publishable Key</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="text-center animate-fade-in">
          <p className="text-xl text-gray-600 mb-6">
            Contributions from the open-source community are welcome!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/OumarouSandaSouley/jsm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-200 text-lg"
            >
              <Github className="w-6 h-6 mr-2" />
              View on GitHub
            </a>
            <a
              href="https://github.com/OumarouSandaSouley/jsm/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-lg"
            >
              <FileText className="w-6 h-6 mr-2" />
              Full Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
