import { AccordionSection } from '@/components/AccordionSection';

export function WritingPaperSection() {
  return (
    <section id="writing-paper" className="mb-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-[#0F3A7D] mb-8 font-poppins">
        كتابة الورقة العلمية
      </h2>

      <AccordionSection title="هيكل الورقة العلمية الصحيح" defaultOpen={true}>
        <p>
          الورقة العلمية لها هيكل معياري يجب أن تتبعه. تخيل أنك تحكي قصة لصديقك، لكن بطريقة منظمة وعلمية:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>العنوان (Title): جملة واحدة واضحة تلخص البحث كاملاً</li>
          <li>الملخص (Abstract): 250 كلمة تشرح الدراسة كاملة</li>
          <li>المقدمة (Introduction): لماذا أجرينا هذا البحث؟</li>
          <li>الطرق (Methods): كيف أجرينا البحث بالتفصيل؟</li>
          <li>النتائج (Results): ماذا وجدنا؟</li>
          <li>المناقشة (Discussion): ماذا تعني هذه النتائج؟</li>
          <li>الخلاصة (Conclusion): الرسالة الأساسية للقارئ</li>
          <li>المراجع (References): كل الأوراق التي استشهدنا بها</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="المقدمة (Introduction): كيف تكتبها بشكل احترافي؟">
        <p>
          المقدمة هي أول انطباع. يجب أن تجذب انتباه القارئ وتخبره لماذا هذا البحث مهم.
        </p>
        <p className="mt-3">
          الخطوة الأولى: ابدأ بجملة عامة عن المشكلة الطبية. مثلاً: السكري يؤثر على مليار شخص حول العالم.
        </p>
        <p className="mt-3">
          الخطوة الثانية: ضيّق النطاق تدريجياً. ماذا نعرف عن هذه المشكلة؟ وما الذي لا نعرفه؟
        </p>
        <p className="mt-3">
          الخطوة الثالثة: اشرح الفجوة المعرفية (Knowledge Gap). هذا هو سبب وجود بحثك!
        </p>
        <p className="mt-3">
          الخطوة الرابعة: انتهِ بسؤالك البحثي أو فرضيتك (Research Question أو Hypothesis).
        </p>
      </AccordionSection>

      <AccordionSection title="الطرق (Methods): الجزء الأكثر أهمية">
        <p>
          هذا الجزء يجب أن يكون دقيقاً جداً. أي شخص يقرأ طرقك يجب أن يكون قادراً على تكرار بحثك بنفس النتائج.
        </p>
        <p className="mt-3">
          اكتب:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>من هي العينة المدروسة؟ (Study Population)</li>
          <li>كم عدد المشاركين؟ (Sample Size)</li>
          <li>ما هي معايير الاختيار؟ (Inclusion & Exclusion Criteria)</li>
          <li>كيف تم جمع البيانات؟ (Data Collection Methods)</li>
          <li>كيف تم تحليل البيانات؟ (Statistical Analysis)</li>
          <li>ما هي الاعتبارات الأخلاقية؟ (Ethical Considerations)</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="النتائج (Results): اجعلها واضحة وموضوعية">
        <p>
          في النتائج، تقول فقط ما وجدت. لا تفسر، لا تعلق، فقط الحقائق:
        </p>
        <p className="mt-3">
          استخدم الجداول والرسوم البيانية (Tables & Figures). صورة واحدة تساوي ألف كلمة!
        </p>
        <p className="mt-3">
          اكتب الأرقام بوضوح: 75% من المرضى تحسنوا، مقابل 45% في مجموعة المقارنة.
        </p>
      </AccordionSection>

      <AccordionSection title="المناقشة (Discussion): حيث تُظهر تفكيرك النقدي">
        <p>
          هنا تفسر نتائجك. هل تتفق مع الأبحاث السابقة؟ هل هناك اختلافات؟ لماذا؟
        </p>
        <p className="mt-3">
          ناقش القيود (Limitations) في بحثك بصراحة. هذا يُظهر نضجك العلمي.
        </p>
        <p className="mt-3">
          اقترح أبحاثاً مستقبلية (Future Research) لتكمل العمل.
        </p>
      </AccordionSection>

      <AccordionSection title="الأخطاء الشائعة التي يقع فيها الطلاب">
        <ul className="list-disc list-inside space-y-2">
          <li>كتابة ملخص (Abstract) بدون قراءة الورقة كاملة</li>
          <li>استخدام كلمات معقدة بدون داع (Overcomplication)</li>
          <li>نسيان ذكر حجم العينة أو طريقة الاختيار</li>
          <li>المبالغة في النتائج (مثال: دراسة على 50 مريضاً تُخرج استنتاجات عامة)</li>
          <li>إدراج مراجع لم تُقرأ فعلياً</li>
        </ul>
        <div className="mt-4 p-4 bg-yellow-50 border-r-4 border-yellow-600 rounded">
          <p className="text-yellow-900">
            نصيحة ذهبية: قبل أن تكتب، زر موقع EQUATOR Network. يوفر قوائم مرجعية (Checklists) لكل نوع بحث. استخدمها كخريطة طريق!
          </p>
        </div>
      </AccordionSection>
    </section>
  );
}

