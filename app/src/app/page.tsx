"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-primary-light pt-8 pb-20 text-center">
        {/* Imagem removida pois não está disponível no /public */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Roberto Pires Contabilidade</h1>
        <p className="text-xl text-primary-dark mb-6">Soluções contábeis modernas para sua empresa crescer com segurança.</p>
        <a href="/contato" className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded shadow hover:bg-primary-dark transition">Fale Conosco</a>
      </section>
      <section className="max-w-4xl mx-auto py-16 px-4" id="servicos">
        <h2 className="text-2xl font-semibold text-primary mb-6">Nossos Serviços</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="bg-white rounded-lg shadow p-6">Assessoria Contábil Completa</li>
          <li className="bg-white rounded-lg shadow p-6">Abertura e Regularização de Empresas</li>
          <li className="bg-white rounded-lg shadow p-6">Gestão Fiscal e Tributária</li>
          <li className="bg-white rounded-lg shadow p-6">Folha de Pagamento e RH</li>
        </ul>
      </section>

      <Footer />
    </>
  );
}
