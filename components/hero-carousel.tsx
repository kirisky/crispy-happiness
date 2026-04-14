'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { translations, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

interface HeroCarouselProps {
  locale: Locale
}

const slides = [
  {
    image: '/images/hero-satellite.webp',
    key: 'slide1' as const,
    hasButton: true,
    buttonHref: '/products/custom',
  },
  {
    image: '/images/hero-financial.webp',
    key: 'slide2' as const,
    hasButton: true,
    buttonHref: '/financial',
  },
  {
    image: '/images/hero-imagery.webp',
    key: 'slide3' as const,
    hasButton: true,
    buttonHref: '/products/imagery',
  },
  {
    image: '/images/hero-solutions.webp',
    key: 'slide4' as const,
    hasButton: true,
    buttonHref: '#industries',
  },
]

export function HeroCarousel({ locale }: HeroCarouselProps) {
  const t = translations[locale]
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrent(index)
      setTimeout(() => setIsAnimating(false), 600)
    },
    [isAnimating]
  )

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden" aria-label="Hero Carousel">
      {/* Slides */}
      {slides.map((slide, idx) => {
        const slideData = t.hero[slide.key] as {
          title: string
          subtitle: string
          button?: string
        }
        return (
          <div
            key={slide.key}
            className={cn(
              'absolute inset-0 transition-opacity duration-700',
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            )}
            aria-hidden={idx !== current}
          >
            {/* Background image */}
            <Image
              src={slide.image}
              alt={slideData.title}
              fill
              priority={idx === 0}
              className="object-cover"
              sizes="100vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/85 via-[#0a1628]/50 to-transparent" />

            {/* Content */}
            <div
              className={cn(
                'absolute inset-0 flex items-center',
                t.dir === 'rtl' ? 'justify-end' : 'justify-start'
              )}
            >
              <div
                className={cn(
                  'w-full max-w-[1440px] mx-auto px-4 lg:px-8',
                  idx === current ? 'animate-in fade-in slide-in-from-left-8 duration-700' : ''
                )}
              >
                <div className="max-w-3xl">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-4">
                    {slideData.title}
                  </h1>
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 text-pretty">
                    {slideData.subtitle}
                  </p>
                  {slide.hasButton && slideData.button && (
                    <Link
                      href={slide.buttonHref}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5"
                    >
                      {slideData.button}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Arrow controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all"
      >
        <ChevronRight size={20} />
      </button>

      {/* Bottom strip navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex">
        {slides.map((slide, idx) => {
          const slideData = t.hero[slide.key] as { title: string; subtitle: string }
          return (
            <button
              key={slide.key}
              onClick={() => goTo(idx)}
              className={cn(
                'flex-1 py-3 px-3 text-left transition-all duration-300 border-t-2 group',
                idx === current
                  ? 'bg-[#0a1628]/80 border-cyan-400 backdrop-blur-sm'
                  : 'bg-black/40 border-transparent hover:bg-[#0a1628]/60 backdrop-blur-sm'
              )}
            >
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold transition-colors',
                    idx === current ? 'bg-cyan-400 text-[#0a1628]' : 'bg-white/30 text-white'
                  )}
                >
                  {idx + 1}
                </span>
                <span
                  className={cn(
                    'hidden sm:block text-xs font-medium leading-snug line-clamp-2 transition-colors min-w-0',
                    idx === current ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                  )}
                >
                  {slideData.title}
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
