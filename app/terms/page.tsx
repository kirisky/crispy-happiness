'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLocale } from '@/hooks/use-locale'

const t = {
  zh: {
    dir: 'ltr' as const,
    title: '使用条款',
    subtitle: '关于寰球星途卫星数据服务的条款和条件',
    lastUpdated: '最后更新于',
    sections: [
      {
        title: '1. 服务接受条款',
        content: '通过访问和使用寰球星途提供的卫星数据服务，您同意受本使用条款的约束。如您不同意这些条款，请勿使用我们的服务。寰球星途保留随时修改这些条款的权利，修改后的条款将自发布之日起生效。',
      },
      {
        title: '2. 许可证授予',
        content: '寰球星途授予您有限的、非独占的、不可转让的许可证，以便使用我们的卫星数据和服务。此许可证仅供您个人或企业使用，不允许用于商业转售、再许可或分发，除非获得明确书面授权。',
      },
      {
        title: '3. 使用限制',
        content: '您同意不会使用我们的服务进行以下操作：未经授权访问或修改数据；进行逆向工程或解构；使用数据进行非法活动；侵犯第三方知识产权或隐私；或对我们的服务进行任何可能损害其完整性或性能的行为。',
      },
      {
        title: '4. 知识产权',
        content: '所有卫星数据、影像、文档、软件和其他内容均为寰球星途或其许可方的专有财产。这些内容受版权、商标和其他知识产权法的保护。您对所收集内容没有所有权或权利，仅拥有使用许可。',
      },
      {
        title: '5. 用户责任',
        content: '您对您在使用我们服务时的所有行为负责。您必须遵守所有适用的法律和法规，特别是与卫星数据使用相关的出口管制和国家安全法规。您不得将数据用于任何违法用途。',
      },
      {
        title: '6. 免责声明',
        content: '寰球星途按"现状"提供服务，不提供任何明示或暗示的保证。我们不保证数据的准确性、完整性或及时性。用户对使用我们的数据进行的任何操作和决策负全部责任。',
      },
      {
        title: '7. 责任限制',
        content: '在任何情况下，寰球星途均不对因使用或无法使用我们的服务而造成的任何间接、特殊或后续损害负责，包括利润损失或数据丢失，即使已被告知此类损害的可能性。',
      },
      {
        title: '8. 终止权',
        content: '寰球星途保留随时终止或暂停您的服务访问权的权利，无需预先通知，特别是在违反这些条款时。终止后，您必须停止使用我们的服务和数据。',
      },
      {
        title: '9. 第三方内容',
        content: '我们的服务可能包含指向第三方网站或服务的链接。寰球星途不对第三方内容负责，也不保证其准确性或合法性。使用第三方服务完全由您自行承担风险。',
      },
      {
        title: '10. 保密信息',
        content: '如果您向寰球星途提交任何机密或专有信息，我们将根据相关保密协议予以保护。但公开可得、不违反保密协议或由第三方合法获得的信息除外。',
      },
      {
        title: '11. 争议解决',
        content: '由这些条款引起的任何争议将首先通过友好协商解决。如果协商失败，争议应根据您所在国家的法律和司法管辖权进行解决。',
      },
      {
        title: '12. 完整协议',
        content: '这些使用条款，连同我们的隐私政策和任何其他书面协议，构成了您与寰球星途之间的完整协议。如果这些条款的任何部分被认定为无效，其余部分仍将继续生效。',
      },
    ],
    contact: {
      title: '联系我们',
      text: '如对本使用条款有任何疑问，请通过以下方式联系我们：',
      button: '联系我们',
    },
  },
  en: {
    dir: 'ltr' as const,
    title: 'Terms of Use',
    subtitle: 'Terms and conditions for Starpath Global satellite data services',
    lastUpdated: 'Last updated on',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: 'By accessing and using satellite data services provided by Starpath Global, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services. Starpath Global reserves the right to modify these terms at any time, and modified terms take effect upon publication.',
      },
      {
        title: '2. License Grant',
        content: 'Starpath Global grants you a limited, non-exclusive, non-transferable license to use our satellite data and services. This license is for your personal or business use only and does not permit commercial resale, sublicensing, or distribution without explicit written authorization.',
      },
      {
        title: '3. Use Restrictions',
        content: 'You agree not to use our services for: unauthorized access or modification of data; reverse engineering or deconstruction; illegal activities; infringement of third-party intellectual property or privacy rights; or any actions that may compromise the integrity or performance of our services.',
      },
      {
        title: '4. Intellectual Property',
        content: 'All satellite data, imagery, documentation, software, and other content are proprietary property of Starpath Global or its licensors. This content is protected by copyright, trademark, and other intellectual property laws. You have no ownership or rights to collected content, only a usage license.',
      },
      {
        title: '5. User Responsibility',
        content: 'You are responsible for all your actions while using our services. You must comply with all applicable laws and regulations, particularly export controls and national security laws related to satellite data use. You may not use data for any unlawful purpose.',
      },
      {
        title: '6. Disclaimer',
        content: 'Starpath Global provides services on an "as-is" basis without express or implied warranties. We do not guarantee the accuracy, completeness, or timeliness of data. Users are fully responsible for any operations and decisions made using our data.',
      },
      {
        title: '7. Limitation of Liability',
        content: 'Starpath Global is not liable for any indirect, special, or consequential damages arising from the use or inability to use our services, including profit loss or data loss, even if informed of such damages\' possibility.',
      },
      {
        title: '8. Termination Rights',
        content: 'Starpath Global reserves the right to terminate or suspend your service access at any time without prior notice, particularly when these terms are violated. Upon termination, you must cease using our services and data.',
      },
      {
        title: '9. Third-Party Content',
        content: 'Our services may include links to third-party websites or services. Starpath Global is not responsible for third-party content and does not guarantee its accuracy or legality. Use of third-party services is entirely at your own risk.',
      },
      {
        title: '10. Confidential Information',
        content: 'If you submit any confidential or proprietary information to Starpath Global, we will protect it according to relevant confidentiality agreements. Exceptions include publicly available information, information not violating confidentiality agreements, or information legally obtained by third parties.',
      },
      {
        title: '11. Dispute Resolution',
        content: 'Any disputes arising from these terms will first be resolved through amicable negotiation. If negotiation fails, disputes will be resolved according to the laws and jurisdiction of your country.',
      },
      {
        title: '12. Entire Agreement',
        content: 'These Terms of Use, along with our Privacy Policy and any other written agreements, constitute the complete agreement between you and Starpath Global. If any part of these terms is deemed invalid, the remainder will continue to be effective.',
      },
    ],
    contact: {
      title: 'Contact Us',
      text: 'If you have any questions about these Terms of Use, please contact us:',
      button: 'Contact Us',
    },
  },
  ar: {
    dir: 'rtl' as const,
    title: 'شروط الاستخدام',
    subtitle: 'الشروط والأحكام لخدمات بيانات الأقمار الصناعية من Starpath Global',
    lastUpdated: 'آخر تحديث في',
    sections: [
      {
        title: '1. قبول الشروط',
        content: 'بالوصول واستخدام خدمات بيانات الأقمار الصناعية المقدمة من Starpath Global، فإنك توافق على التقيد بشروط الاستخدام هذه. إذا كنت لا توافق على هذه الشروط، فيرجى عدم استخدام خدماتنا. تحتفظ Starpath Global بحق تعديل هذه الشروط في أي وقت.',
      },
      {
        title: '2. منح الترخيص',
        content: 'تمنح Starpath Global لك ترخيصاً محدوداً وغير حصري وغير قابل للنقل لاستخدام بيانات الأقمار الصناعية والخدمات الخاصة بنا. هذا الترخيص مخصص لاستخدامك الشخصي أو التجاري فقط ولا يسمح ببيع أو ترخيص أو توزيع تجاري بدون موافقة كتابية صريحة.',
      },
      {
        title: '3. قيود الاستخدام',
        content: 'توافق على عدم استخدام خدماتنا للوصول غير المصرح به أو تعديل البيانات؛ الهندسة العكسية أو فك التعليمات البرمجية؛ الأنشطة غير القانونية؛ انتهاك حقوق الملكية الفكرية للغير أو الخصوصية؛ أو أي إجراءات قد تؤثر على سلامة خدماتنا.',
      },
      {
        title: '4. الملكية الفكرية',
        content: 'جميع بيانات الأقمار الصناعية والصور والوثائق والبرامج والمحتويات الأخرى هي ملكية حصرية لـ Starpath Global أو مرخصيها. هذا المحتوى محمي بموجب قوانين الملكية الفكرية والعلامات التجارية وحقوق النشر. ليس لديك ملكية أو حقوق في المحتوى المجمع، فقط ترخيص الاستخدام.',
      },
      {
        title: '5. مسؤولية المستخدم',
        content: 'أنت مسؤول عن جميع أفعالك عند استخدام خدماتنا. يجب عليك الامتثال لجميع القوانين واللوائح المعمول بها، خاصة فيما يتعلق بالتحكم في الصادرات والقوانين الأمنية الوطنية المتعلقة باستخدام بيانات الأقمار الصناعية.',
      },
      {
        title: '6. إخلاء المسؤولية',
        content: 'تقدم Starpath Global الخدمات "كما هي" بدون ضمانات صريحة أو ضمنية. لا نضمن دقة البيانات أو اكتمالها أو توقيتها. المستخدمون مسؤولون بالكامل عن أي عمليات أو قرارات يتم اتخاذها باستخدام بياناتنا.',
      },
      {
        title: '7. تحديد المسؤولية',
        content: 'لا تتحمل Starpath Global المسؤولية عن أي أضرار غير مباشرة أو خاصة أو تبعية ناشئة عن استخدام أو عدم القدرة على استخدام خدماتنا، بما في ذلك خسارة الأرباح أو فقدان البيانات.',
      },
      {
        title: '8. حقوق الإنهاء',
        content: 'تحتفظ Starpath Global بالحق في إنهاء أو تعليق وصولك للخدمة في أي وقت دون إشعار مسبق، خاصة عند انتهاك هذه الشروط. عند الإنهاء، يجب عليك التوقف عن استخدام خدماتنا وبياناتنا.',
      },
      {
        title: '9. محتوى الطرف الثالث',
        content: 'قد تتضمن خدماتنا روابط لمواقع ويب أو خدمات تابعة لطرف ثالث. Starpath Global غير مسؤولة عن محتوى الطرف الثالث ولا تضمن دقته أو شرعيته. استخدام خدمات الطرف الثالث يتم بمسؤوليتك الخاصة.',
      },
      {
        title: '10. المعلومات السرية',
        content: 'إذا قدمت أي معلومات سرية أو ملكية لـ Starpath Global، فسنحميها وفقاً لاتفاقيات السرية ذات الصلة. الاستثناءات تشمل المعلومات المتاحة للجمهور أو المعلومات التي تم الحصول عليها بشكل قانوني من قبل أطراف ثالثة.',
      },
      {
        title: '11. حل النزاعات',
        content: 'سيتم حل أي نزاعات ناشئة عن هذه الشروط أولاً من خلال التفاوض الودي. إذا فشل التفاوض، سيتم حل النزاعات وفقاً لقوانين واختصاص دولتك.',
      },
      {
        title: '12. الاتفاق الكامل',
        content: 'تشكل شروط الاستخدام هذه، جنباً إلى جنب مع سياسة الخصوصية الخاصة بنا وأي اتفاقيات مكتوبة أخرى، الاتفاق الكامل بينك وبين Starpath Global. إذا تم اعتبار أي جزء من هذه الشروط غير صحيح، فإن البقية ستبقى سارية المفعول.',
      },
    ],
    contact: {
      title: 'اتصل بنا',
      text: 'إذا كان لديك أي أسئلة حول شروط الاستخدام هذه، يرجى الاتصال بنا:',
      button: 'اتصل بنا',
    },
  },
}

export default function TermsPage() {
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
