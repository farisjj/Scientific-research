interface KeywordBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
}

export function KeywordBadge({ children, variant = 'primary' }: KeywordBadgeProps) {
  const variants = {
    primary: 'bg-blue-100 dark:bg-blue-900/40 text-[#0F3A7D] dark:text-blue-300 border border-[#0F3A7D]/30 dark:border-blue-500/30',
    secondary: 'bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-slate-700',
    accent: 'bg-green-100 dark:bg-green-900/40 text-[#10B981] dark:text-green-300 border border-[#10B981]/30 dark:border-green-500/30',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} mx-1`}>
      {children}
    </span>
  );
}
