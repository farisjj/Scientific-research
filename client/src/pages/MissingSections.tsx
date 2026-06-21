import { AccordionSection } from '@/components/AccordionSection';
import { ProTipBox } from '@/components/ProTipBox';
import { KeywordBadge } from '@/components/KeywordBadge';
import { SectionHeader } from '@/components/SectionHeader';
import { StatisticalDecisionTree } from '@/components/StatisticalDecisionTree';
import { BiostatisticsDecisionTree } from '@/components/BiostatisticsDecisionTree';
import { ResearchTemplates } from '@/components/ResearchTemplates';

export function AuthorshipRolesSection() {
  return (
    <section id="authorship-roles" className="mb-16 scroll-mt-20">
      <SectionHeader id="authorship-roles" title="أدوار التأليف (Authorship Roles)" />

      <AccordionSection
        title="المؤلف الأول (First Author) - البطل الأساسي"
        defaultOpen={true}
      >
        <p className="text-sm text-gray-700 dark:text-gray-300">
          الـ <KeywordBadge>First Author</KeywordBadge> هو الشخص الذي قام بأغلب العمل: جمع البيانات، وحللها، وكتب المسودة الأولى للبحث. هذا أهم دور وأكثر واحد يفيدك في الـ CV.
        </p>
        <ProTipBox>
          كطالب طب، حاول دائماً أن يكون أول بحث تنشره أنت فيه الـ First Author. هذا يثبت أنك قائد وتستطيع إدارة مشروع كامل من الألف إلى الياء.
        </ProTipBox>
      </AccordionSection>

      <AccordionSection title="المؤلفون المشاركون (Co-authors)">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          هم الزملاء الذين ساعدوك في أجزاء معينة: واحد جمع البيانات، وواحد قام بالـ Statistics، وواحد راجع الكتابة. ترتيبهم يكون حسب حجم عمل كل واحد فيهم.
        </p>
      </AccordionSection>

      <AccordionSection title="المؤلف الأخير (Last Author) - المشرف">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          غالباً ما يكون الدكتور الاستشاري أو الأستاذ الذي أشرف على الفريق. هذا مكان محترم جداً ويرفع من مصداقية البحث عندما يكون فيه اسم دكتور معروف.
        </p>
      </AccordionSection>

      <AccordionSection title="المؤلف المراسل (Corresponding Author)">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          هو الشخص الذي تتواصل معه المجلة بخصوص أي تعديلات أو أسئلة. يجب أن يكون شخصاً منتبهاً ويرد على رسائل البريد الإلكتروني بسرعة.
        </p>
      </AccordionSection>

      <AccordionSection title="الـ Co-first Authorship">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          أحياناً يكون هناك اثنان عملا بالضبط نفس كمية العمل. هنا تسمح المجلات أن يكونا مؤلفين أولين مشتركين، وتوضع بجانب اسميهما علامة توضح هذا الشيء.
        </p>
      </AccordionSection>
    </section>
  );
}

export function JournalClassificationsSection() {
  return (
    <section id="journal-classifications" className="mb-16 scroll-mt-20">
      <SectionHeader id="journal-classifications" title="تصنيفات المجلات (Journal Ranking)" />

      <AccordionSection
        title="الـ Impact Factor - ميزان القوة"
        defaultOpen={true}
      >
        <p className="text-sm text-gray-700 dark:text-gray-300">
          الـ <KeywordBadge>Impact Factor</KeywordBadge> هو رقم يبين مدى قوة المجلة. كلما زاد الرقم، يعني ذلك أن أبحاث هذه المجلة يتم الاستشهاد بها أكثر ومستواها أصعب في القبول.
        </p>
      </AccordionSection>

      <AccordionSection title="التصنيف الربعي (Q1-Q4)">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          المجلات تنقسم إلى أربع فئات حسب قوتها في تخصصها:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li><KeywordBadge>Q1</KeywordBadge>: الفئة الأولى (أقوى شيء).</li>
          <li><KeywordBadge>Q2</KeywordBadge>: الفئة الثانية.</li>
          <li><KeywordBadge>Q3</KeywordBadge> و <KeywordBadge>Q4</KeywordBadge>: المجلات الأقل تأثيراً.</li>
        </ul>
        <ProTipBox>
          طموحك دائماً أن يكون النشر في مجلات Q1 أو Q2. هذه التي فعلاً تصنع فرقاً في الـ CV الخاص بك عندما تقدم على برامج عالمية.
        </ProTipBox>
      </AccordionSection>

      <AccordionSection title="موقع SJR - كيف تتأكد من المجلة؟">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          قبل أن ترسل لأي مجلة، ادخل على موقع <a href="https://www.scimagojr.com" target="_blank" className="text-blue-600 underline">SJR</a> واكتب اسمها. سيظهر لك في أي فئة تقع وهل هي مفهرسة في <KeywordBadge>Scopus</KeywordBadge> أم لا.
        </p>
      </AccordionSection>
    </section>
  );
}

