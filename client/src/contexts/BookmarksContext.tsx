import React, { createContext, useContext, useState, useEffect } from 'react';

interface Bookmark {
  id: string;
  title: string;
  timestamp: number;
}

interface BookmarksContextType {
  bookmarks: Bookmark[];
  addBookmark: (id: string, title: string) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  clearAllBookmarks: () => void;
}

const BookmarksContext = createContext<BookmarksContextType | undefined>(undefined);

export function BookmarksProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  // تحميل المفضلة من Local Storage عند بدء التطبيق
  useEffect(() => {
    const saved = localStorage.getItem('bookmarks');
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  // حفظ المفضلة في Local Storage عند التغيير
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (id: string, title: string) => {
    if (!bookmarks.find(b => b.id === id)) {
      setBookmarks([...bookmarks, { id, title, timestamp: Date.now() }]);
    }
  };

  const removeBookmark = (id: string) => {
    setBookmarks(bookmarks.filter(b => b.id !== id));
  };

  const isBookmarked = (id: string) => {
    return bookmarks.some(b => b.id === id);
  };

  const clearAllBookmarks = () => {
    setBookmarks([]);
  };

  return (
    <BookmarksContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked, clearAllBookmarks }}>
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error('useBookmarks must be used within BookmarksProvider');
  }
  return context;
}
