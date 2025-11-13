import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! ✅");

    setFormData({
      nome: "",
      email: "",
      mensagem: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 text-gray-900 dark:text-gray-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">
          Contato e Suporte
        </h1>

        <p className="text-lg text-center mb-10">
          Precisa de ajuda, quer enviar uma sugestão ou relatar um problema?  
          Preencha o formulário abaixo ou entre em contato com um dos integrantes do grupo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              nome: "Álvaro Freitas Miranda",
              rm: "565364",
              turma: "1TDSP1",
              github: "https://github.com/alvinhooo",
              linkedin:
                "https://www.linkedin.com/in/%C3%A1lvaro-miranda-a71783314/",
            },
            {
              nome: "Victor Viana Carneiro",
              rm: "565537",
              turma: "1TDSP1",
              github: "https://github.com/vderoldo7",
              linkedin: "https://www.linkedin.com/in/vitor-deroldo/",
            },
            {
              nome: "Rafael Pascotte Mercadante",
              rm: "564928",
              turma: "1TDSP1",
              github: "https://github.com/pascotterafaaa",
              linkedin:
                "https://www.linkedin.com/in/rafael-pascotte-mercadante-6a5405196/",
            },
          ].map((membro) => (
            <div
              key={membro.rm}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                {membro.nome}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                RM: {membro.rm} • Turma: {membro.turma}
              </p>
              <div className="mt-3 space-x-3">
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">
            Envie sua mensagem
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-semibold mb-1" htmlFor="nome">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                required
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="seuemail@exemplo.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1" htmlFor="mensagem">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                required
                rows={5}
                placeholder="Descreva sua dúvida ou sugestão..."
                value={formData.mensagem}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
