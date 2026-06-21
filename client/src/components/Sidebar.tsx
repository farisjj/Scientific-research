import { useEffect, useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface SidebarProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  logo?: React.ReactNode;
}

export function Sidebar({ sections, activeSection, onSectionChange, logo }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            onSectionChange(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, onSectionChange]);

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onSectionChange(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-[#0F3A7D] text-white rounded-lg shadow-lg hover:bg-[#082F5E] transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar - Fixed Position */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-[#0F3A7D] dark:from-slate-900 to-[#082F5E] dark:to-slate-950 text-white shadow-2xl transition-transform duration-300 z-40 flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-white/10 flex-shrink-0">
          {logo && (
            <div className="mb-4">
              {logo}
            </div>
          )}
          <h1 className="text-xl font-bold font-poppins">المرجع الشامل</h1>
          <p className="text-sm text-blue-200 mt-1">للبحث العلمي الطبي</p>
        </div>

        {/* Navigation - Scrollable */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`w-full text-right px-4 py-3 rounded-lg transition-all duration-200 font-medium text-sm flex items-center justify-between group ${
                activeSection === section.id
                  ? 'bg-green-400 dark:bg-blue-600 text-[#0F3A7D] dark:text-white shadow-lg scale-105'
                  : 'text-white hover:bg-white/10 dark:hover:bg-slate-800'
              }`}
            >
              <span>{section.title}</span>
              <ChevronRight
                size={18}
                className={`transition-transform ${
                  activeSection === section.id ? 'translate-x-1' : ''
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Footer - Fixed at Bottom */}
        <div className="p-4 border-t border-white/10 bg-[#082F5E]/50 text-xs text-blue-200 text-center flex-shrink-0">
          <p className="font-semibold">💡 نصيحة ذهبية</p>
          <p className="mt-1">استخدم القائمة للتنقل السريع بين الأقسام</p>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Spacer for Tablet and Desktop */}
      <div className="hidden md:block md:w-64 flex-shrink-0"></div>


    </>
  );
}
