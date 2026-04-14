'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Sprout,
  Droplets,
  Bug,
  BarChart3,
  Thermometer,
  Tractor,
  ArrowRight,
  Satellite,
  Layers,
  Clock,
  TrendingUp,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLocale } from '@/hooks/use-locale'

// ─── Inline translations ──────────────────────────────────────────────────────
const t = {
  zh: {
    dir: 'ltr' as const,
    hero: {
      title: '农业',
      subtitle: '卫星遥感驱动精准农业，提升产量、优化资源、守护粮食安全',
    },
    overview: {
      title: '卫星技术重塑现代农业管理',
      body: '全球农业正面临气候变化、水资源短缺和土地退化等多重挑战。卫星遥感技术为农业生产者提供了前所未有的洞察力：从大尺度作物长势监测、精准灌溉决策，到病虫害早期预警和产量预估。通过多光谱、热红外和雷达数据的融合分析，农户和农企可以在正确的时间、正确的地点采取正确的行动，实现增产增效、节水节肥，并为可持续农业发展奠定数据基础。',
    },
    grid: {
      title: '精准农业核心应用',
    },
    applications: [
      {
        icon: 'Sprout',
        title: '作物长势监测',
        desc: '基于 NDVI 等植被指数持续追踪作物生长状态，识别生长异常区域，指导田间管理。',
      },
      {
        icon: 'Droplets',
        title: '精准灌溉管理',
        desc: '结合土壤湿度、蒸散发和作物需水模型，优化灌溉时机与水量，节约用水 20-30%。',
      },
      {
        icon: 'Bug',
        title: '病虫害早期预警',
        desc: '通过光谱特征变化提前发现作物胁迫信号，在大面积暴发前采取防治措施。',
      },
      {
        icon: 'BarChart3',
        title: '产量预估与收割规划',
        desc: '整合历史数据与当季影像，建立产量预测模型，优化收割调度和仓储物流。',
      },
      {
        icon: 'Thermometer',
        title: '土壤与环境分析',
        desc: '利用热红外和多光谱数据评估土壤质量、有机质含量和地块适宜性。',
      },
      {
        icon: 'Tractor',
        title: '农机路径优化',
        desc: '高精度地形与地块边界数据支持农机自动驾驶和变量施肥作业。',
      },
    ],
    advantages: {
      title: '技术优势',
      items: [
        { icon: 'Satellite', title: '广域覆盖', desc: '单景影像覆盖数万公顷，适合大规模农场和区域监测' },
        { icon: 'Layers', title: '多源融合', desc: '光学、雷达、热红外数据协同，全面感知农田状态' },
        { icon: 'Clock', title: '高频重访', desc: '每 3-5 天获取新影像，及时追踪作物生长变化' },
        { icon: 'TrendingUp', title: '数据驱动', desc: '历史归档与实时数据结合，支持趋势分析与决策优化' },
      ],
    },
    cta: {
      title: '想要为您的农场或农业项目获取定制化卫星监测方案？',
      button: '咨询农业行业专家',
    },
  },
  en: {
    dir: 'ltr' as const,
    hero: {
      title: 'Agriculture',
      subtitle: 'Satellite remote sensing powers precision agriculture—boosting yields, optimizing resources, and safeguarding food security',
    },
    overview: {
      title: 'Satellite Technology Reshaping Modern Agriculture',
      body: 'Global agriculture faces multiple challenges including climate change, water scarcity, and land degradation. Satellite remote sensing provides farmers with unprecedented insights: from large-scale crop health monitoring and precision irrigation decisions to early pest and disease warnings and yield forecasting. Through the fusion of multispectral, thermal infrared, and radar data, farmers and agribusinesses can take the right actions at the right time and place—increasing productivity, conserving water and fertilizer, and laying the data foundation for sustainable agriculture.',
    },
    grid: {
      title: 'Precision Agriculture Applications',
    },
    applications: [
      {
        icon: 'Sprout',
        title: 'Crop Health Monitoring',
        desc: 'Continuously track crop growth status using vegetation indices like NDVI, identify anomalous areas, and guide field management.',
      },
      {
        icon: 'Droplets',
        title: 'Precision Irrigation Management',
        desc: 'Combine soil moisture, evapotranspiration, and crop water demand models to optimize irrigation timing and volume, saving 20-30% water.',
      },
      {
        icon: 'Bug',
        title: 'Early Pest & Disease Warning',
        desc: 'Detect crop stress signals through spectral changes before large-scale outbreaks, enabling timely intervention.',
      },
      {
        icon: 'BarChart3',
        title: 'Yield Forecasting & Harvest Planning',
        desc: 'Integrate historical data with current imagery to build yield prediction models and optimize harvest scheduling and logistics.',
      },
      {
        icon: 'Thermometer',
        title: 'Soil & Environmental Analysis',
        desc: 'Assess soil quality, organic matter content, and plot suitability using thermal infrared and multispectral data.',
      },
      {
        icon: 'Tractor',
        title: 'Farm Machinery Path Optimization',
        desc: 'High-precision terrain and field boundary data support autonomous driving and variable-rate application.',
      },
    ],
    advantages: {
      title: 'Key Technical Advantages',
      items: [
        { icon: 'Satellite', title: 'Wide Coverage', desc: 'Single image covers tens of thousands of hectares, ideal for large farms and regional monitoring' },
        { icon: 'Layers', title: 'Multi-source Fusion', desc: 'Optical, radar, and thermal infrared data synergy for comprehensive field sensing' },
        { icon: 'Clock', title: 'High Revisit Frequency', desc: 'New imagery every 3-5 days to track crop growth changes in time' },
        { icon: 'TrendingUp', title: 'Data-Driven', desc: 'Historical archives combined with real-time data for trend analysis and decision optimization' },
      ],
    },
    cta: {
      title: 'Want a customized satellite monitoring solution for your farm or agricultural project?',
      button: 'Consult our Agriculture Experts',
    },
  },
  ar: {
    dir: 'rtl' as const,
    hero: {
      title: 'الزراعة',
      subtitle: 'الاستشعار عن بُعد بالأقمار الصناعية يدعم الزراعة الدقيقة لزيادة الإنتاجية وتحسين الموارد وضمان الأمن الغذائي',
    },
    overview: {
      title: 'تقنية الأقمار الصناعية تُعيد تشكيل الإدارة الزراعية الحديثة',
      body: 'تواجه الزراعة العالمية تحديات متعددة تشمل تغير المناخ وندرة المياه وتدهور الأراضي. يوفر الاستشعار عن بُعد للمزارعين رؤى غير مسبوقة: من مراقبة صحة المحاصيل على نطاق واسع إلى قرارات الري الدقيقة والإنذار المبكر بالآفات والأمراض والتنبؤ بالإنتاج. من خلال دمج البيانات متعددة الأطياف والحرارية والرادارية، يمكن للمزارعين اتخاذ الإجراءات الصحيحة في الوقت والمكان المناسبين.',
    },
    grid: {
      title: 'تطبيقات الزراعة الدقيقة',
    },
    applications: [
      {
        icon: 'Sprout',
        title: 'مراقبة صحة المحاصيل',
        desc: 'تتبع حالة نمو المحاصيل باستخدام مؤشرات الغطاء النباتي مثل NDVI لتحديد المناطق غير الطبيعية.',
      },
      {
        icon: 'Droplets',
        title: 'إدارة الري الدقيق',
        desc: 'دمج رطوبة التربة ونماذج احتياج المحاصيل للمياه لتحسين توقيت وكمية الري وتوفير 20-30% من المياه.',
      },
      {
        icon: 'Bug',
        title: 'الإنذار المبكر بالآفات والأمراض',
        desc: 'اكتشاف إشارات إج��اد المحاصيل من خلال التغيرات الطيفية قبل تفشي الآفات على نطاق واسع.',
      },
      {
        icon: 'BarChart3',
        title: 'التنبؤ بالإنتاج وتخطيط الحصاد',
        desc: 'دمج البيانات التاريخية مع الصور الحالية لبناء نماذج التنبؤ بالإنتاج وتحسين جدولة الحصاد.',
      },
      {
        icon: 'Thermometer',
        title: 'تحليل التربة والبيئة',
        desc: 'تقييم جودة التربة ومحتوى المادة العضوية وملاءمة الأرض باستخدام البيانات الحرارية.',
      },
      {
        icon: 'Tractor',
        title: 'تحسين مسار الآلات الزراعية',
        desc: 'بيانات دقيقة للتضاريس وحدود الحقول تدعم القيادة الذاتية والتطبيق المتغير.',
      },
    ],
    advantages: {
      title: 'المزايا الرئيسية',
      items: [
        { icon: 'Satellite', title: 'تغطية واسعة', desc: 'صورة واحدة تغطي عشرات الآلاف من الهكتارات' },
        { icon: 'Layers', title: 'دمج متعدد المصادر', desc: 'تآزر البيانات البصرية والرادارية والحرارية' },
        { icon: 'Clock', title: 'تردد إعادة زيارة عالي', desc: 'صور جديدة كل 3-5 أيام لتتبع نمو المحاصيل' },
        { icon: 'TrendingUp', title: 'قائم على البيانات', desc: 'أرشيف تاريخي مع بيانات آنية لتحليل الاتجاهات' },
      ],
    },
    cta: {
      title: 'هل تريد حلاً مخصصاً لمراقبة مزرعتك أو مشروعك الزراعي بالأقمار الصناعية؟',
      button: 'استشر خبراء الزراعة لدينا',
    },
  },
}

const iconMap: Record<string, React.ElementType> = {
  Sprout,
  Droplets,
  Bug,
  BarChart3,
  Thermometer,
  Tractor,
  Satellite,
  Layers,
  Clock,
  TrendingUp,
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AgricultureIndustryPage() {
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
          src="/images/agriculture-hero.jpg"
          alt="Agriculture Industry"
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
                src="/images/agriculture-overview.jpg"
                alt="Agriculture satellite overview"
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
