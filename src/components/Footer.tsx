"use client";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold">&copy; {new Date().getFullYear()} Roberto Pires Contabilidade</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/politica-de-privacidade" className="hover:underline">Política de Privacidade</a>
          <a href="/termos-de-uso" className="hover:underline">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
