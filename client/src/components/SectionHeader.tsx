import { BookmarkButton } from './BookmarkButton';

interface SectionHeaderProps {
  title: string;
  id: string;
  showActions?: boolean;
}

export function SectionHeader({ title, id, showActions = true }: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-10 border-b border-gray-100 dark:border-slate-800 pb-6 transition-all duration-500 hover:pr-2">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0F3A7D] dark:text-blue-400 font-poppins leading-tight">
        {title}
      </h2>
      {showActions && (
        <div className="flex gap-2 items-center self-end md:self-start icon-interactive">
          <BookmarkButton sectionId={id} sectionTitle={title} />
        </div>
      )}
    </div>
  );
}
