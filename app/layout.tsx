import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title:
    "Nikola Tonevski - Web Developer & WordPress Specialist | Malmö, Sweden",
  description: "Web Developer and WordPress Specialist | Malmö, Sweden",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" type="image/png" />

      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