export function CaseReportsSection() {
  return (
    <section id="case-reports" className="mb-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-[#0F3A7D] mb-8 font-poppins">
        تقارير الحالة (Case Reports)
      </h2>

      <AccordionSection title="ما هي تقارير الحالة؟" defaultOpen={true}>
        <p>
          تقرير الحالة هو وصف طبي مفصل لقصة مرضية تخص مريضاً واحداً أو عدة مرضى (Case Series).
        </p>
        <p className="mt-3">
          هذا هو مدخلك الأسهل والأكثر متعة لعالم النشر العلمي. أنت لا تحتاج مختبراً أو تمويلاً، فقط قوة ملاحظة وحالة غريبة!
        </p>
      </AccordionSection>

      <AccordionSection title="متى نكتب تقرير حالة؟">
        <p>
          لتقنع مجلة بنشر تقريرك، يجب أن تحمل الحالة رسالة طبية جديدة:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>مرض نادر جداً لا يراه الطبيب إلا مرة واحدة في حياته</li>
          <li>تقديم غير معتاد لمرض شائع</li>
          <li>عرض جانبي غير متوقع لدواء</li>
          <li>استخدام مبتكر لعلاج معروف في حالة جديدة</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="الخطوات العملية من سرير المريض إلى النشر">
        <p>
          الخطوة 1: صيد الحالة في المستشفى
        </p>
        <p className="mt-3">
          ابنِ علاقة جيدة مع الأطباء المقيمين (Residents). اعرض عليهم: إذا واجهت حالة غريبة، أنا مستعد لتفريغ ملفها وكتابة البحث بالكامل.
        </p>
        <p className="mt-3">
          الخطوة 2: الموافقة المستنيرة (Informed Consent)
        </p>
        <p className="mt-3">
          قبل أن تنسخ أي بيانات، احصل على توقيع المريض. المجلة ستطلبها!
        </p>
        <p className="mt-3">
          الخطوة 3: جمع البيانات وتطمس الهوية
        </p>
        <p className="mt-3">
          اجمع كل شيء: السيرة المرضية، الفحوصات، الصور الإشعاعية. لكن احذر: احذف اسم المريض من أي صورة أشعة!
        </p>
        <p className="mt-3">
          الخطوة 4: مراجعة الأدبيات
        </p>
        <p className="mt-3">
          ابحث في PubMed: هل هذه الحالة نادرة فعلاً؟ إذا وجدت 300 حالة مشابهة، ربما لا تستحق النشر.
        </p>
        <p className="mt-3">
          الخطوة 5: الكتابة بناءً على معايير CARE
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>المقدمة: شرح المرض ولماذا هذه الحالة استثنائية</li>
          <li>عرض الحالة: قصة المريض بالتسلسل الزمني</li>
          <li>المناقشة: مقارنة مع الحالات السابقة والتفسير العلمي</li>
          <li>الخلاصة: رسالة واحدة (Take-home message) للأطباء</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="نصيحة ذهبية">
        <p>
          المجلات تعشق الصور! صورة واضحة لتخطيط قلب (ECG) أو رنين مغناطيسي (MRI) ترفع نسبة قبول بحثك بشكل هائل. اطلب النسخة الأصلية عالية الدقة من الطبيب أو طبيب الأشعة!
        </p>
      </AccordionSection>
    </section>
  );
}

