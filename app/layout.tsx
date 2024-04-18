import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Anek_Telugu } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/react"

const anekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
})

export const metadata: Metadata = {
  title: "Gabriel Saudau - Frontend developer",
  description: "Gabriel Saudau - Portfolio",
  icons: {
    icon: "/gabriel.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "font-sans h-full bg-background text-foreground ",
          GeistSans.variable,
          GeistMono.variable,
          anekTelugu.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
