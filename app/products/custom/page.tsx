'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Check,
  Layers,
  Radio,
  Zap,
  Rocket,
  Settings,
  ArrowRight,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLocale } from '@/hooks/use-locale'
import { cn } from '@/lib/utils'

const t = {
  zh: {
    dir: 'ltr' as const,
    hero: {
      title: '端到端专属卫星定制服务',
      subtitle: '从有效载荷设计到在轨交付，为您打造专属的太空基础设施，完全掌控数据主权。',
      button1: '了解光学卫星',
      button2: '了解 SAR 卫星',
    },
    philosophy: {
      title: '打破常规，定义您的太空资产',
      body: '现成的商业数据无法满足所有独特的业务需求。通过定制属于您自己的卫星或星座，您将获得对重访频率、成像时间、传感器规格的绝对控制权。我们的航天工程团队提供从概念设计、AIT（总装集成测试）到发射入轨的交钥匙工程。',
    },
    optical: {
      badge: '光学成像',
      title: '突破视界：亚米级光学遥感平台',
      body: '搭载先进的推扫式相机或全帧视频传感器，捕捉令人惊叹的高清地球表面细节。',
      features: [
        '极高空间分辨率（优于 0.3 米）',
        '多光谱与高光谱数据采集能力',
        '支持长达 90 秒的超高清太空视频',
        '凝视高敏度夜间微光成像',
      ],
    },
    sar: {
      badge: 'SAR 成像',
      title: '全天候洞察：高性能 SAR 平台',
      body: '不受云层、雾霾或极夜限制，穿透表面看清事物本质。专为国防、海事和地质监测设计。',
      features: [
        '无论昼夜、无论天气的 24/7 全天候成像',
        '多极化模式与毫米级地表形变干涉测量',
        '高频宽带实现超高分辨率聚束模式 (Spotlight)',
        '轻量化平板天线，优化发射成本',
      ],
    },
    components: {
      title: '卫星零部件供应',
      subtitle: '航天级核心组件，助力您的卫星研制计划',
      body: '从结构平台到有效载荷模块，从姿态控制系统到推进装置，我们提供经过飞行验证的航天级零部件。无论是科研院所的实验卫星，还是商业公司的量产项目，都能获得可靠的供应链支持。',
      features: [
        { title: '平台结构', desc: '卫星本体框架、桁架管、展开机构' },
        { title: '电源系统', desc: '太阳能电池板、电池组、电源控制单元' },
        { title: '姿控系统', desc: '反作用轮、动量轮、磁力矩器、星敏感器' },
        { title: '推进系统', desc: '推进器、燃料箱、管路阀门组件' },
        { title: '热控系统', desc: '热管、散热板、多层隔热材料' },
        { title: '载荷模块', desc: '光学镜头、焦平面阵列、SAR天线组件' },
      ],
    },
    journey: {
      title: '定制化流程',
      stages: [
        {
          name: '需求与星座设计',
          enName: 'Mission Design',
          image: '/images/blueprint-design.jpg',
        },
        {
          name: '载荷定制与总装',
          enName: 'AIT & Manufacturing',
          image: '/images/manufacturing-ait.jpg',
        },
        {
          name: '运载火箭整合',
          enName: 'Launch Integration',
          image: '/images/rocket-launch.jpg',
        },
        {
          name: '测控与在轨交付',
          enName: 'In-Orbit Delivery',
          image: '/images/control-center.jpg',
        },
      ],
    },
    cta: {
      title: '准备好打造您的第一颗卫星了吗？',
      subtitle: '联系我们的系统工程师，探讨您的有效载荷需求与星座轨道设计。',
      button: '预约工程师咨询',
    },
  },
  en: {
    dir: 'ltr' as const,
    hero: {
      title: 'End-to-End Custom Satellite Solutions',
      subtitle: 'From payload design to in-orbit delivery, build proprietary space infrastructure with complete data sovereignty control.',
      button1: 'Learn About Optical Satellites',
      button2: 'Learn About SAR Satellites',
    },
    philosophy: {
      title: 'Break Convention, Define Your Space Asset',
      body: 'Off-the-shelf commercial data cannot meet all unique business requirements. By building your own dedicated satellite or constellation, you gain absolute control over revisit frequency, imaging time, and sensor specifications. Our aerospace engineering team provides turnkey solutions from concept design, AIT (Assembly, Integration & Test), to launch and orbital delivery.',
    },
    optical: {
      badge: 'OPTICAL IMAGING',
      title: 'Breaking Boundaries: Sub-Meter Optical Remote Sensing Platform',
      body: 'Equipped with advanced push-broom cameras or full-frame video sensors, capturing stunning high-resolution Earth surface details.',
      features: [
        'Ultra-high spatial resolution (< 0.3 meters)',
        'Multispectral and hyperspectral data acquisition',
        'Support for 90+ seconds of ultra-HD space video',
        'High-sensitivity night-vision low-light imaging',
      ],
    },
    sar: {
      badge: 'SAR IMAGING',
      title: 'All-Weather Insight: High-Performance SAR Platform',
      body: 'Unaffected by clouds, haze, or polar night—penetrating the surface to see the essence. Designed for defense, maritime, and geological monitoring.',
      features: [
        '24/7 all-weather imaging, day or night',
        'Multi-polarization and millimeter-level surface deformation interferometry',
        'High-bandwidth spotlight mode for ultra-high resolution',
        'Lightweight phased array antennas optimizing launch costs',
      ],
    },
    components: {
      title: 'Satellite Components',
      subtitle: 'Space-Grade Core Components for Your Satellite Program',
      body: 'From structural platforms to payload modules, from attitude control systems to propulsion units, we provide flight-proven space-grade components. Whether for research institution experimental satellites or commercial mass production projects, you can rely on our robust supply chain support.',
      features: [
        { title: 'Bus Structure', desc: 'Satellite body frame, truss tubes, deployment mechanisms' },
        { title: 'Power System', desc: 'Solar arrays, battery packs, power control units' },
        { title: 'ADCS', desc: 'Reaction wheels, momentum wheels, magnetorquers, star trackers' },
        { title: 'Propulsion', desc: 'Thrusters, fuel tanks, tubing & valve assemblies' },
        { title: 'Thermal Control', desc: 'Heat pipes, radiator panels, MLI blankets' },
        { title: 'Payload Modules', desc: 'Optical lenses, focal plane arrays, SAR antenna assemblies' },
      ],
    },
    journey: {
      title: 'The Customization Journey',
      stages: [
        {
          name: 'Mission Design',
          enName: 'Requirements & Constellation Design',
          image: '/images/blueprint-design.jpg',
        },
        {
          name: 'AIT & Manufacturing',
          enName: 'Payload Customization & Assembly',
          image: '/images/manufacturing-ait.jpg',
        },
        {
          name: 'Launch Integration',
          enName: 'Launch Vehicle Integration',
          image: '/images/rocket-launch.jpg',
        },
        {
          name: 'In-Orbit Delivery',
          enName: 'Control & In-Orbit Delivery',
          image: '/images/control-center.jpg',
        },
      ],
    },
    cta: {
      title: 'Ready to Build Your First Satellite?',
      subtitle: 'Contact our systems engineers to discuss your payload requirements and constellation orbit design.',
      button: 'Schedule Engineer Consultation',
    },
  },
  ar: {
    dir: 'rtl' as const,
    hero: {
      title: 'خدمات تخصيص الأقمار الصناعية الشاملة',
      subtitle: 'من تصميم الحمولة إلى التسليم في المدار، بناء بنية تحتية فضائية خاصة بك مع التحكم الكامل في السيادة ال�����انية.',
      button1: 'تعرف على الأقمار الضوئية',
      button2: 'تعرف على أقمار SAR',
    },
    philosophy: {
      title: 'اكسر الاتجاهات، عرّف أصول الفضاء الخاصة بك',
      body: 'البيانات التجارية الجاهزة لا يمكنها تلبية جميع الاحتياجات الفريدة. من خلال بناء قمرك الصناعي المخصص أو كوكبة خاصة بك، تحصل على تحكم كامل على تكرار الزيارة ووقت التصوير ومواصفات المستشعرات. يوفر فريق الهندسة الفضائية لدينا حلول شاملة من التصميم الأولي إلى الاختبار والتطبيق والإطلاق والتسليم المداري.',
    },
    optical: {
      badge: 'التصوير البصري',
      title: 'كسر الحدود: منصة التحس البعيد البصري تحت الجزئي',
      body: 'مزودة بكاميرات متقدمة أو أجهزة استشعار فيديو ذات إطار كامل، تلتقط تفاصيل سطح الأرض العالية الدقة المذهلة.',
      features: [
        'دقة مكانية عالية جداً (أقل من 0.3 متر)',
        'قدرة اقتناء البيانات متعددة الأطياف والفائقة الطيفية',
        'دعم أكثر من 90 ثانية من فيديو الفضاء فائق الدقة',
        'تصوير الرؤية الليلية عالي الحساسية',
      ],
    },
    sar: {
      badge: 'التصوير الراداري',
      title: 'الرؤية على مدار الساعة: منصة SAR عالية الأداء',
      body: 'لا تتأثر بالغيوم أو الضباب أو الليل القطبي – اخترق السطح لترى الجوهر. مصمم للدفاع والبحري والمراقبة الجيولوجية.',
      features: [
        'تصوير ليلاً ونهاراً على مدار 24/7',
        'متعدد الاستقطاب وقياس التشوه السطحي ملليمتري',
        'الوضع عالي العرض النطاق للدقة فائقة العالية',
        'هوائيات مصفوفة مرحلية خفيفة الوزن لتحسين تكاليف الإطلاق',
      ],
    },
    components: {
      title: 'مكونات الأقمار الصناعية',
      subtitle: 'مكونات فضائية أساسية لبرنامج الأقمار الصناعية الخاص بك',
      body: 'من المنصات الهيكلية إلى وحدات الحمولة، ومن أنظمة التحكم في الوضعية إلى وحدات الدفع، نوفر مكونات فضائية مثبتة الطيران. سواء للأقمار الصناعية التجريبية للمؤسسات البحثية أو مشاريع الإنتاج التجاري، يمكنك الاعتماد على دعم سلسلة التوريد القوية لدينا.',
      features: [
        { title: 'هيكل المنصة', desc: 'إطار جسم القمر الصناعي، أنابيب الدعامات، آليات النشر' },
        { title: 'نظام الطاقة', desc: 'الألواح الشمسية، حزم البطاريات، وحدات التحكم في الطاقة' },
        { title: 'نظام التحكم', desc: 'عجلات التفاعل، عجلات الزخم، مقياس العزم المغناطيسي، متتبع النجوم' },
        { title: 'نظام الدفع', desc: 'الدافعات، خزانات الوقود، مجموعات الأنابيب والصمامات' },
        { title: 'التحكم الحراري', desc: 'أنابيب الحرارة، لوحات المشعاع، بطانيات العزل متعددة الطبقات' },
        { title: 'وحدات الحمولة', desc: 'العدسات البصرية، مصفوفات المستوى البؤري، مجموعات هوائي SAR' },
      ],
    },
    journey: {
      title: 'رحلة التخصيص',
      stages: [
        {
          name: 'تصميم المهمة',
          enName: 'متطلبات وتصميم الكوكبة',
          image: '/images/blueprint-design.jpg',
        },
        {
          name: 'التصنيع والتجميع',
          enName: 'تخصيص الحمولة والتجميع',
          image: '/images/manufacturing-ait.jpg',
        },
        {
          name: 'تكامل مركبة الإطلاق',
          enName: 'تكامل مركبة الإطلاق',
          image: '/images/rocket-launch.jpg',
        },
        {
          name: 'التحكم والتسليم المداري',
          enName: 'التحكم والتسليم',
          image: '/images/control-center.jpg',
        },
      ],
    },
    cta: {
      title: 'هل أنت مستعد لبناء قمرك الصناعي الأول؟',
      subtitle: 'اتصل بمهندسي الأنظمة لدينا لمناقشة متطلبات الحمولة الخاصة بك وتصميم مدار الكوكبة.',
      button: 'جدولة استشارة المهندس',
    },
  },
}

