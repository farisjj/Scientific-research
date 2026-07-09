import { AccordionSection } from '@/components/AccordionSection';
import { ProTipBox } from '@/components/ProTipBox';
import { KeywordBadge } from '@/components/KeywordBadge';
import { SectionHeader } from '@/components/SectionHeader';

export function ResearchEthicsSection() {
  return (
    <section id="research-ethics" className="mb-16 scroll-mt-20">
      <SectionHeader id="research-ethics" title="أخلاقيات البحث والـ IRB" />

      <AccordionSection
        title="ما هي لجنة الأخلاقيات (IRB/Ethics Committee)؟"
        defaultOpen={true}
      >
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          الـ <KeywordBadge>IRB</KeywordBadge> (Institutional Review Board) هي لجنة موجودة في جامعتك أو مستشفاك، وظيفتها الأساسية حماية حقوق وسلامة الناس الذين يشاركون في الأبحاث.
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          قبل أن تبدأ أي بحث فيه بشر (حتى لو كان مجرد استبيان أونلاين)، يجب أن تأخذ موافقة من هذه اللجنة. بدون رقم الـ IRB، لا توجد مجلة محترمة في العالم ستقبل النشر لك.
        </p>
      </AccordionSection>

      <AccordionSection title="المبادئ الأساسية التي يجب أن تعرفها">
        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg category-card">
            <strong className="text-[#10B981] dark:text-green-400">1. الـ Informed Consent</strong>
            <p className="mt-2">المشارك يجب أن يفهم بالضبط ما هو البحث، وما هي الفوائد والمخاطر، وأنه يستطيع الانسحاب في أي وقت يريده دون أي مسؤولية.</p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg category-card">
            <strong className="text-[#10B981] dark:text-green-400">2. السرية والخصوصية (Confidentiality)</strong>
            <p className="mt-2">بيانات الناس أمانة. ممنوع كتابة أسماء حقيقية؛ استخدم أكواداً أو أرقاماً (مثلاً Patient A, Patient B).</p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg category-card">
            <strong className="text-[#10B981] dark:text-green-400">3. عدم الإضرار (Non-Maleficence)</strong>
            <p className="mt-2">بحثك يجب ألا يسبب أي ضرر، لا جسدي ولا حتى نفسي أو اجتماعي للمشاركين.</p>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="كيف تأخذ موافقة الـ IRB؟">
        <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <div className="border-r-4 border-blue-400 pr-4">
            <strong className="text-[#0F3A7D] dark:text-blue-400">1. جهز الـ Protocol:</strong>
            <p>اكتب وصفاً مفصلاً لبحثك: الأهداف، والطريقة، وكيف ستحمي بيانات الناس.</p>
          </div>

          <div className="border-r-4 border-blue-400 pr-4">
            <strong className="text-[#0F3A7D] dark:text-blue-400">2. نموذج الموافقة:</strong>
            <p>جهز ورقة الـ Consent التي سيوقع عليها المشاركون بلغة بسيطة ومفهومة.</p>
          </div>

          <div className="border-r-4 border-blue-400 pr-4">
            <strong className="text-[#0F3A7D] dark:text-blue-400">3. التقديم والانتظار:</strong>
            <p>ارفع الملفات للجنة في جامعتك. قد يطلبون تعديلات، وهذا أمر طبيعي جداً؛ عدلها وأعدها حتى تأخذ الموافقة النهائية.</p>
          </div>
        </div>

        <ProTipBox>
          <p>
            من الأخطاء الشائعة والمحفوفة بالمخاطر: البدء بجمع البيانات قبل صدور موافقة الـ IRB. رغم أن البعض قد يتجاوز هذه النقطة محلياً وتمضي أبحاثهم، إلا أن المجلات العالمية المرموقة تدقق بشدة في التواريخ. إذا اكتشفت المجلة أن بياناتك جُمعت قبل تاريخ الموافقة الرسمية، قد يتم رفض بحثك فوراً. لا تخاطر بجهدك، واجعل الموافقة دائماً تسبق جمع البيانات.
          </p>
        </ProTipBox>
      </AccordionSection>
    </section>
  );
}

