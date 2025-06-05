import "@/styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: 'Roberto Pires Contabilidade',
  description: 'Soluções contábeis modernas para sua empresa crescer com segurança.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <title>Roberto Pires Contabilidade</title>
      </head>
      <body className="bg-secondary text-gray-900 min-h-screen flex flex-col font-sans antialiased">
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
