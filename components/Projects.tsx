import React, { useState } from 'react';
import Section from './Section';
import { projectsData } from '../data';
import { ExternalLink, Gamepad2, Cpu, Key } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI Tool' | 'Gamification'>('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <Section id="work" title="我的工作" className="bg-slate-50 dark:bg-slate-900/50">
      
      {/* Filter Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
          {(['All', 'AI Tool', 'Gamification'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              {cat === 'All' ? '全部' : cat === 'AI Tool' ? 'AI工具' : '游戏化'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden bg-slate-200">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                {project.category === 'AI Tool' ? <Cpu size={20} className="text-blue-500"/> : <Gamepad2 size={20} className="text-purple-500"/>}
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto space-y-3">
                {project.account && project.password && (
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg border border-slate-100 dark:border-slate-600 text-xs">
                    <div className="flex items-center gap-1.5 mb-1.5 text-slate-500 dark:text-slate-400 font-medium">
                      <Key size={12} />
                      <span>测试账号</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      <div className="flex justify-between">
                         <span className="text-slate-500 dark:text-slate-400">账号:</span>
                         <span className="font-mono text-slate-700 dark:text-slate-200 select-all">{project.account}</span>
                      </div>
                      <div className="flex justify-between">
                         <span className="text-slate-500 dark:text-slate-400">密码:</span>
                         <span className="font-mono text-slate-700 dark:text-slate-200 select-all">{project.password}</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                  >
                    查看详情 <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;