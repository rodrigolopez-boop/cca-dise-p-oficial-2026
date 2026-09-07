import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
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
  icons: {
    icon: "/logo.svg",
  },
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
      <body
        className={`${displayFont.variable} ${bodyFont.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
