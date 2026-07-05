import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Bookmark, Microscope } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useIsMobile } from '@/hooks/useMobile';
import { BookmarksSidebar } from './BookmarksSidebar';

interface NavItem {
  label: string;
  id: string;
  submenu?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'المدخل', id: 'intro' },
  { label: 'هرم الأدلة', id: 'hierarchy' },
  {
    label: 'أنواع الأبحاث',
    id: 'research-types',
    submenu: [
      { label: 'كتابة الورقة العلمية', id: 'writing-paper' },
      { label: 'تقارير الحالة', id: 'case-reports' },
      { label: 'الدراسات المقطعية', id: 'cross-sectional' },
      { label: 'Systematic Reviews', id: 'systematic-reviews' },
    ],
  },
  {
    label: 'الموارد',
    id: 'resources',
    submenu: [
      { label: 'أخلاقيات البحث', id: 'research-ethics' },
      { label: 'إدارة المراجع', id: 'reference-management' },
      { label: 'المجلات والنشر', id: 'journals-publishing' },
    ],
  },
  {
    label: 'نصائح',
    id: 'tips',
    submenu: [
      { label: 'الأخطاء الشائعة', id: 'common-mistakes' },
      { label: 'نصائح عملية', id: 'practical-tips' },
      { label: 'التأليف والنزاهة', id: 'authorship-ethics' },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [bookmarksOpen, setBookmarksOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
      setOpenDropdown(null);
    }
  };

  const handleDropdownToggle = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-md" dir="rtl">
      {/* شريط التقدم التلقائي */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gray-100 dark:bg-slate-800 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-l from-blue-600 to-blue-400 transition-all duration-500 cubic-bezier(0.25, 0.1, 0.25, 1) shadow-[0_0_12px_rgba(59,130,246,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="w-full px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          {/* الشعار على اليمين */}
          <div className="flex items-center gap-2 flex-shrink-0 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 pulse-hover flex-shrink-0">
              <Microscope className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="hidden sm:flex flex-col min-w-0">
              <span className="font-bold text-sm text-gray-900 dark:text-white truncate">المرجع الشامل</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">MedRes</span>
            </div>
          </div>

          {/* القائمة على الديسكتوب - في الوسط */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-0.5 mx-auto flex-1 justify-center">
              {navItems.map((item) => (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="px-2.5 py-2 text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 whitespace-nowrap"
                  >
                    {item.label}
                  </button>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute right-0 mt-0 w-44 bg-white dark:bg-slate-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border border-gray-100 dark:border-slate-700">
                      {item.submenu.map((subitem) => (
                        <button
                          key={subitem.id}
                          onClick={() => handleNavClick(subitem.id)}
                          className="w-full text-right px-4 py-2 text-xs lg:text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {subitem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* الأيقونات على اليسار */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <button
              onClick={() => setBookmarksOpen(true)}
              className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 btn-interactive flex-shrink-0"
              title="المفضلة"
            >
              <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 icon-interactive" />
            </button>
            <div className="icon-interactive">
              <ThemeToggle />
            </div>

            {/* Hamburger Menu على الموبايل */}
            {isMobile && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 btn-interactive flex-shrink-0"
                aria-label="فتح القائمة"
              >
                {isOpen ? (
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 icon-interactive" />
                ) : (
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 icon-interactive" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* القائمة على الموبايل */}
        {isMobile && isOpen && (
          <div className="border-t border-gray-200 dark:border-gray-800 py-2 max-h-[calc(100vh-56px)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => {
                    if (item.submenu) {
                      handleDropdownToggle(item.id);
                    } else {
                      handleNavClick(item.id);
                    }
                  }}
                  className="w-full text-right px-3 sm:px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  {item.submenu && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.id ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Submenu على الموبايل */}
                {item.submenu && openDropdown === item.id && (
                  <div className="bg-gray-50 dark:bg-gray-800/50">
                    {item.submenu.map((subitem) => (
                      <button
                        key={subitem.id}
                        onClick={() => handleNavClick(subitem.id)}
                        className="w-full text-right px-6 py-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {subitem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bookmarks Sidebar */}
      <BookmarksSidebar
        isOpen={bookmarksOpen}
        onClose={() => setBookmarksOpen(false)}
        onSelectBookmark={(id) => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      />
    </nav>
  );
}
