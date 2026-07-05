import React, { useState } from 'react';

interface PyramidLevel {
  id: string;
  title: string;
  description: string;
  color: string;
  hoverColor: string;
  points: string;
  textY: number;
}

const levels: PyramidLevel[] = [
  {
    id: 'systematic-reviews',
    title: 'Systematic Reviews & Meta-analysis',
    description: 'قمة الهرم: أقوى أنواع الأدلة الطبية التي تجمع وتلخص جميع الدراسات السابقة.',
    color: '#1e3a8a',
    hoverColor: '#2563eb',
    points: '250,50 350,50 400,100 200,100',
    textY: 80
  },
  {
    id: 'rct',
    title: 'Randomized Controlled Trials (RCTs)',
    description: 'الدراسات التجريبية العشوائية: المعيار الذهبي لاختبار فعالية العلاجات الجديدة.',
    color: '#1d4ed8',
    hoverColor: '#3b82f6',
    points: '200,100 400,100 450,150 150,150',
    textY: 130
  },
  {
    id: 'cohort',
    title: 'Cohort Studies',
    description: 'دراسات المتابعة: مراقبة مجموعة من الأشخاص لفترة زمنية لمعرفة تأثير عوامل معينة.',
    color: '#2563eb',
    hoverColor: '#60a5fa',
    points: '150,150 450,150 500,200 100,200',
    textY: 180
  },
  {
    id: 'case-control',
    title: 'Case-Control Studies',
    description: 'دراسات الحالات والشواهد: مقارنة الأشخاص المصابين بمرض مع أشخاص غير مصابين.',
    color: '#3b82f6',
    hoverColor: '#93c5fd',
    points: '100,200 500,200 550,250 50,250',
    textY: 230
  },
  {
    id: 'case-reports',
    title: 'Case Reports & Series',
    description: 'تقارير الحالات: وصف تفصيلي لحالات طبية نادرة أو ملاحظات سريرية جديدة.',
    color: '#60a5fa',
    hoverColor: '#bfdbfe',
    points: '50,250 550,250 600,300 0,300',
    textY: 280
  }
];

