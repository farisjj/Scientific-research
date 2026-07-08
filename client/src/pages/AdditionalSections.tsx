import { AccordionSection } from '@/components/AccordionSection';
import { ProTipBox } from '@/components/ProTipBox';
import { KeywordBadge } from '@/components/KeywordBadge';
import { SectionHeader } from '@/components/SectionHeader';

export function WritingPaperSection() {
  return (
    <section id="writing-paper" className="mb-16 scroll-mt-20">
      <SectionHeader id="writing-paper" title="كتابة الـ Paper العلمية" />
      <img src="/writing_paper_new.jpg" alt="كتابة الورقة العلمية" className="w-full h-auto rounded-xl mb-6 shadow-lg" />

      <AccordionSection
        title="ما هو هيكل الـ Paper الصحيح؟"
        defaultOpen={true}
      >
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-[#0F3A7D] dark:text-blue-400 mb-3">1. الـ Introduction</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              ابدأ بالموضوع بشكل عام، وبعد ذلك ضيّق الدائرة تدريجياً حتى تصل لسؤالك البحثي المحدد. الـ Introduction يجب أن تجيب على سؤالين: لماذا هذا البحث مهم؟ وما هي الفجوة التي سيسدها في العلم (Knowledge Gap).
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F3A7D] dark:text-blue-400 mb-3">2. الـ Methods</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              اشرح بالتفصيل الممل ماذا فعلت. يجب أن تكون واضحة لدرجة أن أي باحث آخر يقرأها يستطيع إعادة نفس خطواتك بالضبط. تشمل الـ Study Design، والـ Sample Size، والـ Inclusion/Exclusion Criteria، والـ Statistical Analysis.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F3A7D] dark:text-blue-400 mb-3">3. الـ Results</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              اعرض أرقامك ونتائجك بحيادية تامة. لا تحلل ولا تعطِ رأيك هنا، فقط اعرض الجداول والـ Figures والـ Graphs التي توضح بياناتك.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F3A7D] dark:text-blue-400 mb-3">4. الـ Discussion</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              هنا فسر نتائجك وقارنها بالدراسات التي قبلك. لماذا ظهرت نتائجك بهذا الشكل؟ وهل تتفق مع الأدبيات الموجودة أم تختلف؟ وناقش الـ Limitations التي واجهتك والـ Future Implications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F3A7D] dark:text-blue-400 mb-3">5. الـ Conclusion</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              لخص أهم ما وصلت إليه في جملتين أو ثلاث، وأجب على سؤالك البحثي الأساسي. لا تذكر أي معلومة جديدة لم تذكر سابقاً.
            </p>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="أخطاء شائعة في الكتابة">
        <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <div className="border-r-4 border-red-400 pr-4">
            <strong className="text-red-600 dark:text-red-400">الـ Introduction الطويلة زيادة:</strong>
            <p>لا تكتب تاريخ المرض من أيام الفراعنة. ركز على آخر و أحدث التطورات والأدبيات التي تخص سؤالك بشكل مباشر.</p>
          </div>

          <div className="border-r-4 border-red-400 pr-4">
            <strong className="text-red-600 dark:text-red-400">لا يوجد References:</strong>
            <p>أي معلومة علمية يجب أن يكون لها مرجع. لا تقل الدراسات أثبتت كذا دون أن تذكر أي دراسة بالضبط.</p>
          </div>

          <div className="border-r-4 border-red-400 pr-4">
            <strong className="text-red-600 dark:text-red-400">المبالغة في النتائج (Overinterpretation):</strong>
            <p>لو كانت دراستك على 50 مريضاً فقط، لا تقل وجدنا العلاج النهائي للمرض، كن واقعياً ومهنياً.</p>
          </div>
        </div>

        <ProTipBox>
          <p>
            قبل أن تبدأ بكتابة حرف واحد، تفقد موقع <KeywordBadge>EQUATOR Network</KeywordBadge>. هذا الموقع يعطيك Checklists عالمية لكل نوع بحث (مثل قائمة <KeywordBadge>STROBE</KeywordBadge> للـ Cross-sectional، وقائمة <KeywordBadge>PRISMA</KeywordBadge> للـ Systematic Reviews، وقائمة <KeywordBadge>CARE</KeywordBadge> للـ Case Reports). نزل القائمة الخاصة بنوع بحثك وامشِ عليها كأنها خريطة؛ هكذا تضمن ألا تنسى أي تفصيل مهم والمجلة ستحترم شغلك أكثر!
          </p>
        </ProTipBox>
      </AccordionSection>
    </section>
  );
}

