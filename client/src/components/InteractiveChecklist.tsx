import { useState, useEffect } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface InteractiveChecklistProps {
  title: string;
  items: string[]; // سنعيدها لمصفوفة نصوص لتسهيل الاستخدام في Home.tsx
  storageKey?: string;
}

export function InteractiveChecklist({
  title,
  items,
  storageKey = 'default-checklist',
}: InteractiveChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  // تحميل الحالة المحفوظة
  useEffect(() => {
    const saved = localStorage.getItem(`checklist-${title}`);
    if (saved) {
      try {
        setCheckedItems(new Set(JSON.parse(saved)));
      } catch (e) {
        console.error(e);
      }
    }
  }, [title]);

  const handleToggle = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
    localStorage.setItem(`checklist-${title}`, JSON.stringify(Array.from(newChecked)));
  };

  const progress = Math.round((checkedItems.size / items.length) * 100);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6 mb-8 shadow-sm text-right">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#0F3A7D] dark:text-blue-400 mb-4">
          {title}
        </h3>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-blue-600 dark:text-blue-400 font-bold">{progress}%</span>
          <span className="text-gray-500 dark:text-gray-400">التقدم: {checkedItems.size} من {items.length}</span>
        </div>
      </div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleToggle(index)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all border ${
              checkedItems.has(index)
                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800/50'
                : 'bg-gray-50 dark:bg-slate-900/50 border-gray-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700'
            }`}
          >
            <div className="flex-shrink-0">
              {checkedItems.has(index) ? (
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
              ) : (
                <Circle className="w-5 h-5 text-gray-300 dark:text-slate-600" />
              )}
            </div>
            <span className={`text-sm flex-1 text-right ${
              checkedItems.has(index)
                ? 'text-green-700 dark:text-green-400/70 line-through opacity-70'
                : 'text-gray-700 dark:text-slate-200'
            }`}>
              {item}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
