import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { SearchBox } from './SearchBox';

interface TopNavigationProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  logo?: React.ReactNode;
}

export function TopNavigation({ sections, activeSection, onSectionChange, logo }: TopNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            onSectionChange(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, onSectionChange]);

  // Check scroll position for arrow visibility
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const timer = setTimeout(checkScroll, 100);
    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScroll);
    };
  }, [sections]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsOpen(false);
      onSectionChange(sectionId);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <header
        className={`w-full bg-white dark:bg-slate-900 z-50 ${
          isSticky
            ? 'fixed top-0 left-0 right-0 shadow-lg border-b border-gray-200 dark:border-slate-800'
            : 'relative shadow-md'
        }`}
      >
        <div className="max-w-full px-4 py-4 flex items-center justify-between gap-2">
          {/* Logo Section */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {logo && <div className="w-10 h-10">{logo}</div>}
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-[#0F3A7D] dark:text-blue-400 font-poppins">
                المرجع الشامل
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">للبحث العلمي الطبي</p>
            </div>
          </div>

          {/* Search Box */}
          <div className="hidden lg:block flex-shrink-0 max-w-xs">
            <SearchBox sections={sections} onSectionSelect={onSectionChange} />
          </div>

          {/* Desktop Navigation with Horizontal Scroll - Always visible */}
          <div className="hidden sm:flex items-center gap-1 flex-1 justify-center min-w-0">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
                canScrollLeft
                  ? 'hover:bg-gray-100 text-[#0F3A7D] cursor-pointer'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
              disabled={!canScrollLeft}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex-1 overflow-x-auto scrollbar-hide"
            >
              <nav className="flex gap-1 flex-nowrap pb-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                      activeSection === section.id
                        ? 'bg-[#0F3A7D] dark:bg-blue-600 text-white shadow-md'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
                canScrollRight
                  ? 'hover:bg-gray-100 text-[#0F3A7D] cursor-pointer'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
              disabled={!canScrollRight}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <nav className="flex flex-col gap-1 p-4 max-h-96 overflow-y-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`w-full text-right px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-[#0F3A7D] text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Spacer for sticky header */}
      {isSticky && <div className="h-24"></div>}

      {/* CSS for hiding scrollbar */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
