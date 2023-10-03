import { Footer } from '@/layout/footer/footer'
import { ReactNode } from 'react'
import { Header } from './footer/header/header'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
