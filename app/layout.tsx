import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/source-serif-4/300.css";
import "@fontsource/source-serif-4/400.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.emberlightai.com"),
  title: "Emberlight — An AI coach that does the work for you. 24/7.",
  description:
    "Emberlight turns real expertise into proactive AI coaches. Package your program into a coach that texts first, tracks progress, and earns for you around the clock.",
  openGraph: {
    title: "Emberlight — An AI coach that does the work for you. 24/7.",
    description:
      "Real experts. Proactive coaching. Package your program into a coach that earns while it works.",
    url: "https://www.emberlightai.com",
    siteName: "Emberlight",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emberlight — An AI coach that does the work for you. 24/7.",
    description:
      "Real experts. Proactive coaching. Package your program into a coach that earns while it works.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-cream text-ink">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
