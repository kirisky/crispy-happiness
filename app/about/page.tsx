'use client'

import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLocale } from '@/hooks/use-locale'

const t = {
  zh: {
    dir: 'ltr' as const,
    hero: { title: '关于我们' },
    profile: {
      title: '公司简介',
      body1: '寰球星途是一家专注于高分辨率卫星星座建设与运营的商业航天公司。我们深信，航天技术的价值不止于数据采集——更在于将原始影像转化为经过 AI 深度处理的',
      highlight: '"决策级意见"，',
      body2: '让每一比特太空信息都能直接服务于商业与社会价值的创造。我们的解决方案广泛服务于政府机构、能源企业、矿业公司、环境保护组织等多个领域，致力于通过卫星技术赋能全球可持续发展目标的达成。',
    },
    mission: {
      title: '我们的使命',
      body: '"以卫星之眼洞察世界，以智能之力赋能决策。"',
    },
    vision: {
      title: '我们的愿景',
      body: '"让卫星数据成为全球决策的基础设施。"',
    },
  },
  en: {
    dir: 'ltr' as const,
    hero: { title: 'ABOUT US' },
    profile: {
      title: 'Company Profile',
      body1: 'Starpath Global is a commercial space company focused on building and operating high-resolution satellite constellations. We believe the value of space technology goes beyond data collection — it lies in transforming raw imagery into AI-processed',
      highlight: '"decision-grade intelligence,"',
      body2: 'enabling every bit of space data to directly create commercial and social value. Our solutions serve governments, energy companies, mining enterprises, environmental organizations, and more — committed to leveraging satellite technology to support global sustainable development goals.',
    },
    mission: {
      title: 'OUR MISSION',
      body: '"To see the world through the eyes of satellites and empower decisions with intelligence."',
    },
    vision: {
      title: 'OUR VISION',
      body: '"Make satellite data the infrastructure for global decision-making."',
    },
  },
  ar: {
    dir: 'rtl' as const,
    hero: { title: 'من نحن' },
    profile: {
      title: 'نبذة عن الشركة',
      body1: 'Starpath Global هي شركة فضاء تجارية تركز على بناء وتشغيل كوكبات الأقمار الصناعية عالية الدقة. نؤمن أن قيمة تكنولوجيا الفضاء تتجاوز جمع البيانات — وتكمن في تحويل الصور الخام إلى',
      highlight: '"ذكاء على مستوى القرار"',
      body2: 'معالج بالذكاء الاصطناعي. تخدم حلولنا الحكومات وشركات الطاقة ومؤسسات التعدين والمنظمات البيئية وغيرها، ملتزمين باستخدام تكنولوجيا الأقمار الصناعية لدعم أهداف التنمية المستدامة العالمية.',
    },
    mission: {
      title: 'مهمتنا',
      body: '"رؤية العالم بعيون الأقمار الصناعية وتمكين القرارات بالذكاء."',
    },
    vision: {
      title: 'رؤيتنا',
      body: '"جعل بيانات الأقمار الصناعية البنية التحتية للقرارات العالمية."',
    },
  },
}

export default function AboutPage() {
  const { locale, setLocale, mounted } = useLocale()
  if (!mounted) return <div className="min-h-screen bg-[#0a0a0a]" />
  const pg = t[locale]

  return (
    <div className="min-h-screen bg-[#050507]" dir={pg.dir}>
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* 1. Hero Title — solid dark background, no image */}
      <section className="bg-[#050507] pt-28 pb-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight mb-6">
            {pg.hero.title}
          </h1>
          <div className="w-20 h-1 bg-cyan-400 mx-auto" />
        </div>
      </section>

      {/* 2 & 3. Profile + Mission/Vision — over background image */}
      <div className="relative w-full">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/about_bg.webp"
            alt="Satellite in orbit"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlay mask */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10">
          {/* 2. Company Profile */}
          <section className="py-20">
            <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Left: Title with cyan bar */}
                <div className="lg:w-1/3">
                  <div className="flex items-stretch gap-4">
                    <div className="w-1 bg-cyan-400 flex-shrink-0" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white italic leading-tight">
                      {pg.profile.title}
                    </h2>
                  </div>
                </div>
                {/* Right: Description */}
                <div className="lg:w-2/3">
                  <p className="text-white/90 text-lg leading-relaxed">
                    {pg.profile.body1}{' '}
                    <span className="text-cyan-400 font-semibold">{pg.profile.highlight}</span>{' '}
                    {pg.profile.body2}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Mission & Vision */}
          <section className="py-16 pb-32">
            <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Mission */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-0.5 bg-cyan-400 flex-shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                      {pg.mission.title}
                    </h3>
                  </div>
                  <p className="text-cyan-400 text-lg sm:text-xl italic leading-relaxed pl-12">
                    {pg.mission.body}
                  </p>
                </div>
                {/* Vision */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-0.5 bg-cyan-400 flex-shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                      {pg.vision.title}
                    </h3>
                  </div>
                  <p className="text-cyan-400 text-lg sm:text-xl italic leading-relaxed pl-12">
                    {pg.vision.body}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer locale={locale} />
    </div>
  )
}
