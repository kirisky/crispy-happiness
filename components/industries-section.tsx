'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { translations, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

interface IndustriesSectionProps {
  locale: Locale
}

const industryImages = [
  '/images/industry-oil.jpg',
  '/images/industry-mining.jpg',
  '/images/industry-urban.jpg',
  '/images/industry-agriculture.jpg',
  '/images/industry-maritime.jpg',
  '/images/industry-insurance.jpg',
  '/images/industry-environment.jpg',
  '/images/utilities-hero.jpg',
]

const industryHrefs = [
  '/industries/petroleum',
  '/industries/mining',
  '/industries/urban',
  '/industries/agriculture',
  '/industries/maritime',
  '/industries/insurance',
  '/industries/environment',
  '/industries/utilities',
]

export function IndustriesSection({ locale }: IndustriesSectionProps) {
  const t = translations[locale]

  return (
    <section id="industries" className="py-20 bg-white" dir={t.dir}>
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4 text-balance">
            {t.industries.title}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed text-pretty">
            {t.industries.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {t.industries.items.map((item, idx) => (
            <Link
              key={idx}
              href={industryHrefs[idx]}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] block"
            >
              <Image
                src={industryImages[idx]}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent transition-opacity duration-300 group-hover:from-[#0a1628]/90" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-base mb-1">{item.label}</h3>
                <p className="text-white/70 text-xs leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1 text-cyan-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <span>{locale === 'zh' ? '了解更多' : locale === 'ar' ? 'اعرف المزيد' : 'Learn more'}</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
