import './globals.css';
import ClientThemeProvider from './components/ClientThemeProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innova Global',
  description: 'Innovative solutions for modern businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}
