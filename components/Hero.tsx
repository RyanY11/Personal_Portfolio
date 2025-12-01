import React, { useState } from 'react';
import { MapPin, Download, X, Copy, Check, MessageCircle, Mail, Github } from 'lucide-react';
import { personalInfo } from '../data';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="relative overflow-hidden bg-white dark:bg-slate-900 pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10 dark:opacity-5 pointer-events-none">
         <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3B82F6" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.2C93.5,8.8,82.2,21.9,71.2,33.1C60.2,44.3,49.5,53.6,37.6,60.6C25.7,67.6,12.6,72.3,-0.6,73.3C-13.8,74.3,-27.3,71.6,-39.7,64.8C-52.1,58,-63.4,47.1,-71.6,34.5C-79.8,21.9,-84.9,7.6,-83.1,-5.8C-81.3,-19.2,-72.6,-31.7,-62.3,-41.8C-52,-51.9,-40.1,-59.6,-27.6,-67.7C-15.1,-75.8,-2,-84.3,12.2,-86.4C26.4,-88.5,41.9,-84.3,44.7,-76.4Z" transform="translate(100 100)" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar Area - Using a placeholder but designed to be replaced */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-indigo-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src={personalInfo.avatar}
              alt={personalInfo.name} 
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium tracking-wider text-primary-600 dark:text-primary-400 uppercase bg-primary-50 dark:bg-slate-800 rounded-full">
              {personalInfo.role}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-6 max-w-2xl leading-relaxed">
              {personalInfo.tagline}
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-500 dark:text-slate-400 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                联系我
              </button>
              <a 
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-base font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Download size={18} />
                下载简历
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-[fadeIn_0.3s_ease-out]">
            
            {/* Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">联系方式</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
               {/* WeChat */}
               <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase mb-0.5">微信</p>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold select-all">{personalInfo.socials.wechat}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleCopy(personalInfo.socials.wechat, 'wechat')}
                    className="p-2 hover:bg-white dark:hover:bg-slate-600 rounded-lg transition-colors text-slate-400 hover:text-primary-500"
                    title="复制微信号"
                  >
                    {copiedField === 'wechat' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
               </div>

               {/* Email */}
               <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase mb-0.5">邮箱</p>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold select-all text-sm sm:text-base break-all">{personalInfo.socials.email}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleCopy(personalInfo.socials.email, 'email')}
                    className="p-2 hover:bg-white dark:hover:bg-slate-600 rounded-lg transition-colors text-slate-400 hover:text-primary-500"
                    title="复制邮箱"
                  >
                    {copiedField === 'email' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
               </div>
               
               {/* Links Grid */}
               <div className="grid grid-cols-2 gap-4">
                  <a 
                    href={`https://github.com/${personalInfo.socials.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all group"
                  >
                     <Github size={24} className="text-slate-700 dark:text-slate-300 mb-2 group-hover:scale-110 transition-transform" />
                     <span className="text-sm font-medium text-slate-700 dark:text-slate-200">GitHub</span>
                  </a>
                  <a 
                    href={`https://www.zhihu.com/${personalInfo.socials.zhihu}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all group"
                  >
                     <span className="w-6 h-6 flex items-center justify-center font-bold text-lg text-blue-500 mb-2 group-hover:scale-110 transition-transform">知</span>
                     <span className="text-sm font-medium text-slate-700 dark:text-slate-200">知乎</span>
                  </a>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;