'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Ship,
  Radar,
  AlertTriangle,
  Map,
  TrendingUp,
  Zap,
  ArrowRight,
  Eye,
  CloudSun,
  Anchor,
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
      title: '海事与航运',
      subtitle: '卫星智能赋能全球海事运营，实现全天候船队监测与智慧港口管理',
    },
    overview: {
      title: '卫星遥感驱动海事行业数字化转型',
      body: '卫星遥感技术已成为现代海事管理的关键支撑力量，覆盖船队监测、港口运营、环境监管、搜救应急与走私防控等全方位需求。与传统 AIS 受限于信号覆盖和主动报告不同，卫星数据能够提供客观、全球范围的海上视图，帮助海事企业和监管部门实时掌握洋上动态，优化航路规划，防范安全风险，确保合规运营，并快速响应海上应急事件。',
    },
    grid: {
      title: '海事行业全链路解决方案',
    },
    applications: [
      {
        icon: 'Ship',
        title: '船队实时监测',
        desc: '融合 AIS 与 SAR 卫星数据，全球无缝追踪船舶位置与航行状态，发现关闭应答器的"暗船"。',
      },
      {
        icon: 'Radar',
        title: '港口运营优化',
        desc: '监测泊位利用率、货物堆积与人流动向，辅助港口调度与资源配置，提升吞吐效率。',
      },
      {
        icon: 'AlertTriangle',
        title: '海上搜救与应急',
        desc: '快速定位遇险船舶和人员，为海难救援决策提供精准坐标支撑，提高救援成功率。',
      },
      {
        icon: 'Map',
        title: '走私与非法捕捞防控',
        desc: '识别异常航行模式、灭灯船舶与非法渔业活动，支持执法部门精准打击海上违法行为。',
      },
      {
        icon: 'TrendingUp',
        title: '航线与燃油优化',
        desc: '基于实时天气、洋流与港口拥堵数据推荐最优航线，有效降低燃油成本与碳排放。',
      },
      {
        icon: 'Zap',
        title: '海洋环保合规',
        desc: '监测油污排放、非法倾倒与海岸线侵蚀等环境风险，确保海事运营符合国际环保法规。',
      },
    ],
    advantages: {
      title: '核心技术优势',
      items: [
        { icon: 'Eye', title: '全球无盲区', desc: '从深远洋到近岸，全天候零信号盲区持续覆盖' },
        { icon: 'CloudSun', title: '穿云成像', desc: 'SAR 卫星不受云层影响，昼夜全天候可用' },
        { icon: 'Anchor', title: '多源数据融合', desc: '整合 AIS、海洋气象、港口数据等多源信息流' },
        { icon: 'BarChart3', title: 'AI 智能分析', desc: '异常检测、趋势预测与决策支持深度应用' },
      ],
    },
    cta: {
      title: '需要为您的海运企业或港口配置卫星监测与优化方案吗？',
      button: '咨询海事行业专家',
    },
  },
  en: {
    dir: 'ltr' as const,
    hero: {
      title: 'Maritime & Shipping',
      subtitle: 'Satellite intelligence enables global maritime operations with all-weather vessel tracking and smart port management',
    },
    overview: {
      title: 'Satellite Remote Sensing Transforms Maritime Operations',
      body: 'Satellite remote sensing has become critical for modern maritime management, supporting fleet monitoring, port operations, environmental compliance, search and rescue, and anti-smuggling operations. Unlike AIS systems limited by signal coverage and voluntary reporting, satellite data provides objective, truly global maritime visibility—helping shipping companies and regulators monitor vessel movements in real-time, optimize routing, mitigate risks, ensure regulatory compliance, and rapidly respond to maritime emergencies.',
    },
    grid: {
      title: 'End-to-End Maritime Solutions',
    },
    applications: [
      {
        icon: 'Ship',
        title: 'Real-Time Fleet Monitoring',
        desc: 'Fuse AIS with SAR satellite data for global vessel tracking, detecting dark ships that have disabled their transponders.',
      },
      {
        icon: 'Radar',
        title: 'Port Operations Optimization',
        desc: 'Monitor berth utilization, cargo handling, and traffic patterns for improved scheduling and resource allocation.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Search & Rescue Response',
        desc: 'Rapidly locate vessels and persons in distress, providing precise coordinates to support emergency response decisions.',
      },
      {
        icon: 'Map',
        title: 'Anti-Smuggling & Illegal Fishing',
        desc: 'Identify suspicious vessel behavior, lights-out ships, and illegal fishing activities to support law enforcement operations.',
      },
      {
        icon: 'TrendingUp',
        title: 'Route & Fuel Optimization',
        desc: 'Recommend optimal routes based on real-time weather, currents, and port congestion data to reduce fuel costs and emissions.',
      },
      {
        icon: 'Zap',
        title: 'Marine Environmental Compliance',
        desc: 'Monitor oil spills, illegal dumping, and coastal erosion to ensure maritime operations meet international environmental standards.',
      },
    ],
    advantages: {
      title: 'Key Technical Advantages',
      items: [
        { icon: 'Eye', title: 'Zero Blind Spots', desc: 'Continuous 24/7 coverage from deep ocean to coastal waters worldwide' },
        { icon: 'CloudSun', title: 'All-Weather SAR', desc: 'Radar satellites penetrate cloud cover, available day and night' },
        { icon: 'Anchor', title: 'Multi-Source Fusion', desc: 'Integrate AIS, marine weather, port data and other information streams' },
        { icon: 'BarChart3', title: 'AI-Powered Analytics', desc: 'Anomaly detection, predictive insights and decision support tools' },
      ],
    },
    cta: {
      title: 'Ready to deploy satellite monitoring and optimization for your shipping fleet or port?',
      button: 'Contact Our Maritime Experts',
    },
  },
  ar: {
    dir: 'rtl' as const,
    hero: {
      title: 'البحرية والشحن',
      subtitle: 'ذكاء الأقمار الصناعية يمكّن عمليات الشحن البحري العالمية بتتبع السفن وإدارة الموانئ الذكية',
    },
    overview: {
      title: 'الاستشعار عن بُعد يحوّل العمليات البحرية',
      body: 'أصبح الاستشعار عن بُعد بالأقمار الصناعية أمرًا حاسمًا لإدارة البحرية الحديثة، مما يدعم مراقبة الأسطول وعمليات الميناء والامتثال البيئي وعمليات البحث والإنقاذ. على عكس أنظمة AIS المقيدة بتغطية الإشارة، توفر بيانات الأقمار الصناعية رؤية بحرية عالمية موضوعية، تساعد الشركات والجهات التنظيمية على مراقبة تحركات السفن في الوقت الفعلي وتحسين المسارات والاستجابة للطوارئ.',
    },
    grid: {
      title: 'حلول بحرية شاملة من البداية إلى النهاية',
    },
    applications: [
      {
        icon: 'Ship',
        title: 'مراقبة الأسطول في الوقت الفعلي',
        desc: 'دمج بيانات AIS مع الأقمار الصناعية SAR لتتبع السفن عالميًا وكشف السفن المظلمة التي أوقفت أجهزة الاستجابة.',
      },
      {
        icon: 'Radar',
        title: 'تحسين عمليات الميناء',
        desc: 'مراقبة استخدام الرصيف ومناولة البضائع وأنماط الحركة لتحسين الجدولة وتخصيص الموارد.',
      },
      {
        icon: 'AlertTriangle',
        title: 'البحث والإنقاذ في حالات الطوارئ',
        desc: 'تحديد مواقع السفن والأشخاص في حالات الخطر بسرعة لدعم قرارات الاستجابة الطارئة.',
      },
      {
        icon: 'Map',
        title: 'مكافحة التهريب والصيد غير القانوني',
        desc: 'تحديد السلوك المريب للسفن والسفن المظلمة وأنشطة الصيد غير القانونية لدعم عمليات إنفاذ القانون.',
      },
      {
        icon: 'TrendingUp',
        title: 'تحسين المسارات والوقود',
        desc: 'توصية بالمسارات المثلى بناءً على الطقس الفعلي والتيارات واحتقان الموانئ لتقليل التكاليف.',
      },
      {
        icon: 'Zap',
        title: 'الامتثال البيئي البحري',
        desc: 'مراقبة التسربات النفطية والتخلص غير القانوني وتآكل الساحل لضمان الامتثال للمعايير الدولية.',
      },
    ],
    advantages: {
      title: 'المزايا التقنية الرئيسية',
      items: [
        { icon: 'Eye', title: 'لا نقاط عمياء', desc: 'تغطية مستمرة على مدار الساعة من المحيط إلى الساحل' },
        { icon: 'CloudSun', title: 'رادار يخترق السحب', desc: 'الأقمار الصناعية الرادارية متاحة ليلاً ونهاراً بغض النظر عن الطقس' },
        { icon: 'Anchor', title: 'دمج متعدد المصادر', desc: 'تكامل بيانات AIS والطقس البحري والميناء ومصادر أخرى' },
        { icon: 'BarChart3', title: 'تحليل الذكاء الاصطناعي', desc: 'كشف الشذوذ والتنبؤ والدعم في اتخاذ القرار' },
      ],
    },
    cta: {
      title: 'هل أنت مستعد لنشر مراقبة وتحسين الأقمار الصناعية لأسطولك البحري أو ميناءك؟',
      button: 'تواصل مع خبراء البحرية',
    },
  },
}

const iconMap: Record<string, React.ElementType> = {
  Ship,
  Radar,
  AlertTriangle,
  Map,
  TrendingUp,
  Zap,
  Eye,
  CloudSun,
  Anchor,
  BarChart3,
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MaritimeIndustryPage() {
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
          src="/images/maritime-hero.jpg"
          alt="Maritime Industry"
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
                src="/images/maritime-overview.jpg"
                alt="Maritime satellite overview"
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
