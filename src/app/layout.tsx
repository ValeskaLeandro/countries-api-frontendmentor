import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import { Nunito_Sans } from 'next/font/google';
import ThemeProviderWrapper from "./components/ThemeProviderWrapper/ThemeProviderWrapper";

const nunito_sans = Nunito_Sans({ subsets: ["latin"], display: 'swap',});

export const metadata: Metadata = {
  title: "Countries",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>
            {children}
          </ThemeProviderWrapper>
        </StyledComponentsRegistry></body>
    </html>
  );
}
