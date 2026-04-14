'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { translations, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

interface NavbarProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function Navbar({ locale, onLocaleChange }: NavbarProps) {
  const t = translations[locale]
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [langOpen, setLangOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveMenu(menu)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150)
  }

  const aboutItems = [
    { label: t.nav.aboutCompany, href: '/about' },
    { label: t.nav.contact, href: '/contact' },
  ]

  const productItems = [
    { label: t.nav.satelliteCustom, href: '/products/custom' },
    { label: t.nav.satelliteImagery, href: '/products/imagery' },
    { label: t.nav.financialSolutions, href: '/financial' },
  ]

  const solutionItems = [
    { label: t.nav.oil, href: '/industries/petroleum' },
    { label: t.nav.mining, href: '/industries/mining' },
    { label: t.nav.environment, href: '/industries/environment' },
    { label: t.nav.agriculture, href: '/industries/agriculture' },
    { label: t.nav.maritime, href: '/industries/maritime' },
    { label: t.nav.insurance, href: '/industries/insurance' },
    { label: t.nav.urbanPlanning, href: '/industries/urban' },
    { label: t.nav.utilities, href: '/industries/utilities' },
  ]

  const allLocales: { code: Locale; label: string }[] = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
  ]
  
  const isDev = process.env.NODE_ENV !== 'production'
  const locales = allLocales.filter(l => isDev || l.code !== 'zh')

  const NavDropdown = ({
    label,
    items,
    menuKey,
  }: {
    label: string
    items: { label: string; href: string }[]
    menuKey: string
  }) => (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter(menuKey)}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors',
          scrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white/90 hover:text-white'
        )}
      >
        {label}
        <ChevronDown
          size={14}
          className={cn(
            'transition-transform duration-200',
            activeMenu === menuKey ? 'rotate-180' : ''
          )}
        />
      </button>
      {activeMenu === menuKey && (
        <div className="absolute top-full left-0 z-50 min-w-[180px] bg-white shadow-xl rounded-lg border border-gray-100 py-2 mt-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
      dir={t.dir}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo + Company name */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            {/* Logo switches: white version on dark bg, color version on white bg */}
            <div className="relative h-9 w-9 lg:h-10 lg:w-10 flex-shrink-0">
              <Image
                src="/images/logo-white.webp"
                alt="寰球星途 Starpath Global"
                fill
                className={cn(
                  'object-contain transition-opacity duration-300',
                  scrolled ? 'opacity-0' : 'opacity-100'
                )}
                priority
              />
              <Image
                src="/images/logo-color.webp"
                alt="寰球星途 Starpath Global"
                fill
                className={cn(
                  'object-contain transition-opacity duration-300',
                  scrolled ? 'opacity-100' : 'opacity-0'
                )}
                priority
              />
            </div>
            <span
              className={cn(
                'text-lg lg:text-xl font-bold tracking-tight transition-colors duration-300 whitespace-nowrap',
                scrolled ? 'text-[#0a1628]' : 'text-white'
              )}
            >
              {locale === 'zh' ? '寰球星途' : 'STARPATH GLOBAL'}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavDropdown label={t.nav.about} items={aboutItems} menuKey="about" />
            <NavDropdown label={t.nav.products} items={productItems} menuKey="products" />
            <NavDropdown label={t.nav.solutions} items={solutionItems} menuKey="solutions" />

            {/* Language switcher */}
            <div
              className="relative ml-4"
              onMouseEnter={() => handleMouseEnter('lang')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium transition-colors',
                  scrolled
                    ? 'border-gray-300 text-gray-700 hover:border-cyan-500 hover:text-cyan-600'
                    : 'border-white/40 text-white/90 hover:border-white hover:text-white'
                )}
              >
                <Globe size={14} />
                {locales.find((l) => l.code === locale)?.label}
              </button>
              {activeMenu === 'lang' && (
                <div className="absolute top-full right-0 z-50 min-w-[120px] bg-white shadow-xl rounded-lg border border-gray-100 py-2 mt-1">
                  {locales.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        onLocaleChange(l.code)
                        setActiveMenu(null)
                      }}
                      className={cn(
                        'block w-full text-left px-4 py-2 text-sm transition-colors',
                        locale === l.code
                          ? 'text-cyan-600 bg-cyan-50 font-medium'
                          : 'text-gray-700 hover:bg-cyan-50 hover:text-cyan-700'
                      )}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a1628] text-white">
          <div className="px-4 py-4 space-y-1">
            {/* About */}
            <div>
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {t.nav.about}
              </p>
              {aboutItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-white/80 hover:text-cyan-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {/* Products */}
            <div>
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {t.nav.products}
              </p>
              {productItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-white/80 hover:text-cyan-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {/* Solutions */}
            <div>
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {t.nav.solutions}
              </p>
              {solutionItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-white/80 hover:text-cyan-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {/* Language */}
            <div className="pt-4 border-t border-white/10 flex gap-3">
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    onLocaleChange(l.code)
                    setMobileOpen(false)
                  }}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-sm border transition-colors',
                    locale === l.code
                      ? 'bg-cyan-500 border-cyan-500 text-white font-medium'
                      : 'border-white/30 text-white/70 hover:border-cyan-400 hover:text-cyan-300'
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
