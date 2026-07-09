import React, { useState } from 'react';
import { Download, FileText, Table2, AlertCircle, CheckCircle2 } from 'lucide-react';

interface TemplateCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  fileType: string;
  href: string;
}

export function ResearchTemplates() {
  const [downloadStatus, setDownloadStatus] = useState<{ [key: string]: boolean }>({});

  const handleDownloadClick = (id: string) => {
    setDownloadStatus(prev => ({ ...prev, [id]: true }));
    setTimeout(() => setDownloadStatus(prev => ({ ...prev, [id]: false })), 2000);
  };

  // Function to generate Case Report Word Document
  const generateCaseReportDoc = () => {
    const content = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>قالب تقرير الحالة الطبية</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; direction: rtl; }
    h1 { text-align: center; font-size: 24px; margin-bottom: 30px; }
    h2 { font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-bottom: 2px solid #0F3A7D; padding-bottom: 5px; }
    h3 { font-size: 14px; margin-top: 15px; margin-bottom: 8px; color: #0F3A7D; }
    p { margin: 10px 0; text-align: justify; }
    .section { margin-bottom: 20px; }
    .placeholder { color: #999; font-style: italic; }
    table { width: 100%; border-collapse: collapse; margin: 15px 0; }
    td, th { border: 1px solid #ddd; padding: 10px; text-align: right; }
    th { background-color: #f0f0f0; font-weight: bold; }
  </style>
</head>
<body>
  <h1>قالب كتابة تقرير حالة (Case Report)</h1>
  
  <div class="section">
    <h2>صفحة العنوان</h2>
    <h3>عنوان البحث:</h3>
    <p class="placeholder">[أدخل عنوان البحث هنا - يجب أن يكون واضحاً وموجزاً]</p>
    
    <h3>أسماء الباحثين:</h3>
    <p class="placeholder">[الاسم الأول - الجامعة/المستشفى]</p>
    <p class="placeholder">[الاسم الثاني - الجامعة/المستشفى]</p>
    
    <h3>الانتماءات الأكاديمية:</h3>
    <p class="placeholder">[قسم/كلية - الجامعة]</p>
  </div>

  <div class="section">
    <h2>الملخص (Abstract)</h2>
    <h3>الخلفية (Background):</h3>
    <p class="placeholder">[اشرح المرض أو الحالة بشكل عام - 2-3 جمل]</p>
    
    <h3>عرض الحالة (Case Presentation):</h3>
    <p class="placeholder">[وصف موجز للحالة المرضية]</p>
    
    <h3>الخلاصة (Conclusion):</h3>
    <p class="placeholder">[الدرس المستفاد من هذه الحالة]</p>
  </div>

  <div class="section">
    <h2>المقدمة (Introduction)</h2>
    <p class="placeholder">[ابدأ بمعلومات عامة عن المرض]</p>
    <p class="placeholder">[اشرح لماذا هذه الحالة مميزة أو نادرة]</p>
    <p class="placeholder">[وضح الفجوة المعرفية التي يسدها هذا التقرير]</p>
  </div>

  <div class="section">
    <h2>عرض الحالة (Case Presentation)</h2>
    
    <h3>معلومات المريض (Patient Information):</h3>
    <table>
      <tr>
        <th>المعلومة</th>
        <th>التفاصيل</th>
      </tr>
      <tr>
        <td>العمر والجنس</td>
        <td class="placeholder">[أدخل العمر والجنس]</td>
      </tr>
      <tr>
        <td>الشكوى الرئيسية</td>
        <td class="placeholder">[ما الذي أحضر المريض للمستشفى؟]</td>
      </tr>
      <tr>
        <td>المدة الزمنية</td>
        <td class="placeholder">[كم من الوقت استمرت الأعراض؟]</td>
      </tr>
    </table>

    <h3>الموجودات السريرية (Clinical Findings):</h3>
    <p class="placeholder">[الفحص الجسدي والعلامات الحيوية]</p>
    
    <h3>الخط الزمني (Timeline):</h3>
    <p class="placeholder">[ترتيب الأحداث والتطورات]</p>
    
    <h3>التقييم التشخيصي (Diagnostic Assessment):</h3>
    <p class="placeholder">[الفحوصات المخبرية والتصويرية والنتائج]</p>
    
    <h3>التدخل العلاجي (Therapeutic Intervention):</h3>
    <p class="placeholder">[العلاج المعطى والأدوية المستخدمة]</p>
    
    <h3>المتابعة والنتائج (Follow-up and Outcomes):</h3>
    <p class="placeholder">[كيف تطورت حالة المريض بعد العلاج؟]</p>
  </div>

  <div class="section">
    <h2>المناقشة (Discussion)</h2>
    <h3>مقارنة مع الأدبيات السابقة:</h3>
    <p class="placeholder">[قارن حالتك مع الحالات المنشورة سابقاً]</p>
    
    <h3>التفسير العلمي:</h3>
    <p class="placeholder">[اشرح لماذا حدثت هذه الحالة بهذه الطريقة]</p>
    
    <h3>نقاط القوة والضعف (Strengths and Limitations):</h3>
    <p class="placeholder">[ما الذي يميز هذا التقرير وما القيود عليه؟]</p>
  </div>

  <div class="section">
    <h2>الخلاصة (Conclusion)</h2>
    <p class="placeholder">[الدرس السريري المستفاد من هذه الحالة في جملة أو جملتين]</p>
  </div>

  <div class="section">
    <h2>المراجع (References)</h2>
    <p class="placeholder">[1. Author A, et al. Title. Journal. Year;Volume(Issue):Pages.]</p>
    <p class="placeholder">[2. Author B, et al. Title. Journal. Year;Volume(Issue):Pages.]</p>
  </div>
</body>
</html>
    `;

    const blob = new Blob([content], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Case_Report_Template_AR.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

  };

  // Function to generate Data Extraction CSV
  const generateDataExtractionCSV = () => {
    const headers = [
      'Study ID',
      'First Author',
      'Year of Publication',
      'Country',
      'Study Design',
      'Total Sample Size (N)',
      'Mean Age',
      'Gender Ratio (M/F)',
      'Intervention Details',
      'Control Details',
      'Primary Outcome',
      'Secondary Outcomes',
      'Follow-up Duration',
      'Risk of Bias/Quality Score',
      'Notes'
    ];

    // Add BOM for UTF-8 encoding to prevent Arabic text corruption
    const BOM = '\uFEFF';
    const csvContent = BOM + headers.join(',') + '\n' + 
      // Add 5 empty rows for data entry
      Array(5).fill(headers.map(() => '').join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Systematic_Review_Data_Extraction_Sheet_AR.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

  };

  const templates: TemplateCard[] = [
    {
      id: 'caseReport',
      title: 'قالب كتابة تقرير حالة (Case Report)',
      description: 'ملف مقسم حسب هيكل IMRAD جاهز للتعبئة لتوفير وقت التنسيق. يتضمن جميع الأقسام الضرورية من صفحة العنوان إلى المراجع.',
      icon: <FileText className="w-8 h-8" />,
      fileType: '.docx',
      href: '/templates/BMJ_Clinical_Case_Report_Template.docx',
    },
    {
      id: 'dataExtraction',
      title: 'شيت استخراج البيانات (Data Extraction Sheet)',
      description: 'ملف مصمم لتفريغ بيانات الدراسات لعمل الـ Systematic Reviews و Meta-analysis. يحتوي على جميع الأعمدة الضرورية لجمع البيانات بشكل منظم.',
      icon: <Table2 className="w-8 h-8" />,
      fileType: '.xlsx',
      href: '/templates/Systematic_Review_Data_Extraction_Sheet.xlsx',
    },
  ];

  return (
    <div className="research-tools-wrapper w-full">
      <style>{`
        .research-tools-wrapper {
          --bg-color: var(--color-background);
          --text-color: var(--color-foreground);
          --card-bg: var(--color-card);
          --card-border: var(--color-border);
          --accent-color: var(--color-primary);
          --accent-foreground: var(--color-primary-foreground);
          --hover-bg: var(--color-secondary);
        }

        .research-tools-wrapper .templates-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 24px;
        }

        .research-tools-wrapper .template-card {
          background-color: var(--card-bg);
          border: 2px solid var(--card-border);
          border-radius: 12px;
          padding: 24px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .research-tools-wrapper .template-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--accent-color), transparent);
        }

        .research-tools-wrapper .template-card:hover {
          border-color: var(--accent-color);
          box-shadow: 0 8px 24px rgba(15, 58, 125, 0.15);
          transform: translateY(-4px);
        }

        .research-tools-wrapper .template-icon {
          color: var(--accent-color);
          margin-bottom: 16px;
        }

        .research-tools-wrapper .template-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 8px;
          text-align: right;
        }

        .research-tools-wrapper .template-description {
          font-size: 14px;
          color: var(--text-color);
          opacity: 0.8;
          margin-bottom: 16px;
          flex-grow: 1;
          text-align: right;
          line-height: 1.6;
        }

        .research-tools-wrapper .template-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--card-border);
        }

        .research-tools-wrapper .file-type {
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-color);
          background-color: rgba(15, 58, 125, 0.1);
          padding: 4px 12px;
          border-radius: 20px;
        }

        .research-tools-wrapper .download-btn {
          background-color: var(--accent-color);
          color: var(--accent-foreground);
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .research-tools-wrapper .download-btn:hover {
          background-color: #0d2f68;
          transform: scale(1.05);
        }

        .research-tools-wrapper .download-btn:active {
          transform: scale(0.98);
        }

        .research-tools-wrapper .download-success {
          background-color: #10B981;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .research-tools-wrapper .template-card {
            background-color: var(--card-bg);
            border-color: var(--card-border);
          }

          .research-tools-wrapper .template-card:hover {
            box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
          }

          .research-tools-wrapper .file-type {
            background-color: rgba(59, 130, 246, 0.15);
          }
        }
      `}</style>

      <div className="templates-container">
        {templates.map((template) => (
          <div key={template.id} className="template-card">
            <div className="template-icon">
              {template.icon}
            </div>
            <h3 className="template-title">{template.title}</h3>
            <p className="template-description">{template.description}</p>
            <div className="template-footer">
              <span className="file-type">{template.fileType}</span>
              <a
                href={template.href}
                download
                className={`download-btn ${downloadStatus[template.id] ? 'download-success' : ''}`}
                onClick={() => handleDownloadClick(template.id)}
              >
                {downloadStatus[template.id] ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    تم
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    تحميل
                  </>
                )}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-600 dark:border-blue-400 rounded flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-900 dark:text-blue-200 text-right">
          <strong>نصيحة:</strong> تأكد من حفظ الملفات بصيغة صحيحة قبل الاستخدام. يمكنك تعديل القوالب حسب احتياجات بحثك الخاص.
        </div>
      </div>
    </div>
  );
}
