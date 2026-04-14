'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Droplet,
  Radar,
  TrendingUp,
  AlertCircle,
  Zap,
  ShieldAlert,
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
      title: '石油&天然气',
      subtitle: '从勘探到生产，精准掌握全球油气资源',
    },
    overview: {
      title: '石油与天然气勘探、开发与监测的全链路支持',
      body: '寰球星途为全球油气企业提供从勘探评估到生产运营的全生命周期卫星数据与分析服务。依托超高分辨率光学卫星与全天候 SAR 卫星，我们支持地质构造评估、油气田监测、管道巡检、海上平台监测及应急响应，帮助您在复杂的全球能源市场中抢占先机、降低风险、优化成本。',
    },
    applications: {
      title: '核心应用场景',
      items: [
        {
          icon: 'Radar',
          title: '地质与勘探评估',
          desc: '通过地形分析和地质构造解译，支持前期勘探风险评估与目标区优选。',
        },
        {
          icon: 'Droplet',
          title: '油气田开发监测',
          desc: '实时监测油气田地表沉降、注入/采出的地表变化信号，优化生产策略。',
        },
        {
          icon: 'TrendingUp',
          title: '管线基础设施巡检',
          desc: '定期获取管道走廊高分辨率影像，及时发现泄漏风险、法律纠纷区域。',
        },
        {
          icon: 'AlertCircle',
          title: '海上油气平台监测',
          desc: '通过 SAR 和光学融合，全天候监测海上平台动态、周边航运情况及环保合规。',
        },
        {
          icon: 'Zap',
          title: '油气泄漏快速应急',
          desc: '灾情发生后 24 小时内获取高分辨率突发影像，支持应急响应与环境评估。',
        },
        {
          icon: 'ShieldAlert',
          title: '政治与运营风险预警',
          desc: '监测设施周边地缘政治动向、非法进入、异常活动，提前预警潜在风险。',
        },
      ],
    },
    advantages: {
      title: '为什么选择我们',
      items: [
        {
          icon: 'Radar',
          title: '全球覆盖与实时监测',
          desc: '覆盖全球主要油气资源地，支持定期重访与紧急快速反应任务。',
        },
        {
          icon: 'TrendingUp',
          title: '多源融合分析',
          desc: '光学、SAR、视频等多传感器数据融合，提供全方位、多维度的决策支撑。',
        },
        {
          icon: 'Zap',
          title: '降本增效与合规管理',
          desc: '减少人工巡检成本，提高响应效率，同时支持环保监管与 ESG 合规。',
        },
      ],
    },
    cta: {
      title: '准备为您的油气资产配置专属的卫星解决方案？',
      button: '联系行业专家',
    },
  },
  en: {
    dir: 'ltr' as const,
    hero: {
      title: 'Oil & Gas',
      subtitle: 'Master global energy resources from exploration to production',
    },
    overview: {
      title: 'End-to-End Support for Oil & Gas Exploration, Development & Monitoring',
      body: 'Starpath Global provides comprehensive satellite data and analytics services for global oil & gas enterprises across the full lifecycle—from exploration assessment to production operations. Leveraging ultra-high-resolution optical satellites and all-weather SAR satellites, we support geological structure assessment, field monitoring, pipeline inspection, offshore platform surveillance, and emergency response. Gain competitive advantage, reduce operational risk, and optimize costs in the complex global energy marketplace.',
    },
    applications: {
      title: 'Key Application Scenarios',
      items: [
        {
          icon: 'Radar',
          title: 'Geological & Exploration Assessment',
          desc: 'Topographic analysis and structural interpretation to support pre-exploration risk assessment and target selection.',
        },
        {
          icon: 'Droplet',
          title: 'Oil & Gas Field Development Monitoring',
          desc: 'Real-time monitoring of subsidence, injection/production surface signals to optimize production strategies.',
        },
        {
          icon: 'TrendingUp',
          title: 'Pipeline Infrastructure Inspection',
          desc: 'Regular high-resolution imagery of pipeline corridors to detect leakage risks and boundary disputes early.',
        },
        {
          icon: 'AlertCircle',
          title: 'Offshore Platform Surveillance',
          desc: 'All-weather SAR and optical fusion for comprehensive platform monitoring, shipping activity and environmental compliance.',
        },
        {
          icon: 'Zap',
          title: 'Oil & Gas Spill Emergency Response',
          desc: 'High-resolution emergency imagery within 24 hours of incident to support response and environmental assessment.',
        },
        {
          icon: 'ShieldAlert',
          title: 'Geopolitical & Operational Risk Alerts',
          desc: 'Monitor facility surroundings for political developments, unauthorized access, and anomalous activities.',
        },
      ],
    },
    advantages: {
      title: 'Why Choose Us',
      items: [
        {
          icon: 'Radar',
          title: 'Global Coverage & Real-Time Monitoring',
          desc: 'Coverage of major global oil & gas regions with regular revisits and rapid emergency response capabilities.',
        },
        {
          icon: 'TrendingUp',
          title: 'Multi-Source Data Fusion',
          desc: 'Optical, SAR, and video data fusion for comprehensive, multi-dimensional decision support.',
        },
        {
          icon: 'Zap',
          title: 'Cost Reduction & Regulatory Compliance',
          desc: 'Reduce field inspection costs, improve response efficiency, and support environmental and ESG compliance.',
        },
      ],
    },
    cta: {
      title: 'Ready to deploy a dedicated satellite solution for your oil & gas assets?',
      button: 'Contact Our Experts',
    },
  },
  ar: {
    dir: 'rtl' as const,
    hero: {
      title: 'النفط والغاز',
      subtitle: 'السيطرة على موارد الطاقة العالمية من الاستكشاف إلى الإنتاج',
    },
    overview: {
      title: 'الدعم الشامل لاستكشاف وتطوير ومراقبة النفط والغاز',
      body: 'توفر Starpath Global خدمات بيانات الأقمار الصناعية والتحليلات الشاملة لشركات النفط والغاز العالمية عبر دورة الحياة الكاملة. باستخدام أقمار بصرية عالية الدقة وأقمار SAR كل-الأحوال، ندعم تقييم الهياكل الجيولوجية ومراقبة الحقول والفحص الدوري للأنابيب ومراقبة المنصات البحرية والاستجابة للطوارئ.',
    },
    applications: {
      title: 'سيناريوهات التطبيق الرئيسية',
      items: [
        {
          icon: 'Radar',
          title: 'تقييم جيولوجي واستكشافي',
          desc: 'تحليل طوبوغرافي لدعم تقييم المخاطر واختيار المناطق المستهدفة.',
        },
        {
          icon: 'Droplet',
          title: 'مراقبة تطوير حقول النفط والغاز',
          desc: 'المراقبة الفعلية لغوص السطح والتغيرات المرتبطة بالإنتاج لتحسين الاستراتيجيات.',
        },
        {
          icon: 'TrendingUp',
          title: 'فحص البنية التحتية للخطوط',
          desc: 'الحصول على صور عالية الدقة دورية للكشف المبكر عن مخاطر التسرب.',
        },
        {
          icon: 'AlertCircle',
          title: 'مراقبة المنصات البحرية',
          desc: 'دمج SAR والضوء لمراقبة شاملة للمنصات والتزامات بيئية كاملة.',
        },
        {
          icon: 'Zap',
          title: 'الاستجابة السريعة لتسرب النفط',
          desc: 'صور عالية الدقة خلال 24 ساعة لدعم الاستجابة والتقييم البيئي.',
        },
        {
          icon: 'ShieldAlert',
          title: 'تنبيهات مخاطر الأمان التشغيلي',
          desc: 'مراقبة المناطق المحيطة للأنشطة غير المشروعة والمخاطر الكامنة.',
        },
      ],
    },
    advantages: {
      title: 'لماذا تختارنا',
      items: [
        {
          icon: 'Radar',
          title: 'التغطية العالمية والمراقبة الفعلية',
          desc: 'تغطية مناطق النفط والغاز العالمية الرئيسية مع قدرات رد سريع.',
        },
        {
          icon: 'TrendingUp',
          title: 'دمج متعدد المصادر',
          desc: 'دمج البيانات البصرية و SAR والفيديو لدعم شامل متعدد الأبعاد.',
        },
        {
          icon: 'Zap',
          title: 'تقليل التكاليف والالتزام التنظيمي',
          desc: 'تقليل تكاليف الفحص الميداني وتحسين الكفاءة والامتثال البيئي.',
        },
      ],
    },
    cta: {
      title: 'هل أنت مستعد لنشر حل قمري مخصص لأصول النفط والغاز الخاصة بك؟',
      button: 'تواصل مع خبرائنا',
    },
  },
}

const iconMap: Record<string, React.ElementType> = {
  Droplet,
  Radar,
  TrendingUp,
  AlertCircle,
  Zap,
  ShieldAlert,
}

// ─── Page component ──────────────────────────────────────────────────────────
export default function PetroleumIndustriesPage() {
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
          src="/images/petroleum-hero.jpg"
          alt="Oil & Gas"
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
            <p className="text-white/70 text-base sm:text-lg font-light tracking-wide">
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
                src="/images/petroleum-overview.jpg"
                alt="Petroleum monitoring"
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
              {pg.applications.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pg.applications.items.map((item, i) => {
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

      {/* 4. Advantages */}
      <section className="py-20 bg-[#0a1628]">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">
              {pg.advantages.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed text-pretty">{item.desc}</p>
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
            {/* Decorative grid */}
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
