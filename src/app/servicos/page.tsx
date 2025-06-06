"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Servicos() {
  return (
    <>
      <Navbar />
      <section className="bg-primary-light pt-8 pb-20 text-center px-2">

        <h1 className="text-2xl md:text-4xl font-bold text-primary-dark mb-4">Serviços</h1>
        <p className="max-w-2xl mx-auto text-lg text-primary-dark mb-8">Conheça nossas soluções contábeis para empresas de todos os portes.</p>
      </section>
      <section className="max-w-4xl w-full mx-auto py-8 px-2 md:py-16 md:px-4">
        <ul className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="bg-white rounded-lg shadow p-6">Assessoria Contábil Completa</li>
          <li className="bg-white rounded-lg shadow p-6">Abertura e Regularização de Empresas</li>
          <li className="bg-white rounded-lg shadow p-6">Gestão Fiscal e Tributária</li>
          <li className="bg-white rounded-lg shadow p-6">Folha de Pagamento e RH</li>
          <li className="bg-white rounded-lg shadow p-6">Planejamento Tributário</li>
          <li className="bg-white rounded-lg shadow p-6">Consultoria Financeira</li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
