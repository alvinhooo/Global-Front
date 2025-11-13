export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">
        FAQ – Perguntas Frequentes
      </h1>
      <dl className="max-w-3xl mx-auto space-y-6">
        <div>
          <dt className="font-semibold text-lg">1. Como faço login?</dt>
          <dd className="mt-1">
            Use a página de login com suas credenciais fornecidas pela equipe.
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-lg">2. Onde a API está hospedada?</dt>
          <dd className="mt-1">
            O backend em Java deve estar publicado externamente e sua URL deve ser configurada na variável <code>VITE_API_URL</code>.
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-lg">3. O que fazer se a página não carregar?</dt>
          <dd className="mt-1">
            Verifique sua conexão com a internet e se a API está online. Atualize a página ou tente novamente mais tarde.
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-lg">4. Como alterar meu tema (claro/escuro)?</dt>
          <dd className="mt-1">
            No canto superior direito, clique no ícone de tema para alternar entre o modo claro e o modo escuro.
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-lg">5. Onde posso editar meus dados pessoais?</dt>
          <dd className="mt-1">
            Vá até o menu de perfil e clique em “Editar informações” para atualizar nome, e-mail ou senha.
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-lg">6. Posso usar o sistema em dispositivos móveis?</dt>
          <dd className="mt-1">
            Sim! O site é responsivo e funciona perfeitamente em celulares, tablets e computadores.
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-lg">7. O que fazer se meu login não funcionar?</dt>
          <dd className="mt-1">
            Confira se digitou corretamente suas credenciais. Caso o problema persista, entre em contato com o suporte técnico.
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-lg">8. Como entro em contato com o suporte?</dt>
          <dd className="mt-1">
            Utilize o formulário de contato na seção “Ajuda” do site ou envie um e-mail para <span className="text-blue-500">suporte@mindlink.com</span>.
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-lg">9. Os dados dos usuários são protegidos?</dt>
          <dd className="mt-1">
            Sim. Todas as informações são armazenadas com segurança e seguem as diretrizes da LGPD (Lei Geral de Proteção de Dados).
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-lg">10. O sistema é gratuito?</dt>
          <dd className="mt-1">
            Sim. O uso da plataforma é totalmente gratuito para os usuários cadastrados.
          </dd>
        </div>
      </dl>
    </div>
  );
}
