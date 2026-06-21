import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description: string;
}

interface ResearchStepsChecklistProps {
  steps: Step[];
  title: string;
}

export function ResearchStepsChecklist({ steps, title }: ResearchStepsChecklistProps) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  // تحميل التقدم المحفوظ من Local Storage
  useEffect(() => {
    const saved = localStorage.getItem(`checklist-${title}`);
    if (saved) {
      setCompleted(new Set(JSON.parse(saved)));
    }
  }, [title]);

  // حفظ التقدم في Local Storage
  const toggleStep = (stepId: string) => {
    const newCompleted = new Set(completed);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompleted(newCompleted);
    localStorage.setItem(`checklist-${title}`, JSON.stringify(Array.from(newCompleted)));
  };

  const progress = Math.round((completed.size / steps.length) * 100);

  return (
    <div className="my-8 p-6 bg-gradient-to-r from-blue-50 to-blue-50/50 dark:from-blue-900/20 dark:to-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800">
      <div className="mb-6 text-right">
        <h3 className="text-2xl font-bold text-[#0F3A7D] dark:text-blue-400 mb-4">
          {title}
        </h3>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
          <div
            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-xs font-medium">
           <span className="text-blue-600 dark:text-blue-400">{progress}%</span>
           <span className="text-gray-600 dark:text-gray-300">{completed.size} من {steps.length}</span>
        </div>
      </div>

      <div className="space-y-3">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => toggleStep(step.id)}
            className={`w-full text-right p-4 rounded-lg border-2 transition-all duration-200 ${
              completed.has(step.id)
                ? 'bg-green-50 dark:bg-green-900/20 border-green-400 dark:border-green-600'
                : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500'
            }`}
          >
            <div className="flex items-start gap-3 flex-row-reverse">
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                  completed.has(step.id)
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                {completed.has(step.id) && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </div>
              <div className="flex-1 text-right">
                <h4 className={`font-semibold text-lg ${
                  completed.has(step.id)
                    ? 'text-green-700 dark:text-green-400/80 line-through opacity-70'
                    : 'text-gray-900 dark:text-slate-100'
                }`}>
                  {step.title}
                </h4>
                <p className={`text-sm mt-1 ${
                  completed.has(step.id)
                    ? 'text-green-600 dark:text-green-500/80'
                    : 'text-gray-600 dark:text-slate-400'
                }`}>
                  {step.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg border-r-4 border-blue-500 dark:border-blue-400 text-right">
        <p className="text-sm text-blue-900 dark:text-blue-200">
          💡 <strong>ملاحظة:</strong> تقدمك يُحفظ تلقائياً في متصفحك. يمكنك العودة لاحقاً والاستمرار من حيث توقفت!
        </p>
      </div>
    </div>
  );
}
