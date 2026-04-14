'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Shield,
  FileSearch,
  AlertTriangle,
  Building2,
  TrendingUp,
  Scale,
  ArrowRight,
  Eye,
  Clock,
  Globe,
  BarChart3,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLocale } from '@/hooks/use-locale'

// ─── Inline translations ──────────────────────────────────────────────────────
const t = {
  zh: {
    dir: 'ltr' as const,
    hero: {
      title: '保险',
      subtitle: '卫星影像赋能保险行业，实现精准风险评估与高效理赔验证',
    },
    overview: {
      title: '卫星数据重塑保险风险管理',
      body: '在保险行业中，准确评估风险和快速验证理赔是核心挑战。卫星遥感技术为保险公司提供了前所未有的能力：从承保前的财产估值与风险评级，到灾后损失评估与理赔验证，再到长期投资组合监控。高分辨率卫星影像能够覆盖偏远地区、提供客观的第三方证据、实现大规模资产的快速筛查，帮助保险公司降低欺诈风险、加速理赔流程、优化定价策略。',
    },
    grid: {
      title: '保险行业核心应用',
    },
    applications: [
      {
        icon: 'Shield',
        title: '承保风险评估',
        desc: '在保单签发前，利用卫星影像评估财产状况、周边环境风险（洪水、山体滑坡等），支持精准定价。',
      },
      {
        icon: 'FileSearch',
        title: '理赔验证',
        desc: '通过灾前灾后影像对比，客观验证损失范围和程度，减少欺诈性理赔，加速合规理赔处理。',
      },
      {
        icon: 'AlertTriangle',
        title: '灾害损失评估',
        desc: '自然灾害发生后，快速获取受灾区域影像，进行大规模损失初步评估，优先处理重灾区理赔。',
      },
      {
        icon: 'Building2',
        title: '财产监控',
        desc: '定期监测投保财产的变化（新建、拆除、改建），确保保单信息与实际资产状态一致。',
      },
      {
        icon: 'TrendingUp',
        title: '投资组合风险分析',
        desc: '对大规模投保资产进行地理空间风险分析，识别高风险集中区域，优化再保险策略。',
      },
      {
        icon: 'Scale',
        title: '合规与审计支持',
        desc: '提供时间戳明确的卫星影像作为客观证据，支持监管合规和内部审计需求。',
      },
    ],
    advantages: {
      title: '核心技术优势',
      items: [
        { icon: 'Eye', title: '客观证据', desc: '时间戳明确的第三方影像，不可篡改的损失记录' },
        { icon: 'Globe', title: '全球覆盖', desc: '覆盖偏远地区，无需现场勘查即可评估' },
        { icon: 'Clock', title: '快速响应', desc: '灾后24-48小时内获取最新影像' },
        { icon: 'BarChart3', title: '规模化处理', desc: 'AI驱动的批量分析，同时处理数千个理赔' },
      ],
    },
    cta: {
      title: '需要为您的保险业务部署卫星影像解决方案吗？',
      button: '咨询保险行业专家',
    },
  },
  en: {
    dir: 'ltr' as const,
    hero: {
      title: 'Insurance',
      subtitle: 'Satellite imagery empowers the insurance industry with precise risk assessment and efficient claims verification',
    },
    overview: {
      title: 'Satellite Data Reshaping Insurance Risk Management',
      body: 'In the insurance industry, accurately assessing risk and quickly verifying claims are core challenges. Satellite remote sensing provides insurers with unprecedented capabilities: from pre-underwriting property valuation and risk rating, to post-disaster loss assessment and claims verification, to long-term portfolio monitoring. High-resolution satellite imagery can cover remote areas, provide objective third-party evidence, and enable rapid screening of large-scale assets—helping insurers reduce fraud risk, accelerate claims processing, and optimize pricing strategies.',
    },
    grid: {
      title: 'Core Insurance Applications',
    },
    applications: [
      {
        icon: 'Shield',
        title: 'Underwriting Risk Assessment',
        desc: 'Before policy issuance, use satellite imagery to assess property conditions and surrounding environmental risks (floods, landslides, etc.) for accurate pricing.',
      },
      {
        icon: 'FileSearch',
        title: 'Claims Verification',
        desc: 'Objectively verify loss extent and severity through pre/post-disaster imagery comparison, reducing fraudulent claims and accelerating legitimate processing.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Catastrophe Loss Assessment',
        desc: 'After natural disasters, rapidly acquire affected area imagery for large-scale preliminary loss assessment and priority handling of severe damage claims.',
      },
      {
        icon: 'Building2',
        title: 'Property Monitoring',
        desc: 'Regularly monitor changes to insured properties (construction, demolition, renovation) to ensure policy information matches actual asset status.',
      },
      {
        icon: 'TrendingUp',
        title: 'Portfolio Risk Analysis',
        desc: 'Conduct geospatial risk analysis on large-scale insured assets to identify high-risk concentration areas and optimize reinsurance strategies.',
      },
      {
        icon: 'Scale',
        title: 'Compliance & Audit Support',
        desc: 'Provide timestamped satellite imagery as objective evidence to support regulatory compliance and internal audit requirements.',
      },
    ],
    advantages: {
      title: 'Key Technical Advantages',
      items: [
        { icon: 'Eye', title: 'Objective Evidence', desc: 'Timestamped third-party imagery with tamper-proof loss records' },
        { icon: 'Globe', title: 'Global Coverage', desc: 'Cover remote areas without on-site inspection' },
        { icon: 'Clock', title: 'Rapid Response', desc: 'Obtain latest imagery within 24-48 hours post-disaster' },
        { icon: 'BarChart3', title: 'Scalable Processing', desc: 'AI-driven batch analysis processing thousands of claims simultaneously' },
      ],
    },
    cta: {
      title: 'Need to deploy satellite imagery solutions for your insurance business?',
      button: 'Consult our Insurance Experts',
    },
  },
  ar: {
    dir: 'rtl' as const,
    hero: {
      title: 'التأمين',
      subtitle: 'صور الأقمار الصناعية تمكّن صناعة التأمين من التقييم الدقيق للمخاطر والتحقق الفعال من المطالبات',
    },
    overview: {
      title: 'بيانات الأقمار الصناعية تعيد تشكيل إدارة مخاطر التأمين',
      body: 'في صناعة التأمين، يعد تقييم المخاطر بدقة والتحقق السريع من المطالبات تحديات أساسية. يوفر الاستشعار عن بُعد بالأقمار الصناعية لشركات التأمين قدرات غير مسبوقة: من تقييم الممتلكات قبل الاكتتاب وتصنيف المخاطر، إلى تقييم الخسائر بعد الكوارث والتحقق من المطالبات، إلى مراقبة المحفظة طويلة الأجل.',
    },
    grid: {
      title: 'التطبيقات الأساسية للتأمين',
    },
    applications: [
      {
        icon: 'Shield',
        title: 'تقييم مخاطر الاكتتاب',
        desc: 'قبل إصدار البوليصة، استخدم صور الأقمار الصناعية لتقييم حالة الممتلكات والمخاطر البيئية المحيطة.',
      },
      {
        icon: 'FileSearch',
        title: 'التحقق من المطالبات',
        desc: 'التحقق الموضوعي من نطاق الخسارة من خلال مقارنة صور ما قبل وبعد الكارثة.',
      },
      {
        icon: 'AlertTriangle',
        title: 'تقييم خسائر الكوارث',
        desc: 'بعد الكوارث الطبيعية، الحصول السريع على صور المنطقة المتضررة للتقييم الأولي واسع النطاق.',
      },
      {
        icon: 'Building2',
        title: 'مراقبة الممتلكات',
        desc: 'مراقبة التغييرات في الممتلكات المؤمن عليها بانتظام لضمان تطابق معلومات البوليصة مع الحالة الفعلية.',
      },
      {
        icon: 'TrendingUp',
        title: 'تحليل مخاطر المحفظة',
        desc: 'إجراء تحليل المخاطر الجغرافية المكانية على الأصول المؤمن عليها لتحديد مناطق التركيز عالية المخاطر.',
      },
      {
        icon: 'Scale',
        title: 'دعم الامتثال والتدقيق',
        desc: 'توفير صور أقمار صناعية مؤرخة كدليل موضوعي لدعم متطلبات الامتثال التنظيمي.',
      },
    ],
    advantages: {
      title: 'المزايا التقنية الرئيسية',
      items: [
        { icon: 'Eye', title: 'دليل موضوعي', desc: 'صور طرف ثالث مؤرخة مع سجلات خسائر غير قابلة للتلاعب' },
        { icon: 'Globe', title: 'تغطية عالمية', desc: 'تغطية المناطق النائية دون فحص ميداني' },
        { icon: 'Clock', title: 'استجابة سريعة', desc: 'الحصول على أحدث الصور خلال 24-48 ساعة بعد الكارثة' },
        { icon: 'BarChart3', title: 'معالجة قابلة للتوسع', desc: 'تحليل جماعي مدعوم بالذكاء الاصطناعي لمعالجة آلاف المطالبات' },
      ],
    },
    cta: {
      title: 'هل تحتاج إلى نشر حلول صور الأقمار الصناعية لأعمال التأمين الخاصة بك؟',
      button: 'استشر خبراء التأمين لدينا',
    },
  },
}

