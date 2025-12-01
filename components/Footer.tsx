import React from 'react';
import { Github, Mail, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="scroll-mt-28 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">保持联系</h2>
            <p className="text-slate-600 dark:text-slate-400">
              欢迎随时交流AI、产品、心理学应用或任何合作机会。
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href={`https://github.com/${personalInfo.socials.github}`} target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300">
              <Github size={24} />
            </a>
            <a href={`https://zhihu.com/${personalInfo.socials.zhihu}`} target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center w-[48px] h-[48px]">
              知
            </a>
            <button 
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300"
              onClick={() => alert(`WeChat ID: ${personalInfo.socials.wechat}`)}
            >
              <MessageCircle size={24} />
            </button>
            <a href={`mailto:${personalInfo.socials.email}`} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name_eng}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;