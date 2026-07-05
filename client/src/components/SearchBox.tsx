import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  content: string;
}

interface SearchBoxProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
  onSectionSelect: (sectionId: string) => void;
}

export function SearchBox({ sections, onSectionSelect }: SearchBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Content mapping for search - Arabic and English keywords
  const contentMap: Record<string, string[]> = {
    'intro': ['البحث العلمي', 'طرح سؤال', 'منهجية', 'طب', 'اكتشاف', 'medical research', 'research', 'question', 'methodology', 'scientific', 'طرح سؤال', 'منهجية', 'PICO', 'بيكو'],
    'cv-impact': ['السيرة الذاتية', 'CV', 'التميز', 'الأكاديمي', 'المهني', 'النقاط', 'curriculum vitae', 'cv', 'academic', 'professional', 'impact', 'usmle', 'plab', 'eras', 'match', 'residency'],
    'hierarchy': ['هرم الأدلة', 'الدراسات', 'الأبحاث', 'الأدلة الطبية', 'الأدلة العلمية', 'evidence hierarchy', 'evidence', 'levels of evidence', 'study design', 'أقوى دليل', 'pyramid', 'ebm'],
    'time-management': ['التوفيق', 'الدراسة', 'البحث', 'إدارة الوقت', 'الجدول الزمني', 'time management', 'study', 'balance', 'schedule', 'planning'],
    'writing-paper': ['كتابة', 'الورقة العلمية', 'البحث', 'المقالة', 'الكتابة العلمية', 'writing', 'paper', 'manuscript', 'abstract', 'introduction', 'methods', 'كتابة الـ Paper', 'PICO', 'بيكو'],
    'case-reports': ['تقارير الحالة', 'الحالات الطبية', 'الحالات السريرية', 'التقارير', 'case reports', 'case report', 'clinical case', 'patient', 'case series', 'CARE Guidelines'],
    'cross-sectional': ['الدراسات المقطعية', 'المقطعية', 'الاستبيانات', 'الدراسات', 'cross-sectional', 'survey', 'questionnaire', 'observational'],
    'systematic-reviews': ['المراجعات المنهجية', 'المراجعة', 'التحليل التلوي', 'Meta-analysis', 'systematic review', 'meta-analysis', 'literature review', 'review', 'PRISMA', 'ميتا اناليسيس', 'سيستماتيك ريفيو'],
    'journals-publishing': ['المجلات', 'النشر', 'المجلات الطبية', 'النشر العلمي', 'المجلات العلمية', 'journal', 'publishing', 'publication', 'impact factor', 'peer review', 'pubmed', 'scopus', 'APC', 'Open Access'],
    'research-ethics': ['أخلاقيات البحث', 'IRB', 'الموافقة الأخلاقية', 'الأخلاقيات', 'البحث الأخلاقي', 'research ethics', 'irb', 'institutional review board', 'ethical approval', 'consent', 'Informed Consent'],
    'reference-management': ['إدارة المراجع', 'Mendeley', 'Zotero', 'المراجع', 'الاستشهادات', 'reference management', 'mendeley', 'zotero', 'citations', 'bibliography', 'EndNote'],
    'common-mistakes': ['الأخطاء الشائعة', 'الأخطاء', 'الأخطاء الإحصائية', 'الأخطاء التصميمية', 'common mistakes', 'errors', 'statistical errors', 'design flaws', 'bias'],
    'practical-tips': ['نصائح عملية', 'نصائح', 'المشرف', 'الموضوع', 'الرفض', 'practical tips', 'tips', 'supervisor', 'topic selection', 'rejection'],
    'authorship-ethics': ['التأليف والنزاهة', 'التأليف', 'الانتحال', 'تضارب المصالح', 'النزاهة', 'authorship', 'plagiarism', 'conflict of interest', 'integrity', 'author'],
    'sample-size': ['حجم العينة', 'حاسبة', 'عينة', 'sample size', 'calculator', 'cochran', 'margin of error', 'FPC', 'معادلة كوشران'],
    'biostatistics-tree': ['خريطة', 'إحصائية', 'تفاعلية', 'statistical map', 't-test', 'chi-square', 'anova', 'correlation', 'الاختبار الإحصائي'],
  };

  // Handle search - supports both Arabic and English
  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase().trim();
    const foundResults: SearchResult[] = [];

    sections.forEach((section) => {
      const keywords = contentMap[section.id] || [];
      const sectionTitle = section.title.toLowerCase();

      // Check if section title matches
      if (sectionTitle.includes(lowerQuery)) {
        if (!foundResults.find((r) => r.id === section.id)) {
          foundResults.push({
            id: section.id,
            title: section.title,
            content: 'القسم الرئيسي',
          });
        }
      } else {
        // Check if any keyword matches (exact or partial)
        keywords.forEach((keyword) => {
          const keywordLower = keyword.toLowerCase();
          if (
            keywordLower.includes(lowerQuery) ||
            lowerQuery.includes(keywordLower) ||
            keywordLower.startsWith(lowerQuery)
          ) {
            if (!foundResults.find((r) => r.id === section.id)) {
              foundResults.push({
                id: section.id,
                title: section.title,
                content: `يحتوي على: ${keyword}`,
              });
            }
          }
        });
      }
    });

    setResults(foundResults);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle result selection
  const handleSelectResult = (sectionId: string) => {
    onSectionSelect(sectionId);
    setIsOpen(false);
    setSearchQuery('');
    setResults([]);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-xs">
      {/* Search Input */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="ابحث عن موضوع..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="w-full px-4 py-2 pr-10 pl-4 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:border-[#0F3A7D] dark:focus:border-blue-500 focus:ring-2 focus:ring-[#0F3A7D]/20 dark:focus:ring-blue-500/20 text-sm"
        />
        <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setResults([]);
              inputRef.current?.focus();
            }}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (searchQuery.trim().length > 0 || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleSelectResult(result.id)}
                  className="w-full text-right px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                >
                  <div className="font-semibold text-[#0F3A7D] dark:text-blue-400 text-sm">{result.title}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{result.content}</div>
                </button>
              ))}
            </div>
          ) : searchQuery.trim().length > 0 ? (
            <div className="px-4 py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
              لم يتم العثور على نتائج لـ {searchQuery}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
