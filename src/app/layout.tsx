import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const fira = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dileep K - Full-Stack Developer",
  description: "Senior Software Engineer specializing in Python, Django, and FastAPI. 4+ years experience in building scalable backend systems.",
  keywords: ["Dileep K", "Full-Stack Developer", "Backend Engineer", "Python", "Django", "FastAPI", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fira.variable}`}>
      <body>
        <div className="gridBg"></div>
        {children}
      </body>
    </html>
  );
}
