import Head from "next/head";
import { lazy, Suspense, useEffect, useState } from "react";

const Cardapio = lazy(() => import("micro_cardapio/Cardapio"));
const Pedido = lazy(() => import("micro_pedido/Pedido"));

export default function Home() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    function receberItem(event) {
      setItens((atuais) => [
        ...atuais,
        { ...event.detail, idPedido: `${Date.now()}-${Math.random()}` }
      ]);
    }

    function removerItem(event) {
      setItens((atuais) => atuais.filter((item) => item.idPedido !== event.detail));
    }

    window.addEventListener("adicionar-item", receberItem);
    window.addEventListener("remover-item", removerItem);
    return () => {
      window.removeEventListener("adicionar-item", receberItem);
      window.removeEventListener("remover-item", removerItem);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Pedidos | Micro Frontends</title>
        <meta name="description" content="Demonstração de micro frontends para pedidos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="topo">
        <div className="marca"><span className="marcaIcone">◆</span> Sabor &amp; Código</div>
        <span className="topoTag">DEMO • MICRO FRONTENDS</span>
      </header>

      <main className="pagina">
        <section className="hero">
          <div>
            <p className="sobretitulo">CARDÁPIO DIGITAL</p>
            <h1>Seu próximo pedido<br /><em>começa aqui.</em></h1>
            <p className="intro">Escolha seus pratos e acompanhe seu pedido em tempo real.</p>
          </div>
          <div className="heroSelo"><span>✦</span><small>FEITO COM<br />TECNOLOGIA</small></div>
        </section>

        <div className="conteudo">
          <section className="painel cardapioPainel">
            <div className="painelTitulo">
              <div><p className="sobretitulo">01 / ESCOLHA</p><h2>Nosso cardápio</h2></div>
              <span className="contador">3 opções</span>
            </div>
            <Suspense fallback={<p className="carregando">Carregando cardápio...</p>}>
              <Cardapio />
            </Suspense>
          </section>

          <aside className="painel pedidoPainel">
            <div className="painelTitulo">
              <div><p className="sobretitulo">02 / CONFIRA</p><h2>Seu pedido</h2></div>
              <span className="sacola">▣</span>
            </div>
            <Suspense fallback={<p className="carregando">Carregando pedido...</p>}>
              <Pedido itens={itens} />
            </Suspense>
          </aside>
        </div>
        <footer>Projeto acadêmico • Comunicação entre componentes por eventos globais do navegador</footer>
      </main>
    </>
  );
}