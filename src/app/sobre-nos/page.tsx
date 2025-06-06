"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SobreNos() {
  return (
    <>
      <Navbar />
      <section className="bg-primary-light pt-8 pb-20 text-center px-2">

        <h1 className="text-4xl font-bold text-primary-dark mb-4">Sobre Nós</h1>
        <p className="max-w-2xl mx-auto text-lg text-primary-dark">Somos uma empresa de contabilidade com mais de 20 anos de experiência, focada em soluções modernas, atendimento personalizado e ética profissional. Nossa missão é apoiar o crescimento seguro dos nossos clientes.</p>
      </section>
      <section className="max-w-4xl w-full mx-auto py-8 px-2 md:py-16 md:px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">Missão, Visão e Valores</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-primary mb-2">Missão</h3>
            <p>Oferecer serviços contábeis de excelência, com ética e inovação.</p>
          </li>
          <li className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-primary mb-2">Visão</h3>
            <p>Ser referência em contabilidade consultiva na região.</p>
          </li>
          <li className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-primary mb-2">Valores</h3>
            <p>Ética, transparência, inovação e compromisso com o cliente.</p>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
