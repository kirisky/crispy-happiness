'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Eye,
  Radio,
  Layers,
  Video,
  Moon,
  RotateCcw,
  Archive,
  Zap,
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
      title: '卫星图像',
      subtitle: '最高商业可获得卫星影像衍生产品',
      breadcrumb: '产品',
    },
    overview: {
      title: '全球领先的商业卫星影像访问',
      body: '寰球星途提供全球最高商业分辨率卫星数据的访问权限，涵盖光学、多光谱与雷达（SAR）等多种传感器类型。无论您需要亚米级精细光学影像、全天候穿云 SAR 数据，还是多时相变化检测产品，我们均可满足。我们与全球顶尖卫星运营商深度合作，依托海量历史档案与快速响应任务能力，为石油勘探、城市规划、农业监测、国防及灾害评估等核心领域提供精准可靠的地理空间数据支撑。',
    },
    grid: {
      title: '影像产品',
      items: [
        {
          icon: 'Eye',
          title: '光学影像',
          sub: 'Optical Imagery',
          desc: '提供最高至 30cm 的超高分辨率全色及多光谱图像，支持全球任意目标区域的精细识别与地物提取。',
          spec: '分辨率 ≤ 30cm · 多光谱 · 全色',
        },
        {
          icon: 'Radio',
          title: '合成孔径雷达 (SAR)',
          sub: 'Synthetic Aperture Radar',
          desc: '全天候、全天时、穿透云层的主动雷达成像，适用于海面监测、地表形变分析及目标识别。',
          spec: '全天候 · 穿云 · X/C/L 波段',
        },
        {
          icon: 'Layers',
          title: '立体 / 三线阵影像',
          sub: 'Stereo & Tri-stereo',
          desc: '通过前视、正视、后视三角几何生成高精度数字高程模型（DEM）和真实三维城市模型，精度优于 1m。',
          spec: '高程精度 < 1m · DEM · 3D 建模',
        },
        {
          icon: 'Video',
          title: '太空视频',
          sub: 'Video from Space',
          desc: '长达 90 秒的超高清动态卫星视频，可捕捉港口作业、车流动态、自然灾害演变等高价值动态目标。',
          spec: '时长 ≤ 90s · 1080p · 动态目标',
        },
        {
          icon: 'Moon',
          title: '夜间影像',
          sub: 'Nighttime Imagery',
          desc: '监测夜间灯光经济活动、能源使用分布、渔船非法作业及突发人道主义事件的专业夜间成像产品。',
          spec: '夜间低光 · 经济活动监测',
        },
      ],
    },
    advantages: {
      title: '为什么选择我们',
      items: [
        {
          icon: 'RotateCcw',
          title: '每日重访能力',
          sub: 'Daily Revisit',
          desc: '依托庞大的卫星星座，对全球大多数目标区域实现每日甚至多次重访，确保时效性。',
        },
        {
          icon: 'Archive',
          title: '庞大历史数据库',
          sub: 'Vast Archive',
          desc: '超过 20 年的全球历史影像存档，可快速检索任意时间、任意地点的变化对比数据。',
        },
        {
          icon: 'Zap',
          title: '紧急任务快速响应',
          sub: 'Rapid Tasking',
          desc: '支持 24 小时内应急拍摄任务响应，满足灾害应急、军事侦察等高时效需求。',
        },
      ],
    },
    cta: {
      title: '寻找特定区域的历史存档，或需要下达最新的卫星拍摄任务？',
      button: '联系销售专家',
    },
  },
  en: {
    dir: 'ltr' as const,
    hero: {
      title: 'Satellite Imagery',
      subtitle: 'Products derived from highest commercially available imagery',
      breadcrumb: 'Products',
    },
    overview: {
      title: 'World-Leading Commercial Satellite Imagery Access',
      body: 'Starpath Global provides access to the highest commercially available satellite data, covering optical, multispectral, and radar (SAR) sensor types. Whether you need sub-meter optical imagery, all-weather SAR data, or multi-temporal change detection products, we have you covered. Through deep partnerships with the world\'s leading satellite operators and a vast historical archive, we deliver precise and reliable geospatial data for oil exploration, urban planning, agricultural monitoring, defense, and disaster assessment.',
    },
    grid: {
      title: 'Imagery Products',
      items: [
        {
          icon: 'Eye',
          title: 'Optical Imagery',
          sub: 'Panchromatic & Multispectral',
          desc: 'Up to 30cm ultra-high-resolution panchromatic and multispectral imagery for precise target identification and feature extraction anywhere on Earth.',
          spec: 'Resolution ≤ 30cm · Multispectral · Panchromatic',
        },
        {
          icon: 'Radio',
          title: 'Synthetic Aperture Radar (SAR)',
          sub: 'All-Weather Radar Imaging',
          desc: 'All-weather, day-night, cloud-penetrating active radar imaging for maritime monitoring, surface deformation analysis, and target detection.',
          spec: 'All-weather · Cloud-penetrating · X/C/L Band',
        },
        {
          icon: 'Layers',
          title: 'Stereo & Tri-stereo Imagery',
          sub: 'Elevation & 3D Modelling',
          desc: 'Tri-stereo geometry generates high-accuracy Digital Elevation Models (DEMs) and 3D city models with vertical accuracy better than 1 metre.',
          spec: 'Vertical accuracy < 1m · DEM · 3D Modelling',
        },
        {
          icon: 'Video',
          title: 'Video from Space',
          sub: 'Dynamic Target Monitoring',
          desc: 'Up to 90-second HD video from orbit, capturing port operations, traffic flow, natural disaster evolution and other high-value dynamic targets.',
          spec: 'Duration ≤ 90s · 1080p · Dynamic Targets',
        },
        {
          icon: 'Moon',
          title: 'Nighttime Imagery',
          sub: 'Low-Light Sensing',
          desc: 'Specialised nighttime imaging for monitoring light-based economic activity, energy distribution, illegal fishing, and humanitarian events.',
          spec: 'Low-light · Economic Activity Monitoring',
        },
      ],
    },
    advantages: {
      title: 'Why Choose Us',
      items: [
        {
          icon: 'RotateCcw',
          title: 'Daily Revisit',
          sub: 'Global Coverage',
          desc: 'Leveraging a large satellite constellation, most target areas can be revisited daily or multiple times per day for timely intelligence.',
        },
        {
          icon: 'Archive',
          title: 'Vast Archive',
          sub: '20+ Years of History',
          desc: 'Over 20 years of global historical imagery, enabling rapid retrieval of change-detection data for any location at any time.',
        },
        {
          icon: 'Zap',
          title: 'Rapid Tasking',
          sub: '24-Hour Response',
          desc: 'Emergency tasking response within 24 hours, meeting high-urgency requirements for disaster response and time-critical intelligence.',
        },
      ],
    },
    cta: {
      title: 'Looking for archived imagery of a specific area, or need to task a new satellite collection?',
      button: 'Contact Sales',
    },
  },
  ar: {
    dir: 'rtl' as const,
    hero: {
      title: 'صور الأقمار الصناعية',
      subtitle: 'منتجات مشتقة من أعلى صور الأقمار الصناعية التجارية المتاحة',
      breadcrumb: 'المنتجات',
    },
    overview: {
      title: 'وصول رائد عالميًا إلى صور الأقمار الصناعية التجارية',
      body: 'توفر Starpath Global إمكانية الوصول إلى أعلى بيانات الأقمار الصناعية التجارية المتاحة، تغطي المستشعرات البصرية والرادارية (SAR) المتعددة الأطياف. سواء كنت بحاجة إلى صور بصرية دون متر، أو بيانات رادار لجميع الأحوال الجوية، أو منتجات كشف التغيير متعددة الأوقات، نحن نلبي احتياجاتك.',
    },
    grid: {
      title: 'منتجات الصور الصناعية',
      items: [
        {
          icon: 'Eye',
          title: 'التصوير البصري',
          sub: 'Optical Imagery',
          desc: 'صور عالية الدقة تصل إلى 30 سم للتعرف الدقيق على الأهداف واستخراج المعالم في أي مكان على الأرض.',
          spec: 'دقة ≤ 30cm · متعدد الأطياف',
        },
        {
          icon: 'Radio',
          title: 'رادار الفتحة الاصطناعية (SAR)',
          sub: 'Synthetic Aperture Radar',
          desc: 'تصوير رادار نشط لجميع الأحوال الجوية يخترق السحب لمراقبة البحر وتحليل تشوه السطح.',
          spec: 'لجميع الأحوال · يخترق السحب',
        },
        {
          icon: 'Layers',
          title: 'التصوير الثلاثي / الاستريو',
          sub: 'Stereo & Tri-stereo',
          desc: 'إنشاء نماذج ارتفاع رقمية (DEM) عالية الدقة ونماذج ثلاثية الأبعاد للمدن بدقة رأسية أقل من متر.',
          spec: 'دقة رأسية < 1m · DEM · نماذج 3D',
        },
        {
          icon: 'Video',
          title: 'فيديو من الفضاء',
          sub: 'Video from Space',
          desc: 'فيديو عالي الدقة يصل إلى 90 ثانية من المدار لرصد الأهداف الديناميكية كالموانئ والكوارث.',
          spec: 'مدة ≤ 90s · دقة 1080p',
        },
        {
          icon: 'Moon',
          title: 'تصوير ليلي',
          sub: 'Nighttime Imagery',
          desc: 'تصوير ليلي متخصص لرصد النشاط الاقتصادي القائم على الضوء وتوزيع الطاقة والصيد غير المشروع.',
          spec: 'إضاءة منخفضة · رصد النشاط الاقتصادي',
        },
      ],
    },
    advantages: {
      title: 'لماذا تختارنا',
      items: [
        {
          icon: 'RotateCcw',
          title: 'إعادة الزيارة اليومية',
          sub: 'Daily Revisit',
          desc: 'بفضل كوكبة الأقمار الكبيرة، يمكن إعادة زيارة معظم المناطق المستهدفة يوميًا أو عدة مرات يوميًا.',
        },
        {
          icon: 'Archive',
          title: 'أرشيف تاريخي ضخم',
          sub: 'Vast Archive',
          desc: 'أكثر من 20 عامًا من الأرشيف التاريخي العالمي لاسترجاع بيانات مقارنة التغيير لأي موقع.',
        },
        {
          icon: 'Zap',
          title: 'استجابة سريعة للمهام العاجلة',
          sub: 'Rapid Tasking',
          desc: 'استجابة لمهام الطوارئ خلال 24 ساعة لتلبية المتطلبات عالية الإلحاح لاستجابة الكوارث.',
        },
      ],
    },
    cta: {
      title: 'هل تبحث عن صور أرشيفية لمنطقة محددة، أو تحتاج إلى تكليف بمهمة التقاط جديدة؟',
      button: 'تواصل مع فريق المبيعات',
    },
  },
}