export function CrossSectionalSection() {
  return (
    <section id="cross-sectional" className="mb-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-[#0F3A7D] mb-8 font-poppins">
        الدراسات المقطعية (Cross-Sectional Studies)
      </h2>

      <AccordionSection title="ما هي الدراسة المقطعية؟" defaultOpen={true}>
        <p>
          تخيل أنك تلتقط صورة فوتوغرافية لمرض معين أو سلوك صحي في لحظة زمنية محددة. أنت لا تتابع المرضى لسنوات، ولا تنظر في ماضيهم، فقط تسأل: ما هو الوضع الآن؟
        </p>
        <p className="mt-3">
          تُستخدم لقياس معدل الانتشار (Prevalence): ما هي نسبة انتشار القلق بين طلاب الطب في الأردن؟
        </p>
      </AccordionSection>

      <AccordionSection title="متطلبات إنجاز دراسة مقطعية قوية">
        <ul className="list-disc list-inside space-y-2">
          <li>أداة جمع بيانات موثوقة (غالباً استبيان معتمد)</li>
          <li>حجم عينة كافٍ (استخدم OpenEpi لحساب الحد الأدنى)</li>
          <li>موافقة أخلاقية (IRB Approval) حتى لو كان استبياناً بسيطاً</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="كيف تصمم استبياناً طبياً صحيحاً؟">
        <p>
          الخطأ الشائع: الجلوس في المقهى وكتابة أسئلة من رأسك! هذا استبيان (Unvalidated) والمجلات ترفضه.
        </p>
        <p className="mt-3">
          الطريقة الصحيحة:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>ابحث عن استبيان معتمد (Validated Questionnaire) تم استخدامه عالمياً</li>
          <li>إذا أردت ترجمته، استخدم الترجمة العكسية (Forward-Backward Translation)</li>
          <li>قم بدراسة استطلاعية (Pilot Study) على 15-20 شخص قبل النشر الفعلي</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="خطوات إنجاز الدراسة بالترتيب">
        <ol className="list-decimal list-inside space-y-2">
          <li>صياغة السؤال وتحديد العينة بدقة</li>
          <li>تجهيز البروتوكول والاستبيان المعتمد</li>
          <li>الحصول على الموافقة الأخلاقية (IRB)</li>
          <li>جمع البيانات من العينة السريرية (وليس من الواتساب!)</li>
          <li>تنظيف البيانات وحذف الاستجابات غير المنطقية</li>
          <li>التحليل الإحصائي باستخدام SPSS أو R</li>
          <li>الكتابة بناءً على معايير STROBE</li>
        </ol>
      </AccordionSection>

      <AccordionSection title="نصيحة ذهبية">
        <p>
          ابتعد عن استبيانات الواتساب (Snowball Sampling)! انزل إلى عيادات المستشفى واجمع البيانات مباشرة من المرضى. هذا الجهد الإضافي هو الفرق بين البحث الضعيف والبحث الاحترافي!
        </p>
      </AccordionSection>
    </section>
  );
}

