'use client'

import Link from 'next/link'
import { translations, type Locale } from '@/lib/i18n'

interface CtaSectionProps {
  locale: Locale
}

export function CtaSection({ locale }: CtaSectionProps) {
  const t = translations[locale]

  return (
    <section
      className="relative py-24 bg-[#0a1628] overflow-hidden"
      dir={t.dir}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,180,216,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-4xl w-full mx-auto px-4 lg:px-8 text-center">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
          {locale === 'zh' ? '开启合作' : locale === 'ar' ? 'ابدأ التعاون' : 'Get Started'}
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
          {t.cta.title}
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
          {t.cta.subtitle}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-lg rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1"
        >
          {t.cta.button}
        </Link>
      </div>
    </section>
  )
}
