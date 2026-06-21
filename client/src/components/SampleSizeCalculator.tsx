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
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                حجم المجتمع (N)
                <Info className="w-3.5 h-3.5 text-blue-500 cursor-help" />
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
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                الانتشار المتوقع (p)
                <Info className="w-3.5 h-3.5 text-blue-500 cursor-help" />
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
            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">مستوى الثقة (Confidence)</label>
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
            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex justify-between">
                <span>هامش الخطأ (e)</span>
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
          <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/20">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-bold text-blue-900 dark:text-blue-300">معدل الاستجابة المتوقع (Response Rate)</label>
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
