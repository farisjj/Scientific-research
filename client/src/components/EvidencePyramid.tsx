import React, { useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/useMobile';

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
  const isMobile = useIsMobile();
  const [hoveredLevel, setHoveredLevel] = useState<PyramidLevel | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<PyramidLevel | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // تحديث موضع الماوس للتول تيب العائم
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleGlobalMouseLeave = () => {
    setHoveredLevel(null);
  };

  const handleLevelClick = (levelId: string) => {
    const level = levels.find(l => l.id === levelId) || (levelId === 'peak' ? { id: 'peak', title: 'الأدلة المصفاة', description: 'أعلى درجات الموثوقية العلمية.', color: '', hoverColor: '', points: '', textY: 0 } : null);
    
    if (level) {
      // دائماً قم بتحديث المكون المختار عند النقر لضمان العرض في لوحة المعلومات
      setSelectedLevel(selectedLevel?.id === level.id ? null : level as PyramidLevel);
      
      // إذا لم نكن على الهاتف، ننتقل أيضاً للقسم
      if (!isMobile) {
        const idMap: Record<string, string> = {
          'systematic-reviews': 'systematic-reviews',
          'rct': 'rct-section',
          'cohort': 'cohort-section',
          'case-control': 'case-control-section',
          'case-reports': 'case-reports'
        };
        const targetId = idMap[levelId] || levelId;
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // تحديد المستوى الذي سيتم عرضه في لوحة المعلومات
  // نعطي الأولوية للمختار (عبر النقر) ثم للمحلق (عبر الماوس)
  const displayLevel = selectedLevel || hoveredLevel;

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto my-8 sm:my-12 bg-white dark:bg-slate-900 p-3 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800 overflow-visible" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleGlobalMouseLeave}
    >
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0F3A7D] dark:text-blue-400 mb-4 sm:mb-6 md:mb-8 text-center pointer-events-none">
        هرم الأدلة الطبية التفاعلي
      </h3>
      
      {/* Floating Tooltip for Desktop */}
      {hoveredLevel && !isMobile && (
        <div 
          className="fixed z-[100] pointer-events-none bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-900 p-3 rounded-lg shadow-2xl max-w-xs border border-white/20 dark:border-slate-200 transition-opacity duration-200"
          style={{ 
            left: `${mousePos.x + 15}px`, 
            top: `${mousePos.y + 15}px`,
            direction: 'rtl'
          }}
        >
          <p className="font-bold text-sm mb-1">{hoveredLevel.title}</p>
          <p className="text-xs leading-relaxed opacity-90">{hoveredLevel.description}</p>
          <p className="text-[10px] mt-2 text-blue-400 dark:text-blue-600 font-semibold">انقر للتثبيت أو الانتقال ←</p>
        </div>
      )}

      <div className="flex flex-col lg:flex-row items-center gap-3 sm:gap-6 md:gap-12 overflow-visible">
        {/* SVG Pyramid */}
        <div className="relative w-full lg:w-3/5 aspect-[2/1.2] sm:aspect-[2/1] z-10 overflow-visible">
          <svg
            viewBox="0 0 600 320"
            className="w-full h-full drop-shadow-2xl dark:drop-shadow-[0_10px_15px_rgba(59,130,246,0.3)] overflow-visible"
            style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))', pointerEvents: 'auto' }}
          >
            {/* Pyramid Peak */}
            <path
              d="M300 0 L350 50 L250 50 Z"
              fill={displayLevel?.id === 'peak' ? '#172554' : '#1e3a8a'}
              className="transition-all duration-300 cursor-pointer"
              style={{ pointerEvents: 'auto' }}
              onMouseEnter={() => setHoveredLevel({ id: 'peak', title: 'الأدلة المصفاة', description: 'أعلى درجات الموثوقية العلمية.', color: '', hoverColor: '', points: '', textY: 0 })}
              onMouseLeave={() => setHoveredLevel(null)}
              onClick={() => handleLevelClick('peak')}
            />

            {levels.map((level) => (
              <polygon
                key={level.id}
                points={level.points}
                fill={displayLevel?.id === level.id ? level.hoverColor : level.color}
                className="transition-all duration-300 cursor-pointer hover:stroke-white hover:stroke-2 active:stroke-white active:stroke-2"
                style={{ pointerEvents: 'auto' }}
                onMouseEnter={() => setHoveredLevel(level)}
                onMouseLeave={() => setHoveredLevel(null)}
                onClick={() => handleLevelClick(level.id)}
              />
            ))}

            {/* Labels on the Pyramid */}
            {levels.map((level) => {
              const titleParts = level.title.split(' & ');
              const line1 = titleParts[0];
              const line2 = titleParts.length > 1 ? titleParts[1] : '';

              return (
                <g key={`label-${level.id}`} className="pointer-events-none">
                  <text
                    x="300"
                    y={level.textY - (line2 ? 8 : 0)}
                    textAnchor="middle"
                    fill="white"
                    className="font-bold pointer-events-none select-none"
                    style={{ 
                      fontSize: isMobile ? '9px' : '11px',
                      fontWeight: 'bold',
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}
                    paintOrder="stroke"
                    stroke="rgba(0,0,0,0.3)"
                    strokeWidth="0.5"
                  >
                    {line1}
                  </text>
                  
                  {line2 && (
                    <text
                      x="300"
                      y={level.textY + (isMobile ? 10 : 12)}
                      textAnchor="middle"
                      fill="white"
                      className="font-bold pointer-events-none select-none"
                      style={{ 
                        fontSize: isMobile ? '9px' : '11px',
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

        {/* Info Panel */}
        <div className="w-full lg:w-2/5 min-h-[140px] sm:min-h-[160px] md:min-h-[180px] flex items-center z-20">
          <div className={`w-full p-3 sm:p-4 md:p-6 rounded-xl transition-all duration-500 transform ${
            displayLevel 
              ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-700 opacity-100 translate-x-0 shadow-lg' 
              : 'bg-gray-50 dark:bg-slate-800 border-2 border-dashed border-gray-200 dark:border-slate-700 opacity-60'
          }`}>
            {displayLevel ? (
              <div className="text-right">
                <div className="flex justify-between items-start mb-2 gap-2">
                  {selectedLevel && (
                    <button 
                      onClick={() => setSelectedLevel(null)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 flex-shrink-0"
                    >
                      ✕
                    </button>
                  )}
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-blue-800 dark:text-blue-300 text-right">
                    {displayLevel.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed mb-2 sm:mb-3 md:mb-4">
                  {displayLevel.description}
                </p>
                {displayLevel.id !== 'peak' && (
                  <button 
                    onClick={() => {
                      const idMap: Record<string, string> = {
                        'systematic-reviews': 'systematic-reviews',
                        'rct': 'rct-section',
                        'cohort': 'cohort-section',
                        'case-control': 'case-control-section',
                        'case-reports': 'case-reports'
                      };
                      const targetId = idMap[displayLevel.id] || displayLevel.id;
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 justify-end w-full lg:w-auto py-1 px-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    اقرأ المزيد عن هذا القسم ←
                  </button>
                )}
              </div>
            ) : (
              <div className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic leading-relaxed">
                {isMobile ? 'انقر على طبقات الهرم لاكتشاف التفاصيل' : 'اضغط على أي طبقة في الهرم للانتقال إلى شرحها المفصل'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