export function CaseReportsSection() {
  return (
    <section id="case-reports" className="mb-16 scroll-mt-20">
      <SectionHeader id="case-reports" title="تقارير الحالة (Case Reports)" />
      <img src="/case_report_new.jpg" alt="تقارير الحالة" className="w-full h-auto object-contain rounded-xl mb-6 shadow-lg" />

      <AccordionSection
        title="ماذا يعني Case Report و Case Series؟"
        defaultOpen={true}
      >
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#0F3A7D] dark:text-blue-400 mb-2">الـ Case Report</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              هو وصف طبي مفصل وموثق لقصة مرضية تخص مريضاً واحداً فقط، كانت حالته مميزة أو غريبة.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F3A7D] dark:text-blue-400 mb-2">الـ Case Series</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              نفس المبدأ، ولكن لمجموعة مرضى (غالباً من ثلاثة إلى عشرة مرضى) اشتركوا في نفس العرض أو الاستجابة العلاجية.
            </p>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="متى نكتب Case Report؟">
        <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <div className="bg-green-50 dark:bg-emerald-900/20 p-4 rounded-lg">
            <strong className="text-[#10B981] dark:text-green-400">مرض نادر جداً (Rare Disease):</strong>
            <p className="dark:text-gray-300">حالة قد لا يراها الطبيب سوى مرة واحدة طوال مسيرته المهنية.</p>
          </div>

          <div className="bg-green-50 dark:bg-emerald-900/20 p-4 rounded-lg">
            <strong className="text-[#10B981] dark:text-green-400">Unusual Presentation لمرض شائع:</strong>
            <p className="dark:text-gray-300">مرض معروف ومألوف، ولكنه ظهر بطريقة غريبة جداً لم نعتد عليها.</p>
          </div>

          <div className="bg-green-50 dark:bg-emerald-900/20 p-4 rounded-lg">
            <strong className="text-[#10B981] dark:text-green-400">عرض جانبي غير متوقع (Unexpected Side Effect):</strong>
            <p className="dark:text-gray-300">مثلاً: مريض يأخذ علاجاً كيميائياً جديداً، وفجأة حدث لديه تراجع سريع في كفاءة القلب. توثيقك لهذه الحالة قد ينبه الأطباء فيكل العالم!</p>
          </div>

          <div className="bg-green-50 dark:bg-emerald-900/20 p-4 rounded-lg">
            <strong className="text-[#10B981] dark:text-green-400">استخدام مبتكر لعلاج (Novel Treatment):</strong>
            <p className="dark:text-gray-300">استخدام دواء مخصص لمرض معين في علاج مرض ثاني ونجاحه بشكل مبهر.</p>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="الخطوات العملية: من سرير المريض حتى النشر">
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-[#0F3A7D] dark:text-blue-400 mb-3 flex items-center flex-wrap gap-2">الخطوة 1: صيد الحالة (The Hunt)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              كطالب، أنت لا تملك عيادة خاصة. السر عند الأطباء المقيمين (Residents). هم الذين يرون كل شيء في المناوبات، ولكنهم غارقون في العمل وليس لديهم وقت للكتابة.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-r-4 border-blue-500 mb-3">
              <p className="text-sm text-blue-900 dark:text-blue-200 italic">
                قل للطبيب المقيم: دكتور، إذا واجهت حالة غريبة، أنا مستعد لتفريغ ملفها وكتابة البحث بالكامل، وننشره سوياً
              </p>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              ابنِ علاقة جيدة معهم، واعرض عليهم هذا الاتفاق. هكذا تضمن تدفق أفكار دائماً، وتوفر على الطبيب تعب الكتابة، وتحصل أنت على فرصة النشر.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F3A7D] dark:text-blue-400 mb-3 flex items-center flex-wrap gap-2">الخطوة 2: الـ Informed Consent</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              قبل أن تتحمس وتنسخ تحاليل المريض، يجب أن تأخذ موافقته. المجلة سترفض بحثك فوراً إذا لم ترفق موافقة خطية من المريض تسمح بنشر حالته وصوره.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F3A7D] dark:text-blue-400 mb-3 flex items-center flex-wrap gap-2">الخطوة 3: جمع البيانات (Data Collection)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              اجمع كل شيء: الـ History، والـ Exam، والـ Labs، والـ Imaging. ولكن انتبه: يجب أن تقوم بـ De-identification، أي أن تمسح أي شيء يكشف هوية المريض (اسمه، رقم ملفه، أو حتى اسمه على صور الأشعة).
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F3A7D] dark:text-blue-400 mb-3 flex items-center flex-wrap gap-2">الخطوة 4: الـ Literature Review</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              هل الحالة نادرة فعلاً؟ ابحث في <KeywordBadge>PubMed</KeywordBadge>. إذا وجدت 300 حالة مثلك، فمعنى ذلك أنها ليست نادرة. ولكن إذا وجدت خمس حالات فقط في العالم، فمعنى ذلك أن صيدك ثمين وكنز!
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F3A7D] dark:text-blue-400 mb-3 flex items-center flex-wrap gap-2">الخطوة 5: الكتابة (CARE Guidelines)</h4>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-baseline gap-2">
                <strong className="text-[#0F3A7D] dark:text-blue-400 shrink-0">الـ Introduction:</strong>
                <p>فقرة سريعة تشرح المرض ولماذا هذه الحالة استثنائية.</p>
              </div>
              <div className="flex items-baseline gap-2">
                <strong className="text-[#0F3A7D] dark:text-blue-400 shrink-0">الـ Case Presentation:</strong>
                <p>قلب البحث. اكتب قصة المريض بالتسلسل الزمني: متى دخل، وماذا كان يشكو، وماذا أظهرت الفحوصات، وكيف تشخص، وما هو العلاج الذي أخذه.</p>
              </div>
              <div className="flex items-baseline gap-2">
                <strong className="text-[#0F3A7D] dark:text-blue-400 shrink-0">الـ Discussion:</strong>
                <p>قارن مريضك بالحالات القليلة المنشورة؛ ماذا اختلف عنهم؟ وما هو التفسير العلمي لما حدث معه؟</p>
              </div>
              <div className="flex items-baseline gap-2">
                <strong className="text-[#0F3A7D] dark:text-blue-400 shrink-0">الـ Conclusion:</strong>
                <p>رسالة قصيرة تخبر الأطباء بما يجب أن ينتبهوا له مستقبلاً.</p>
              </div>
            </div>
          </div>
        </div>

        <ProTipBox>
          <p>
            المجلات تحب الصور في الـ Case Reports! صورة واضحة لـ ECG فيه تغير نادر، أو صورة MRI واضحة، ترفع نسبة قبول بحثك عالياً. اهتم بجودة الصور واطلب من المشرف النسخة الأصلية عالية الدقة!
          </p>
        </ProTipBox>
      </AccordionSection>
    </section>
  );
}