export function ReferenceManagementSection() {
  return (
    <section id="reference-management" className="mb-16 scroll-mt-20">
      <SectionHeader id="reference-management" title="إدارة المراجع (References)" />

      <AccordionSection
        title="لماذا يجب أن تستخدم Reference Manager؟"
        defaultOpen={true}
      >
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          تخيل أن لديك 50 مرجعاً وتريد كتابتها يدوياً وتنسيقها... برامج إدارة المراجع تقوم بهذا العمل عنك بضغطة زر. تنظم لك الـ Papers التي قرأتها وتقوم بعمل الـ Citations داخل الـ Word تلقائياً.
        </p>
      </AccordionSection>

      <AccordionSection title="أفضل الأدوات المجربة">
        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg category-card">
            <strong className="text-[#0F3A7D] dark:text-blue-400">Mendeley</strong>
            <p className="mt-2">المفضل عند أغلب الطلاب. سهل، ويوجد له تطبيق للهاتف، ويتصل مع Word بسلاسة.</p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg category-card">
            <strong className="text-[#0F3A7D] dark:text-blue-400">Zotero</strong>
            <p className="mt-2">مجاني بالكامل (Open Source) وقوي جداً، خاصة لو كنت تجمع مراجع من المتصفح مباشرة.</p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg category-card">
            <strong className="text-[#0F3A7D] dark:text-blue-400">EndNote</strong>
            <p className="mt-2">          الخيار الثقيل والاحترافي، ولكنه غالباً يحتاج اشتراكاً بمال (تأكد إذا كانت جامعتك توفره مجاناً).</p>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="أنماط الاستشهاد (Citation Styles)">
        <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <div className="border-r-4 border-purple-400 pr-4">
            <strong className="text-purple-600 dark:text-purple-400">Vancouver</strong>
            <p className="mt-1 text-xs">الأكثر استخداماً في المجلات الطبية (نظام الأرقام).</p>
          </div>

          <div className="border-r-4 border-purple-400 pr-4">
            <strong className="text-purple-600 dark:text-purple-400">APA</strong>
            <p className="mt-1 text-xs">شائع في علوم النفس والتمريض وبعض المجلات الطبية.</p>
          </div>
        </div>

        <ProTipBox>
          <p>
            دائماً تفقد الـ <KeywordBadge>Author Guidelines</KeywordBadge> الخاصة بالمجلة قبل أن تبدأ. إذا كتبت كل مراجعك بنمط APA والمجلة تريد Vancouver، ستتعب كثيراً. ولكن لو كنت تستخدم برنامج مراجع، التغيير يستغرق ثانية واحدة فقط.
          </p>
        </ProTipBox>
      </AccordionSection>
    </section>
  );
}

export function CommonMistakesSection() {
  return (
    <section id="common-mistakes" className="mb-16 scroll-mt-20">
      <SectionHeader id="common-mistakes" title="أخطاء تضر الباحثين الجدد" />

      <AccordionSection
        title="أخطاء في التصميم (Design Mistakes)"
        defaultOpen={true}
      >
        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-r-4 border-red-400">
            <strong className="text-red-600 dark:text-red-400">عينة صغيرة جداً (Small Sample Size):</strong>
            <p className="mt-2">دراسة على عشرة مرضى لا تعطي نتائج لها قيمة. يجب أن تحسب الـ <KeywordBadge>Power</KeywordBadge> والـ <KeywordBadge>Sample Size</KeywordBadge> قبل أن تبدأ.</p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-r-4 border-red-400">
            <strong className="text-red-600 dark:text-red-400">لا يوجد Control Group:</strong>
            <p className="mt-2">إذا كنت تريد دراسة تأثير دواء، يجب أن تقارنه بمجموعة لم تأخذ الدواء لكي تعرف الفرق الحقيقي.</p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-r-4 border-red-400">
            <strong className="text-red-600 dark:text-red-400">الـ Selection Bias:</strong>
            <p className="mt-2">أن تختار فقط المرضى الذين تعرف أنهم سيعطونك النتيجة التي تريدها. هذا يدمّر البحث تماماً.</p>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="أخطاء في الكتابة والإحصاء">
        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-r-4 border-red-400">
            <strong className="text-red-600 dark:text-red-400">الـ Conclusion المبالغ فيه:</strong>
            <p className="mt-2">لو كانت دراستك على مئة مريض، لا تقل هذا العلاج هو الأفضل لكل البشر. كن متواضعاً ودقيقاً في استنتاجاتك.</p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-r-4 border-red-400">
            <strong className="text-red-600 dark:text-red-400">استخدام اختبار إحصائي خاطئ:</strong>
            <p className="mt-2">ليست كل الأرقام تتحلل بـ T-test. استشر شخصاً يفهم بالـ <KeywordBadge>Biostatistics</KeywordBadge> قبل أن تبدأ تحليل بياناتك.</p>
          </div>
        </div>

        <ProTipBox>
          <p>
            إذا كنت تائهاً في الإحصاء (مثلنا جميعاً في البداية): لا تخجل من طلب المساعدة. تواصل مع دكاترة الجامعة أو طلاب أكبر منك لديهم خبرة. استشارة واحدة قد تنقذ بحثك من الرفض.
          </p>
        </ProTipBox>
      </AccordionSection>
    </section>
  );
}

