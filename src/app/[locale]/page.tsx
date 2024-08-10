import { useTranslations } from 'next-intl'

import { ThemeToggler } from '@/components/theme-toggler'
export default function Home() {
  const t = useTranslations('Index')

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4 p-24">
      <p className="text-6xl font-bold">👋 {t('title')}</p>
      <p></p>
      <ThemeToggler />
    </main>
  )
}