export function PredatoryJournalsSection() {
  return (
    <section id="predatory-journals" className="mb-16 scroll-mt-20">
      <SectionHeader id="predatory-journals" title="المجلات المفترسة (Predatory) - الفخ!" />

      <AccordionSection
        title="ما هي المجلات المفترسة؟"
        defaultOpen={true}
      >
        <p className="text-sm text-gray-700 dark:text-gray-300">
          هي مجلات نصابة هدفها فقط أخذ مالك. تقبل أي شيء ترسله خلال يومين وتقول لك مبروك قُبل البحث ولكن ادفع 500 دولار. النشر فيها يضر الـ CV الخاص بك ويبين أنك لا تفهم كيف يسير العلم.
        </p>
      </AccordionSection>

      <figure className="section-hero-figure">
        <img src="/predatory.jpg" alt="ميدالية ذهبية عبارة عن فخ" className="section-hero-image" />
        <figcaption className="section-hero-caption">تحذير من المجلات المفترسة الخادعة</figcaption>
      </figure>
      <AccordionSection title="علامات المجلة النصابة">
        <ul className="list-disc list-inside mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>ترسل لك رسائل بريد إلكتروني تطلب منك النشر عندهم.</li>
          <li>تقبل البحث بسرعة خيالية دون أي تعديلات.</li>
          <li>موقعهم شكله قديم ومليء بالأخطاء الإملائية.</li>
          <li>غير موجودين على <KeywordBadge>PubMed</KeywordBadge>.</li>
        </ul>
        <ProTipBox>
          استخدم موقع <KeywordBadge>Beall's List</KeywordBadge> لكي تتأكد إذا كانت المجلة أو الناشر مشبوهين أم لا.
        </ProTipBox>
      </AccordionSection>
    </section>
  );
}

export function FundingStrategiesSection() {
  return (
    <section id="funding-strategies" className="mb-16 scroll-mt-20">
      <SectionHeader id="funding-strategies" title="كيف تحصل على تمويل لبحثك؟" />

      <AccordionSection
        title="استغلال الروابط الطلابية"
        defaultOpen={true}
      >
        <p className="text-sm text-gray-700 dark:text-gray-300">
          إذا كان بحثك يحتاج عينة كبيرة، لا تدفع مالاً للإعلانات. استغل اللجان الطلابية في جامعتك، هم لديهم وصول لآلاف الطلاب وممكن يساعدوك في نشر الاستبيان مجاناً.
        </p>
      </AccordionSection>

      <AccordionSection title="دعم عمادة البحث العلمي">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          أغلب الجامعات في الأردن لديها ميزانية لدعم أبحاث الطلاب. السر هو أن تشرك دكتوراً (Faculty Member) معك كـ <KeywordBadge>Principal Investigator</KeywordBadge>، وهو يستطيع التقديم على دعم مالي لتغطية تكاليف النشر أو جمع البيانات.
        </p>
      </AccordionSection>
    </section>
  );
}

export function AccessingPaidResearchSection() {
  return (
    <section id="accessing-paid-research" className="mb-16 scroll-mt-20">
      <SectionHeader id="accessing-paid-research" title="كيف تفتح الـ Papers المقفولة؟" />

      <AccordionSection
        title="طرق قانونية ومجانية"
        defaultOpen={true}
      >
        <ul className="list-disc list-inside mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li><KeywordBadge>ResearchGate</KeywordBadge>: أرسل رسالة مباشرة للمؤلف (Request full-text)، غالباً سيرسلها لك وهو سعيد.</li>
          <li><KeywordBadge>Unpaywall</KeywordBadge>: إضافة للمتصفح تبحث لك عن نسخ مجانية وقانونية للبحث.</li>
          <li>البريد الإلكتروني للجامعة: دائماً جرب الدخول عن طريق مكتبة جامعتك، يكون لديهم اشتراكات في أغلب المجلات.</li>
        </ul>
      </AccordionSection>
    </section>
  );
}

