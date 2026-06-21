import { X, Trash2, Bookmark } from 'lucide-react';
import { useBookmarks } from '@/contexts/BookmarksContext';

interface BookmarksSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBookmark: (id: string) => void;
}

export function BookmarksSidebar({ isOpen, onClose, onSelectBookmark }: BookmarksSidebarProps) {
  const { bookmarks, removeBookmark, clearAllBookmarks } = useBookmarks();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-slate-900 shadow-lg z-50 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Bookmark size={20} className="text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              المفضلة ({bookmarks.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {bookmarks.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Bookmark size={48} className="text-gray-300 dark:text-gray-700 mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                لم تقم بحفظ أي أقسام بعد
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                انقر على زر حفظ بجانب أي قسم لإضافته هنا
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {bookmarks.map((bookmark) => (
                <div
                  key={bookmark.id}
                  className="flex items-start justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
                >
                  <button
                    onClick={() => {
                      onSelectBookmark(bookmark.id);
                      onClose();
                    }}
                    className="flex-1 text-right"
                  >
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {bookmark.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {new Date(bookmark.timestamp).toLocaleDateString('ar-SA')}
                    </p>
                  </button>
                  <button
                    onClick={() => removeBookmark(bookmark.id)}
                    className="p-1 opacity-0 group-hover:opacity-100 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-all"
                    title="حذف من المفضلة"
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {bookmarks.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-800 p-4">
            <button
              onClick={clearAllBookmarks}
              className="w-full py-2 px-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors text-sm font-medium"
            >
              حذف جميع المفضلة
            </button>
          </div>
        )}
      </div>
    </>
  );
}
