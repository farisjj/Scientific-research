import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  keywords: string[];
  section: string;
}

const searchData: SearchResult[] = [
  { id: 'intro', title: 'مدخل إلى البحث العلمي', keywords: ['بحث', 'علمي', 'طب', 'medical', 'research', 'question', 'methodology', 'scientific', 'طرح سؤال', 'منهجية', 'PICO', 'بيكو'], section: 'intro' },
  { id: 'cv-impact', title: 'تأثير البحث على السيرة الذاتية', keywords: ['سيرة ذاتية', 'cv', 'usmle', 'plab', 'eras', 'match', 'residency', 'التميز', 'الأكاديمي', 'المهني', 'النقاط'], section: 'cv-impact' },
  { id: 'hierarchy', title: 'هرم الأدلة الطبية', keywords: ['هرم', 'أدلة', 'evidence', 'pyramid', 'ebm', 'أقوى دليل', 'levels of evidence', 'study design', 'الدراسات', 'الأبحاث'], section: 'hierarchy' },
  { id: 'time-management', title: 'التوفيق بين الدراسة والبحث', keywords: ['توفيق', 'دراسة', 'وقت', 'time management', 'balance', 'schedule', 'planning', 'إدارة الوقت', 'الجدول الزمني'], section: 'time-management' },
  { id: 'writing-paper', title: 'كتابة الورقة العلمية', keywords: ['كتابة', 'ورقة', 'writing', 'paper', 'introduction', 'methods', 'manuscript', 'abstract', 'المقالة', 'الكتابة العلمية', 'كتابة الـ Paper', 'PICO', 'بيكو'], section: 'writing-paper' },
  { id: 'case-reports', title: 'تقارير الحالة', keywords: ['حالة', 'case report', 'case series', 'تقرير', 'clinical case', 'patient', 'الحالات الطبية', 'الحالات السريرية', 'CARE Guidelines'], section: 'case-reports' },
  { id: 'cross-sectional', title: 'الدراسات المقطعية', keywords: ['دراسات', 'مقطعية', 'cross-sectional', 'استبيان', 'survey', 'questionnaire', 'observational', 'الاستبيانات'], section: 'cross-sectional' },
  { id: 'systematic-reviews', title: 'المراجعات المنهجية', keywords: ['مراجعة', 'منهجية', 'systematic review', 'meta-analysis', 'PRISMA', 'ميتا اناليسيس', 'سيستماتيك ريفيو', 'التحليل التلوي', 'literature review'], section: 'systematic-reviews' },
  { id: 'journals-publishing', title: 'المجلات والنشر', keywords: ['مجلة', 'نشر', 'journal', 'publishing', 'pubmed', 'scopus', 'impact factor', 'peer review', 'المجلات الطبية', 'النشر العلمي', 'APC', 'Open Access'], section: 'journals-publishing' },
  { id: 'research-ethics', title: 'أخلاقيات البحث', keywords: ['أخلاقيات', 'ethics', 'irb', 'consent', 'institutional review board', 'ethical approval', 'الموافقة الأخلاقية', 'Informed Consent'], section: 'research-ethics' },
  { id: 'reference-management', title: 'إدارة المراجع', keywords: ['مراجع', 'references', 'mendeley', 'zotero', 'citations', 'bibliography', 'الاستشهادات', 'EndNote'], section: 'reference-management' },
  { id: 'common-mistakes', title: 'الأخطاء الشائعة', keywords: ['أخطاء', 'mistakes', 'common errors', 'bias', 'statistical errors', 'design flaws', 'الأخطاء الإحصائية'], section: 'common-mistakes' },
  { id: 'practical-tips', title: 'نصائح عملية', keywords: ['نصائح', 'tips', 'practical', 'advice', 'supervisor', 'topic selection', 'rejection', 'المشرف', 'الرفض'], section: 'practical-tips' },
  { id: 'authorship-ethics', title: 'التأليف والنزاهة', keywords: ['تأليف', 'authorship', 'integrity', 'نزاهة', 'plagiarism', 'conflict of interest', 'الانتحال', 'تضارب المصالح'], section: 'authorship-ethics' },
  { id: 'authorship-roles', title: 'أدوار التأليف', keywords: ['أدوار', 'roles', 'author', 'contributor', 'first author', 'corresponding author', 'Co-first', 'المؤلف الأول', 'المشرف'], section: 'authorship-roles' },
  { id: 'journal-classifications', title: 'تصنيفات المجلات', keywords: ['تصنيفات', 'classifications', 'impact factor', 'Q1', 'Q2', 'Q3', 'Q4', 'SJR', 'ranking', 'التصنيف الربعي'], section: 'journal-classifications' },
  { id: 'predatory-journals', title: 'المجلات المفترسة', keywords: ['مفترسة', 'predatory', 'journals', 'scam', 'Beall\'s list', 'نصابة', 'وهمية', 'نشر علمي'], section: 'predatory-journals' },
  { id: 'funding-strategies', title: 'استراتيجيات التمويل', keywords: ['تمويل', 'funding', 'grant', 'scholarship', 'Principal Investigator', 'دعم', 'ميزانية', 'عمادة البحث العلمي'], section: 'funding-strategies' },
  { id: 'accessing-paid-research', title: 'الحصول على الأبحاث', keywords: ['أبحاث', 'accessing', 'paid', 'research', 'Sci-Hub', 'ResearchGate', 'Unpaywall', 'الـ Papers المقفولة', 'فتح الأبحاث'], section: 'accessing-paid-research' },
  { id: 'portfolio-strategies', title: 'بناء Portfolio البحثي', keywords: ['portfolio', 'بناء', 'research profile', 'هوية بحثية', 'بصمة رقمية'], section: 'portfolio-strategies' },
  { id: 'research-specialization', title: 'General vs Sub-specialty', keywords: ['تخصص', 'specialization', 'general', 'interest', 'sub-specialty', 'الجراحة', 'الباطني'], section: 'research-specialization' },
  { id: 'digital-identity', title: 'الهوية البحثية الرقمية', keywords: ['هوية', 'digital', 'orcid', 'google scholar', 'researchgate', 'citations', 'الـ Citations'], section: 'digital-identity' },
  { id: 'statistical-tools', title: 'برامج التحليل الإحصائي', keywords: ['إحصائي', 'statistical', 'spss', 'r', 'python', 'stata', 'revman', 'تحليل بيانات', 'برامج الإحصاء'], section: 'statistical-tools' },
  { id: 'writing-strategy', title: 'استراتيجية الكتابة', keywords: ['كتابة', 'strategy', 'writing', 'structure', 'استراتيجية الكتابة الذكية', 'تسلسل الكتابة'], section: 'writing-strategy' },
  { id: 'sample-size', title: 'حاسبة حجم العينة', keywords: ['حجم العينة', 'حاسبة', 'عينة', 'sample size', 'calculator', 'cochran', 'margin of error', 'FPC', 'معادلة كوشران'], section: 'sample-size-calc' },
  { id: 'biostatistics-tree', title: 'الخريطة الإحصائية التفاعلية', keywords: ['خريطة', 'إحصائية', 'تفاعلية', 'statistical map', 't-test', 'chi-square', 'anova', 'correlation', 'الاختبار الإحصائي'], section: 'biostatistics-tree' },
];

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
    setResults(filtered);
  }, [searchQuery]);

  const handleSearch = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <div className="relative">
      {/* Search Icon/Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-[100] flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full bg-[#0F3A7D] hover:bg-[#0a2a5a] text-white shadow-[0_10px_25px_-5px_rgba(15,58,125,0.4)] transition-all duration-300 dark:bg-blue-600 dark:hover:bg-blue-700 scale-100 sm:scale-110 btn-interactive"
        title="البحث عن موضوع"
      >
        {isOpen ? (
          <X size={20} className="sm:w-6 sm:h-6" />
        ) : (
          <>
            <Search size={20} className="sm:w-6 sm:h-6" />
            <span className="font-bold text-xs sm:text-sm hidden sm:inline">بحث</span>
          </>
        )}
      </button>

      {/* Search Panel */}
      {isOpen && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] w-[95%] sm:w-[90%] max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-4 sm:p-6 border border-gray-200 dark:border-slate-700 max-h-[80vh] overflow-y-auto">
          {/* Search Input */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="ابحث عن موضوع... (مثل: Case Report, SPSS)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-9 sm:pr-10 border-2 border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-[#0F3A7D] dark:focus:border-blue-400 bg-white dark:bg-slate-800 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              autoFocus
            />
            <Search size={18} className="absolute right-2.5 sm:right-3 top-2.5 sm:top-3.5 text-gray-400 flex-shrink-0" />
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              <div className="space-y-2">
                {results.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleSearch(result.section)}
                    className="w-full text-right p-2.5 sm:p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-200 border-r-4 border-[#0F3A7D] dark:border-blue-400 btn-interactive"
                  >
                    <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      {result.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {result.keywords.slice(0, 3).join(' • ')}
                    </p>
                  </button>
                ))}
              </div>
            ) : searchQuery.trim() !== '' ? (
              <div className="text-center py-4 sm:py-6">
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                  لم يتم العثور على نتائج لـ {searchQuery}
                </p>
              </div>
            ) : (
              <div className="text-center py-3 sm:py-4">
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  ابدأ الكتابة للبحث عن الموضوعات
                </p>
              </div>
            )}

            {/* Quick Links */}
            {!searchQuery && results.length === 0 && (
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-slate-700">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  أقسام شهيرة:
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {['Systematic Review', 'حاسبة حجم العينة', 'PICO', 'كتابة الـ Paper', 'المجلات المفترسة', 'Case Report'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-2.5 sm:px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-[#0F3A7D] dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200 btn-interactive"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[105] bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