export default function CustomSatellitesPage() {
  const { locale, setLocale, mounted } = useLocale()

  if (!mounted) {
    return <div className="min-h-screen bg-white" />
  }

  const pg = t[locale]

  return (
    <div className="min-h-screen bg-white" dir={pg.dir}>
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* 1. Immersive Hero Section - Full screen */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <Image
          src="/images/hero-satellite.webp"
          alt="Custom Satellite"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-4">
              {pg.hero.title}
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
              {pg.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => document.getElementById('optical')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1"
              >
                {pg.hero.button1}
              </button>
              <button
                onClick={() => document.getElementById('sar')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 border border-white/40 text-white font-semibold rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                {pg.hero.button2}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy Section - Left/Right Layout */}
      <section className="py-24 bg-gray-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left text */}
            <div className="flex-1 max-w-lg">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-6 leading-tight text-balance">
                {pg.philosophy.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-pretty mb-8">
                {pg.philosophy.body}
              </p>
            </div>
            {/* Right image */}
            <div className="flex-1 w-full lg:flex-[1.2] rounded-2xl overflow-hidden shadow-2xl shadow-[#0a1628]/10 relative aspect-[16/10] group">
              <Image
                src="/images/satellite-assembly.webp"
                alt="Satellite Assembly"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Optical Satellites - Image Left Text Right */}
      <section id="optical" className="py-24 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left image */}
            <div className="flex-1 w-full lg:flex-[1.3] relative aspect-[850/438] group order-2 lg:order-1">
              <Image
                src="/images/optical-satellite.webp"
                alt="Optical Satellite"
                fill
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            {/* Right text */}
            <div className="flex-1 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-3 leading-tight">
                {locale === 'zh' ? '光学卫星' : locale === 'ar' ? 'الأقمار الصناعية البصرية' : 'Optical Satellites'}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-snug font-medium">
                {pg.optical.title}
              </p>
              <p className="text-gray-600 leading-relaxed text-pretty mb-8">
                {pg.optical.body}
              </p>
              <ul className="space-y-4">
                {pg.optical.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-cyan-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAR Satellites - Text Left Image Right */}
      <section id="sar" className="py-24 bg-gray-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left text */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-3 leading-tight">
                {locale === 'zh' ? 'SAR卫星' : locale === 'ar' ? 'أقمار SAR' : 'SAR Satellites'}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-snug font-medium">
                {pg.sar.title}
              </p>
              <p className="text-gray-600 leading-relaxed text-pretty mb-8">
                {pg.sar.body}
              </p>
              <ul className="space-y-4">
                {pg.sar.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-cyan-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right image */}
            <div className="flex-1 w-full lg:flex-[1.3] relative aspect-[850/438] group">
              <Image
                src="/images/sar-satellite.webp"
                alt="SAR Satellite"
                fill
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Satellite Components */}
      <section id="components" className="py-24 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Image */}
            <div className="flex-1 w-full lg:flex-[1.3]">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-[#0a1628]/10 group">
                <Image
                  src="/images/satellite_structural.webp"
                  alt="Satellite Structural Components"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </div>
            {/* Right: Text */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-3 leading-tight">
                {pg.components.title}
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-snug font-medium">
                {pg.components.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed text-pretty mb-8">
                {pg.components.body}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pg.components.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-cyan-50 transition-colors">
                    <Settings size={20} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[#0a1628] text-sm mb-1">{feature.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Customization Journey - 4-stage cards */}
      <section className="py-24 bg-gray-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] text-balance">
              {pg.journey.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pg.journey.stages.map((stage, i) => (
              <div
                key={i}
                className={cn(
                  'group relative rounded-2xl overflow-hidden cursor-pointer',
                  'transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10'
                )}
              >
                {/* Stage number badge */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center text-lg z-10">
                  {i + 1}
                </div>

                {/* Image background */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={stage.image}
                    alt={stage.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-2">
                    {stage.enName}
                  </p>
                  <h4 className="text-lg font-bold text-white">{stage.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Image-Background CTA */}
      <section className="relative w-full h-96 overflow-hidden">
        <Image
          src="/images/earth-horizon-cta.jpg"
          alt="Earth Horizon"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a1628]/70" />

        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,180,216,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Cyan accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
              {pg.cta.title}
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
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