export function PortfolioStrategiesSection() {
  return (
    <section id="portfolio-strategies" className="mb-16 scroll-mt-20">
      <SectionHeader id="portfolio-strategies" title="بناء الـ Portfolio البحثي" />
      <figure className="section-hero-figure">
        <img src="/portfolio.jpg" alt="بصمة رقمية تتحول إلى حمض نووي" className="section-hero-image" />
        <figcaption className="section-hero-caption">بناء هوية بحثية فريدة ومتميزة</figcaption>
      </figure>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        الـ Portfolio ليس فقط عدد أبحاث، هو تنوع. حاول أن يكون عندك <KeywordBadge>Case Report</KeywordBadge> تبين مهارتك السريرية، و <KeywordBadge>Systematic Review</KeywordBadge> تبين قدرتك التحليلية، و <KeywordBadge>Original Article</KeywordBadge> تبين أنك تعرف كيف تعمل ميدانياً.
      </p>
    </section>
  );
}

export function ResearchSpecializationSection() {
  return (
    <section id="research-specialization" className="mb-16 scroll-mt-20">
      <SectionHeader id="research-specialization" title="General vs Sub-specialty" />
      <p className="text-sm text-gray-700 dark:text-gray-300">
        كطالب، لا تحصر نفسك في تخصص واحد دقيق جداً. النشر في مواضيع عامة (Internal Medicine, Surgery) يعطي انطباعاً أنك مطلع. ولكن لو كنت ناوي على تخصص معين في أمريكا مثلاً، حاول تركيز 70% من شغلك فيه لكي تظهر الـ <KeywordBadge>Interest</KeywordBadge> الخاص بك.
      </p>
    </section>
  );
}

export function DigitalIdentitySection() {
  return (
    <section id="digital-identity" className="mb-16 scroll-mt-20">
      <SectionHeader id="digital-identity" title="هويتك البحثية الرقمية" />
      <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
        <p>يجب أن يكون عندك بروفايلات جاهزة ومحدثة على:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><KeywordBadge>ORCID</KeywordBadge>: رقم هوية عالمي للباحثين (ضروري للنشر).</li>
          <li><KeywordBadge>Google Scholar</KeywordBadge>: لكي تتابع الـ <KeywordBadge>Citations</KeywordBadge> الخاصة بأبحاثك.</li>
          <li><KeywordBadge>ResearchGate</KeywordBadge>: فيسبوك الباحثين، ممتاز للـ Networking.</li>
        </ul>
      </div>
    </section>
  );
}

export function ResearchTemplatesSection() {
  return (
    <section id="research-templates" className="mb-16 scroll-mt-20">
      <SectionHeader id="research-templates" title="قوالب بحثية جاهزة للتحميل" />
      <ResearchTemplates />
    </section>
  );
}

export function BiostatisticsDecisionTreeSection() {
  return (
    <section id="biostatistics-tree" className="mb-16 scroll-mt-20">
      <SectionHeader id="biostatistics-tree" title="الخريطة الإحصائية التفاعلية" />
      <BiostatisticsDecisionTree />
    </section>
  );
}

export function StatisticalToolsSection() {
  return (
    <section id="statistical-tools" className="mb-16 scroll-mt-20">
      <SectionHeader id="statistical-tools" title="برامج التحليل الإحصائي" />
      <figure className="section-hero-figure">
        <img src="/stats_software.jpg" alt="مراقب حاسوب برسومات بيانية متوهجة" className="section-hero-image" />
        <figcaption className="section-hero-caption">برامج التحليل الإحصائي الاحترافية</figcaption>
      </figure>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h5 className="font-bold mb-2">SPSS</h5>
          <p className="text-xs">الأكثر شهرة وسهل التعلم (Drag & Drop). ممتاز لأغلب الدراسات الطبية.</p>
        </div>
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <h5 className="font-bold mb-2">R أو Python</h5>
          <p className="text-xs">للمحترفين. يحتاج برمجة ولكنه يعطيك قوة جبارة في التحليل والرسومات البيانية.</p>
        </div>
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <h5 className="font-bold mb-2">RevMan</h5>
          <p className="text-xs">البرنامج الرسمي لعمل الـ <KeywordBadge>Meta-analysis</KeywordBadge>.</p>
        </div>
      </div>
    </section>
  );
}

export function WritingStrategySection() {
  return (
    <section id="writing-strategy" className="mb-4 scroll-mt-20">
      <SectionHeader id="writing-strategy" title="استراتيجية الكتابة الذكية" />
      <ProTipBox>
        لا تبدأ الكتابة من الـ Introduction! أسهل طريقة تنهي فيها البحث هي أن تبدأ بالـ <KeywordBadge>Methods</KeywordBadge> والـ <KeywordBadge>Results</KeywordBadge> لأنك أصلاً قمت بهما. ثم الـ <KeywordBadge>Discussion</KeywordBadge>، وآخر شيء الـ <KeywordBadge>Introduction</KeywordBadge> والـ <KeywordBadge>Abstract</KeywordBadge>. هكذا تصبح الكتابة أسرع بكثير.
      </ProTipBox>
    </section>
  );
}
