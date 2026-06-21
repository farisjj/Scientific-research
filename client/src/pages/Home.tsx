import { useState, useEffect } from 'react';

import { SearchBar } from '@/components/SearchBar';
import { ScrollReveal } from '@/components/ScrollReveal';

// إضافة الحركات في الـ CSS
const heroStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
import { AccordionSection } from '@/components/AccordionSection';
import { ProTipBox } from '@/components/ProTipBox';
import { KeywordBadge } from '@/components/KeywordBadge';
import { BackToTopButton } from '@/components/BackToTopButton';
import { SectionHeader } from '@/components/SectionHeader';
import { InteractiveChecklist } from '@/components/InteractiveChecklist';
import { ResearchStepsChecklist } from '@/components/ResearchStepsChecklist';
import { EvidencePyramid } from '@/components/EvidencePyramid';
import { SampleSizeCalculator } from '@/components/SampleSizeCalculator';
import Footer from '@/components/Footer';
import {
  WritingPaperSection,
  CaseReportsSection,
  CrossSectionalSection,
  SystematicReviewsSection,
  JournalsPublishingSection,
} from './AdditionalSections';
import {
  ResearchEthicsSection,
  ReferenceManagementSection,
  CommonMistakesSection,
  PracticalTipsSection,
  AuthorshipAndEthicsSection,
} from './AdvancedSections';
import {
  AuthorshipRolesSection,
  JournalClassificationsSection,
  PredatoryJournalsSection,
  FundingStrategiesSection,
  AccessingPaidResearchSection,
  PortfolioStrategiesSection,
  ResearchSpecializationSection,
  DigitalIdentitySection,
  StatisticalToolsSection,
  WritingStrategySection,
  ResearchTemplatesSection,
  BiostatisticsDecisionTreeSection,
} from './MissingSections';

