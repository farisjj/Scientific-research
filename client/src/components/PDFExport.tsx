import { Download, Printer } from 'lucide-react';

interface PDFExportProps {
  sectionTitle: string;
  sectionId: string;
}

export function PDFExport({ sectionTitle, sectionId }: PDFExportProps) {
  const handlePrintPDF = () => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const printWindow = window.open('', '', 'height=600,width=800');
    if (!printWindow) return;

    const content = element.innerHTML;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${sectionTitle}</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.8;
              color: #000;
              background: #fff;
              padding: 40px;
              direction: rtl;
            }
            h1, h2, h3, h4, h5, h6 {
              margin-top: 20px;
              margin-bottom: 10px;
              color: #0F3A7D;
              font-weight: 600;
            }
            h1 { font-size: 28px; }
            h2 { font-size: 24px; }
            h3 { font-size: 20px; }
            p {
              margin-bottom: 12px;
              text-align: justify;
            }
            ul, ol {
              margin-left: 30px;
              margin-bottom: 15px;
            }
            li {
              margin-bottom: 8px;
              text-align: justify;
            }
            .section-title {
              text-align: center;
              margin-bottom: 30px;
              padding-bottom: 15px;
              border-bottom: 3px solid #0F3A7D;
            }
            .print-date {
              text-align: center;
              color: #666;
              font-size: 12px;
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
            }
            @media print {
              body { padding: 20px; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="section-title">
            <h1>${sectionTitle}</h1>
          </div>
          <div class="content">
            ${content}
          </div>
          <div class="print-date">
            <p>تم الطباعة بتاريخ: ${new Date().toLocaleDateString('ar-SA')}</p>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  const handleDownloadPDF = () => {
    handlePrintPDF();
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleDownloadPDF}
        className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-200 h-[40px] min-w-[120px]"
        title="تنزيل كملف PDF"
      >
        <Download className="w-4 h-4" />
        <span>تنزيل PDF</span>
      </button>
      <button
        onClick={handlePrintPDF}
        className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200 h-[40px] min-w-[100px]"
        title="طباعة القسم"
      >
        <Printer className="w-4 h-4" />
        <span>طباعة</span>
      </button>
    </div>
  );
}
