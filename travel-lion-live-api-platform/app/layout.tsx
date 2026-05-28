import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Travel Lion Club',
  description: 'Luxury travel membership portal'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
