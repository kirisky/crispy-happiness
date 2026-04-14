'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  TrendingDown,
  Rocket,
  Settings2,
  Shield,
  ArrowRight,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLocale } from '@/hooks/use-locale'
import { cn } from '@/lib/utils'

// ─── translations ────────────────────────────────────────────────────────────
const t = {
  zh: {
    dir: 'ltr' as const,
    hero: {
      title: '卫星金融租赁方案',
      subtitle: '打破资本壁垒，以更低的初始成本，为您的企业快速装备定制化卫星与太空服务能力。',
    },
    value: {
      title: '为什么选择我们的金融租赁服务？',
      items: [
        {
          icon: 'TrendingDown',
          title: '大幅降低门槛',
          sub: 'Lower CapEx',
          desc: '将高昂的资本支出（CapEx）转化为可控的运营支出（OpEx），无需承担全额卫星制造成本。',
        },
        {
          icon: 'Rocket',
          title: '快速部署与交付',
          sub: 'Rapid Deployment',
          desc: '缩短从概念到数据获取的周期，抢占市场先机。',
        },
        {
          icon: 'Settings2',
          title: '高度定制化',
          sub: 'Tailored Capabilities',
          desc: '无论是专属星座还是单星运管，均可根据业务场景灵活定制硬件与载荷。',
        },
        {
          icon: 'Shield',
          title: '技术与财务风险对冲',
          sub: 'Risk Mitigation',
          desc: '全生命周期维保与技术兜底，让您专注于核心业务而非太空基础设施运营。',
        },
      ],
    },
    cta: {
      title: '探索专属于您的太空金融方案',
      subtitle: '由于行业需求与卫星规格差异极大，我们的太空金融专家将为您提供一对一的保密咨询，量身定制最符合您财务模型的租赁计划。',
      button: '联系金融专家获取方案',
    },
  },
  en: {
    dir: 'ltr' as const,
    hero: {
      title: 'Satellite Financial Leasing',
      subtitle: 'Break through capital barriers and rapidly equip your enterprise with customized satellite and space service capabilities at lower initial costs.',
    },
    value: {
      title: 'Why Choose Our Financial Leasing Services?',
      items: [
        {
          icon: 'TrendingDown',
          title: 'Lower CapEx',
          sub: 'Reduced Capital Expenditure',
          desc: 'Transform high capital expenditure (CapEx) into manageable operating expenditure (OpEx) without bearing full satellite manufacturing costs.',
        },
        {
          icon: 'Rocket',
          title: 'Rapid Deployment',
          sub: 'Accelerated Time-to-Market',
          desc: 'Shorten the cycle from concept to data acquisition and seize market opportunities.',
        },
        {
          icon: 'Settings2',
          title: 'Tailored Capabilities',
          sub: 'Customized Solutions',
          desc: 'Whether dedicated constellation or single-satellite operations, flexibly customize hardware and payloads to fit your business scenarios.',
        },
        {
          icon: 'Shield',
          title: 'Risk Mitigation',
          sub: 'Technical & Financial Hedge',
          desc: 'Full lifecycle maintenance and technical backstop, allowing you to focus on core business rather than space infrastructure operations.',
        },
      ],
    },
    cta: {
      title: 'Explore Your Exclusive Space Finance Solution',
      subtitle: 'Due to vast differences in industry requirements and satellite specifications, our space finance experts will provide confidential one-on-one consultations to tailor a leasing plan that best fits your financial model.',
      button: 'Contact Our Experts',
    },
  },
  ar: {
    dir: 'rtl' as const,
    hero: {
      title: 'حلول تأجير الأقمار الصناعية',
      subtitle: 'اكسر حواجز رأس المال وجهز مؤسستك بسرعة بقدرات الأقمار الصناعية والخدمات الفضائية المخصصة بتكاليف أولية أقل.',
    },
    value: {
      title: 'لماذا تختار خدمات التأجير المالي لدينا؟',
      items: [
        {
          icon: 'TrendingDown',
          title: 'خفض النفقات الرأسمالية',
          sub: 'Lower CapEx',
          desc: 'حول النفقات الرأسمالية المرتفعة إلى نفقات تشغيلية يمكن التحكم فيها دون تحمل تكاليف تصنيع الأقمار الصناعية الكاملة.',
        },
        {
          icon: 'Rocket',
          title: 'النشر السريع',
          sub: 'Rapid Deployment',
          desc: 'اختصر الدورة من المفهوم إلى الحصول على البيانات واغتنم فرص السوق.',
        },
        {
          icon: 'Settings2',
          title: 'قدرات مخصصة',
          sub: 'Tailored Capabilities',
          desc: 'سواء كانت كوكبة مخصصة أو عمليات قمر صناعي واحد، قم بتخصيص الأجهزة والحمولات بمرونة لتناسب سيناريوهات عملك.',
        },
        {
          icon: 'Shield',
          title: 'تخفيف المخاطر',
          sub: 'Risk Mitigation',
          desc: 'صيانة دورة الحياة الكاملة والدعم التقني، مما يتيح لك التركيز على الأعمال الأساسية بدلاً من عمليات البنية التحتية الفضائية.',
        },
      ],
    },
    cta: {
      title: 'استكشف حل التمويل الفضائي الخاص بك',
      subtitle: 'نظرًا للاختلافات الكبيرة في متطلبات الصناعة ومواصفات الأقمار الصناعية، سيقدم خبراء التمويل الفضائي لدينا استشارات سرية فردية لتصميم خطة تأجير تناسب نموذجك المالي.',
      button: 'تواصل مع خبرائنا',
    },
  },
}

const iconMap: Record<string, React.ElementType> = {
  TrendingDown,
  Rocket,
  Settings2,
  Shield,
}

// ─── Page component ──────────────────────────────────────────────────────────
export default function FinancialLeasingPage() {
  const { locale, setLocale, mounted } = useLocale()

  if (!mounted) {
    return <div className="min-h-screen bg-white" />
  }

  const pg = t[locale]

  return (
    <div className="min-h-screen bg-white" dir={pg.dir}>
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* 1. Hero Section - same height as imagery page */}
      <section className="relative w-full h-[40vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/hero-financial.webp"
          alt="Satellite Financial Leasing"
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
            <p className="text-white/70 text-base sm:text-lg font-light tracking-wide max-w-2xl text-pretty">
              {pg.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition Grid - 2x2 cards */}
      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] text-balance">
              {pg.value.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pg.value.items.map((item, i) => {
              const Icon = iconMap[item.icon]
              return (
                <div
                  key={i}
                  className={cn(
                    'group relative bg-white rounded-2xl p-8 border border-gray-100',
                    'hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/5',
                    'transition-all duration-300'
                  )}
                >
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/3 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

                  <div className="relative flex gap-5">
                    <div className="w-14 h-14 rounded-xl bg-cyan-50 group-hover:bg-cyan-100 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      {Icon && <Icon size={26} className="text-cyan-600" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-[#0a1628] mb-1">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-pretty">{item.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. High-Impact CTA Section */}
      <section className="py-24 bg-[#0a1628] relative overflow-hidden">
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,180,216,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Cyan glow accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Cyan border highlight at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        <div className="relative w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
              {pg.cta.title}
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 text-pretty">
              {pg.cta.subtitle}
            </p>
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center gap-3 px-10 py-5',
                'bg-cyan-500 hover:bg-cyan-400',
                'text-white font-bold text-lg rounded-xl',
                'transition-all duration-300',
                'hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-1',
                'border-2 border-cyan-400/50'
              )}
            >
              {pg.cta.button}
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  )
}
