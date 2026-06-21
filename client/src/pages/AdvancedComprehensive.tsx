import { AccordionSection } from '@/components/AccordionSection';

export function ResearchEthicsSection() {
  return (
    <section id="research-ethics" className="mb-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-[#0F3A7D] mb-8 font-poppins">
        أخلاقيات البحث العلمي
      </h2>

      <AccordionSection title="لماذا أخلاقيات البحث مهمة؟" defaultOpen={true}>
        <p>
          البحث العلمي ليس فقط عن الأرقام والنتائج. هناك أشخاص حقيقيون خلف كل دراسة. يجب أن نحميهم.
        </p>
        <p className="mt-3">
          أخلاقيات البحث تضمن أن:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>المرضى يعطون موافقتهم بحرية وعن وعي (Informed Consent)</li>
          <li>خصوصيتهم محمية تماماً</li>
          <li>البحث لن يسبب لهم ضرراً</li>
          <li>النتائج تُستخدم بشكل أخلاقي</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="لجنة الأخلاقيات (IRB) - ما هي وماذا تفعل؟">
        <p>
          كل جامعة ومستشفى لديها لجنة أخلاقيات (Institutional Review Board - IRB). دورهم مراجعة بحثك والتأكد من أنه أخلاقي.
        </p>
        <p className="mt-3">
          قبل أن تبدأ أي بحث يتضمن مرضى أو بيانات شخصية، يجب أن تحصل على موافقة IRB. حتى لو كان استبياناً بسيطاً!
        </p>
      </AccordionSection>

      <AccordionSection title="الموافقة المستنيرة (Informed Consent)">
        <p>
          المريض يجب أن يعرف:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>ما هو البحث بالضبط؟</li>
          <li>ماذا سيحدث له؟</li>
          <li>هل هناك مخاطر؟</li>
          <li>هل هناك فوائد؟</li>
          <li>أنه يمكنه الانسحاب في أي وقت</li>
        </ul>
        <p className="mt-3">
          بدون هذا، بحثك غير أخلاقي ولن تقبله أي مجلة محترمة!
        </p>
      </AccordionSection>

      <AccordionSection title="حماية البيانات الشخصية">
        <p>
          عندما تجمع بيانات من مرضى:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>احذف الأسماء والأرقام الوطنية</li>
          <li>استخدم أرقام تعريفية بدلاً منها</li>
          <li>احفظ البيانات في مكان آمن</li>
          <li>لا تشارك البيانات مع أي شخص بدون إذن</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="الانتحال والنزاهة العلمية">
        <p>
          الانتحال (Plagiarism) هو نسخ عمل شخص آخر دون نسبه. هذا جريمة في عالم البحث العلمي!
        </p>
        <p className="mt-3">
          استخدم برامج مثل Turnitin للتحقق من أن بحثك أصلي. حتى 5% تشابه مع أبحاث أخرى قد يرفع علامات استفهام!
        </p>
      </AccordionSection>

      <AccordionSection title="تضارب المصالح (Conflict of Interest)">
        <p>
          إذا كنت تتلقى أموالاً من شركة أدوية، وبحثك يختبر دواءهم، هناك تضارب مصالح!
        </p>
        <p className="mt-3">
          يجب أن تفصح عن هذا بوضوح في بحثك. الشفافية هي أساس الثقة.
        </p>
      </AccordionSection>
    </section>
  );
}

