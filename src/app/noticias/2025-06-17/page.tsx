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
        Nas últimas semanas, o setor de contabilidade e gerenciamento de empresas no Brasil passou por diversos acontecimentos relevantes que impactam empresários e profissionais da área. A seguir, destacam-se os principais fatos que marcaram o cenário semanal.

Primeiramente, o Governo Federal anunciou uma nova rodada de incentivos fiscais para micro e pequenas empresas, com o objetivo de impulsionar a recuperação econômica pós-pandemia. As medidas incluem redução de alíquotas de impostos e facilitação de acesso a linhas de crédito específicas, promovendo maior competitividade no mercado.

Em seguida, o Conselho Federal de Contabilidade (CFC) reforçou a importância da atualização digital para os profissionais da área. Uma nova plataforma de certificação online foi lançada, facilitando a obtenção de certificações e atualizações constantes, refletindo a necessidade de adaptação às tendências tecnológicas.

Outra notícia de destaque foi a implementação de mudanças na legislação tributária que acabam de entrar em vigor. As alterações trazem maior clareza nas obrigações acessórias e simplificam processos de declaração de impostos, podendo reduzir a carga burocrática para empresas de todos os portes.

No âmbito das startups, foram divulgados dados indicando um crescimento expressivo no número de empresas do setor de gestão financeira e contábil, impulsionado pelo avanço da transformação digital. Essa tendência evidencia a importância de soluções inovadoras para o gerenciamento financeiro eficiente.

Por fim, novidades sobre a fiscalização contábil apontam para um aumento na verificação de conformidade por parte da Receita Federal, com foco na combate à sonegação e ao uso de práticas ilegais. Empresas que mantêm uma contabilidade regular e transparente serão priorizadas nesse processo de auditoria, reforçando a necessidade de compliance e governança corporativa.

Esses acontecimentos reforçam a dinâmica do mercado de contabilidade no Brasil, evidenciando a busca por inovação, maior eficiência e conformidade, elementos essenciais para o fortalecimento dos negócios em um cenário cada vez mais competitivo.
      </section>
      <Footer />
    </>
  );
}