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
        Neste levantamento semanal do setor de contabilidade e gerenciamento de empresas no Brasil, destacam-se os principais acontecimentos que moldaram o cenário econômico e regulatório do país. A seguir, uma síntese das informações mais relevantes da última semana:

1. **Reforma Tributária avança no Congresso:** Após meses de debates, a proposta de reforma tributária começa a ganhar tração no Congresso Nacional, com propostas centradas na simplificação do sistema e na redução da carga tributária para pequenas e médias empresas. Especialistas apontam que a aprovação pode representar um impacto positivo para o ambiente de negócios no Brasil.

2. **Novo Normativo de Obrigações Acessórias:** A Receita Federal anunciou alterações nas obrigações acessórias para empresas, visando simplificar o cumprimento fiscal. As mudanças incluem prazos mais flexíveis e a implantação de novas plataformas digitais que prometem diminuir a burocracia para os contadores e gestores.

3. **Aumento no Uso de Tecnologia na Contabilidade:** Houve um crescimento expressivo na adoção de softwares de automação e inteligência artificial em escritórios de contabilidade, impulsionado pela necessidade de maior eficiência e precisão nos processos. Empresas de tecnologia anunciam novos recursos que prometem revolucionar a gestão financeira e fiscal.

4. **Cenário de Inflação Impacta Planejamento Empresarial:** Dados divulgados pelo IBGE indicam uma leve elevação na inflação, o que tem levado gestores a revisarem suas projeções de fluxo de caixa e estratégias de precificação. Especialistas recomendam atenção redobrada na gestão financeira para manter a saúde dos negócios.

5. **Capacitações e Cursos para Profissionais de Contabilidade:** Diversas instituições de ensino e entidades representativas do setor lançaram programas de capacitação voltados para a atualização de profissionais de contabilidade, enfatizando conhecimento em novas legislações, tecnologia e gestão empresarial, refletindo a busca por atualização contínua no mercado de trabalho.

Esses acontecimentos mostram um cenário dinâmico e em constante evolução, reforçando a importância de uma gestão contábil eficiente e alinhada às mudanças regulatórias e tecnológicas no Brasil.
      </section>
      <Footer />
    </>
  );
}