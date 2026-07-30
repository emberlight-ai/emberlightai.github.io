import type { Metadata } from 'next';
import '../index.css';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.emberlightai.com'),
  title: {
    default: 'Emberlight — Your expertise, turned into an AI coach',
    template: '%s · Emberlight',
  },
  description: 'Emberlight turns real expertise into proactive AI coaches that help people follow through.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