export default function Home() {
  const [activeSection, setActiveSection] = useState('intro');
  const [heroUrl] = useState('https://d2xsxph8kpxj0f.cloudfront.net/310519663757816550/LmGWbKbPRgyKAU53oZz3Tg/hero-medical-research-V9379w7s6ZdtT43EBDErCT.webp');

  const sections = [
    { id: 'intro', title: 'مدخل إلى البحث العلمي' },
    { id: 'cv-impact', title: 'تأثير البحث على الـ CV' },
    { id: 'hierarchy', title: 'هرم الأدلة الطبية' },
    { id: 'time-management', title: 'التوفيق بين الدراسة والبحث' },
    { id: 'writing-paper', title: 'كتابة الـ Paper' },
    { id: 'case-reports', title: 'تقارير الحالة' },
    { id: 'cross-sectional', title: 'الدراسات المقطعية' },
    { id: 'systematic-reviews', title: 'Systematic Reviews و Meta-analysis' },
    { id: 'journals-publishing', title: 'المجلات والنشر' },
    { id: 'research-ethics', title: 'أخلاقيات البحث' },
    { id: 'reference-management', title: 'إدارة المراجع' },
    { id: 'common-mistakes', title: 'الأخطاء الشائعة' },
    { id: 'practical-tips', title: 'نصائح عملية' },
    { id: 'authorship-ethics', title: 'التأليف والنزاهة' },
    { id: 'authorship-roles', title: 'أدوار التأليف' },
    { id: 'journal-classifications', title: 'تصنيفات المجلات' },
    { id: 'predatory-journals', title: 'Predatory Journals' },
    { id: 'funding-strategies', title: 'استراتيجيات التمويل' },
    { id: 'accessing-paid-research', title: 'الحصول على الأبحاث' },
    { id: 'portfolio-strategies', title: 'بناء الـ Portfolio البحثي' },
    { id: 'research-specialization', title: 'General vs Sub-specialty' },
    { id: 'digital-identity', title: 'الهوية البحثية الرقمية' },
    { id: 'research-templates', title: 'قوالب بحثية جاهزة' },
    { id: 'biostatistics-tree', title: 'الخريطة الإحصائية التفاعلية' },
    { id: 'statistical-tools', title: 'برامج التحليل الإحصائي' },
    { id: 'writing-strategy', title: 'استراتيجية الكتابة' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950" dir="rtl">
      <style>{heroStyles}</style>
      <SearchBar />
      <main className="w-full transition-all duration-300">
        <section className="relative h-[50vh] sm:h-[60vh] md:h-96 overflow-hidden flex items-center justify-center">
          <img
            src={heroUrl}
            alt="Medical Research"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F3A7D]/40 via-[#0F3A7D]/70 to-[#0F3A7D]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F3A7D]/80 to-transparent"></div>
          
          {/* Content */}
          <div className="relative z-10 text-white text-right px-4 sm:px-6 md:pr-16 lg:pr-24 w-full max-w-5xl flex flex-col items-start">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight drop-shadow-md" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
              اصنع بصمتك في عالم الأبحاث الطبية
            </h1>
            <div className="w-12 sm:w-16 h-1 bg-blue-400 mb-3 sm:mb-6 rounded-full" style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }} />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-50/90 leading-relaxed max-w-2xl font-normal drop-shadow-sm" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
              دليلك الشامل لبناء أساس بحثي متين. أدوات، منهجيات، وخطوات عملية تنقلك من مقاعد الدراسة إلى مصاف الباحثين المتميزين.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-24 pb-4">
          <section id="intro" className="mb-16 scroll-mt-20">
            <ScrollReveal direction="up" delay={0}>
              <SectionHeader id="intro" title="مدخل إلى البحث العلمي الطبي" />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <img src="/importance.jpg" alt="أهمية البحث العلمي" className="w-full h-auto object-contain rounded-xl mb-6 shadow-lg" />
            </ScrollReveal>

            <AccordionSection
              title="ماذا يعني Medical Research أصلاً؟"
              defaultOpen={true}
            >
              <p className="text-sm text-gray-700 dark:text-gray-300">
                الـ Research ليس بالضرورة أن يكون معقداً أو في مختبرات كيميائية وأنابيب اختبار. ببساطة هو أن تسأل سؤالاً ذكياً وتبحث عن إجابته بطريقة صحيحة ومنهجية (Systematic Approach).
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                هو الأداة التي نطور بها الطب؛ سواء اكتشفنا علاجاً جديداً، أو حسنّا طريقة تشخيص، أو حتى فهمنا طبيعة مرض معين وكيف يتفاعل المرضى معه بشكل أفضل.
              </p>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 border-r-4 border-blue-600 dark:border-blue-400 rounded">
                <p className="text-blue-900 dark:text-blue-200">
                  الـ Research ليس رفاهية للطبيب الطموح، هو ضرورة. كل استشاري ناجح في العالم بدأ بسؤال وفضول علمي بسيط.
                </p>
              </div>
            </AccordionSection>

            <AccordionSection title="لماذا الـ Research مهم لطلاب الطب؟">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                في عالم الطب حالياً، شطارتك كطبيب لا تكفي وحدها، يجب أن تكون باحثاً أيضاً. الـ Research هو الورقة الرابحة في يدك لهذه الأسباب:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li><span className="text-[#0F3A7D] dark:text-blue-400 font-bold">الـ CV وعنق الزجاجة:</span> هو الذي يميزك عن آلاف المتقدمين لبرامج الإقامة (Residency Programs) التنافسية محلياً ودولياً مثل الـ USMLE والـ PLAB.</li>
                <li><span className="text-[#0F3A7D] dark:text-blue-400 font-bold">إتقان الـ Evidence-Based Medicine (EBM):</span> تتعلم كيف تقرأ الـ Papers بنظرة ناقدة وتعرف كيف تستخرج المعلومة الصحيحة والدقيقة لتطبقها على مرضاك.</li>
                <li><span className="text-[#0F3A7D] dark:text-blue-400 font-bold">بناء شبكة علاقات (Networking):</span> يفتح لك أبواب العمل المباشر مع Consultants واستشاريين كبار، وهذا يسهل عليك الحصول على رسائل توصية (LoRs) قوية.</li>
                <li><span className="text-[#0F3A7D] dark:text-blue-400 font-bold">مهارات العمل الجماعي (Teamwork):</span> تتعلم كيف تعمل ضمن فريق، وتوزع المهام، وتتواصل بفعالية؛ وهي أهم مهارات الطبيب الناجح.</li>
              </ul>
            </AccordionSection>

            <AccordionSection title="مثال من الواقع">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                تخيل طبيباً لاحظ في العيادة أن مرضى السكري الذين يمارسون رياضة معينة كانت استجابتهم للأدوية أفضل بكثير من غيرهم. بدل أن تظل مجرد ملاحظة عابرة، جمع بيانات هؤلاء المرضى وحللها (Data Analysis) وقارنها علمياً وأثبت للعالم أن هذه الرياضة فعلاً تساعد في العلاج. هذا هو الـ Research ببساطة!
              </p>
            </AccordionSection>
          </section>

          <section id="cv-impact" className="mb-16 scroll-mt-20">
            <ScrollReveal direction="up" delay={0}>
              <SectionHeader id="cv-impact" title="تأثير البحث على الـ CV" />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <img src="/cv_impact.jpg" alt="تأثير البحث على السيرة الذاتية" className="w-full h-auto object-contain rounded-xl mb-6 shadow-lg" />
            </ScrollReveal>

            <AccordionSection
              title="كيف يرفع البحث قيمتك الأكاديمية؟"
              defaultOpen={true}
            >
              <p className="text-sm text-gray-700 dark:text-gray-300">
                الـ CV الطبي ليس مجرد قائمة بالأشياء التي فعلتها، هو القصة التي تحكي من أنت كطالب طب طموح.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                لما تضيف Paper منشورة لـ CV الخاص بك، أنت لا تقول فقط عندي خبرة، أنت تثبت أنك قادر على التفكير في مشكلة، وتصميم حل، وتنفيذه والوصول لنتائج بنجاح.
              </p>
            </AccordionSection>

            <AccordionSection title="الوضع في الأردن">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                في المستشفيات الكبيرة والتنافسية في الأردن، ستجد عشرات الطلاب معدلاتهم قريبة من بعضها. عندما يرى الـ Interviewer أن لديك أبحاثاً منشورة، تتحول المقابلة من مجرد تسميع معلومات إلى دردشة علمية ممتعة عن شغلك، وهذا يعطيك أولوية كبيرة.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                أغلب المراكز والمستشفيات حالياً صارت تعتمد نظام نقاط (Points System) لتقييم المتقدمين، ووجود ورقة علمية باسمك يعطيك نقاطاً إضافية ترفع ترتيبك فوراً فوق منافسيك.
              </p>
            </AccordionSection>

            <AccordionSection title="أمريكا - مسار USMLE">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                بعدما صار الـ <KeywordBadge>USMLE Step 1</KeywordBadge> بنظام النجاح والرسوب (Pass/Fail)، لم يعد هناك طريقة للتميز غير علامة Step 2 CK والـ CV القوي والـ Research.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                في التخصصات التنافسية مثل الـ Surgery أو الـ Oncology أو الـ Cardiology، الـ Research صار شرطاً أساسياً وليس مجرد إضافة لطيفة. إحصائيات الـ <KeywordBadge>The Match</KeywordBadge> تؤكد أن المقبولين لديهم قائمة من الـ Research والـ Posters تفوق غيرهم بكثير.
              </p>
            </AccordionSection>

            <AccordionSection title="بريطانيا - مسار PLAB والـ NHS">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                النظام البريطاني للقبول في برامج التدريب المتخصص (Specialty Training) يعتمد كلياً على نظام النقاط (Point-based System) داخل الـ Portfolio الخاص بك.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                النشر في مجلة مفهرسة في <KeywordBadge>PubMed</KeywordBadge> يعطيك أعلى النقاط، وتزيد النقاط بشكل حاسم لو كنت أنت الـ <KeywordBadge>First Author</KeywordBadge> للورقة العلمية.
              </p>
            </AccordionSection>

            <AccordionSection title="أي أبحاث ترفع الـ CV أكثر؟">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ليس من الضروري أن تكتشف علاجاً للسرطان لكي يكون الـ CV الخاص بك قوياً! هناك أنواع أبحاث يمكن للطلاب القيام بها وتعتبر ممتازة:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li><KeywordBadge>Systematic Reviews</KeywordBadge> و <KeywordBadge>Meta-analysis</KeywordBadge>: هذه قمة الهرم وتثبت قدرتك العالية على التحليل والنقد.</li>
                <li><KeywordBadge>Case Reports</KeywordBadge>: ممتازة جداً وتبين أنك طالب تملك <KeywordBadge>Clinical Sense</KeywordBadge> وتستطيع التقاط الحالات النادرة.</li>
              </ul>
              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-600 dark:border-yellow-400 rounded">
                <p className="text-yellow-900 dark:text-yellow-200">
                  الجودة أهم من الكمية. ورقة علمية واحدة قوية في مجلة محترمة و <KeywordBadge>Peer-reviewed</KeywordBadge> ومفهرسة في PubMed، أفضل من خمسة أبحاث في مجلات وهمية (Predatory Journals). ركز دائماً على الجودة، وحاول أن تكون من أوائل الأسماء (First أو Second Author).
                </p>
              </div>
            </AccordionSection>
          </section>

          <section id="hierarchy" className="mb-16 scroll-mt-20">
            <ScrollReveal direction="up" delay={0}>
              <SectionHeader id="hierarchy" title="هرم الأدلة الطبية (Hierarchy of Evidence)" />
            </ScrollReveal>
            <EvidencePyramid />
          </section>

          <section id="time-management" className="mb-16 scroll-mt-20">
            <ScrollReveal direction="up" delay={0}>
              <SectionHeader id="time-management" title="التوفيق بين الدراسة والبحث" />
            </ScrollReveal>
            <InteractiveChecklist 
              title="خطواتك لكي توازن بين دراستك وبحثك"
              items={[
                "حدد ساعة واحدة فقط في اليوم للبحث (ليس بالضرورة يوماً كاملاً).",
                "استغل عطلة نهاية الأسبوع للمهام التي تحتاج تركيزاً عالياً.",
                "لا تبدأ بحثاً جديداً قبل الامتحانات الكبيرة بشهر.",
                "وزع المهام على فريقك؛ لا تعمل كل شيء وحدك.",
                "استخدم تطبيقات تنظيم الوقت مثل Notion أو Trello."
              ]}
            />
          </section>

          <div id="research-types" className="scroll-mt-20">
            <WritingPaperSection />
            <CaseReportsSection />
            
            <section id="sample-size-calc" className="scroll-mt-20">
              <SampleSizeCalculator />
            </section>

            <CrossSectionalSection />
            <SystematicReviewsSection />
          </div>

          <div id="resources" className="scroll-mt-20">
            <JournalsPublishingSection />
            <ResearchEthicsSection />
            <ReferenceManagementSection />
          </div>

          <div id="tips" className="scroll-mt-20">
            <CommonMistakesSection />
            <PracticalTipsSection />
            <AuthorshipAndEthicsSection />
          </div>
          <AuthorshipRolesSection />
          <JournalClassificationsSection />
          <PredatoryJournalsSection />
          <FundingStrategiesSection />
          <AccessingPaidResearchSection />
          <PortfolioStrategiesSection />
          <ResearchSpecializationSection />
          <DigitalIdentitySection />
          <ResearchTemplatesSection />
          <BiostatisticsDecisionTreeSection />
          <StatisticalToolsSection />
          <WritingStrategySection />
        </div>
      </main>
      <BackToTopButton />
      <Footer />
    </div>
  );
}
