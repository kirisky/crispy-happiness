import { useState, useEffect } from 'react'
import { type Locale } from '@/lib/i18n'

const isDev = process.env.NODE_ENV !== 'production'

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(isDev ? 'zh' : 'en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // 从localStorage读取保存的语言选择
    let saved = localStorage.getItem('locale') as Locale | null

    // 如果是生产环境且保存的语言是中文，则强制回退到英文
    if (!isDev && saved === 'zh') {
      saved = 'en'
      localStorage.setItem('locale', 'en')
    }

    if (saved) {
      setLocaleState(saved)
    }
    setMounted(true)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  return { locale, setLocale, mounted }
}
