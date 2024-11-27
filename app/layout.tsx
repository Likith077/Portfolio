import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster"
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Likith Nirvan | Full Stack Developer",
  description: "Portfolio website showcasing my work as a Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script 
            src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js" 
            strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}