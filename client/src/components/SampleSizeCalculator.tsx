import { useState, useEffect } from 'react';
import { Calculator, Info, AlertCircle, RefreshCw } from 'lucide-react';

export function SampleSizeCalculator() {
  const [population, setPopulation] = useState<string>('20000');
  const [confidence, setConfidence] = useState<number>(95);
  const [margin, setMargin] = useState<number>(5);
  const [prevalence, setPrevalence] = useState<string>('50');
  const [responseRate, setResponseRate] = useState<number>(80);
  const [finalSampleSize, setFinalSampleSize] = useState<number>(0);
  const [initialSampleSize, setInitialSampleSize] = useState<number>(0);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const tooltips: Record<string, string> = {
    population: "إجمالي عدد الأشخاص في الفئة المستهدفة بدراستك (مثلاً: إجمالي عدد مرضى السكري في مستشفى معين). إذا كان المجتمع كبيراً جداً، اترك الرقم كما هو 20000.",
    prevalence: "نسبة وجود المرض أو الظاهرة في المجتمع بناءً على دراسات سابقة. إذا لم تكن تعرفها، اتركها 50% لأنها تضمن لك أكبر وأأمن حجم للعينة.",
    margin: "مقدار التفاوت المقبول بين نتائج عينتك والواقع. 5% هو المعيار المعتمد في الأبحاث الطبية السريرية.",
    confidence: "مدى يقينك بأن النتائج تمثل المجتمع الحقيقي. 95% هو الخيار القياسي والأكثر استخداماً في الأوراق العلمية.",
    response: "نسبة الأشخاص الذين تتوقع أن يكملوا الاستبيان. في الأبحاث الطبية (خاصة الاستبيانات الإلكترونية)، غالباً ما يكون بين 60-80%."
  };

  const calculate = () => {
    const N = parseInt(population) || 0;
    
    // If population is 0, results are 0
    if (N <= 0) {
      setInitialSampleSize(0);
      setFinalSampleSize(0);
      return;
    }

    // 1. Get Z-score
    const zScores: { [key: number]: number } = { 90: 1.645, 95: 1.96, 99: 2.576 };
    const z = zScores[confidence];
    
    // 2. Convert percentages to decimals
    const pVal = parseFloat(prevalence) || 0;
    const p = pVal / 100;
    const e = margin / 100;
    const rr = responseRate / 100;

    // If prevalence is 0 or 100, the standard formula might result in 0 sample size.
    // In research, we usually use a very small value if p=0 is expected.
    // However, we will allow 0 to show 0 for user flexibility.
    if (p <= 0 || p >= 1) {
      if (p === 0 || p === 1) {
         // Technically sample size for p=0 or p=1 is 1 (or very small), 
         // but we'll show 0 if user explicitly puts 0 to keep it intuitive.
         setInitialSampleSize(0);
         setFinalSampleSize(0);
         return;
      }
    }

    // Avoid division by zero for margin or response rate
    if (e <= 0 || rr <= 0) {
      setInitialSampleSize(0);
      setFinalSampleSize(0);
      return;
    }

    // 3. Cochran's Formula for Infinite Population
    const n0 = (Math.pow(z, 2) * p * (1 - p)) / Math.pow(e, 2);
    
    // 4. Finite Population Correction (FPC)
    const n = n0 / (1 + (n0 - 1) / N);
    
    const initial = Math.ceil(n);
    setInitialSampleSize(initial);

    // 5. Adjust for Expected Response Rate
    const final = Math.ceil(initial / rr);
    setFinalSampleSize(final);
  };

  useEffect(() => {
    calculate();
  }, [population, confidence, margin, prevalence, responseRate]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.tooltip-trigger')) {
        setActiveTooltip(null);
      }
    };

    if (activeTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeTooltip]);

  const toggleTooltip = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveTooltip(activeTooltip === id ? null : id);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-6 md:p-8 my-10 shadow-2xl relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-1 bg-blue-600 h-full"></div>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-600/10 text-blue-600 rounded-xl">
          <Calculator className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">حاسبة حجم العينة المتقدمة</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">نتائج دقيقة بناءً على معادلات Cochran و FPC</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Population Size */}
            <div className="space-y-2 relative">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                حجم المجتمع (N)
                <div className="relative inline-block tooltip-trigger">
                  <Info 
                    className="w-4 h-4 text-blue-500 cursor-pointer p-0.5 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors" 
                    onClick={(e) => toggleTooltip('population', e)}
                  />
                  {activeTooltip === 'population' && (
                    <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] leading-relaxed rounded-lg shadow-xl z-[100] border border-white/10 dark:border-slate-200 animate-in fade-in slide-in-from-bottom-1">
                      {tooltips.population}
                      <div className="absolute top-full right-4 border-8 border-transparent border-t-slate-900 dark:border-t-white"></div>
                    </div>
                  )}
                </div>
              </label>
              <input
                type="number"
                value={population}
                onChange={(e) => setPopulation(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all font-mono"
              />
              <p className="text-[10px] text-gray-400">العدد التقريبي للفئة المستهدفة</p>
            </div>

            {/* Expected Prevalence */}
            <div className="space-y-2 relative">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                الانتشار المتوقع (p)
                <div className="relative inline-block tooltip-trigger">
                  <Info 
                    className="w-4 h-4 text-blue-500 cursor-pointer p-0.5 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors" 
                    onClick={(e) => toggleTooltip('prevalence', e)}
                  />
                  {activeTooltip === 'prevalence' && (
                    <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] leading-relaxed rounded-lg shadow-xl z-[100] border border-white/10 dark:border-slate-200 animate-in fade-in slide-in-from-bottom-1">
                      {tooltips.prevalence}
                      <div className="absolute top-full right-4 border-8 border-transparent border-t-slate-900 dark:border-t-white"></div>
                    </div>
                  )}
                </div>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={prevalence}
                  onChange={(e) => setPrevalence(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all font-mono"
                />
                <span className="absolute left-4 top-2.5 text-gray-400">%</span>
              </div>
              <p className="text-[10px] text-gray-400">استخدم 50% إذا لم تكن متأكداً (أكبر عينة)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Confidence Level */}
            <div className="space-y-3 relative">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                مستوى الثقة (Confidence)
                  <div className="relative inline-block tooltip-trigger">
                    <Info 
                      className="w-4 h-4 text-blue-500 cursor-pointer p-0.5 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors" 
                      onClick={(e) => toggleTooltip('confidence', e)}
                    />
                    {activeTooltip === 'confidence' && (
                      <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] leading-relaxed rounded-lg shadow-xl z-[100] border border-white/10 dark:border-slate-200 animate-in fade-in slide-in-from-bottom-1">
                        {tooltips.confidence}
                        <div className="absolute top-full right-4 border-8 border-transparent border-t-slate-900 dark:border-t-white"></div>
                      </div>
                    )}
                  </div>
              </label>
              <div className="flex p-1 bg-gray-100 dark:bg-slate-800 rounded-xl">
                {[90, 95, 99].map((val) => (
                  <button
                    key={val}
                    onClick={() => setConfidence(val)}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                      confidence === val
                        ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    {val}%
                  </button>
                ))}
              </div>
            </div>

            {/* Margin of Error */}
            <div className="space-y-3 relative">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex justify-between items-center">
                <span className="flex items-center gap-2">
                  هامش الخطأ (e)
                  <div className="relative inline-block tooltip-trigger">
                    <Info 
                      className="w-4 h-4 text-blue-500 cursor-pointer p-0.5 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors" 
                      onClick={(e) => toggleTooltip('margin', e)}
                    />
                    {activeTooltip === 'margin' && (
                      <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] leading-relaxed rounded-lg shadow-xl z-[100] border border-white/10 dark:border-slate-200 animate-in fade-in slide-in-from-bottom-1">
                        {tooltips.margin}
                        <div className="absolute top-full right-4 border-8 border-transparent border-t-slate-900 dark:border-t-white"></div>
                      </div>
                    )}
                  </div>
                </span>
                <span className="text-blue-600 font-mono">{margin}%</span>
              </label>
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={margin}
                onChange={(e) => setMargin(parseInt(e.target.value))}
                className="w-full h-1.5 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
          </div>

          {/* Expected Response Rate */}
          <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/20 relative">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-bold text-blue-900 dark:text-blue-300 flex items-center gap-2">
                معدل الاستجابة المتوقع (Response Rate)
                <div className="relative inline-block tooltip-trigger">
                  <Info 
                    className="w-4 h-4 text-blue-500 cursor-pointer p-0.5 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors" 
                    onClick={(e) => toggleTooltip('response', e)}
                  />
                  {activeTooltip === 'response' && (
                    <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] leading-relaxed rounded-lg shadow-xl z-[100] border border-white/10 dark:border-slate-200 animate-in fade-in slide-in-from-bottom-1">
                      {tooltips.response}
                      <div className="absolute top-full right-4 border-8 border-transparent border-t-slate-900 dark:border-t-white"></div>
                    </div>
                  )}
                </div>
              </label>
              <span className="text-blue-600 font-mono font-bold">{responseRate}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={responseRate}
              onChange={(e) => setResponseRate(parseInt(e.target.value))}
              className="w-full h-1.5 bg-blue-200 dark:bg-blue-900/40 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <p className="text-[11px] text-blue-700/70 dark:text-blue-400/70 mt-2">
              * في الأبحاث الإلكترونية بالأردن، غالباً ما يكون معدل الاستجابة بين 60-80%.
            </p>
          </div>
        </div>

        {/* Results Column */}
        <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col items-center justify-center text-center shadow-xl shadow-blue-600/20 relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
            <RefreshCw className="w-20 h-20" />
          </div>
          
          <p className="text-blue-100 text-sm font-medium mb-1">الحد الأدنى للعينة المطلوبة</p>
          <div className="text-7xl font-black mb-2 tracking-tighter">
            {initialSampleSize}
          </div>
          <div className="w-12 h-1 bg-blue-400/50 rounded-full mb-6"></div>
          
          <p className="text-blue-100 text-xs font-medium mb-1">العينة المقترحة (لتعويض الفاقد)</p>
          <div className="text-3xl font-bold mb-6">
            {finalSampleSize}
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 w-full">
            <div className="flex gap-2 text-right">
              <AlertCircle className="w-4 h-4 text-blue-200 flex-shrink-0 mt-0.5" />
              <p className="text-[10px] text-blue-50 leading-relaxed">
                هذه النتيجة تعني أنك بحاجة لجمع {finalSampleSize} استجابة لضمان الحصول على {initialSampleSize} استجابة صحيحة بعد استبعاد غير المكتملين.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex items-start gap-3 p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-100 dark:border-slate-800">
        <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
        <div className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
          <strong>معادلة Cochran:</strong> تستخدم هذه الحاسبة المعادلة المعيارية للبحث الطبي. إذا كان حجم مجتمعك صغيراً (أقل من 50,000)، يتم تطبيق Finite Population Correction تلقائياً لتقليل العينة المطلوبة دون المساس بالدقة العلمية. هذا مفيد جداً في أبحاثنا المحلية بالأردن.
        </div>
      </div>
    </div>
  );
}