export function CrossSectionalSection() {
  return (
    <section id="cross-sectional" className="mb-16 scroll-mt-20">
      <SectionHeader id="cross-sectional" title="الدراسات المقطعية والاستبيانات" />

      <AccordionSection
        title="ما هي الدراسات المقطعية (Cross-Sectional Studies)؟"
        defaultOpen={true}
      >
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          تخيل أن تأخذ صورة فوتوغرافية لمرض معين أو سلوك صحي في مجتمع ما، في لحظة زمنية محددة. أنت هنا لا تتابع المرضى لسنوات، ولا تبحث في ماضيهم؛ أنت ببساطة تسأل: ما هو الوضع الآن؟
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          هذه الدراسات نستخدمها كثيراً لكي نقيس معدل انتشار مرض معين (Prevalence) أو نرى ما هي العوامل المرتبطة بسلوك صحي معين (مثلاً: لماذا يدخن طلاب الطب في الأردن؟).
        </p>
      </AccordionSection>

      <AccordionSection title="لماذا هي المفضلة عند طلاب الطب؟">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 category-card">
            <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-2">سريعة وغير مكلفة</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">تستطيع إنهاء جمع البيانات في أسابيع قليلة باستخدام استبيانات إلكترونية (Google Forms).</p>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 category-card">
            <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-2">تطوير مهارات الإحصاء</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">تتعلم فيها كيف تستخدم برامج مثل SPSS لتحليل البيانات ووصف عينتك.</p>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="خطوات العمل على استبيان (Survey-based Study)">
        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
          <p>1. تحديد السؤال البحثي: ماذا تريد أن تقيس بالضبط؟</p>
          <p>2. اختيار الأداة (The Instrument): هل ستستخدم استبياناً موجوداً ومنشوراً سابقاً (Validated Questionnaire) أم ستصمم واحداً جديداً؟ (الأفضل دائماً استخدام استبيان Validated).</p>
          <p>3. تحديد العينة (Sampling): من هم الأشخاص الذين ستسألهم؟ وكيف ستصل إليهم؟</p>
          <p>4. جمع البيانات: نشر الاستبيان والتأكد من وصولك للعدد المطلوب (Sample size) -انظر للأداة السابقة (أداة حساب حجم العينة)-.</p>
          <p>5. التحليل الإحصائي: وصف النتائج واستخراج الـ P-value للعلاقات بين المتغيرات.</p>
        </div>
        <ProTipBox>
          <p>
            انتبه من الـ Bias! في الدراسات المقطعية، أكبر مشكلة هي الـ Selection Bias. لو وزعت استبياناً عن الرياضة فقط على مجموعات الجيم، نتائجك ستكون خاطئة لأنك اخترت فئة معينة فقط. حاول أن تكون عينتك عشوائية وشاملة لكل الفئات التي تدرسها.
          </p>
        </ProTipBox>
      </AccordionSection>
    </section>
  );
}

