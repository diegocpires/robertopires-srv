"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contato() {
  return (
    <>
      <Navbar />
      <section className="bg-primary-light pt-8 pb-20 text-center">

        <h1 className="text-4xl font-bold text-primary-dark mb-4">Contato</h1>
        <p className="text-lg text-primary-dark mb-8">Entre em contato para uma consultoria personalizada.</p>
      </section>
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="flex justify-center">
          <iframe
            src="https://n8n.diegopires.net/form/0474c24b-61f5-439b-ba26-210f889b2f0f"
            title="Formulário de Contato"
            width="100%"
            height="600"
            className="rounded-lg shadow border w-full min-w-[550px]"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-8 text-primary-dark text-center">
          <p><strong>Telefone:</strong> (11) 93927-8071</p>
          <p><strong>E-mail:</strong> contato@robertopires.srv.br</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
