"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white px-4 py-3 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">Roberto Pires</Link>
        <ul className="flex gap-6 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sobre-nos">Sobre Nós</Link></li>
          <li><Link href="/servicos">Serviços</Link></li>
          
          
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
}