export function SystematicReviewsSection() {
  return (
    <section id="systematic-reviews" className="mb-16 scroll-mt-20">
      <SectionHeader id="systematic-reviews" title="Systematic Reviews و Meta-analysis" />
      <img src="/systematic_review.jpg" alt="المراجعات المنهجية" className="w-full h-auto object-contain rounded-xl mb-6 shadow-lg" />

      <AccordionSection
        title="ماذا يعني Systematic Review؟"
        defaultOpen={true}
      >
        <p className="text-sm text-gray-700 dark:text-gray-300">
          بدل أن تقوم بدراسة جديدة على مرضى، أنت هنا تجمع كل الدراسات التي أجريت في العالم عن موضوع معين، وتحللها كلها سوياً لكي تخرج بخلاصة نهائية. أنت هنا باحث الأبحاث :)
        </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
            الـ Systematic Review تعتبر أقوى دليل طبي (The Gold Standard) لأنها تعطينا الصورة الكاملة والنهائية.
          </p>
      </AccordionSection>

      <AccordionSection title="ما الفرق بينها وبين الـ Meta-analysis؟">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          الـ Systematic Review هي العملية المنهجية لجمع الدراسات. أما الـ <KeywordBadge>Meta-analysis</KeywordBadge> فهي الخطوة الإحصائية التي تدمج أرقام كل تلك الدراسات في رقم واحد نهائي. ليس كل Systematic Review يحتوي على Meta-analysis، ولكن كل Meta-analysis يجب أن يسبقه Systematic Review.
        </p>
      </AccordionSection>

      <AccordionSection title="لماذا هي فرصة ذهبية لطلاب الطب؟">
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>لا تحتاج موافقة IRB (لأنك لا تتعامل مع مرضى مباشرة).</li>
          <li>لا تحتاج ميزانية أو تمويل.</li>
          <li>تستطيع القيام بها من غرفتك، فقط تحتاج لابتوب وإنترنت.</li>
          <li>قيمتها العلمية عالية جداً وترفع الـ CV بشكل كبير.</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="خطوات العمل (The PRISMA Protocol)">
        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
          <p>1. تحديد السؤال (PICO): من هم المرضى (Population)؟ ما هو التدخل (Intervention)؟ بماذا ستقارن (Comparison)؟ وما هي النتيجة (Outcome)؟</p>
          <p>2. استراتيجية البحث (Search Strategy): كتابة كلمات مفتاحية دقيقة للبحث في PubMed و Scopus و Cochrane.</p>
          <p>3. الغربلة (Screening): قراءة العناوين والملخصات (Title & Abstract) ثم القراءة الكاملة (Full Text) لاختيار الدراسات المناسبة.</p>
          <p>4. استخراج البيانات (Data Extraction): تفريغ معلومات الدراسات المختارة في جداول Excel.</p>
          <p>5. تقييم الجودة (Quality Assessment): التأكد من أن الدراسات التي اخترتها قوية وليس فيها تحيز كبير.</p>
          <p>6. التحليل والكتابة: دمج النتائج وكتابة البحث النهائي.</p>
        </div>
        <ProTipBox>
          <p>
            نصيحة العمر (من مجرب): لا تعمل وحدك... الـ Systematic Review يجب أن يعملها شخصان على الأقل بشكل مستقل (Independent Screening) لكي نضمن الدقة وعدم التحيز. ابحث عن فريق من زملائك المتحمسين ووزعوا المهام بينكم؛ العمل الجماعي فيها ممتع وأسرع بكثير.
          </p>
        </ProTipBox>
      </AccordionSection>
    </section>
  );
}

