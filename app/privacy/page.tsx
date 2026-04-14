'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLocale } from '@/hooks/use-locale'

const t = {
  zh: {
    dir: 'ltr' as const,
    title: '隐私政策',
    subtitle: '寰球星途重视您的隐私和数据安全',
    lastUpdated: '最后更新于',
    sections: [
      {
        title: '1. 我们收集的信息',
        content: '寰球星途收集为了提供卫星数据服务而必需的信息。这包括个人识别信息（姓名、电子邮件、电话号码、企业信息）以及非个人信息（浏览历史、IP地址、Cookie数据）。当您通过我们的网站、产品或服务与我们互动时，我们可能会收集这些信息。',
      },
      {
        title: '2. 我们如何使用您的信息',
        content: '我们使用收集的信息来：提供和改进我们的卫星数据服务；回应您的查询和请求；发送更新和营销通信（仅在获得同意的情况下）；进行数据分析以改进我们的服务；确保网络安全和欺诈防控；遵守法律法规要求。',
      },
      {
        title: '3. 数据保护与安全',
        content: '寰球星途实施行业标准的安全措施来保护您的数据，包括加密、访问控制和定期安全审计。然而，互联网传输无法完全保证安全，我们不对数据泄露承担绝对责任。我们的安全措施旨在降低风险并保护个人信息。',
      },
      {
        title: '4. Cookie与追踪技术',
        content: '我们使用Cookie和类似技术来增强用户体验、分析网站使用情况和个性化内容。您可以通过浏览器设置控制Cookie的使用。某些功能可能在禁用Cookie后无法正常工作。',
      },
      {
        title: '5. 信息共享',
        content: '除非必要，寰球星途不会向第三方出售或共享您的个人信息。我们可能在以下情况下共享信息：与服务提供商合作；法律要求或政府请求；保护公司和用户的权利与安全。所有第三方都受严格的保密协议约束。',
      },
      {
        title: '6. 国际数据转移',
        content: '寰球星途在多个国家开展业务。您的数据可能被转移、存储和处理到您所在国家以外的地方。当我们进行国际转移时，我们遵守相关的数据保护法规和隐私协议。',
      },
      {
        title: '7. 您的权利',
        content: '根据适用的隐私法，您拥有访问、更正、删除或转移您个人数据的权利。您也可以撤销我们处理您信息的同意。如需行使这些权利，请通过联系我们的隐私团队进行操作。',
      },
      {
        title: '8. 隐私政策的变更',
        content: '寰球星途保留随时修改本隐私政策的权利。任何重大变更将通过电子邮件或网站公告进行通知。持续使用我们的服务表示您接受更新后的隐私政策。',
      },
    ],
    contact: {
      title: '联系我们',
      text: '如对本隐私政策有任何疑问，请通过以下方式联系我们：',
      button: '联系隐私团队',
    },
  },
  en: {
    dir: 'ltr' as const,
    title: 'Privacy Policy',
    subtitle: 'Starpath Global values your privacy and data security',
    lastUpdated: 'Last updated on',
    sections: [
      {
        title: '1. Information We Collect',
        content: 'Starpath Global collects information necessary to provide satellite data services. This includes personally identifiable information (name, email, phone number, business information) and non-personal information (browsing history, IP address, cookie data). We may collect this information when you interact with our website, products, or services.',
      },
      {
        title: '2. How We Use Your Information',
        content: 'We use collected information to: provide and improve our satellite data services; respond to your queries and requests; send updates and marketing communications (only with consent); conduct data analysis to improve our services; ensure network security and fraud prevention; comply with legal and regulatory requirements.',
      },
      {
        title: '3. Data Protection & Security',
        content: 'Starpath Global implements industry-standard security measures to protect your data, including encryption, access controls, and regular security audits. However, internet transmission cannot guarantee complete security, and we do not assume absolute responsibility for data breaches. Our security measures aim to reduce risk and protect personal information.',
      },
      {
        title: '4. Cookies & Tracking Technologies',
        content: 'We use cookies and similar technologies to enhance user experience, analyze website usage, and personalize content. You can control cookie usage through your browser settings. Some features may not function properly if cookies are disabled.',
      },
      {
        title: '5. Information Sharing',
        content: 'Unless necessary, Starpath Global does not sell or share your personal information with third parties. We may share information in the following cases: collaboration with service providers; legal requirements or government requests; protection of company and user rights and security. All third parties are bound by strict confidentiality agreements.',
      },
      {
        title: '6. International Data Transfer',
        content: 'Starpath Global operates in multiple countries. Your data may be transferred, stored, and processed outside your country of residence. When we conduct international transfers, we comply with applicable data protection regulations and privacy agreements.',
      },
      {
        title: '7. Your Rights',
        content: 'Under applicable privacy laws, you have the right to access, correct, delete, or transfer your personal data. You may also withdraw consent for us to process your information. To exercise these rights, please contact our privacy team.',
      },
      {
        title: '8. Changes to Privacy Policy',
        content: 'Starpath Global reserves the right to modify this privacy policy at any time. Any significant changes will be notified via email or website announcement. Continued use of our services indicates your acceptance of the updated privacy policy.',
      },
    ],
    contact: {
      title: 'Contact Us',
      text: 'If you have any questions about this privacy policy, please contact us:',
      button: 'Contact Privacy Team',
    },
  },
  ar: {
    dir: 'rtl' as const,
    title: 'سياسة الخصوصية',
    subtitle: 'تقدر Starpath Global خصوصيتك وأمان البيانات',
    lastUpdated: 'آخر تحديث في',
    sections: [
      {
        title: '1. المعلومات التي نجمعها',
        content: 'تجمع Starpath Global المعلومات اللازمة لتقديم خدمات بيانات الأقمار الصناعية. يتضمن ذلك المعلومات الشخصية (الاسم والبريد الإلكتروني ورقم الهاتف ومعلومات الأعمال) والمعلومات غير الشخصية (سجل التصفح وعنوان IP وبيانات الكوكيز). قد نجمع هذه المعلومات عند تفاعلك مع موقعنا أو منتجاتنا أو خدماتنا.',
      },
      {
        title: '2. كيفية استخدام معلوماتك',
        content: 'نستخدم المعلومات المجمعة لـ: تقديم وتحسين خدمات بيانات الأقمار الصناعية؛ الرد على استفساراتك وطلباتك؛ إرسال التحديثات والاتصالات التسويقية (فقط مع الموافقة)؛ إجراء تحليل البيانات لتحسين خدماتنا؛ ضمان أمن الشبكة والوقاية من الاحتيال؛ الامتثال للمتطلبات القانونية والتنظيمية.',
      },
      {
        title: '3. حماية البيانات والأمان',
        content: 'تطبق Starpath Global تدابير أمان بمستوى الصناعة لحماية بياناتك، بما في ذلك التشفير والتحكم في الوصول والتدقيق الأمني المنتظم. ومع ذلك، لا يمكن لنقل الإنترنت أن يضمن الأمان الكامل، ولا نتحمل المسؤولية المطلقة عن انتهاك البيانات. تهدف تدابير الأمان الخاصة بنا إلى تقليل المخاطر وحماية المعلومات الشخصية.',
      },
      {
        title: '4. ملفات تعريف الارتباط وتقنيات التتبع',
        content: 'نستخدم ملفات تعريف الارتباط وتقنيات مماثلة لتحسين تجربة المستخدم وتحليل استخدام موقع الويب وتخصيص المحتوى. يمكنك التحكم في استخدام ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك. قد لا تعمل بعض الميزات بشكل صحيح إذا تم تعطيل ملفات تعريف الارتباط.',
      },
      {
        title: '5. مشاركة المعلومات',
        content: 'لا تبيع Starpath Global أو تشارك معلوماتك الشخصية مع أطراف ثالثة إلا عند الضرورة. قد نشارك المعلومات في الحالات التالية: التعاون مع مقدمي الخدمات؛ المتطلبات القانونية أو طلبات حكومية؛ حماية حقوق الشركة والمستخدمين والأمان. جميع الأطراف الثالثة ملزمة باتفاقيات سرية صارمة.',
      },
      {
        title: '6. نقل البيانات الدولي',
        content: 'تعمل Starpath Global في دول متعددة. قد يتم نقل بياناتك وتخزينها ومعالجتها خارج دول إقامتك. عند إجراء عمليات نقل دولية، نمتثل للوائح حماية البيانات الساري والاتفاقيات المتعلقة بالخصوصية.',
      },
      {
        title: '7. حقوقك',
        content: 'بموجب قوانين الخصوصية المعمول بها، لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها وحذفها أو نقلها. يمكنك أيضاً سحب الموافقة على معالجة معلوماتك. لممارسة هذه الحقوق، يرجى التواصل مع فريق الخصوصية الخاص بنا.',
      },
      {
        title: '8. التغييرات في سياسة الخصوصية',
        content: 'تحتفظ Starpath Global بالحق في تعديل سياسة الخصوصية هذه في أي وقت. سيتم إخطارك بأي تغييرات كبيرة عبر البريد الإلكتروني أو إعلان الموقع. يشير الاستخدام المستمر لخدماتنا إلى قبولك للسياسة المحدثة.',
      },
    ],
    contact: {
      title: 'اتصل بنا',
      text: 'إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا:',
      button: 'اتصل بفريق الخصوصية',
    },
  },
}

export default function PrivacyPage() {
  const { locale, setLocale, mounted } = useLocale()
  if (!mounted) return <div className="min-h-screen bg-white" />
  const pg = t[locale]

  return (
    <div className="min-h-screen bg-white" dir={pg.dir}>
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,210,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="relative w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">{pg.title}</h1>
          <p className="text-white/70 text-base sm:text-lg font-light max-w-2xl text-balance">{pg.subtitle}</p>
          <p className="text-white/50 text-sm mt-6">{pg.lastUpdated} 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full max-w-3xl mx-auto px-4 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {pg.sections.map((section, idx) => (
              <div key={idx} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold text-[#0a1628] mb-4 leading-tight text-balance">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed text-pretty">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0a1628] mb-4">{pg.contact.title}</h2>
            <p className="text-gray-600 mb-8 text-balance">{pg.contact.text}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
              {pg.contact.button}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  )
}
