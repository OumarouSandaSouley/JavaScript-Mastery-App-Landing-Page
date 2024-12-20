import React from "react";
import {
  Home,
  Lock,
  Book,
  Video,
  Github,
  Users,
  Smartphone,
  Zap,
} from "lucide-react";

function FeatureItem({ icon, title, description }) {
  return (
    <div className="feature-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-fade-in">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

const  Features = () => {
  const features = [
    {
      icon: <Home size={24} />,
      title: "Dynamic Home Screen",
      description: "Personalized greetings, latest courses, and filters.",
    },
    {
      icon: <Lock size={24} />,
      title: "Robust Authentication",
      description: "Secure login with Clerk.",
    },
    {
      icon: <Book size={24} />,
      title: "Access Free Resources",
      description:
        "Filterable access to shared resources, with download options.",
    },
    {
      icon: <Video size={24} />,
      title: "Course Interaction",
      description:
        "Play videos, view project GitHub links, and visit YouTube tutorials.",
    },
    {
      icon: <Github size={24} />,
      title: "Projects Hub",
      description: "Access all JSM projects with direct GitHub links.",
    },
    {
      icon: <Users size={24} />,
      title: "JSM Community",
      description: "Join forums, social media, and community discussions.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Responsive Design",
      description: "Optimized for all devices.",
    },
    {
      icon: <Zap size={24} />,
      title: "Animations",
      description: "Enhanced user engagement using React Native Reanimated.",
    },
  ];

  return (
    <section className="features py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
