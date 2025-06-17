"use client";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Servicos() {
  return (
    <>
      <Navbar />
      <section className="bg-primary-light pt-8 pb-20 text-center px-2">

        <h1 className="text-2xl md:text-4xl font-bold text-primary-dark mb-4">Serviços</h1>
        <p className="max-w-2xl mx-auto text-lg text-primary-dark mb-8">Conheça nossas soluções contábeis para empresas de todos os portes.</p>
      </section>
      <section className="max-w-4xl w-full mx-auto py-8 px-2 md:py-16 md:px-4">
        <section><br />Na última semana, o cenário do mercado de contabilidade e gerenciamento de empresas no Brasil apresentou novidades e movimentos relevantes que merecem destaque.<br /><br />Primeiramente, a Receita Federal anunciou alterações nas regras de declaração do Imposto de Renda de Pessoa Jurídica (IRPJ), buscando simplificar o processo para pequenas e médias empresas, o que deve impactar positivamente o compliance e a conformidade fiscal.<br /><br />Além disso, o Conselho Federal de Contabilidade (CFC) reforçou a importância do uso de tecnologia e automação na rotina dos contabilistas, incentivando a adoção de softwares de gestão que promovam maior eficiência e segurança na elaboração de relatórios e escrituração contábil.<br /><br />No âmbito legislativo, tramita no Congresso Nacional um projeto de lei que visa reduzir a carga tributária para startups, com possibilidade de benefícios fiscais e facilidades na abertura de novos negócios, fortalecendo o ambiente empreendedor.<br /><br />Também, setores de consultoria e gestão empresarial registraram crescimento, impulsionados pela demanda de pequenas empresas em busca de estratégias de retomada econômica e adaptação às novas formas de mercado, como o digital e o remoto.<br /><br />Por fim, a Receita Federal reforçou o combate à sonegação fiscal, com a implementação de novas regras de fiscalização digital, aumentando o monitoramento de operações suspeitas e facilitando a troca de informações entre diferentes entidades reguladoras. <br /><br />Esses acontecimentos refletem a tendência de modernização e de busca por maior eficiência no setor contábil, destacando-se como aspectos centrais para o fortalecimento do ambiente empresarial brasileiro.<br /></section>
      </section>
      <Footer />
    </>
  );
}