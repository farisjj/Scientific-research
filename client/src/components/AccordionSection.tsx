import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionSection({ title, children, defaultOpen = false }: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-[#0F3A7D]/30 dark:hover:border-blue-500/50 shadow-sm dark:shadow-blue-900/10 transition-colors duration-200 accordion-item">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-slate-800/80 hover:bg-blue-50/50 dark:hover:bg-slate-700/80 transition-colors duration-200 group"
      >
        <h3 className="text-lg font-semibold text-[#0F3A7D] dark:text-blue-400 text-right flex-1 group-hover:text-[#0F3A7D]/80 dark:group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-[#0F3A7D] dark:text-blue-400 ml-4 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50/50 dark:bg-slate-900/40 border-t border-gray-200 dark:border-slate-700 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="text-gray-700 dark:text-gray-200 leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
