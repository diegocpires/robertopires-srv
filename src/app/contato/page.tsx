"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";

function maskPhone(value: string) {
  // Remove tudo que não for dígito
  let cleaned = value.replace(/\D/g, "");
  // Aplica a máscara (xx) xxxxx-xxxx
  if (cleaned.length > 11) cleaned = cleaned.slice(0, 11);
  if (cleaned.length > 6) {
    return `(${cleaned.slice(0,2)}) ${cleaned.slice(2,7)}-${cleaned.slice(7)}`;
  } else if (cleaned.length > 2) {
    return `(${cleaned.slice(0,2)}) ${cleaned.slice(2)}`;
  } else if (cleaned.length > 0) {
    return `(${cleaned}`;
  }
  return "";
}

function ContactForm() {
  const [fields, setFields] = useState({
    "field-0": "",
    "field-1": "",
    "field-2": "",
    "field-3": "",
  });
  const [errors, setErrors] = useState<{[key:string]: string}>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const errs: {[key:string]: string} = {};
    if (!fields["field-0"]) errs["field-0"] = "Nome obrigatório";
    if (!fields["field-1"]) errs["field-1"] = "Email obrigatório";
    else if (!/^\S+@\S+\.\S+$/.test(fields["field-1"])) errs["field-1"] = "Email inválido";
    if (!fields["field-2"]) errs["field-2"] = "Telefone obrigatório";
    else if (fields["field-2"].replace(/\D/g, "").length !== 11) errs["field-2"] = "Telefone inválido";
    if (!fields["field-3"]) errs["field-3"] = "Assunto obrigatório";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(fields).forEach(([key, value]) => {
        if (key === "field-2") {
          formData.append(key, value.replace(/\D/g, "")); // só números para telefone
        } else {
          formData.append(key, value);
        }
      });
      const res = await fetch("https://n8n.diegopires.net/form/0474c24b-61f5-439b-ba26-210f889b2f0f", {
        method: "POST",
        body: formData,
      });
      if (res.ok) setSent(true);
      else setErrors({ submit: "Erro ao enviar. Tente novamente." });
    } catch {
      setErrors({ submit: "Erro ao enviar. Tente novamente." });
    }
    setLoading(false);
  }

  if (sent) return (
    <div className="bg-green-100 text-green-800 p-6 rounded shadow text-center w-full max-w-lg">
      <h2 className="text-2xl font-semibold mb-2">Obrigado pelo contato!</h2>
      <p>Recebemos sua mensagem e retornaremos em breve.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 w-full max-w-lg space-y-4">
      <div className="text-left">
        <label htmlFor="field-0" className="block font-medium mb-1">Nome *</label>
        <input
          id="field-0"
          name="field-0"
          type="text"
          value={fields["field-0"]}
          onChange={e => setFields(f => ({ ...f, "field-0": e.target.value }))}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
        />
        {errors["field-0"] && <span className="text-red-600 text-sm">{errors["field-0"]}</span>}
      </div>
      <div className="text-left">
        <label htmlFor="field-1" className="block font-medium mb-1">Email *</label>
        <input
          id="field-1"
          name="field-1"
          type="text"
          value={fields["field-1"]}
          onChange={e => setFields(f => ({ ...f, "field-1": e.target.value }))}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
        />
        {errors["field-1"] && <span className="text-red-600 text-sm">{errors["field-1"]}</span>}
      </div>
      <div className="text-left">
        <label htmlFor="field-2" className="block font-medium mb-1">Telefone *</label>
        <input
          id="field-2"
          name="field-2"
          type="tel"
          inputMode="tel"
          value={fields["field-2"]}
          onChange={e => setFields(f => ({ ...f, "field-2": maskPhone(e.target.value) }))}
          maxLength={15}
          placeholder="(11) 91234-5678"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
        />
        {errors["field-2"] && <span className="text-red-600 text-sm">{errors["field-2"]}</span>}
      </div>
      <div className="text-left">
        <label htmlFor="field-3" className="block font-medium mb-1">Assunto *</label>
        <textarea
          id="field-3"
          name="field-3"
          rows={4}
          value={fields["field-3"]}
          onChange={e => setFields(f => ({ ...f, "field-3": e.target.value }))}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
        />
        {errors["field-3"] && <span className="text-red-600 text-sm">{errors["field-3"]}</span>}
      </div>
      {errors["submit"] && <div className="text-red-600 text-center">{errors["submit"]}</div>}
      <button
        type="submit"
        className="bg-primary text-white rounded px-6 py-2 font-semibold hover:bg-primary-dark disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}

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
          <ContactForm />
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
