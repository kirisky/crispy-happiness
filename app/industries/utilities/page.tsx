'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Zap,
  Radio,
  MapPin,
  TreePine,
  Wrench,
  Navigation,
  ArrowRight,
  Satellite,
  Clock,
  Layers,
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
      title: '公用事业',
      subtitle: '以卫星数据为基础，优化电力、通信和市政基础设施的规划、建设与运维',
    },
    overview: {
      title: '卫星遥感驱动公用事业数字化转型',
      body: '公用事业行业正面临日益复杂的资产管理和服务区域扩展挑战。卫星影像能够无缝集成到 GIS 系统中，帮助企业全面了解服务区域的人口变化、土地利用和基础设施分布。高分辨率影像协助规划人员创建最新地图，精确标注城市边界、道路网络、建筑物和人口分布，为容量规划、合规审批和资产保护提供客观、可靠的数据支撑。',
    },
    grid: {
      title: '公用事业核心应用',
    },
    applications: [
      {
        icon: 'Zap',
        title: '电力线路规划与监测',
        desc: '为输电线路选线、走廊清理和植被侵占监测提供高精度地形和土地覆盖数据。',
      },
      {
        icon: 'Radio',
        title: '通信设施管理',
        desc: '远程查看和分析基站位置，替代高达50%的实地勘察，显著降低运维成本。',
      },
      {
        icon: 'MapPin',
        title: '容量规划与选址',
        desc: '整合人口增长和土地利用数据，确保服务能力与区域发展需求相匹配。',
      },
      {
        icon: 'TreePine',
        title: '植被管理',
        desc: '定期监测输电走廊的植被生长情况，主动识别可能威胁线路安全的树木。',
      },
      {
        icon: 'Wrench',
        title: '土地合规与审批',
        desc: '为许可申请提供客观的影像证据，记录缓冲区、设备放置和环保合规情况。',
      },
      {
        icon: 'Navigation',
        title: '导航与资产定位',
        desc: '结合GPS应用提供精确的资产位置可视化，优化车队调度和紧急响应路线。',
      },
    ],
    advantages: {
      title: '核心技术优势',
      items: [
        { icon: 'Satellite', title: '广域覆盖', desc: '单次采集覆盖数百公里输电走廊或管网' },
        { icon: 'Clock', title: '快速更新', desc: '定期重访确保地图数据始终反映最新状态' },
        { icon: 'Layers', title: 'GIS集成', desc: '无缝对接现有企业GIS系统和工作流程' },
        { icon: 'BarChart3', title: '成本效益', desc: '替代大量实地勘察，节省时间和资源' },
      ],
    },
    cta: {
      title: '需要为您的输电线路或通信网络定制卫星监测方案吗？',
      button: '咨询公用事业专家',
    },
  },
  en: {
    dir: 'ltr' as const,
    hero: {
      title: 'Utilities',
      subtitle: 'Satellite-powered planning, construction and operations for power, telecom and municipal infrastructure',
    },
    overview: {
      title: 'Satellite Remote Sensing Driving Utility Digital Transformation',
      body: 'The utility industry faces increasingly complex asset management and service area expansion challenges. Satellite imagery integrates seamlessly into GIS systems, helping companies understand demographic changes, land use patterns and infrastructure distribution across service territories. High-resolution imagery assists planners in creating up-to-date maps with precise city boundaries, road networks, buildings and population data—providing objective, reliable data for capacity planning, compliance approvals and asset protection.',
    },
    grid: {
      title: 'Utility Core Applications',
    },
    applications: [
      {
        icon: 'Zap',
        title: 'Power Line Planning & Monitoring',
        desc: 'High-precision terrain and land cover data for transmission line routing, corridor clearing and vegetation encroachment monitoring.',
      },
      {
        icon: 'Radio',
        title: 'Telecom Facility Management',
        desc: 'Remotely view and analyze cell tower locations, replacing up to 50% of field surveys and significantly reducing O&M costs.',
      },
      {
        icon: 'MapPin',
        title: 'Capacity Planning & Siting',
        desc: 'Integrate population growth and land use data to ensure service capacity matches regional development needs.',
      },
      {
        icon: 'TreePine',
        title: 'Vegetation Management',
        desc: 'Regularly monitor vegetation growth along transmission corridors, proactively identifying trees threatening line safety.',
      },
      {
        icon: 'Wrench',
        title: 'Land Compliance & Permitting',
        desc: 'Provide objective imagery evidence for permit applications, documenting buffer zones, equipment placement and environmental compliance.',
      },
      {
        icon: 'Navigation',
        title: 'Navigation & Asset Location',
        desc: 'Precise asset visualization integrated with GPS applications to optimize fleet dispatch and emergency response routing.',
      },
    ],
    advantages: {
      title: 'Key Technical Advantages',
      items: [
        { icon: 'Satellite', title: 'Wide Coverage', desc: 'Single acquisition covers hundreds of kilometers of transmission corridors or pipeline networks' },
        { icon: 'Clock', title: 'Rapid Updates', desc: 'Regular revisits ensure map data always reflects current conditions' },
        { icon: 'Layers', title: 'GIS Integration', desc: 'Seamless connection to existing enterprise GIS systems and workflows' },
        { icon: 'BarChart3', title: 'Cost Efficiency', desc: 'Replaces extensive field surveys, saving time and resources' },
      ],
    },
    cta: {
      title: 'Need a custom satellite monitoring solution for your power lines or telecom network?',
      button: 'Consult our Utilities Experts',
    },
  },
  ar: {
    dir: 'rtl' as const,
    hero: {
      title: 'المرافق',
      subtitle: 'التخطيط والبناء والتشغيل المدعوم بالأقمار الصناعية للبنية التحتية للطاقة والاتصالات والبلديات',
    },
    overview: {
      title: 'الاستشعار عن بُعد يقود التحول الرقمي للمرافق',
      body: 'تواجه صناعة المرافق تحديات متزايدة التعقيد في إدارة الأصول وتوسيع مناطق الخدمة. تتكامل صور الأقمار الصناعية بسلاسة مع أنظمة GIS، مما يساعد الشركات على فهم التغييرات الديموغرافية وأنماط استخدام الأراضي وتوزيع البنية التحتية عبر مناطق الخدمة.',
    },
    grid: {
      title: 'التطبيقات الأساسية للمرافق',
    },
    applications: [
      {
        icon: 'Zap',
        title: 'تخطيط ومراقبة خطوط الكهرباء',
        desc: 'بيانات التضاريس والغطاء الأرضي عالية الدقة لتوجيه خطوط النقل وإزالة الممرات ومراقبة تعدي النباتات.',
      },
      {
        icon: 'Radio',
        title: 'إدارة مرافق الاتصالات',
        desc: 'عرض وتحليل مواقع أبراج الخلايا عن بُعد، واستبدال ما يصل إلى 50٪ من المسوحات الميدانية.',
      },
      {
        icon: 'MapPin',
        title: 'تخطيط السعة واختيار المواقع',
        desc: 'دمج بيانات النمو السكاني واستخدام الأراضي لضمان تطابق قدرة الخدمة مع احتياجات التنمية الإقليمية.',
      },
      {
        icon: 'TreePine',
        title: 'إدارة النباتات',
        desc: 'مراقبة نمو النباتات بانتظام على طول ممرات النقل، وتحديد الأشجار التي تهدد سلامة الخطوط.',
      },
      {
        icon: 'Wrench',
        title: 'الامتثال والتصاريح',
        desc: 'توفير أدلة صور موضوعية لطلبات التصاريح، وتوثيق المناطق العازلة ووضع المعدات.',
      },
      {
        icon: 'Navigation',
        title: 'الملاحة وموقع الأصول',
        desc: 'تصور دقيق للأصول متكامل مع تطبيقات GPS لتحسين إرسال الأسطول والاستجابة للطوارئ.',
      },
    ],
    advantages: {
      title: 'مؤشرات الأداء الرئيسية',
      items: [
        { icon: 'Satellite', title: 'التغطية الواسعة', desc: 'الاستحواذ الواحد يغطي مئات الكيلومترات من ممرات النقل' },
        { icon: 'Clock', title: 'التحديثات السريعة', desc: 'الزيارات المنتظمة تضمن أن بيانات الخريطة تعكس الظروف الحالية' },
        { icon: 'Layers', title: 'تكامل GIS', desc: 'اتصال سلس بأنظمة GIS المؤسسية الحالية' },
        { icon: 'BarChart3', title: 'كفاءة التكلفة', desc: 'يحل محل المسوحات الميدانية الواسعة، مما يوفر الوقت والموارد' },
      ],
    },
    cta: {
      title: 'هل تحتاج إلى حل مراقبة قمري مخصص لخطوط الكهرباء أو شبكة الاتصالات الخاصة بك؟',
      button: 'استشر خبراء المرافق لدينا',
    },
  },
}

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Radio,
  MapPin,
  TreePine,
  Wrench,
  Navigation,
  Satellite,
  Clock,
  Layers,
  BarChart3,
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function UtilitiesIndustryPage() {
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
          src="/images/utilities-hero.jpg"
          alt="Utilities Industry"
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
                src="/images/utilities-overview.jpg"
                alt="Utilities satellite overview"
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
