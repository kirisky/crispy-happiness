'use client'

import { Navbar } from '@/components/navbar'
import { HeroCarousel } from '@/components/hero-carousel'
import { IndustriesSection } from '@/components/industries-section'
import { ImagerySection } from '@/components/imagery-section'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { useLocale } from '@/hooks/use-locale'

export default function Home() {
  const { locale, setLocale, mounted } = useLocale()

  if (!mounted) {
    return <div className="min-h-screen bg-white" />
  }

  return (
    <div className="min-h-screen">
      <Navbar locale={locale} onLocaleChange={setLocale} />
      <main>
        <HeroCarousel locale={locale} />
        <IndustriesSection locale={locale} />
        <ImagerySection locale={locale} />
        <CtaSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
