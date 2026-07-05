import { Bookmark } from 'lucide-react';
import { useBookmarks } from '@/contexts/BookmarksContext';

interface BookmarkButtonProps {
  sectionId: string;
  sectionTitle: string;
}

export function BookmarkButton({ sectionId, sectionTitle }: BookmarkButtonProps) {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const bookmarked = isBookmarked(sectionId);

  const handleClick = () => {
    if (bookmarked) {
      removeBookmark(sectionId);
    } else {
      addBookmark(sectionId, sectionTitle);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm border h-[40px] min-w-[80px] btn-interactive ${
        bookmarked
          ? 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-600 shadow-sm'
          : 'bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700'
      }`}
      title={bookmarked ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}
    >
      <Bookmark
        size={16}
        className={`icon-interactive ${bookmarked ? 'fill-current' : ''}`}
      />
      <span className="font-medium">
        {bookmarked ? 'محفوظ' : 'حفظ'}
      </span>
    </button>
  );
}
