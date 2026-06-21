import { Lightbulb } from 'lucide-react';

interface ProTipBoxProps {
  title?: string;
  children: React.ReactNode;
}

export function ProTipBox({ title = "نصيحة ذهبية", children }: ProTipBoxProps) {
  return (
    <div className="my-6 border-r-4 border-r-[#10B981] dark:border-r-emerald-500 bg-gradient-to-l from-emerald-50 dark:from-emerald-900/20 to-transparent rounded-l-lg p-6 shadow-md dark:shadow-emerald-900/10 hover:shadow-lg transition-all duration-300">
      <div className="flex gap-4">
        <div className="flex-shrink-0 pt-1">
          <Lightbulb className="w-6 h-6 text-[#10B981] dark:text-[#34D399]" />
        </div>
        <div className="flex-1">
          {title && (
            <h4 className="font-poppins font-semibold text-[#0F3A7D] dark:text-blue-400 mb-2 text-lg">
              ⭐ {title}
            </h4>
          )}
          <div className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
