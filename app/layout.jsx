import { siteConfig } from "@/config/site";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/providers/Toast";
import { AuthSession } from "@/providers/AuthProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Modal from "@/providers/Modal";
import { ConfettiProvider } from "@/providers/confetti-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <AuthSession>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <ConfettiProvider />
            <ToastProvider />
            <Modal />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </AuthSession>
  );
}
