'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { translations, type Locale } from '@/lib/i18n'

interface ImagerySectionProps {
  locale: Locale
}

export function ImagerySection({ locale }: ImagerySectionProps) {
  const t = translations[locale]

  return (
    <section className="py-20 bg-gray-50" dir={t.dir}>
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text side */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-6 text-balance">
              {locale === 'zh' ? '卫星影像' : locale === 'ar' ? 'صور الأقمار الصناعية' : 'Satellite Imagery'}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 text-pretty">
              {t.imagery.subtitle}
            </p>
            <Link
              href="/products/imagery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a1628] hover:bg-[#0d2040] text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              {t.imagery.button}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image side */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10]">
              <Image
                src="/images/satellite-imagery-showcase.jpg"
                alt={t.imagery.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                {[
                  { value: '0.3m', label: locale === 'zh' ? '最高分辨率' : locale === 'ar' ? 'أعلى دقة' : 'Max Resolution' },
                  { value: '100+', label: locale === 'zh' ? '卫星数量' : locale === 'ar' ? 'الأقمار الصناعية' : 'Satellites' },
                  { value: '24h', label: locale === 'zh' ? '重访周期' : locale === 'ar' ? 'دورة المراجعة' : 'Revisit Cycle' },
                ].map((stat) => (
                  <div
                    key={stat.value}
                    className="flex-1 bg-[#0a1628]/70 backdrop-blur-sm rounded-lg px-3 py-2 text-center"
                  >
                    <p className="text-cyan-400 font-bold text-lg leading-none">{stat.value}</p>
                    <p className="text-white/70 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
