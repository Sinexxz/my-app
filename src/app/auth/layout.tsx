import type { Metadata } from 'next'

import { Inter as FontSans } from "next/font/google"


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 antialiased">
          <div className="hidden lg:flex h-full flex-col justify-between border-r border-foreground/5 p-10">
            <div className="flex items-center gap-3 text-lg text-foreground">
              <span className="font-semibold">Solar Life Energy</span>
            </div>
            <div className="flex justify-center text-center">
            </div>
            <footer className="text-sm">
              Painel do parceiro &copy; Solar Life Energy - {new Date().getFullYear()}
            </footer>
          </div>
          <div className="relative flex flex-col items-center lg:justify-center lg:bg-muted text-muted-foreground">
            {children}
          </div>
        </div>

  )
}