import React, { useEffect } from 'react';
import { Github, Instagram, Send, Bot, ChevronDown, Code, MessageSquare, Globe, Database, Lock, Sparkles } from 'lucide-react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Watermark */}
      <div className="fixed bottom-4 right-4 text-white/20 font-semibold text-sm rotate-[-15deg] select-none">
        <div className="flex items-center gap-1">
          <Sparkles className="w-4 h-4" />
          <span>Developed by Ansh</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="animate-fadeIn text-center relative z-10">
          <div className="mb-8">
            <img 
              src="https://envs.sh/rQB.jpg" 
              alt="Ansh" 
              className="w-32 h-32 rounded-full mx-auto border-4 border-blue-400 shadow-xl animate-profile hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">
            Ansh
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-slideUp">
            Welcome to my portfolio
          </p>
          <div className="flex gap-6 justify-center mb-12 animate-slideUp delay-300">
            <Bot className="w-8 h-8 text-blue-400 animate-float" />
            <Code className="w-8 h-8 text-purple-400 animate-float delay-100" />
            <MessageSquare className="w-8 h-8 text-pink-400 animate-float delay-200" />
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8" />
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid opacity-20"></div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="hidden-element">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Full-Stack Developer
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12 text-center">
            Crafting innovative solutions at the intersection of automation and user experience.
            Specializing in Telegram bots and modern web development.
          </p>
        </div>

        {/* Expertise Sections */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Telegram Bot Development */}
          <div className="hidden-element">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 hover:bg-gray-800/40 transition-all border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Bot className="w-6 h-6 text-blue-400" />
                Telegram Bot Development
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span> Custom API integration and webhooks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span> Interactive command handling
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span> Media processing and file management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span> Database integration for data persistence
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span> User authentication and authorization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span> Automated notifications and alerts
                </li>
              </ul>
            </div>
          </div>

          {/* Frontend Development */}
          <div className="hidden-element">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 hover:bg-gray-800/40 transition-all border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-purple-400" />
                Frontend Development
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span> React.js and Next.js expertise
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span> Modern UI/UX implementation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span> Responsive design with Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span> State management (Redux, Context)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span> Performance optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span> API integration and data fetching
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: <Bot className="w-6 h-6" />, title: 'Custom Bots', desc: 'Tailored Telegram bot solutions', color: 'blue' },
            { icon: <Database className="w-6 h-6" />, title: 'Data Integration', desc: 'Seamless API & database integration', color: 'purple' },
            { icon: <Lock className="w-6 h-6" />, title: 'Secure Development', desc: 'Security-first approach', color: 'pink' }
          ].map((service, i) => (
            <div key={i} className="hidden-element">
              <div className="p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/40 transition-all border border-gray-700/50 hover:scale-105 duration-300">
                <div className={`text-${service.color}-400 mb-4`}>{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden-element">
          <h3 className="text-2xl font-bold mb-6 text-center">Connect With Me</h3>
          <div className="flex justify-center gap-8">
            <a href="https://github.com/anshu908" target="_blank" rel="noopener noreferrer" 
               className="transform hover:scale-125 transition-transform duration-300">
              <Github className="w-8 h-8 text-gray-300 hover:text-white" />
            </a>
            <a href="https://instagram.com/anshopi__" target="_blank" rel="noopener noreferrer"
               className="transform hover:scale-125 transition-transform duration-300">
              <Instagram className="w-8 h-8 text-gray-300 hover:text-white" />
            </a>
            <a href="https://t.me/cyber_ansh" target="_blank" rel="noopener noreferrer"
               className="transform hover:scale-125 transition-transform duration-300">
              <Send className="w-8 h-8 text-gray-300 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;