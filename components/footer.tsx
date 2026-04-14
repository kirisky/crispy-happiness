'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'
import { translations, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = translations[locale]
  const [activeQR, setActiveQR] = useState<string | null>(null)

  const productLinks = [
    { label: t.footer.satelliteCustom, href: '/products/custom' },
    { label: t.footer.satelliteImagery, href: '/products/imagery' },
    { label: t.footer.financialSolutions, href: '/financial' },
    { label: t.footer.productCatalog, href: '/docs/Starpath_Global_Catelog.pdf' },
  ]

  const solutionLinks = [
    { label: t.footer.oil, href: '/industries/petroleum' },
    { label: t.footer.mining, href: '/industries/mining' },
    { label: t.footer.environment, href: '/industries/environment' },
    { label: t.footer.agriculture, href: '/industries/agriculture' },
    { label: t.footer.maritime, href: '/industries/maritime' },
    { label: t.footer.insurance, href: '/industries/insurance' },
    { label: t.footer.urbanPlanning, href: '/industries/urban' },
    { label: t.footer.utilities, href: '/industries/utilities' },
  ]

  const companyLinks = [
    { label: t.footer.aboutCompany, href: '/about' },
    { label: t.footer.contactUs, href: '/contact' },
  ]

  const toggleQR = (id: string) => {
    if (activeQR === id) {
      setActiveQR(null)
    } else {
      setActiveQR(id)
    }
  }

  return (
    <footer className="bg-[#060e1e] text-white" dir={t.dir}>
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 py-16">
        {/* Top section with company info, global presence, and menus */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Left: Brand & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="relative h-9 w-9 lg:h-10 lg:w-10 flex-shrink-0">
                <Image
                  src="/images/logo-white.webp"
                  alt="寰球星途 Starpath Global"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm lg:text-base font-bold text-white whitespace-nowrap">
                {locale === 'zh' ? '寰球星途' : 'STARPATH GLOBAL'}
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs text-pretty">
              {locale === 'zh'
                ? '领先的卫星定制与卫星成像技术公司，为全球行业客户提供端到端地理空间解决方案。'
                : locale === 'ar'
                  ? 'شركة رائدة في تخصيص الأقمار الصناعية وتقنيات التصوير، تقدم حلولاً جغرافية مكانية شاملة للعملاء العالميين.'
                  : 'Leading satellite customization and imagary technology company providing end-to-end geospatial solutions for global industry clients.'}
            </p>
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-white/50 text-sm lg:pr-8">
                <MapPin size={15} className="flex-shrink-0 mt-0.5 text-cyan-500" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/50 text-sm">
                <Mail size={15} className="flex-shrink-0 text-cyan-500" />
                <span>{t.footer.email}</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/50 text-sm">
                <Phone size={15} className="flex-shrink-0 text-cyan-500" />
                <span>{t.footer.phone}</span>
              </div>
              <div className="flex items-center gap-3 pt-2">
                {/* QR Code Overlay Closer */}
                {activeQR && (
                  <div
                    className="fixed inset-0 z-[40]"
                    onClick={() => setActiveQR(null)}
                  />
                )}

                <div
                  className="relative group/wa1 cursor-pointer z-[50]"
                  onClick={() => toggleQR('jing')}
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#25D366] transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    <span className="text-white text-xs font-medium">Jing Lv</span>
                  </div>
                  <div className={cn(
                    "absolute left-1/2 -translate-x-1/2 bottom-full mb-3 transition-all duration-300 z-50",
                    activeQR === 'jing' ? "opacity-100 visible" : "opacity-0 invisible lg:group-hover/wa1:opacity-100 lg:group-hover/wa1:visible"
                  )}>
                    <div className="bg-white p-2 rounded-lg shadow-xl border border-gray-100">
                      <div className="relative w-32 h-32">
                        <Image
                          src="/images/whatsapp_jing.webp"
                          alt="WhatsApp Jing Lv QR"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-center text-gray-800 text-xs mt-2 font-medium">WhatsApp: Jing Lv</p>
                    </div>
                  </div>
                </div>

                <div
                  className="relative group/wa2 cursor-pointer z-[50]"
                  onClick={() => toggleQR('zhu')}
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#25D366] transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    <span className="text-white text-xs font-medium">Angela Zhu</span>
                  </div>
                  <div className={cn(
                    "absolute left-1/2 -translate-x-1/2 bottom-full mb-3 transition-all duration-300 z-50",
                    activeQR === 'zhu' ? "opacity-100 visible" : "opacity-0 invisible lg:group-hover/wa2:opacity-100 lg:group-hover/wa2:visible"
                  )}>
                    <div className="bg-white p-2 rounded-lg shadow-xl border border-gray-100">
                      <div className="relative w-32 h-32">
                        <Image
                          src="/images/whatsapp_zhu.webp"
                          alt="WhatsApp Angela Zhu QR"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-center text-gray-800 text-xs mt-2 font-medium">WhatsApp: Angela Zhu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Our Global Presence */}
          <div className="lg:col-span-1 lg:-ml-8">
            <h3 className="text-white font-semibold mb-4 whitespace-nowrap">{locale === 'zh' ? '全球办事处' : locale === 'ar' ? 'مكاتبنا العالمية' : 'Our Global Presence'}</h3>
            <div className="relative w-full aspect-[1238/691]">
              <Image
                src="/images/global_presence.webp"
                alt="Global offices"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex justify-between mt-4 text-white/50 text-xs lg:text-sm px-1">
              {t.footer.cities.map((city) => (
                <span key={city}>{city}</span>
              ))}
            </div>
          </div>

          {/* Right: Products, Solutions, About Us */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-3 gap-6">
              {/* Products */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-sm lg:text-base">{t.footer.products}</h3>
                <ul className="space-y-2.5">
                  {productLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-cyan-400 text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-sm lg:text-base">{t.footer.solutions}</h3>
                <ul className="space-y-2.5">
                  {solutionLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-cyan-400 text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-sm lg:text-base">{t.footer.about}</h3>
                <ul className="space-y-2.5">
                  {companyLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-cyan-400 text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">{t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              {locale === 'zh' ? '隐私政策' : locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
            <Link href="/terms" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              {locale === 'zh' ? '使用条款' : locale === 'ar' ? 'شروط الاستخدام' : 'Terms of Use'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
