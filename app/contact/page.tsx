'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Headphones,
  Building2,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLocale } from '@/hooks/use-locale'

// ─── Inline translations ──────────────────────────────────────────────────────
const t = {
  zh: {
    dir: 'ltr' as const,
    hero: {
      title: '联系我们',
      subtitle: '无论是咨询业务还是技术支持，我们的专家团队随时为您提供帮助',
    },
    quickContact: {
      title: '快速联系',
      cards: [
        {
          icon: 'Mail',
          title: '销售咨询',
          content: 'angela.zhu@starpathglobal.com.cn\n+86 180 0129 1166',
          desc: '获取产品报价和定制方案',
        },
        {
          icon: 'Headphones',
          title: '技术支持',
          content: 'Jing.lv@starpathglobal.com.cn\n+86 183 1060 2946',
          desc: '获取技术帮助和问题解答',
        },
        {
          icon: 'MapPin',
          title: '总部地址',
          content: '上海市徐汇区湖南路街道淮海中路1010号嘉华中心1702B室',
          desc: '欢迎预约参观',
        },
        {
          icon: 'Phone',
          title: '联系电话',
          content: '+86 183 1060 2946',
          desc: '工作时间：周一至周五 9:00-18:00',
        },
      ],
    },
    form: {
      title: '发送咨询',
      subtitle: '填写以下表单，我们的团队将在24小时内与您联系',
      name: '您的姓名',
      namePlaceholder: '请输入姓名',
      email: '电子邮箱',
      emailPlaceholder: '请输入邮箱',
      company: '企业名称',
      companyPlaceholder: '请输入企业名称（选填）',
      phone: '联系电话',
      phonePlaceholder: '请输入电话（选填）',
      service: '感兴趣的服务',
      servicePlaceholder: '请选择服务类型',
      serviceOptions: [
        '卫星定制服务',
        '卫星影像数据',
        '金融租赁方案',
        '行业解决方案',
        '技术咨询',
        '其他',
      ],
      message: '您的需求',
      messagePlaceholder: '请描述您的具体需求或问题...',
      submit: '提交咨询',
      submitting: '提交中...',
      success: '提交成功！我们会尽快与您联系。',
    },
  },
  en: {
    dir: 'ltr' as const,
    hero: {
      title: 'Contact Us',
      subtitle: 'Whether for business consultation or technical support, our expert team is here to help',
    },
    quickContact: {
      title: 'Quick Contact',
      cards: [
        {
          icon: 'Mail',
          title: 'Sales Inquiry',
          content: 'angela.zhu@starpathglobal.com.cn\n+86 18001291166',
          desc: 'Get product quotes and custom solutions',
        },
        {
          icon: 'Headphones',
          title: 'Technical Support',
          content: 'Jing.lv@starpathglobal.com.cn\n+86 183 1060 2946',
          desc: 'Get technical assistance and answers',
        },
        {
          icon: 'MapPin',
          title: 'Headquarters',
          content: 'Room 1702B, K. Wah Centre, 1010 Middle Huaihai Road, Shanghai',
          desc: 'Welcome to schedule a visit',
        },
        {
          icon: 'Phone',
          title: 'Phone',
          content: '+86 183 1060 2946',
          desc: 'Mon-Fri 9:00-18:00 (GMT+8)',
        },
      ],
    },
    form: {
      title: 'Send an Inquiry',
      subtitle: 'Fill out the form below and our team will contact you within 24 hours',
      name: 'Your Name',
      namePlaceholder: 'Enter your name',
      email: 'Email Address',
      emailPlaceholder: 'Enter your email',
      company: 'Company Name',
      companyPlaceholder: 'Enter company name (optional)',
      phone: 'Phone Number',
      phonePlaceholder: 'Enter phone number (optional)',
      service: 'Service of Interest',
      servicePlaceholder: 'Select a service type',
      serviceOptions: [
        'Custom Satellite Services',
        'Satellite Imagery Data',
        'Financial Leasing Solutions',
        'Industry Solutions',
        'Technical Consulting',
        'Other',
      ],
      message: 'Your Requirements',
      messagePlaceholder: 'Describe your specific needs or questions...',
      submit: 'Submit Inquiry',
      submitting: 'Submitting...',
      success: 'Submitted successfully! We will contact you soon.',
    },
  },
  ar: {
    dir: 'rtl' as const,
    hero: {
      title: 'اتصل بنا',
      subtitle: 'سواء للاستشارات التجارية أو الدعم الفني، فريقنا من الخبراء هنا لمساعدتك',
    },
    quickContact: {
      title: 'الاتصال السريع',
      cards: [
        {
          icon: 'Mail',
          title: 'استفسار المبيعات',
          content: 'angela.zhu@starpathglobal.com.cn\n+86 18001291166',
          desc: 'احصل على عروض الأسعار والحلول المخصصة',
        },
        {
          icon: 'Headphones',
          title: 'الدعم الفني',
          content: 'Jing.lv@starpathglobal.com.cn\n+86 183 1060 2946',
          desc: 'احصل على المساعدة الفنية والإجابات',
        },
        {
          icon: 'MapPin',
          title: 'المقر الرئيسي',
          content: 'غرفة 1702B، مركز كيه واه، 1010 طريق هوايهاي الأوسط، شنغهاي',
          desc: 'مرحباً بك لجدولة زيارة',
        },
        {
          icon: 'Phone',
          title: 'الهاتف',
          content: '+86 183 1060 2946',
          desc: 'الاثنين-الجمعة 9:00-18:00 (GMT+8)',
        },
      ],
    },
    form: {
      title: 'أرسل استفساراً',
      subtitle: 'املأ النموذج أدناه وسيتواصل معك فريقنا خلال 24 ساعة',
      name: 'اسمك',
      namePlaceholder: 'أدخل اسمك',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'أدخل بريدك الإلكتروني',
      company: 'اسم الشركة',
      companyPlaceholder: 'أدخل اسم الشركة (اختياري)',
      phone: 'رقم الهاتف',
      phonePlaceholder: 'أدخل رقم الهاتف (اختياري)',
      service: 'الخدمة المطلوبة',
      servicePlaceholder: 'اختر نوع الخدمة',
      serviceOptions: [
        'خدمات الأقمار الصناعية المخصصة',
        'بيانات صور الأقمار الصناعية',
        'حلول التأجير التمويلي',
        'حلول الصناعات',
        'الاستشارات التقنية',
        'أخرى',
      ],
      message: 'متطلباتك',
      messagePlaceholder: 'اوصف احتياجاتك أو أسئلتك المحددة...',
      submit: 'إرسال الاستفسار',
      submitting: 'جاري الإرسال...',
      success: 'تم الإرسال بنجاح! سنتواصل معك قريباً.',
    },
  },
}

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Phone,
  MapPin,
  Clock,
  Headphones,
  Building2,
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const { locale, setLocale, mounted } = useLocale()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  })

  if (!mounted) {
    return <div className="min-h-screen bg-white" />
  }

  const pg = t[locale]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'cbcc80b7-607d-487a-9b11-64f1d6c6869b',
          subject: `Starpath Global Website Contact Form - ${formData.name}`,
          from_name: 'Starpath Global Website',
          replyto: formData.email,
          'Name': formData.name,
          'Email': formData.email,
          'Company': formData.company || 'Not provided',
          'Phone': formData.phone || 'Not provided',
          'Interested Service': formData.service || 'Not specified',
          'Message': formData.message,
        }),
      })

      const result = await response.json()
      if (response.status === 200 && result.success) {
        setIsSuccess(true)
        setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        console.error('Web3Forms error:', result)
        alert('提交失败，请稍后重试 / Submission failed. Please try again later.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('网络连接错误，请稍后重试 / Network error. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white" dir={pg.dir}>
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* 1. Hero */}
      <section className="relative w-full h-[40vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Us"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-[#0a1628]/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-4">
              {pg.hero.title}
            </h1>
            <p className="text-white/70 text-base sm:text-lg font-light tracking-wide max-w-2xl mx-auto">
              {pg.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Quick Contact Cards */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pg.quickContact.cards.map((card, i) => {
              const Icon = iconMap[card.icon]
              return (
                <div
                  key={i}
                  className="group bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-200 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 group-hover:bg-cyan-100 flex items-center justify-center mb-4 transition-colors">
                    {Icon && <Icon size={22} className="text-cyan-600" />}
                  </div>
                  <h3 className="text-base font-bold text-[#0a1628] mb-2">{card.title}</h3>
                  <p className="text-cyan-600 font-medium text-sm mb-1 whitespace-pre-line">{card.content}</p>
                  <p className="text-gray-500 text-xs">{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
                {pg.form.title}
              </h2>
              <p className="text-gray-600">{pg.form.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {pg.form.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={pg.form.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                  />
                </div>
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {pg.form.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={pg.form.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                  />
                </div>
                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {pg.form.company}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={pg.form.companyPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                  />
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {pg.form.phone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={pg.form.phonePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Service */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {pg.form.service}
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all bg-white"
                >
                  <option value="">{pg.form.servicePlaceholder}</option>
                  {pg.form.serviceOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {pg.form.message} <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={pg.form.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-300 text-white font-bold text-base rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? pg.form.submitting : pg.form.submit}
                  <Send size={18} />
                </button>
                {isSuccess && (
                  <p className="text-green-600 font-medium">{pg.form.success}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <Footer locale={locale} />
    </div>
  )
}