export function ReferenceManagementSection() {
  return (
    <section id="reference-management" className="mb-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-[#0F3A7D] mb-8 font-poppins">
        إدارة المراجع
      </h2>

      <AccordionSection title="لماذا إدارة المراجع مهمة؟" defaultOpen={true}>
        <p>
          بحث بدون مراجع هو كبناء بدون أساس! المراجع تثبت أن ما تقوله مدعوم بأبحاث سابقة.
        </p>
        <p className="mt-3">
          إدارة المراجع بشكل صحيح توفر عليك ساعات من العمل اليدوي الممل.
        </p>
      </AccordionSection>

      <AccordionSection title="أدوات إدارة المراجع الأساسية">
        <ul className="list-disc list-inside space-y-2">
          <li>Zotero: مجاني وقوي جداً، يُنصح به للطلاب</li>
          <li>Mendeley: واجهة جميلة وسهلة الاستخدام</li>
          <li>EndNote: احترافي لكن مدفوع</li>
          <li>Google Scholar: بسيط وسهل للبدايات</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="كيف تستخدم Zotero (الخيار الأفضل للطلاب)؟">
        <ol className="list-decimal list-inside space-y-2">
          <li>حمّل Zotero وثبّته على جهازك</li>
          <li>عندما تجد ورقة علمية في PubMed، اضغط على أيقونة Zotero في المتصفح</li>
          <li>ستُحفظ الورقة تلقائياً مع جميع معلوماتها</li>
          <li>عند كتابة بحثك في Word، استخدم إضافة Zotero لإدراج المراجع</li>
          <li>Zotero سيرتب كل المراجع بالتنسيق الصحيح تلقائياً!</li>
        </ol>
      </AccordionSection>

      <AccordionSection title="أنماط الاستشهاد (Citation Styles)">
        <p>
          هناك عدة طرق لكتابة المراجع:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>APA: الأكثر استخداماً في العلوم الاجتماعية والطب</li>
          <li>Vancouver: الأكثر استخداماً في المجلات الطبية</li>
          <li>Harvard: شائعة في الجامعات البريطانية</li>
        </ul>
        <p className="mt-3">
          تحقق من تعليمات المجلة - ستخبرك أي نمط تستخدم!
        </p>
      </AccordionSection>

      <AccordionSection title="نصيحة ذهبية">
        <p>
          ابدأ بجمع المراجع من اليوم الأول لبحثك. لا تنتظر حتى النهاية! هذا يوفر عليك وقتاً ثميناً ويجنبك الإحباط.
        </p>
      </AccordionSection>
    </section>
  );
}

export function CommonMistakesSection() {
  return (
    <section id="common-mistakes" className="mb-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-[#0F3A7D] mb-8 font-poppins">
        الأخطاء الشائعة التي يقع فيها الطلاب
      </h2>

      <AccordionSection title="الخطأ 1: اختيار موضوع بحث غير واقعي" defaultOpen={true}>
        <p>
          الكثير من الطلاب يختارون مواضيع تحتاج سنوات وتمويلاً ضخماً. ثم يستسلمون بعد أسابيع!
        </p>
        <p className="mt-3">
          الحل: اختر موضوعاً يمكنك إنجازه في 3-6 أشهر بالموارد المتاحة لك.
        </p>
      </AccordionSection>

      <AccordionSection title="الخطأ 2: عدم البحث عن أبحاث سابقة">
        <p>
          تبدأ بحثك دون أن تعرف أن نفس الموضوع نُشر 10 مرات قبلك!
        </p>
        <p className="mt-3">
          الحل: ابدأ دائماً بمراجعة أدبيات شاملة في PubMed و Scopus.
        </p>
      </AccordionSection>

      <AccordionSection title="الخطأ 3: حجم عينة صغير جداً">
        <p>
          توزيع استبيان على 20 شخص فقط ثم تعميم النتائج على كل الأردن!
        </p>
        <p className="mt-3">
          الحل: استخدم معادلات إحصائية (OpenEpi) لحساب الحد الأدنى للعينة.
        </p>
      </AccordionSection>

      <AccordionSection title="الخطأ 4: نسيان الموافقة الأخلاقية">
        <p>
          تجمع بيانات من مرضى دون موافقة IRB. المجلة ستطلبها وستُرفض!
        </p>
        <p className="mt-3">
          الحل: احصل على الموافقة قبل أن تبدأ جمع أي بيانات.
        </p>
      </AccordionSection>

      <AccordionSection title="الخطأ 5: المبالغة في النتائج">
        <p>
          دراسة على 50 مريضاً تُخرج استنتاجات عامة عن كل السكان!
        </p>
        <p className="mt-3">
          الحل: كن حذراً في استنتاجاتك. قل ما تثبته البيانات فقط.
        </p>
      </AccordionSection>

      <AccordionSection title="الخطأ 6: استخدام مراجع لم تقرأها">
        <p>
          تضيف مراجع لأن رأيتها في ورقة أخرى، دون أن تقرأها بنفسك!
        </p>
        <p className="mt-3">
          الحل: اقرأ كل مرجع قبل أن تستشهد به. المحكمون قد يسألون!
        </p>
      </AccordionSection>

      <AccordionSection title="الخطأ 7: الانتحال (Plagiarism)">
        <p>
          نسخ نصوص من أبحاث أخرى دون نسبها. هذا جريمة!
        </p>
        <p className="mt-3">
          الحل: استخدم Turnitin للتحقق من أصالة بحثك.
        </p>
      </AccordionSection>

      <AccordionSection title="الخطأ 8: اختيار مجلة ضعيفة أو مفترسة">
        <p>
          إرسال بحثك لمجلة Predatory تأخذ مالك وتنشر بدون تقييم!
        </p>
        <p className="mt-3">
          الحل: تحقق من معامل التأثير والتصنيف قبل الإرسال.
        </p>
      </AccordionSection>
    </section>
  );
}

