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
        <section><br />Nos últimos dias, o setor de contabilidade e gerenciamento de empresas no Brasil registrou várias movimentações relevantes, refletindo o cenário de ajustes e avanços na área. Confira abaixo os principais acontecimentos da semana:<br /><br />1. **Reforma Tributária avança no Congresso**  <br />Após meses de debates, o projeto da nova reforma tributária recebeu sinais positivos de avanço na Câmara dos Deputados. O foco central é simplificar o sistema de impostos, reduzindo a carga tributária sobre micro e pequenas empresas, o que potencialmente poderá estimular o crescimento econômico e facilitar o cumprimento fiscal por parte dos empreendedores.<br /><br />2. **Novas exigências para escritórios de contabilidade**  <br />A Receita Federal anunciou a implementação de novas regras para escritórios de contabilidade, incluindo a obrigatoriedade de atualização de sistemas e processos digitais até o final do ano. A medida visa aumentar a eficiência fiscal e garantir maior segurança na troca de informações entre empresas e o órgão fiscalizador.<br /><br />3. **Reajuste na tabela do Imposto de Renda**  <br />O Governo anunciou o reajuste da tabela do Imposto de Renda Pessoa Física (IRPF) para o próximo exercício, buscando equilibrar a carga tributária face à inflação. O ajuste deve beneficiar milhões de contribuintes, garantindo maior ifência na declaração anual.<br /><br />4. **Programa de incentivo à inovação nas PME**  <br />Foi lançado um novo programa de incentivo à inovação voltado às Pequenas e Médias Empresas (PMEs), com recursos destinados à modernização de processos gerenciais e à implementação de tecnologia. A iniciativa busca fortalecer a competitividade dessas empresas no mercado nacional e internacional.<br /><br />5. **Digitalização de processos e assinatura eletrônica cresce no setor contábil**  <br />Com o aumento do uso de soluções digitais, muitas empresas de contabilidade estão adotando assinatura eletrônica e automação de processos. Essa mudança visa otimizar o atendimento ao cliente e reduzir custos operacionais, alinhando-se às tendências de transformação digital do setor.<br /><br />Para mais informações, consulte as fontes oficiais e notícias do setor:<br />- [G1 Economia](https://g1.globo.com/economia)<br />- [Valor Econômico](https://valor.globo.com)<br />- [Receita Federal](https://receita.economia.gov.br)<br />- [Senacon - Secretaria Nacional do Consumidor](https://www.gov.br/servicos/atendimento/senacon)<br />- [Sebrae](https://www.sebrae.com.br)<br /></section>
      </section>
      <Footer />
    </>
  );
}