const iconMap: Record<string, React.ElementType> = {
  Eye,
  Radio,
  Layers,
  Video,
  Moon,
  RotateCcw,
  Archive,
  Zap,
}

// ─── Page component ──────────────────────────────────────────────────────────
export default function SatelliteImageryPage() {
  const { locale, setLocale, mounted } = useLocale()
  
  if (!mounted) {
    return <div className="min-h-screen bg-white" />
  }

  const pg = t[locale]

  return (
    <div className="min-h-screen bg-white" dir={pg.dir}>
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* 1. Subpage Hero */}
      <section className="relative w-full h-[40vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/hero-imagery.webp"
          alt="Satellite Imagery"
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
            {/* Text side */}
            <div className="flex-1 max-w-lg">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-6 leading-tight text-balance">
                {pg.overview.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-pretty">
                {pg.overview.body}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-500 transition-colors group"
              >
                {locale === 'zh' ? '联系我们了解详情' : locale === 'ar' ? 'اتصل بنا للاستفسار' : 'Contact us to learn more'}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            {/* Image side */}
            <div className="flex-1 w-full lg:flex-[1.2] rounded-2xl overflow-hidden shadow-2xl shadow-[#0a1628]/10 relative aspect-[16/10] group">
  <Image
    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/satellite-data-detailed-h2ZTFuUBDnh5e1KhuOJq2HiTZFXhRi.webp"
    alt="Satellite data analysis"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Imagery Types Grid */}
      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] text-balance">
              {pg.grid.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pg.grid.items.map((item, i) => {
              const Icon = iconMap[item.icon]
              return (
                <div
                  key={i}
                  className={cn(
                    'group relative bg-white rounded-2xl p-7 border border-gray-200',
                    'hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10',
                    'transition-all duration-300 cursor-default',
                    // Make the 5th card span 2 cols on lg to center it
                    i === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                  )}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 group-hover:bg-cyan-100 flex items-center justify-center mb-5 transition-colors duration-300">
                      {Icon && <Icon size={22} className="text-cyan-600" />}
                    </div>
                    <h3 className="text-lg font-bold text-[#0a1628] mb-0.5">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 text-pretty">{item.desc}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-400 font-mono">{item.spec}</span>
                    </div>
                  </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pg.advantages.items.map((item, i) => {
              const Icon = iconMap[item.icon]
              return (
                <div key={i} className="flex flex-col items-center text-center px-6 py-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/8 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
                    {Icon && <Icon size={26} className="text-cyan-400" />}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
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
