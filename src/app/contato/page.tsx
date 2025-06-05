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
        <form className="max-w-xl mx-auto bg-white rounded-lg shadow p-8 space-y-6">
          <input className="w-full border border-primary rounded px-4 py-2" type="text" placeholder="Nome" required />
          <input className="w-full border border-primary rounded px-4 py-2" type="email" placeholder="E-mail" required />
          <textarea className="w-full border border-primary rounded px-4 py-2" placeholder="Mensagem" rows={4} required></textarea>
          <button className="bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-primary-dark transition" type="submit">Enviar</button>
        </form>
        <div className="mt-8 text-primary-dark">
          <p><strong>Telefone:</strong> (11) 93927-8071</p>
          <p><strong>E-mail:</strong> contato@robertopires.srv.br</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