const iconMap: Record<string, React.ElementType> = {
  Shield,
  FileSearch,
  AlertTriangle,
  Building2,
  TrendingUp,
  Scale,
  Eye,
  Clock,
  Globe,
  BarChart3,
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function InsuranceIndustryPage() {
  const { locale, setLocale, mounted } = useLocale()
  
  if (!mounted) {
    return <div className="min-h-screen bg-white" />
  }

  const pg = t[locale]

  return (
    <div className="min-h-screen bg-white" dir={pg.dir}>
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* 1. Hero */}
      <section className="relative w-full h-[40vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/insurance-hero.jpg"
          alt="Insurance Industry"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/60 to-[#0a1628]/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-3">
              {pg.hero.title}
            </h1>
            <p className="text-white/70 text-base sm:text-lg font-light tracking-wide max-w-2xl">
              {pg.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-6 leading-tight text-balance">
                {pg.overview.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-pretty">
                {pg.overview.body}
              </p>
            </div>
            {/* Image */}
            <div className="flex-1 w-full lg:flex-[1.2] rounded-2xl overflow-hidden shadow-2xl shadow-[#0a1628]/10 relative aspect-[16/10] group">
              <Image
                src="/images/insurance-overview.jpg"
                alt="Insurance satellite overview"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Applications Grid */}
      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] text-balance">
              {pg.grid.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pg.applications.map((item, i) => {
              const Icon = iconMap[item.icon]
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-7 border border-gray-200 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 group-hover:bg-cyan-100 flex items-center justify-center mb-5 transition-colors">
                    {Icon && <Icon size={22} className="text-cyan-600" />}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1628] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-pretty">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Key Performance Indicators */}
      <section className="py-20 bg-[#0a1628]">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">
              {pg.advantages.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pg.advantages.items.map((item, i) => {
              const Icon = iconMap[item.icon]
              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center px-6 py-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/8 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
                    {Icon && <Icon size={26} className="text-cyan-400" />}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-[#0a1628] to-[#0d2040] rounded-3xl px-8 py-16 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5 rounded-3xl pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,180,216,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.5) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-cyan-500/10 rounded-full pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-cyan-500/10 rounded-full pointer-events-none" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 leading-snug text-balance">
                {pg.cta.title}
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-base rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1"
              >
                {pg.cta.button}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  )
}
