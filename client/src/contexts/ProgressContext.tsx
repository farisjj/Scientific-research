import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ProgressContextType {
  completedSections: Set<string>;
  totalSections: number;
  progressPercentage: number;
  markSectionComplete: (sectionId: string) => void;
  isSectionComplete: (sectionId: string) => boolean;
  resetProgress: () => void;
  setTotalSections: (total: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'medicalGuideProgress';

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [totalSections, setTotalSections] = useState(0);

  // تحميل البيانات من localStorage عند بدء التطبيق
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setCompletedSections(new Set(parsed));
      } catch (error) {
        console.error('Error loading progress from localStorage:', error);
      }
    }
  }, []);

  // حفظ البيانات في localStorage عند تغيير completedSections
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedSections)));
  }, [completedSections]);

  const markSectionComplete = (sectionId: string) => {
    setCompletedSections(prev => {
      const newSet = new Set(prev);
      newSet.add(sectionId);
      return newSet;
    });
  };

  const isSectionComplete = (sectionId: string) => {
    return completedSections.has(sectionId);
  };

  const resetProgress = () => {
    setCompletedSections(new Set());
    localStorage.removeItem(STORAGE_KEY);
  };

  const progressPercentage = totalSections > 0 
    ? Math.round((completedSections.size / totalSections) * 100)
    : 0;

  return (
    <ProgressContext.Provider
      value={{
        completedSections,
        totalSections,
        progressPercentage,
        markSectionComplete,
        isSectionComplete,
        resetProgress,
        setTotalSections,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
