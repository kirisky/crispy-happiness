'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Building2,
  MapPin,
  Route,
  Layers,
  TreePine,
  Users,
  ArrowRight,
  Satellite,
  Eye,
  Clock,
  FileCheck,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLocale } from '@/hooks/use-locale'

// ─── Inline translations ──────────────────────────────────────────────────────
const t = {
  zh: {
    dir: 'ltr' as const,
    hero: {
      title: '城市规划',
      subtitle: '高分辨率卫星影像与地理空间智能，赋能智慧城市建设与可持续发展',
    },
    overview: {
      title: '卫星数据驱动的城市规划新范式',
      body: '卫星遥感为城市规划者和政府机构提供了前所未有的视角与数据支持。从土地利用分类、人口密度分析、交通网络规划，到绿地覆盖监测与非法建筑识别，高分辨率卫星影像能够覆盖广阔区域并快速更新，为城市发展战略、基础设施建设和环境保护提供精准的决策依据。无需部署现场测量团队，即可获取精确的基础地图与变化检测数据。',
    },
    grid: {
      title: '城市规划核心应用',
    },
    applications: [
      {
        icon: 'MapPin',
        title: '土地利用分类',
        desc: '通过多光谱影像分析，自动分类农业用地、商业区、工业区、住宅区和绿地，支持城市总体规划编制。',
      },
      {
        icon: 'Building2',
        title: '建筑物提取与监测',
        desc: '高分辨率影像提取建筑物轮廓，识别违章建筑，追踪城市扩张边界，服务于城市管理与执法。',
      },
      {
        icon: 'Route',
        title: '交通与基础设施规划',
        desc: '为道路网络、公共交通、管线走廊等基础设施规划提供精确的地形底图与现状调查数据。',
      },
      {
        icon: 'TreePine',
        title: '绿地与环境监测',
        desc: '监测城市绿化覆盖率、公园绿地分布与变化，支持生态城市建设和碳中和目标评估。',
      },
      {
        icon: 'Users',
        title: '人口与社区分析',
        desc: '结合建筑密度、灯光数据和交通流量，辅助人口分布估算和公共服务设施配置优化。',
      },
      {
        icon: 'Layers',
        title: 'GIS 数据集成',
        desc: '卫星影像可无缝集成到 GIS 系统中，作为矢量地图的底图图层和地面真值参考。',
      },
    ],
    advantages: {
      title: '为什么选择卫星数据',
      items: [
        { icon: 'Satellite', title: '广域覆盖', desc: '单景影像可覆盖数百平方公里城市区域' },
        { icon: 'Eye', title: '高清细节', desc: '30cm 分辨率可识别车辆、行人和路面标线' },
        { icon: 'Clock', title: '快速更新', desc: '高重访频率支持城市变化的实时监测' },
        { icon: 'FileCheck', title: '客观记录', desc: '影像作为具有法律效力的客观证据存档' },
      ],
    },
    cta: {
      title: '需要为您的城市规划项目获取高分辨率卫星底图或变化监测服务？',
      button: '咨询城市规划专家',
    },
  },
  en: {
    dir: 'ltr' as const,
    hero: {
      title: 'Urban Planning',
      subtitle: 'High-resolution satellite imagery and geospatial intelligence empowering smart city development and sustainable growth',
    },
    overview: {
      title: 'A New Paradigm for Urban Planning Driven by Satellite Data',
      body: 'Satellite remote sensing provides urban planners and government agencies with unprecedented perspectives and data support. From land use classification, population density analysis, and transportation network planning to green space monitoring and illegal construction identification, high-resolution satellite imagery can cover vast areas with rapid updates, providing precise decision-making support for urban development strategies, infrastructure construction, and environmental protection—all without deploying on-site survey teams.',
    },
    grid: {
      title: 'Core Urban Planning Applications',
    },
    applications: [
      {
        icon: 'MapPin',
        title: 'Land Use Classification',
        desc: 'Automatically classify agricultural, commercial, industrial, residential, and green areas through multispectral imagery analysis to support master planning.',
      },
      {
        icon: 'Building2',
        title: 'Building Extraction & Monitoring',
        desc: 'Extract building footprints from high-resolution imagery, identify unauthorized construction, and track urban expansion boundaries for city management.',
      },
      {
        icon: 'Route',
        title: 'Transportation & Infrastructure Planning',
        desc: 'Provide accurate terrain base maps and current condition surveys for road networks, public transit, and utility corridor planning.',
      },
      {
        icon: 'TreePine',
        title: 'Green Space & Environmental Monitoring',
        desc: 'Monitor urban green coverage, park distribution, and changes to support ecological city construction and carbon neutrality assessments.',
      },
      {
        icon: 'Users',
        title: 'Population & Community Analysis',
        desc: 'Combine building density, nighttime lights, and traffic flow data to assist population distribution estimation and public facility optimization.',
      },
      {
        icon: 'Layers',
        title: 'GIS Data Integration',
        desc: 'Satellite imagery integrates seamlessly into GIS systems as base layers for vector maps and ground truth references.',
      },
    ],
    advantages: {
      title: 'Why Choose Satellite Data',
      items: [
        { icon: 'Satellite', title: 'Wide Coverage', desc: 'Single scene covers hundreds of square kilometers' },
        { icon: 'Eye', title: 'HD Details', desc: '30cm resolution identifies vehicles, pedestrians, and road markings' },
        { icon: 'Clock', title: 'Rapid Updates', desc: 'High revisit frequency supports real-time urban change monitoring' },
        { icon: 'FileCheck', title: 'Objective Records', desc: 'Imagery archived as legally valid objective evidence' },
      ],
    },
    cta: {
      title: 'Need high-resolution satellite base maps or change detection services for your urban planning project?',
      button: 'Consult our Urban Planning Experts',
    },
  },
  ar: {
    dir: 'rtl' as const,
    hero: {
      title: 'التخطيط العمراني',
      subtitle: 'صور الأقمار الصناعية عالية الدقة والذكاء الجغرافي المكاني لتمكين تطوير المدن الذكية والنمو المستدام',
    },
    overview: {
      title: 'نموذج جديد للتخطيط العمراني مدفوع ببيانات الأقمار الصناعية',
      body: 'يوفر الاستشعار عن بُعد بالأقمار الصناعية لمخططي المدن والجهات الحكومية منظورًا ودعمًا للبيانات غير مسبوقين. من تصنيف استخدام الأراضي وتحليل الكثافة السكانية وتخطيط شبكات النقل إلى مراقبة المساحات الخضراء وتحديد البناء غير المرخص، يمكن لصور الأقمار الصناعية عالية الدقة تغطية مناطق واسعة مع تحديثات سريعة.',
    },
    grid: {
      title: 'التطبيقات الأساسية للتخطيط العمراني',
    },
    applications: [
      {
        icon: 'MapPin',
        title: 'تصنيف استخدام الأراضي',
        desc: 'تصنيف تلقائي للمناطق الزراعية والتجارية والصناعية والسكنية والخضراء من خلال تحليل الصور متعددة الأطياف.',
      },
      {
        icon: 'Building2',
        title: 'استخراج ومراقبة المباني',
        desc: 'استخراج بصمات المباني من الصور عالية الدقة وتحديد البناء غير المرخص وتتبع حدود التوسع العمراني.',
      },
      {
        icon: 'Route',
        title: 'تخطيط النقل والبنية التحتية',
        desc: 'توفير خرائط أساسية طبوغرافية دقيقة لشبكات الطرق والنقل العام وممرات المرافق.',
      },
      {
        icon: 'TreePine',
        title: 'مراقبة المساحات الخضراء والبيئة',
        desc: 'مراقبة الغطاء الأخضر الحضري وتوزيع الحدائق لدعم بناء المدن البيئية.',
      },
      {
        icon: 'Users',
        title: 'تحليل السكان والمجتمع',
        desc: 'دمج كثافة المباني وبيانات الإضاءة الليلية وتدفق حركة المرور لتقدير توزيع السكان.',
      },
      {
        icon: 'Layers',
        title: 'تكامل بيانات GIS',
        desc: 'تتكامل صور الأقمار الصناعية بسلاسة في أنظمة GIS كطبقات أساسية للخرائط.',
      },
    ],
    advantages: {
      title: 'لماذا تختار بيانات الأقمار الصناعية',
      items: [
        { icon: 'Satellite', title: 'تغطية واسعة', desc: 'مشهد واحد يغطي مئات الكيلومترات المربعة' },
        { icon: 'Eye', title: 'تفاصيل عالية الدقة', desc: 'دقة 30 سم تحدد المركبات والمشاة' },
        { icon: 'Clock', title: 'تحديثات سريعة', desc: 'تردد إعادة الزيارة العالي يدعم المراقبة الفورية' },
        { icon: 'FileCheck', title: 'سجلات موضوعية', desc: 'الصور مؤرشفة كدليل موضوعي قانوني' },
      ],
    },
    cta: {
      title: 'هل تحتاج إلى خرائط أساسية أو خدمات كشف التغيير لمشروع التخطيط العمراني الخاص بك؟',
      button: 'استشر خبراء التخطيط العمراني',
    },
  },
}

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Building2,
  Route,
  TreePine,
  Users,
  Layers,
  Satellite,
  Eye,
  Clock,
  FileCheck,
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function UrbanPlanningPage() {
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
          src="/images/urban-hero.jpg"
          alt="Urban Planning"
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
                src="/images/urban-overview.jpg"
                alt="Urban planning satellite overview"
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

      {/* 4. Key Advantages */}
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