export function SystematicReviewsSection() {
  return (
    <section id="systematic-reviews" className="mb-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-[#0F3A7D] mb-8 font-poppins">
        Systematic Reviews و Meta-analysis
      </h2>

      <AccordionSection title="ما هي المراجعة المنهجية والـ Meta-analysis؟" defaultOpen={true}>
        <p>
          بدلاً من إجراء تجربة على مرضى جدد، تقوم بجمع كل الأبحاث والتجارب السريرية (RCTs) التي نُشرت حول سؤال معين، وتقيمها بطريقة صارمة.
        </p>
        <p className="mt-3">
          Meta-analysis هي الخطوة الرياضية التي تأخذ الأرقام من كل تلك الدراسات وتدمجها في معادلة واحدة لتخرج بنتيجة قاطعة.
        </p>
      </AccordionSection>

      <AccordionSection title="لماذا هي قمة هرم الأدلة الطبية؟">
        <p>
          تخيل أن هناك 5 أبحاث حول دواء جديد. دراستان تقولان أنه ممتاز، وثلاث تقول أنه بلا فائدة. كطبيب، ماذا ستفعل؟
        </p>
        <p className="mt-3">
          المراجعة المنهجية تجمع كل الأبحاث، تقيم جودتها، وتخرج بخلاصة نهائية موثوقة. هذا هو السبب في أنها الأقوى!
        </p>
      </AccordionSection>

      <AccordionSection title="المهارات والأدوات المطلوبة">
        <ul className="list-disc list-inside space-y-2">
          <li>القدرة على البحث المتقدم في PubMed و Scopus</li>
          <li>فهم معايير تقييم جودة الأبحاث (GRADE Framework)</li>
          <li>استخدام برامج مثل RevMan أو Covidence</li>
          <li>مهارات إحصائية أساسية (لفهم الـ Forest Plots)</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="خطوات إنجاز Systematic Review بالترتيب">
        <ol className="list-decimal list-inside space-y-2">
          <li>تحديد السؤال البحثي بوضوح (PICO Framework)</li>
          <li>كتابة البروتوكول وتسجيله في PROSPERO</li>
          <li>البحث المنهجي في قواعد البيانات (PubMed, Scopus, Cochrane)</li>
          <li>تقييم جودة الأبحاث المختارة (Risk of Bias)</li>
          <li>استخراج البيانات من كل دراسة</li>
          <li>إجراء Meta-analysis إذا كانت البيانات متجانسة</li>
          <li>الكتابة بناءً على معايير PRISMA</li>
        </ol>
      </AccordionSection>

      <AccordionSection title="نصيحة ذهبية">
        <p>
          هذا النوع من الأبحاث لا يتطلب مختبراً أو تمويلاً ضخماً. كل ما تحتاجه هو لابتب واتصال بالإنترنت ومهارة بحث عالية. هذا هو السر لتميزك كطالب طب!
        </p>
      </AccordionSection>
    </section>
  );
}

export function JournalsPublishingSection() {
  return (
    <section id="journals-publishing" className="mb-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-[#0F3A7D] mb-8 font-poppins">
        المجلات والنشر العلمي
      </h2>

      <AccordionSection title="أنواع المجلات العلمية" defaultOpen={true}>
        <p>
          ليست كل المجلات متساوية! بعضها قوي جداً وبعضها ضعيف أو حتى مفترس.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>المجلات المفهرسة (Indexed Journals): مفهرسة في PubMed و Scopus</li>
          <li>المجلات المحكمة (Peer-reviewed): تمر على محكمين متخصصين</li>
          <li>المجلات المفترسة (Predatory Journals): تأخذ مالك وتنشر بدون تقييم!</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="معامل التأثير (Impact Factor) والتصنيفات">
        <p>
          معامل التأثير يقيس كم مرة يتم الاستشهاد بأبحاث المجلة. كلما كان أعلى، كانت المجلة أقوى.
        </p>
        <p className="mt-3">
          المجلات مقسمة إلى ربعيات (Quartiles):
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>Q1: الأقوى والأكثر تنافسية</li>
          <li>Q2: قوية وجيدة</li>
          <li>Q3: متوسطة</li>
          <li>Q4: ضعيفة نسبياً</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="كيف تختار المجلة المناسبة لبحثك؟">
        <ul className="list-disc list-inside space-y-2">
          <li>ابحث عن مجلات نشرت أبحاثاً مشابهة لبحثك</li>
          <li>تحقق من معامل التأثير والتصنيف</li>
          <li>اقرأ تعليمات المؤلفين (Author Guidelines)</li>
          <li>تأكد من أن المجلة مفهرسة في PubMed أو Scopus</li>
          <li>تجنب المجلات التي تطلب رسوم نشر عالية جداً بدون سبب</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="عملية الإرسال والمراجعة">
        <p>
          بعد أن تكمل بحثك:
        </p>
        <ol className="list-decimal list-inside mt-3 space-y-2">
          <li>اختر المجلة المناسبة</li>
          <li>اتبع تعليمات المؤلفين بدقة</li>
          <li>أرسل بحثك عبر نظام المجلة</li>
          <li>انتظر التقييم من محكمين متخصصين (2-4 أسابيع عادة)</li>
          <li>قد يطلبون تعديلات (Revisions)</li>
          <li>أرسل النسخة المعدلة مع ردودك على التعليقات</li>
          <li>إذا وافقوا، سيُنشر بحثك!</li>
        </ol>
      </AccordionSection>

      <AccordionSection title="نصيحة ذهبية">
        <p>
          الجودة تتفوق على الكمية. ورقة علمية واحدة قوية في مجلة محترمة أفضل من 5 أوراق في مجلات ضعيفة. ركز على الجودة!
        </p>
      </AccordionSection>
    </section>
  );
}