export function RCTSection() {
  return (
    <section id="rct-section" className="mb-16 scroll-mt-20">
      <SectionHeader id="rct-section" title="Randomized Controlled Trials (RCTs)" />
      
      <AccordionSection title="ماذا تعني دراسات الـ RCTs؟" defaultOpen={true}>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          الـ Randomized Controlled Trials. ببساطة، أنت كباحث تقوم بجمع عينة وتقسم المرضى عشوائياً (Randomization) إلى مجموعتين: مجموعة تأخذ العلاج الجديد (Intervention Group)، ومجموعة تأخذ دواءً وهمياً أو العلاج التقليدي (Control Group). ثم تتابعهم لترى أيهما سيحقق نتائج أفضل.
        </p>
      </AccordionSection>

      <AccordionSection title="لماذا تعتبر الـ RCT المعيار الذهبي (Gold Standard) للأبحاث السريرية الأولية (Original Articles)؟">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          لأن التوزيع العشوائي يقضي على تحيز الاختيار (Selection Bias). هي النوع الوحيد من الدراسات الأولية الذي يثبت السبب والنتيجة (Cause and Effect) بشكل قاطع، بدلاً من مجرد إثبات وجود ارتباط (Association) بين المتغيرات.
        </p>
      </AccordionSection>

      <AccordionSection title="ما هو الـ Blinding (التعمية) ولماذا هو مهم هنا؟">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          التعمية هي إخفاء نوع العلاج عن المريض (Single-blind)، أو عن المريض والطبيب معاً (Double-blind). هذا الإجراء العبقري يضمن ألا تتأثر النتائج بالعامل النفسي للمريض (Placebo Effect) أو بتوقعات الباحث المسبقة.
        </p>
      </AccordionSection>
    </section>
  );
}

export function CohortSection() {
  return (
    <section id="cohort-section" className="mb-16 scroll-mt-20">
      <SectionHeader id="cohort-section" title="Cohort Studies" />
      
      <AccordionSection title="ما هي دراسات الـ Cohort؟" defaultOpen={true}>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          هي دراسات رصدية (Observational). تخيل أنك تتابع مجموعة من الأشخاص الأصحاء يجمعهم قاسم مشترك (مثل التدخين) عبر الزمن، وتقارنهم بمجموعة أخرى لا تدخن، لتنتظر وترى مَن منهم سيصاب بالمرض في المستقبل ومَن لن يصاب.
        </p>
      </AccordionSection>

      <AccordionSection title="متى نلجأ للـ Cohort بدلاً من الـ RCT؟">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          نلجأ لها عندما يكون من غير الأخلاقي إجراء تجربة. مثلاً، لا يمكنك إجبار مجموعة من الناس على التدخين أو التعرض للإشعاع لترى هل سيصابون بالسرطان أم لا (هذا ممنوع أخلاقياً في الـ RCT). لكن، يمكنك مراقبة أشخاص اختاروا التدخين بأنفسهم ومقارنتهم بغير مدخنين.
        </p>
      </AccordionSection>

      <AccordionSection title="ما الفرق بين الـ Prospective والـ Retrospective في دراسات الـ Cohort؟">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          الـ Prospective (مستقبلي): يبدأ اليوم، ويتابع المرضى للسنوات القادمة في المستقبل. الـ Retrospective (بأثر رجعي): يعود لملفات المستشفى القديمة لمجموعة من المرضى في الماضي، ويتتبع تطور حالتهم في السجلات حتى وقتنا الحاضر.
        </p>
      </AccordionSection>
    </section>
  );
}

