import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NextAuthProvider } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DevOps Guardian",
  description: " \
  Our company offers a full suite of DevOps services designed to enhance your software development lifecycle through automation, continuous integration and delivery (CI/CD), cloud infrastructure management, and infrastructure as code (IaC). \
  we specialize in SaaS (Software as a Service) development, helping businesses create scalable, cloud-based solutions tailored to their needs. \
  Whether you're looking to build a new SaaS platform or improve an existing one, we provide end-to-end development services, from architecture \
  design to deployment and maintenance. \
  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
          <Header />
            {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
