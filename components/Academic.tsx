import React from 'react';
import Section from './Section';
import { patentsData, publicationsData, booksData } from '../data';
import { Book, FileText, Award } from 'lucide-react';

const Academic: React.FC = () => {
  return (
    <Section id="academic" title="学术成果" className="bg-white dark:bg-slate-900">
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Books & Patents */}
        <div className="space-y-12">
          {/* Books */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <Book className="text-primary-500" />
              参与书籍
            </h3>
            {booksData.map((book, i) => (
              <div key={i} className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-xl border border-orange-100 dark:border-orange-800/30">
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">{book.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">ISBN: {book.isbn}</p>
                <p className="text-slate-700 dark:text-slate-300 text-sm">{book.desc}</p>
              </div>
            ))}
          </div>

          {/* Patents */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <Award className="text-primary-500" />
              参与专利
            </h3>
            <ul className="space-y-4">
              {patentsData.map((patent, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-slate-100">{patent.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">{patent.number}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Papers */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
            <FileText className="text-primary-500" />
            学术论文
          </h3>
          <div className="space-y-6">
            {publicationsData.map((pub, i) => (
              <div key={i} className="group relative pl-6 border-l-2 border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
                <div className="mb-1">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {pub.year}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {pub.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 italic">
                  {pub.journal}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                  {pub.authors}
                </p>
              </div>
            ))}
            <div className="text-center pt-4">
              <span className="text-sm text-slate-400 italic">仍有研究进行中...</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Academic;