export function CaseControlSection() {
  return (
    <section id="case-control-section" className="mb-16 scroll-mt-20">
      <SectionHeader id="case-control-section" title="Case-Control Studies" />
      
      <AccordionSection title="ما هي دراسات الـ Case-Control؟" defaultOpen={true}>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          هي دراسات تبحث في الماضي. نبدأ بمرضى مصابين فعلاً بالمرض (Cases) وأشخاص أصحاء يشبهونهم في العمر والجنس (Controls). ثم نعود بالزمن ونسألهم أو نبحث في تاريخهم الطبي عن التعرض لعامل خطر معين (Exposure).
        </p>
      </AccordionSection>

      <AccordionSection title="ما هو الاستخدام الأهم لهذا النوع من الدراسات؟">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          تعتبر هذه الدراسات ممتازة، رخيصة، وسريعة جداً لدراسة الأمراض النادرة (Rare Diseases) أو التقصي عن أسباب الأوبئة المفاجئة. لأنك في الأمراض النادرة لا تملك رفاهية الانتظار لسنوات حتى يظهر المرض، فهو موجود بالفعل أمامك.
        </p>
      </AccordionSection>

      <AccordionSection title="ما الفرق الجوهري بينها وبين الـ Cohort؟">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          السر في الاتجاه الزمني! دراسات الـ Cohort: تبدأ بـ التعرض (مثال: التدخين) وتنتظر في المستقبل حدوث المرض (سرطان الرئة). دراسات الـ Case-Control: تبدأ بـ المرض (مرضى بسرطان الرئة) وتبحث في الماضي عن التعرض (هل كانوا يدخنون؟).
        </p>
      </AccordionSection>
    </section>
  );
}

export function JournalsPublishingSection() {
  return (
    <section id="journals-publishing" className="mb-16 scroll-mt-20">
      <SectionHeader id="journals-publishing" title="المجلات والنشر (Publishing)" />
      <img src="/journals.jpg" alt="المجلات العلمية" className="w-full h-auto object-contain rounded-xl mb-6 shadow-lg" />

      <AccordionSection
        title="كيف تختار المجلة الصحيحة؟"
        defaultOpen={true}
      >
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          تعبت في البحث؟ الآن حان وقت البيع. اختيار المجلة هو نصف المعركة. يجب أن تبحث عن مجلة مهتمة بموضوعك (Scope) ومستواها مناسب لجودة شغلك.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <KeywordBadge>Impact Factor</KeywordBadge>
            <p className="text-xs text-gray-600 dark:text-gray-400">رقم يعبر عن قوة المجلة وعدد المرات التي استشهد فيها الناس بأبحاثها.</p>
          </div>
          <div className="flex items-center gap-3">
            <KeywordBadge>Indexing</KeywordBadge>
            <p className="text-xs text-gray-600 dark:text-gray-400">تأكد أن المجلة موجودة في PubMed أو Scopus. إذا لم تكن موجودة، كأنك لم تنشر!</p>
          </div>
          <div className="flex items-center gap-3">
            <KeywordBadge>Open Access</KeywordBadge>
            <p className="text-xs text-gray-600 dark:text-gray-400">هل البحث سيكون متاحاً للكل مجاناً؟ انتبه، بعض المجلات تطلب مبالغ كبيرة (APC) مقابل النشر المفتوح.</p>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="رحلة البحث من الـ Submission حتى الـ Acceptance">
        <div className="relative border-r-2 border-blue-100 dark:border-blue-900 pr-6 space-y-8">
          <div className="relative">
            <div className="absolute -right-[33px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900"></div>
            <h5 className="font-bold text-sm mb-1">الـ Submission</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">ترفع ملفاتك، الـ Cover Letter، والجداول على موقع المجلة.</p>
          </div>
          <div className="relative">
            <div className="absolute -right-[33px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900"></div>
            <h5 className="font-bold text-sm mb-1">الـ Editorial Review</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">المحرر يقرأ البحث؛ إما أن يرفضه فوراً (Desk Reject) أو يرسله للمحكمين.</p>
          </div>
          <div className="relative">
            <div className="absolute -right-[33px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900"></div>
            <h5 className="font-bold text-sm mb-1">الـ Peer Review</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">اثنان أو ثلاثة خبراء يقرأون بحثك بدقة ويعطون ملاحظاتهم.</p>
          </div>
          <div className="relative">
            <div className="absolute -right-[33px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900"></div>
            <h5 className="font-bold text-sm mb-1">الـ Decision</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">إما قبول (Accept)، أو تعديلات (Major/Minor Revision)، أو رفض (Reject).</p>
          </div>
        </div>
        <ProTipBox>
          <p>
            احذر من الـ Predatory Journals! هي مجلات نصابة توهمك أنها علمية وتقبل بحثك في يومين مقابل مال، ولكن الحقيقة أنها غير مفهرسة ولا أحد يحترم النشر فيها. دائماً تفقد المجلة في موقع Scimago أو Beall's List قبل أن ترسل شغلك!
          </p>
        </ProTipBox>
      </AccordionSection>
    </section>
  );
}
