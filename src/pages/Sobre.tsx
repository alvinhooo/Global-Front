export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-900 dark:text-blue-300">
          Sobre o Projeto MindLink
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          O <strong>MindLink</strong> é um projeto acadêmico desenvolvido com o
          objetivo de promover o bem-estar emocional e o monitoramento da saúde
          mental no ambiente de trabalho. A plataforma busca criar uma conexão
          entre colaboradores e gestores por meio de dados e insights que
          auxiliam na compreensão dos níveis de humor, estresse e satisfação da
          equipe ao longo do tempo.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          A iniciativa integra os conhecimentos das disciplinas{" "}
          <em>Building Relational Database</em>,{" "}
          <em>Domain Driven Design Using Java</em> e{" "}
          <em>Front-End Design Engineering</em>, combinando boas práticas de
          desenvolvimento de software, design e modelagem de dados. O projeto
          foi criado utilizando tecnologias modernas como{" "}
          <strong>React + Vite + TypeScript</strong> no front-end e{" "}
          <strong>Java com Spring Boot</strong> no back-end, garantindo
          desempenho, escalabilidade e segurança.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          O sistema permite que os usuários realizem registros diários de seu
          humor, fornecendo informações que podem ser visualizadas em gráficos
          e relatórios intuitivos. Dessa forma, é possível identificar padrões
          de comportamento e fatores que impactam diretamente no bem-estar,
          oferecendo suporte à tomada de decisões mais humanas e estratégicas
          dentro das organizações.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Além do monitoramento, o <strong>MindLink</strong> oferece sugestões
          personalizadas de autocuidado, práticas de relaxamento e equilíbrio
          emocional, reforçando a importância da saúde mental no ambiente
          corporativo. Também há espaço para que empresas adaptem as métricas
          conforme sua cultura interna, criando um ecossistema de apoio mútuo e
          empatia entre os colaboradores.
        </p>

        <p className="text-lg leading-relaxed">
          Nosso propósito é contribuir para um futuro onde tecnologia e
          empatia caminham lado a lado. O <strong>MindLink</strong> nasce como
          uma ferramenta acadêmica, mas com potencial real de impacto positivo
          em qualquer ambiente de trabalho que valorize o bem-estar humano.
        </p>
      </div>
    </div>
  );
}
