'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  FlaskConical,
  BarChart3,
  ShieldAlert,
  Map,
  ScanLine,
  Leaf,
  ArrowRight,
  Ruler,
  CloudSun,
  Clock,
  BrainCircuit,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLocale } from '@/hooks/use-locale'
import { type Locale } from '@/lib/i18n'

// ─── Inline translations ──────────────────────────────────────────────────────
const t = {
  zh: {
    dir: 'ltr' as const,
    hero: {
      title: '采矿',
      subtitle: '基于卫星智能，打造更安全、更智能、更高效的采矿作业',
    },
    overview: {
      title: '卫星遥感赋能采矿全生命周期',
      body: '卫星遥感技术已深度渗透采矿行业的每一个阶段：从早期矿产勘探、靶区优选、运营监控，到闭矿后的生态修复与合规管理。在地形复杂、交通不便的偏远矿区，传统地面勘测代价高昂且存在安全隐患。卫星数据能够在不踏足现场的情况下，提供全天候、高精度的地表信息，帮助矿业企业大幅降低运营成本、保障人员安全，并在日益严苛的环境法规下实现可持续发展目标。',
    },
    grid: {
      title: '矿业全生命周期解决方案',
    },
    applications: [
      {
        icon: 'FlaskConical',
        title: '勘探与矿物填图',
        desc: '利用短波红外和多光谱数据识别地表矿物成分，缩小物理采样范围，加速靶区优选。',
      },
      {
        icon: 'BarChart3',
        title: '库存与体积测量',
        desc: '基于高精度数字表面模型，远程计算矿石堆体积，精度可达厘米级，优化库存管理决策。',
      },
      {
        icon: 'ShieldAlert',
        title: '环境与尾矿坝监测',
        desc: '利用 InSAR 技术监测尾矿坝的微小位移和地表沉降，实现早期预警，预防溃坝灾难性事故。',
      },
      {
        icon: 'Map',
        title: '基础设施规划',
        desc: '为矿区道路、营地和输电线路的建设提供高分辨率地形图和土地覆盖分类，降低规划风险。',
      },
      {
        icon: 'ScanLine',
        title: '变动监测',
        desc: '定期对比影像，精准追踪矿区开挖进度、植被变化及非法采矿活动，保护矿权合法利益。',
      },
      {
        icon: 'Leaf',
        title: '闭矿与生态修复',
        desc: '长期监测复垦区域的植被生长情况，提供客观合规评估数据，确保符合环境监管要求。',
      },
    ],
    advantages: {
      title: '核心技术优势',
      items: [
        { icon: 'Ruler', title: '精准度', desc: '最高 30cm 分辨率，满足工程级测量需求' },
        { icon: 'CloudSun', title: '穿透能力', desc: '雷达卫星可穿透云雾，实现 24/7 全天候监控' },
        { icon: 'Clock', title: '历史对比', desc: '访问数十年的存档数据进行基准对比分析' },
        { icon: 'BrainCircuit', title: '自动化分析', desc: '结合机器学习自动识别车辆、建筑物和地物变化' },
      ],
    },
    cta: {
      title: '需要为您矿区定制高分辨率影像方案或形变监测报告吗？',
      button: '咨询采矿行业专家',
    },
  },
  en: {
    dir: 'ltr' as const,
    hero: {
      title: 'Mining',
      subtitle: 'Satellite-based intelligence for safer, smarter, and more efficient mining operations',
    },
    overview: {
      title: 'Satellite Remote Sensing Across the Mining Lifecycle',
      body: 'Satellite remote sensing has become integral to every stage of the mining industry: from early mineral exploration and target selection to operational monitoring and post-closure environmental rehabilitation. In remote, topographically complex mining regions where traditional field surveys are costly and dangerous, satellite data delivers all-weather, high-accuracy surface intelligence without boots on the ground—helping mining companies dramatically reduce costs, ensure personnel safety, and meet increasingly stringent environmental regulations.',
    },
    grid: {
      title: 'Mining Lifecycle Solutions',
    },
    applications: [
      {
        icon: 'FlaskConical',
        title: 'Exploration & Mineral Mapping',
        desc: 'Use SWIR and multispectral data to identify surface mineral composition, narrow physical sampling areas, and accelerate target selection.',
      },
      {
        icon: 'BarChart3',
        title: 'Stockpile & Volume Monitoring',
        desc: 'Remotely calculate ore stockpile volumes via high-accuracy DSM with centimeter-level precision to optimize inventory management.',
      },
      {
        icon: 'ShieldAlert',
        title: 'Tailings Dam & Environmental Safety',
        desc: 'Monitor subtle deformation and subsidence of tailings dams using InSAR for early warning, preventing catastrophic failures.',
      },
      {
        icon: 'Map',
        title: 'Infrastructure Planning',
        desc: 'Provide high-resolution topographic maps and land cover classification for mine roads, camps, and power line construction.',
      },
      {
        icon: 'ScanLine',
        title: 'Change Detection',
        desc: 'Periodically compare imagery to track excavation progress, vegetation change, and illegal mining activities.',
      },
      {
        icon: 'Leaf',
        title: 'Closure & Rehabilitation',
        desc: 'Long-term monitoring of revegetated areas provides objective compliance data to satisfy environmental regulators.',
      },
    ],
    advantages: {
      title: 'Key Technical Advantages',
      items: [
        { icon: 'Ruler', title: 'High Precision', desc: 'Up to 30cm resolution for engineering-grade measurement requirements' },
        { icon: 'CloudSun', title: 'All-Weather SAR', desc: 'Radar satellites penetrate cloud cover for 24/7 continuous monitoring' },
        { icon: 'Clock', title: 'Historical Data', desc: 'Access decades of archived data for baseline comparison analysis' },
        { icon: 'BrainCircuit', title: 'AI-Powered Insights', desc: 'Machine learning automatically identifies vehicles, structures and land changes' },
      ],
    },
    cta: {
      title: 'Need a custom high-resolution imagery plan or deformation monitoring report for your mine?',
      button: 'Consult our Mining Experts',
    },
  },
  ar: {
    dir: 'rtl' as const,
    hero: {
      title: 'التعدين',
      subtitle: 'ذكاء قائم على الأقمار الصناعية لعمليات تعدين أكثر أمانًا وذكاءً وكفاءة',
    },
    overview: {
      title: 'الاستشعار عن بُعد عبر دورة حياة التعدين الكاملة',
      body: 'أصبح الاستشعار عن بُعد بالأقمار الصناعية جزءًا لا يتجزأ من كل مرحلة في صناعة التعدين: من الاستكشاف المعدني المبكر واختيار الأهداف إلى المراقبة التشغيلية وإعادة التأهيل البيئي بعد الإغلاق. في مناطق التعدين النائية ذات التضاريس المعقدة، توفر بيانات الأقمار الصناعية استخباراتية للسطح عالية الدقة وفي كل الأحوال الجوية دون الحاجة للوجود الميداني.',
    },
    grid: {
      title: 'حلول دورة حياة التعدين',
    },
    applications: [
      {
        icon: 'FlaskConical',
        title: 'الاستكشاف ورسم الخرائط المعدنية',
        desc: 'استخدام بيانات SWIR ومتعددة الأطياف لتحديد التركيب المعدني للسطح وتضييق نطاق أخذ العينات.',
      },
      {
        icon: 'BarChart3',
        title: 'مراقبة المخزون والحجم',
        desc: 'حساب أحجام أكوام الخام عن بُعد بدقة سنتيمت����ية لتحسين إدارة المخزون.',
      },
      {
        icon: 'ShieldAlert',
        title: 'سلامة سدود الذيل والبيئة',
        desc: 'مراقبة التشوه الدقيق وهبوط الأرض في سدود الذيل باستخدام InSAR للإنذار المبكر.',
      },
      {
        icon: 'Map',
        title: 'تخطيط البنية التحتية',
        desc: 'توفير خرائط طبوغرافية عالية الدقة وتصنيف الغطاء الأرضي للطرق والمخيمات وخطوط الكهرباء.',
      },
      {
        icon: 'ScanLine',
        title: 'كشف التغيير',
        desc: 'مقارنة الصور دورياً لتتبع تقدم الحفر وتغيرات الغطاء النباتي والتعدين غير المشروع.',
      },
      {
        icon: 'Leaf',
        title: 'الإغلاق وإعادة التأهيل',
        desc: 'المراقبة طويلة الأمد لمناطق إعادة التشجير لتوفير بيانات امتثال موضوعية.',
      },
    ],
    advantages: {
      title: 'مؤشرات الأداء الرئيسية',
      items: [
        { icon: 'Ruler', title: 'الدقة العالية', desc: 'حتى 30 سم دقة لمتطلبات القياس الهندسي' },
        { icon: 'CloudSun', title: 'SAR لكل الأحوال الجوية', desc: 'تخترق الأقمار الرادارية الغيوم للمراقبة المستمرة 24/7' },
        { icon: 'Clock', title: 'البيانات التاريخية', desc: 'الوصول إلى عقود من البيانات المؤرشفة لتحليل الخط الأساسي' },
        { icon: 'BrainCircuit', title: 'رؤى مدعومة بالذكاء الاصطناعي', desc: 'التعرف التلقائي على المركبات والمباني وتغيرات الأرض' },
      ],
    },
    cta: {
      title: 'هل تحتاج إلى خطة صور عالية الدقة أو تقرير مراقبة التشوه لمنجمك؟',
      button: 'استشر خبراء التعدين لدينا',
    },
  },
}

const iconMap: Record<string, React.ElementType> = {
  FlaskConical,
  BarChart3,
  ShieldAlert,
  Map,
  ScanLine,
  Leaf,
  Ruler,
  CloudSun,
  Clock,
  BrainCircuit,
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MiningIndustryPage() {
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
          src="/images/mining-hero.jpg"
          alt="Mining Industry"
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
                src="/images/mining-overview.jpg"
                alt="Mining satellite overview"
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

      {/* 4. Key Technical Advantages */}
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