export function PracticalTipsSection() {
  return (
    <section id="practical-tips" className="mb-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-[#0F3A7D] mb-8 font-poppins">
        نصائح عملية للنجاح
      </h2>

      <AccordionSection title="نصيحة 1: ابدأ مبكراً" defaultOpen={true}>
        <p>
          لا تنتظر حتى تتخرج. ابدأ الآن! كل يوم تنتظر هو يوم ضائع.
        </p>
      </AccordionSection>

      <AccordionSection title="نصيحة 2: اختر مشرفاً قوياً">
        <p>
          المشرف الجيد يوجهك، يصحح أخطاءك، ويفتح لك أبواباً. اختره بحكمة!
        </p>
      </AccordionSection>

      <AccordionSection title="نصيحة 3: اعمل ضمن فريق">
        <p>
          البحث الفردي صعب. الفريق يوزع العبء ويجعل العمل أسهل وأسرع.
        </p>
      </AccordionSection>

      <AccordionSection title="نصيحة 4: اكتب بينما تعمل">
        <p>
          لا تنتظر حتى تنتهي من كل شيء ثم تكتب. اكتب المقدمة والطرق الآن!
        </p>
      </AccordionSection>

      <AccordionSection title="نصيحة 5: اقرأ أبحاثاً مشابهة">
        <p>
          اقرأ 5-10 أبحاث في نفس مجالك. تعلم من هيكلهم وطريقة كتابتهم.
        </p>
      </AccordionSection>

      <AccordionSection title="نصيحة 6: استخدم الأدوات الصحيحة">
        <p>
          Zotero للمراجع، Grammarly للكتابة، Turnitin للتحقق من الانتحال. هذه الأدوات توفر عليك ساعات!
        </p>
      </AccordionSection>

      <AccordionSection title="نصيحة 7: كن صبوراً">
        <p>
          النشر يأخذ وقتاً. من الإرسال إلى النشر قد يستغرق 6-12 شهر. لا تستسلم!
        </p>
      </AccordionSection>

      <AccordionSection title="نصيحة 8: تعلم من الرفض">
        <p>
          إذا رفضت المجلة بحثك، لا تحبط. اقرأ التعليقات، عدّل، وأرسل لمجلة أخرى!
        </p>
      </AccordionSection>
    </section>
  );
}

export function AuthorshipAndEthicsSection() {
  return (
    <section id="authorship-ethics" className="mb-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-[#0F3A7D] mb-8 font-poppins">
        التأليف والنزاهة العلمية
      </h2>

      <AccordionSection title="من يستحق أن يكون مؤلفاً؟" defaultOpen={true}>
        <p>
          ليس كل من ساهم قليلاً يستحق أن يكون مؤلفاً! هناك معايير واضحة:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>ساهم بشكل كبير في تصميم أو تنفيذ البحث</li>
          <li>ساهم في تحليل البيانات</li>
          <li>كتب أو عدّل الورقة بشكل كبير</li>
          <li>وافق على النسخة النهائية</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="ترتيب المؤلفين (Author Order)">
        <p>
          الترتيب مهم جداً! First Author هو من فعل معظم العمل. Last Author عادة يكون المشرف الرئيسي.
        </p>
        <p className="mt-3">
          عند التقديم لـ Residency، يركزون على First و Last Author. Second Author أقل أهمية.
        </p>
      </AccordionSection>

      <AccordionSection title="الانتحال والسرقة العلمية">
        <p>
          الانتحال ليس فقط نسخ كلمة بكلمة. حتى إعادة صياغة نصوص دون نسبها تعتبر انتحالاً!
        </p>
        <p className="mt-3">
          استخدم Turnitin قبل الإرسال. إذا وجدت تشابهاً أكثر من 10-15%، عدّل!
        </p>
      </AccordionSection>

      <AccordionSection title="تضارب المصالح">
        <p>
          إذا كنت تتلقى أموالاً من جهة ما، يجب أن تفصح عن ذلك. الشفافية أساسية!
        </p>
      </AccordionSection>

      <AccordionSection title="الموافقة على النشر">
        <p>
          قبل أن تُرسل البحث، يجب أن يوافق عليه جميع المؤلفين. لا تُرسل بدون موافقة الجميع!
        </p>
      </AccordionSection>
    </section>
  );
}
