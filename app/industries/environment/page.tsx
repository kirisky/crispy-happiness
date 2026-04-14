'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Leaf,
  Flame,
  Droplets,
  Map,
  Trees,
  Shield,
  ArrowRight,
  Satellite,
  Clock,
  Layers,
  BarChart3,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLocale } from '@/hooks/use-locale'

const t = {
  zh: {
    dir: 'ltr' as const,
    hero: {
      title: '环境与自然资源',
      subtitle: '利用高分辨率多光谱卫星影像，助力自然资源管理与生态保护',
    },
    overview: {
      title: '卫星遥感助力环境监测与资源管理',
      body: '我们的卫星影像是支持自然资源管理的理想工具：从监测农作物健康、管理森林火灾风险、绘制偏远流域地图，到评估人类活动对环境的影响。我们为政府机构、商业组织和环保团体提供宏观视角，高分辨率多光谱成像能力支持对自然世界的精密遥感分析。',
    },
    grid: {
      title: '环境监测解决方案',
    },
    applications: [
      {
        icon: 'Leaf',
        title: '植被健康遥感',
        desc: '农业、林业和环境监管机构利用卫星影像分析植被健康状态，识别病虫害、干旱影响和入侵物种扩散。',
      },
      {
        icon: 'Flame',
        title: '森林火灾风险管理',
        desc: '结合高分辨率彩色和近红外多光谱影像，评估森林健康状况，精确绘制建筑物、道路等基础设施，建立区域风险档案。',
      },
      {
        icon: 'Droplets',
        title: '水资源管理',
        desc: '河流流域、含水层等水源往往跨越多个行政区划，卫星影像为水资源协同规划提供鸟瞰视角，支持科学决策。',
      },
      {
        icon: 'Map',
        title: '海岸线测绘',
        desc: '支持洪泛区制图、生物多样性研究、海岸带影响评估，监测湿地、海滩、水下植被、城市化进程和风暴损害。',
      },
      {
        icon: 'Trees',
        title: '保护区监测',
        desc: '帮助环保组织基于生态系统全貌做出有效保护决策，监测人类活动对保护区的侵占，追踪野生动物种群分布。',
      },
      {
        icon: 'Shield',
        title: '环保合规评估',
        desc: '提供客观的环境变化数据，支持企业和政府满足日益严格的环境监管要求，确保合规运营。',
      },
    ],
    advantages: {
      title: '核心技术优势',
      items: [
        { icon: 'Satellite', title: '全球覆盖', desc: '实现地球任意区域的快速影像获取，无需实地考察' },
        { icon: 'Layers', title: '多光谱分析', desc: '可见光、近红外、短波红外等多波段数据支持深度分析' },
        { icon: 'Clock', title: '时序监测', desc: '访问数十年历史档案，追踪环境长期变化趋势' },
        { icon: 'BarChart3', title: '定量评估', desc: 'NDVI、水体指数等科学指标，提供客观量化依据' },
      ],
    },
    cta: {
      title: '需要定制环境监测或生态评估解决方案？',
      button: '咨询环境行业专家',
    },
  },
  en: {
    dir: 'ltr' as const,
    hero: {
      title: 'Environment & Natural Resources',
      subtitle: 'High-resolution multispectral satellite imagery for natural resource management and environmental protection',
    },
    overview: {
      title: 'Satellite Remote Sensing for Environmental Monitoring',
      body: 'Our imagery is ideally suited to support efforts to manage our natural resources: from monitoring agricultural crops, to managing the risk of wildfires, mapping remote watersheds, or evaluating the impacts of human settlements on the environment. We provide governments, commercial organizations and conservation groups with the big picture, and our high-resolution multispectral capabilities enable sophisticated remote sensing of the natural world.',
    },
    grid: {
      title: 'Environmental Monitoring Solutions',
    },
    applications: [
      {
        icon: 'Leaf',
        title: 'Remote Sensing for Plant Health',
        desc: 'Farmers, forestry organizations and environmental regulators use satellite imagery to analyze, assess, and manage the health and growth states of plant materials.',
      },
      {
        icon: 'Flame',
        title: 'Forest Fire Risk Management',
        desc: 'With high-resolution color and near infrared multispectral imagery, agencies can evaluate forest health and accurately map buildings, roads, and structures to create risk profiles.',
      },
      {
        icon: 'Droplets',
        title: 'Water Resource Management',
        desc: 'River basins, aquifers and other water sources are often shared resources. Our global imagery plays a key role in collaborative planning and governance of water resources.',
      },
      {
        icon: 'Map',
        title: 'Coastline Mapping',
        desc: 'Support flood plain mapping, biodiversity studies, coastal zone assessments—monitoring wetlands, beaches, submerged vegetation, urbanization and storm damage.',
      },
      {
        icon: 'Trees',
        title: 'Supporting Conservation Efforts',
        desc: 'Conservation groups can make effective decisions based on a better understanding of ecosystems, monitoring human encroachment and wildlife population changes.',
      },
      {
        icon: 'Shield',
        title: 'Environmental Compliance',
        desc: 'Provide objective environmental change data to help enterprises and governments meet increasingly stringent environmental regulations.',
      },
    ],
    advantages: {
      title: 'Key Technical Advantages',
      items: [
        { icon: 'Satellite', title: 'Global Coverage', desc: 'Rapid image acquisition of any area on Earth without field visits' },
        { icon: 'Layers', title: 'Multispectral Analysis', desc: 'Visible, NIR, SWIR bands support in-depth environmental analysis' },
        { icon: 'Clock', title: 'Temporal Monitoring', desc: 'Access decades of archives to track long-term environmental trends' },
        { icon: 'BarChart3', title: 'Quantitative Assessment', desc: 'NDVI, water indices and other metrics provide objective measurements' },
      ],
    },
    cta: {
      title: 'Need a custom environmental monitoring or ecological assessment solution?',
      button: 'Consult Our Environmental Experts',
    },
  },
  ar: {
    dir: 'rtl' as const,
    hero: {
      title: 'البيئة والموارد الطبيعية',
      subtitle: 'صور الأقمار الصناعية متعددة الأطياف عالية الدقة لإدارة الموارد الطبيعية وحماية البيئة',
    },
    overview: {
      title: 'الاستشعار عن بُعد لمراقبة البيئة',
      body: 'صورنا مثالية لدعم جهود إدارة الموارد الطبيعية: من مراقبة المحاصيل الزراعية، إلى إدارة مخاطر حرائق الغابات، ورسم خرائط مستجمعات المياه النائية، أو تقييم آثار المستوطنات البشرية على البيئة. نوفر للحكومات والمنظمات والجماعات البيئية الصورة الشاملة.',
    },
    grid: {
      title: 'حلول المراقبة البيئية',
    },
    applications: [
      {
        icon: 'Leaf',
        title: 'الاستشعار عن بُعد لصحة النبات',
        desc: 'يستخدم المزارعون ومنظمات الغابات والمنظمون البيئيون صور الأقمار الصناعية لتحليل وتقييم صحة النباتات.',
      },
      {
        icon: 'Flame',
        title: 'إدارة مخاطر حرائق الغابات',
        desc: 'مع الصور الملونة عالية الدقة وتحت الحمراء، يمكن للوكالات تقييم صحة الغابات ورسم خرائط للمباني لإنشاء ملفات المخاطر.',
      },
      {
        icon: 'Droplets',
        title: 'إدارة الموارد المائية',
        desc: 'أحواض الأنهار والآبار الجوفية غالباً ما تكون موارد مشتركة. تلعب صورنا دوراً رئيسياً في التخطيط التعاوني لإدارة المياه.',
      },
      {
        icon: 'Map',
        title: 'رسم خرائط السواحل',
        desc: 'دعم رسم خرائط السهول الفيضية ودراسات التنوع البيولوجي ورصد الأراضي الرطبة والشواطئ.',
      },
      {
        icon: 'Trees',
        title: 'دعم جهود الحفظ',
        desc: 'تمكين منظمات الحفظ من اتخاذ قرارات فعالة بناءً على فهم أفضل للنظام البيئي.',
      },
      {
        icon: 'Shield',
        title: 'الامتثال البيئي',
        desc: 'توفير بيانات موضوعية عن التغيرات البيئية لمساعدة الشركات والحكومات على تلبية المتطلبات التنظيمية.',
      },
    ],
    advantages: {
      title: 'المزايا التقنية الرئيسية',
      items: [
        { icon: 'Satellite', title: 'تغطية عالمية', desc: 'الحصول السريع على الصور لأي منطقة على الأرض' },
        { icon: 'Layers', title: 'تحليل متعدد الأطياف', desc: 'النطاقات المرئية والقريبة من الحمراء تدعم التحليل البيئي المتعمق' },
        { icon: 'Clock', title: 'المراقبة الزمنية', desc: 'الوصول إلى عقود من الأرشيف لتتبع اتجاهات التغير البيئي' },
        { icon: 'BarChart3', title: 'التقييم الكمي', desc: 'مؤشرات NDVI والمياه توفر قياسات موضوعية' },
      ],
    },
    cta: {
      title: 'هل تحتاج إلى حل مخصص لمراقبة البيئة أو التقييم البيئي؟',
      button: 'استشر خبراءنا البيئيين',
    },
  },
}

const iconMap: Record<string, React.ElementType> = {
  Leaf,
  Flame,
  Droplets,
  Map,
  Trees,
  Shield,
  Satellite,
  Clock,
  Layers,
  BarChart3,
}

export default function EnvironmentIndustryPage() {
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
          src="/images/environment-hero.jpg"
          alt="Environment & Natural Resources"
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
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-6 leading-tight text-balance">
                {pg.overview.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-pretty">
                {pg.overview.body}
              </p>
            </div>
            <div className="flex-1 w-full lg:flex-[1.2] rounded-2xl overflow-hidden shadow-2xl shadow-[#0a1628]/10 relative aspect-[16/10] group">
              <Image
                src="/images/environment-overview.jpg"
                alt="Environmental monitoring satellite overview"
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

      {/* 4. Advantages */}
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
