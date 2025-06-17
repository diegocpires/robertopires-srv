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
        test
      </section>
      <Footer />
    </>
  );
}