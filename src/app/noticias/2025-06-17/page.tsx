"use client";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Servicos() {
  return (
    <>
      <Navbar />
      <section className="bg-primary-light pt-8 pb-20 text-center px-2">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-dark mb-4">Notícias</h1>
      </section>
      <section className="max-w-4xl w-full mx-auto py-8 px-2 md:py-16 md:px-4">
        Create a blog post that summarizes the latest important news in the fiscal and legal areas in Brazil. Provide a concise summary of the key updates, changes, or developments that have recently occurred in these sectors, highlighting their significance and potential impact and publish immediately.
      </section>
      <Footer />
    </>
  );
}