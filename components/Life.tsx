import React from 'react';
import Section from './Section';
import { hobbiesData, personalInfo } from '../data';
import { Mic, Heart, Camera, Timer } from 'lucide-react';

const Life: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case '播客': return <Mic className="w-8 h-8 text-rose-500" />;
      case '半程马拉松': return <Timer className="w-8 h-8 text-amber-500" />;
      case '志愿服务': return <Heart className="w-8 h-8 text-red-500" />;
      case '摄影': return <Camera className="w-8 h-8 text-indigo-500" />;
      default: return null;
    }
  };

  return (
    <Section id="life" title="关于我的生活" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hobbiesData.map((hobby, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-700 mb-4">
              {getIcon(hobby.name)}
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{hobby.name}</h3>
            <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-4">
              {hobby.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {hobby.details?.map((detail, idx) => (
                <span key={idx} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded">
                  {detail}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-block p-4 bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-100 dark:border-slate-700 max-w-full">
           <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">我的公众号</h4>
           <div className="bg-slate-200 dark:bg-slate-700 mx-auto rounded overflow-hidden">
             <img 
               src={personalInfo.officialAccountQr} 
               alt="Ryan聊心理公众号二维码" 
               className="w-full max-w-[295px] h-auto object-cover aspect-[590/216]"
             />
           </div>
           <p className="mt-2 text-primary-600 dark:text-primary-400 font-medium">Ryan聊心理</p>
        </div>
      </div>
    </Section>
  );
};

export default Life;