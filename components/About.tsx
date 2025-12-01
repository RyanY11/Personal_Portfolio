import React from 'react';
import Section from './Section';
import { personalInfo, educationData } from '../data';
import { GraduationCap, BookOpen, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" title="关于我" className="bg-white dark:bg-slate-900">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Bio Column */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
            <Quote className="text-primary-500 mb-4 opacity-50" size={32} />
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {personalInfo.bio}
            </p>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">更多……</h3>
            <p className="text-slate-600 dark:text-slate-400">
              除了产品外，也同时涉足过数据分析、算法和产品运营。我力求寻找人与产品、生活的最佳结合点。如果对我感兴趣，或许我们可以更加深入地聊一聊。
            </p>
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="text-primary-500" />
            教育背景
          </h3>
          
          <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-8 pl-8 py-2">
            {educationData.map((edu, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-900 bg-primary-500"></span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 tracking-wide uppercase">
                    {edu.degree}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {edu.school}
                  </h4>
                  <span className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1 mt-1">
                    <BookOpen size={14} />
                    {edu.field}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;