import React from "react";
import vitor from "../img/vitor.jpg";
import alvaro from "../img/alvaro.jpg";
import rafael from "../img/rafael.jpg";

const Integrantes: React.FC = () => {
  const equipe = [
    {
      nome: "Victor Viana Carneiro",
      rm: "565537",
      turma: "1TDSP1",
      github: "https://github.com/vderoldo7",
      linkedin: "https://www.linkedin.com/in/vitor-deroldo/",
      foto: vitor,
    },
    {
      nome: "Álvaro Freitas Miranda",
      rm: "565364",
      turma: "1TDSP1",
      github: "https://github.com/alvinhooo",
      linkedin:
        "https://www.linkedin.com/in/%C3%A1lvaro-miranda-a71783314/",
      foto: alvaro,
    },
    {
      nome: "Rafael Pascotte",
      rm: "564928",
      turma: "1TDSP1",
      github: "https://github.com/pascotterafaaa",
      linkedin:
        "https://www.linkedin.com/in/rafael-pascotte-mercadante-6a5405196/",
      foto: rafael,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-5">
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold">MindLink</h1>
          <p className="text-lg">Monitor de Saúde Mental e Bem-Estar</p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-center text-blue-700 dark:text-blue-300 mb-8">
          Equipe de Desenvolvimento
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {equipe.map((membro) => (
            <div
              key={membro.rm}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 text-center hover:shadow-2xl transition-shadow"
            >
              <img
                src={membro.foto}
                alt={membro.nome}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {membro.nome}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                RM: {membro.rm} | Turma: {membro.turma}
              </p>
              <div className="mt-3 space-x-4">
                <a
                  href={membro.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={membro.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Integrantes;
