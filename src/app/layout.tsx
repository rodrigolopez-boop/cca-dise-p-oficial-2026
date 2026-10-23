import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Preloader } from "@/components/shared/Preloader";
import { Toaster as AppToaster } from "@/components/ui/sonner";

const displayFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Diseño Gráfico y Animación | Portal de la Carrera",
  description:
    "Portal institucional de la Licenciatura en Diseño Gráfico y Animación. Plan de estudios, docentes, becas, convocatorias, eventos y vida universitaria. Transforma ideas en experiencias visuales.",
  keywords: [
    "Diseño Gráfico",
    "Animación",
    "Licenciatura",
    "Carrera universitaria",
    "Motion graphics",
    "Ilustración",
    "Branding",
    "UX/UI",
  ],
  authors: [{ name: "Universidad — Diseño Gráfico y Animación" }],
  openGraph: {
    title: "Diseño Gráfico y Animación | Portal de la Carrera",
    description:
      "Transforma ideas en experiencias visuales. Conoce el plan de estudios, docentes, becas y convocatorias de la carrera.",
    siteName: "Diseño Gráfico y Animación",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Preloader />
          {children}
          <AppToaster closeButton position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