export function EvidencePyramid() {
  const [hoveredLevel, setHoveredLevel] = useState<PyramidLevel | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<PyramidLevel | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    requestAnimationFrame(() => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });
  };

  const handleGlobalMouseLeave = () => {
    setHoveredLevel(null);
  };

  const handleLevelClick = (levelId: string) => {
    // خريطة المعرفات لضمان التوجيه الصحيح للأقسام الموجودة في الصفحة
    const idMap: Record<string, string> = {
      'systematic-reviews': 'systematic-reviews',
      'rct': 'rct-section',
      'cohort': 'cohort-section',
      'case-control': 'case-control-section',
      'case-reports': 'case-reports'
    };

    const targetId = idMap[levelId] || levelId;
    
    if (window.innerWidth < 1024) {
      const level = levels.find(l => l.id === levelId);
      if (level) {
        setSelectedLevel(selectedLevel?.id === level.id ? null : level);
      }
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePeakClick = () => {
    if (window.innerWidth < 1024) {
      setSelectedLevel(null);
    }
  };

  // على الهواتف، استخدم selectedLevel، وعلى أجهزة الحاسوب استخدم hoveredLevel
  const displayLevel = window.innerWidth < 1024 ? selectedLevel : hoveredLevel;

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto my-8 sm:my-12 bg-white dark:bg-slate-900 p-4 sm:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800 overflow-hidden" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleGlobalMouseLeave}
    >
      <h3 className="text-xl sm:text-2xl font-bold text-[#0F3A7D] dark:text-blue-400 mb-6 sm:mb-8 text-center pointer-events-none">
        هرم الأدلة الطبية التفاعلي
      </h3>
      
      {/* Floating Tooltip for Desktop */}
      {hoveredLevel && window.innerWidth >= 1024 && (
        <div 
          className="fixed z-[999] pointer-events-none bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-900 p-3 rounded-lg shadow-2xl max-w-xs border border-white/20 dark:border-slate-200 transition-opacity duration-200"
          style={{ 
            left: `${mousePos.x + 15}px`, 
            top: `${mousePos.y + 15}px`,
            direction: 'rtl'
          }}
        >
          <p className="font-bold text-sm mb-1">{hoveredLevel.title}</p>
          <p className="text-xs leading-relaxed opacity-90">{hoveredLevel.description}</p>
          <p className="text-[10px] mt-2 text-blue-400 dark:text-blue-600 font-semibold">انقر للانتقال للقسم التفصيلي ←</p>
        </div>
      )}

      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-12">
        {/* SVG Pyramid */}
        <div className="relative w-full lg:w-3/5 aspect-[2/1] z-10">
          <svg
            viewBox="0 0 600 320"
            className="w-full h-full drop-shadow-2xl dark:drop-shadow-[0_10px_15px_rgba(59,130,246,0.3)] overflow-visible"
            style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}
          >
            {/* Pyramid Peak */}
            <path
              d="M300 0 L350 50 L250 50 Z"
              fill={hoveredLevel?.id === 'peak' ? '#172554' : '#1e3a8a'}
              className="transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredLevel({ id: 'peak', title: 'الأدلة المصفاة', description: 'أعلى درجات الموثوقية العلمية.', color: '', hoverColor: '', points: '', textY: 0 })}
              onMouseLeave={() => setHoveredLevel(null)}
              onClick={handlePeakClick}
            />

            {levels.map((level) => (
              <polygon
                key={level.id}
                points={level.points}
                fill={
                  displayLevel?.id === level.id 
                    ? level.hoverColor 
                    : hoveredLevel?.id === level.id 
                    ? level.hoverColor 
                    : level.color
                }
                className="transition-all duration-300 cursor-pointer hover:stroke-white hover:stroke-2 active:stroke-white active:stroke-2"
                onMouseEnter={() => setHoveredLevel(level)}
                onMouseLeave={() => setHoveredLevel(null)}
                onClick={() => handleLevelClick(level.id)}
              />
            ))}

            {/* Labels on the Pyramid - عرض على جميع الأحجام */}
            {levels.map((level) => {
              // تقسيم العنوان إلى أسطر للعرض بشكل أفضل
              const titleParts = level.title.split(' & ');
              const line1 = titleParts[0];
              const line2 = titleParts.length > 1 ? titleParts[1] : '';

              return (
                <g key={`label-${level.id}`} className="pointer-events-none">
                  {/* السطر الأول */}
                  <text
                    x="300"
                    y={level.textY - (line2 ? 8 : 0)}
                    textAnchor="middle"
                    fill="white"
                    className="font-bold pointer-events-none select-none"
                    style={{ 
                      fontSize: '11px',
                      fontWeight: 'bold',
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}
                    paintOrder="stroke"
                    stroke="rgba(0,0,0,0.3)"
                    strokeWidth="0.5"
                  >
                    {line1}
                  </text>
                  
                  {/* السطر الثاني إذا وجد */}
                  {line2 && (
                    <text
                      x="300"
                      y={level.textY + 12}
                      textAnchor="middle"
                      fill="white"
                      className="font-bold pointer-events-none select-none"
                      style={{ 
                        fontSize: '11px',
                        fontWeight: 'bold',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}
                      paintOrder="stroke"
                      stroke="rgba(0,0,0,0.3)"
                      strokeWidth="0.5"
                    >
                      {line2}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Info Panel / Tooltip Area */}
        <div className="w-full lg:w-2/5 min-h-[150px] sm:min-h-[180px] flex items-center">
          <div className={`w-full p-4 sm:p-6 rounded-xl transition-all duration-500 transform ${
            displayLevel 
              ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-700 opacity-100 translate-x-0' 
              : 'bg-gray-50 dark:bg-slate-800 border-2 border-dashed border-gray-200 dark:border-slate-700 opacity-60'
          }`}>
            {displayLevel ? (
              <div className="text-right">
                <h4 className="text-lg sm:text-xl font-bold text-blue-800 dark:text-blue-300 mb-2">
                  {displayLevel.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed mb-3 sm:mb-4">
                  {displayLevel.description}
                </p>
                <button 
                  onClick={() => handleLevelClick(displayLevel.id)}
                  className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 justify-end w-full lg:w-auto"
                >
                  اقرأ المزيد عن هذا القسم ←
                </button>
              </div>
            ) : (
              <div className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">
                {window.innerWidth < 1024 ? 'انقر على طبقات الهرم لاكتشاف التفاصيل' : 'مرر الماوس فوق طبقات الهرم لاكتشاف التفاصيل'}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Info Card - Shows selected level */}
      {selectedLevel && window.innerWidth < 1024 && (
        <div className="lg:hidden mt-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700 shadow-md">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 text-right">
              <h4 className="font-bold text-blue-700 dark:text-blue-400 text-sm">{selectedLevel.title}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">{selectedLevel.description}</p>
            </div>
            <button
              onClick={() => setSelectedLevel(null)}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex-shrink-0 text-lg leading-none"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
