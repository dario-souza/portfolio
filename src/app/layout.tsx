import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderComponent } from "@/components/header";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body className={cn(inter.className, 'pt-16 pb-[5.0625rem] min-h-screen')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <HeaderComponent />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
