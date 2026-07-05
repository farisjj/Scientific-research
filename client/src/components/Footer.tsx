import { Heart, Mail, MessageCircle, Microscope } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950 border-t border-slate-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              عن الموقع
            </h3>
            <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
              موقع إرشادي شامل مخصص لطلاب كليات الطب في الأردن، يهدف إلى توفير مرجع متكامل عن البحث العلمي الطبي وأهميته في تطوير المسار الأكاديمي والمهني.
            </p>
          </div>

          {/* Developer Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">تطوير الموقع</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Faris Motasem Zaki Al-Rabba</p>
                <p className="text-slate-600 dark:text-gray-400">Faculty of Medicine</p>
                <p className="text-slate-600 dark:text-gray-400">Yarmouk University</p>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-gray-300">
                <MessageCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <a 
                  href="https://wa.me/962782498874" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 btn-interactive inline-block"
                >
                  +962782498874
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">الموارد</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#intro" className="text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  مدخل البحث العلمي
                </a>
              </li>
              <li>
                <a href="#cv-impact" className="text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  تأثير البحث على السيرة الذاتية
                </a>
              </li>
              <li>
                <a href="#hierarchy" className="text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  هرم الأدلة الطبية
                </a>
              </li>
              <li>
                <a href="#time-management" className="text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  التوفيق بين الدراسة والبحث
                </a>
              </li>
            </ul>
          </div>

          {/* External Useful Links */}
          <div className="space-y-4 md:col-span-3">
            <div className="border-t border-slate-200 dark:border-gray-800 pt-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">روابط وموارد خارجية مفيدة</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <a 
                  href="https://t.me/+tojvW3IEzcQ2OTM8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all group category-card"
                >
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors icon-interactive">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">RAOH Researchers</p>
                    <p className="text-xs text-slate-500 dark:text-gray-400">قناة تهدف إلى تسهيل الوصول للمحتوى والدورات المجانية في مجال البحث العلمي الطبي وتلخيصها وجمعها في مكان واحد.</p>
                  </div>
                </a>

                <a 
                  href="https://t.me/+c0ktB8YcO0MwMGVk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all group category-card"
                >
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors icon-interactive">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Research Made Easy</p>
                    <p className="text-xs text-slate-500 dark:text-gray-400">مبادرة لطلبة الطب في جامعة اليرموك تقدم تدريباً عملياً متسلسلاً عبر مهام (Tasks) لتطبيق خطوات البحث العلمي خطوة بخطوة.</p>
                  </div>
                </a>

                <a 
                  href="https://sebawe.com/2024/12/31/10-steps-to-get-started-in-research-as-a-medical-student/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all group category-card"
                >
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors icon-interactive">
                    <Microscope className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">مقال إرشادي شامل</p>
                    <p className="text-xs text-slate-500 dark:text-gray-400">10 خطوات لبدء البحث</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-300 dark:border-gray-700 my-8"></div>

        {/* Copyright & Legal */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700 dark:text-gray-300">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">الملكية الفكرية والحقوق</h4>
              <p className="leading-relaxed">
                جميع المحتويات الموجودة على هذا الموقع محمية بموجب قوانين الملكية الفكرية. يُحظر نسخ أو إعادة نشر أي جزء من المحتوى دون الإشارة الصريحة والكاملة إلى المصدر الأصلي. الاستخدام المسموح به يقتصر على الأغراض التعليمية والشخصية غير التجارية فقط.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">إخلاء المسؤولية</h4>
              <p className="leading-relaxed">
                المعلومات المقدمة في هذا الموقع هي لأغراض تعليمية فقط ولا تشكل استشارة طبية أو أكاديمية رسمية. يُنصح المستخدمون بالرجوع إلى مشرفيهم الأكاديميين والمتخصصين قبل اتخاذ أي قرار بشأن أبحاثهم.
              </p>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-slate-300 dark:border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 dark:text-gray-400">
              <p>
                © {currentYear} <span className="font-semibold text-slate-900 dark:text-white">المرجع الشامل للبحث العلمي الطبي</span> - جميع الحقوق محفوظة
              </p>
              <p className="text-center md:text-right">
                تم التطوير بعناية لخدمة طلاب الطب في الأردن
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center text-xs text-slate-500 dark:text-gray-500 mt-4">
            <p>
              هذا الموقع مخصص لطلاب كليات الطب في جامعة اليرموك وجميع الجامعات الأردنية
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