export function PracticalTipsSection() {
  return (
    <section id="practical-tips" className="mb-16 scroll-mt-20">
      <SectionHeader id="practical-tips" title="نصائح عملية من الآخر" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 category-card">
          <h4 className="font-bold text-[#0F3A7D] dark:text-blue-400 mb-3">ابدأ صغيراً (Start Small)</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-loose">لا تحاول اكتشاف علاج للسرطان من أول بحث. ابدأ بـ <KeywordBadge>Case Report</KeywordBadge> أو <KeywordBadge>Cross-sectional</KeywordBadge> بسيطة لكي تتعلم الخطوات وتكسر حاجز الخوف.</p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 category-card">
          <h4 className="font-bold text-[#0F3A7D] dark:text-blue-400 mb-3">الفريق الصحيح (The Right Team)</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">الـ Research عمل جماعي. ابحث عن زملاء مهتمين ومجتهدين، وابعد عن الركاب الذين يريدون فقط وضع أسمائهم دون عمل.</p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 category-card">
          <h4 className="font-bold text-[#0F3A7D] dark:text-blue-400 mb-3">الصبر (Patience)</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">النشر يستغرق وقتاً؛ من شهور لسنة أحياناً. لا تحبط إذا رُفضت أول مرة، هذا جزء طبيعي من العملية. عدّل وأرسل لمجلة ثانية.</p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 category-card">
          <h4 className="font-bold text-[#0F3A7D] dark:text-blue-400 mb-3">الـ Mentor</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">ابحث عن مرشد متمرس في البحث العلمي ليوجهك، سواء كان طالباً يسبقك بالخبرة، خريجاً حديثاً، أو طبيباً. وجود المرشد الصحيح يختصر عليك سنين من الضياع.</p>
        </div>
      </div>
    </section>
  );
}

export function AuthorshipAndEthicsSection() {
  return (
    <section id="authorship-ethics" className="mb-16 scroll-mt-20">
      <SectionHeader id="authorship-ethics" title="التأليف والنزاهة العلمية" />
      <figure className="section-hero-figure">
        <img src="/authorship.jpg" alt="فريق طبي يعمل على مخطوطة بحثية" className="section-hero-image" />
        <figcaption className="section-hero-caption">التعاون والتأليف الأخلاقي في الأبحاث الطبية</figcaption>
      </figure>
      <AccordionSection title="من الذي يستحق أن يكون Author؟">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          حسب معايير الـ <KeywordBadge>ICMJE</KeywordBadge>، لكي يوضع اسمك على البحث يجب أن تكون فعلت ثلاثة أشياء:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>شاركت بشكل حقيقي في الفكرة أو جمع البيانات أو التحليل.</li>
          <li>شاركت في كتابة المسودة أو مراجعتها نقدياً.</li>
          <li>وافقت على النسخة النهائية وتتحمل مسؤولية المحتوى.</li>
        </ol>
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 rounded">
          <p className="text-sm text-red-900 dark:text-red-200">
            ممنوع مجاملة أحد بوضع اسمه على البحث (Gift Authorship)، وممنوع تهميش من عمل معك (Ghost Authorship). إذا ساهم شخص في العمل لكنه لم يستوفِ شروط التأليف كاملة، فإن المكان الصحيح لتقدير جهده هو قسم الشكر والتقدير (Acknowledgments).
          </p>
        </div>
      </AccordionSection>
    </section>
  );
}
