import Header from '../components/Header'; // Ensure the path is correct
import '../styles/globals.css'; // Make sure the path is correct
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'nConnect Oil Caculator - ระบบคำนวนค่าน้ำมัน ',
  description: 'ระบบคำนวนค่าน้ำมันสำหรับการเติมน้ำมันที่สามารถคำนวนน้ำมันให้กับธุรกิจของคุณได้อย่างสะดวก',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
