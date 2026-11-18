const pratos = [
  { id: 1, nome: "Burger da Casa", descricao: "Blend artesanal, queijo cheddar, alface e molho especial.", preco: 29.90, emoji: "🍔", categoria: "MAIS PEDIDO" },
  { id: 2, nome: "Pizza Margherita", descricao: "Massa de fermentação lenta, tomate, mozzarella e manjericão.", preco: 39.90, emoji: "🍕", categoria: "CLÁSSICO" },
  { id: 3, nome: "Pasta à Bolonhesa", descricao: " massa italiana ao molho bolonhesa preparado lentamente.", preco: 34.90, emoji: "🍝", categoria: "DA CASA" }
];

export default function Cardapio() {
  function adicionar(prato) {
    window.dispatchEvent(new CustomEvent("adicionar-item", { detail: prato }));
  }

  return (
    <div className="listaPratos">
      {pratos.map((prato) => (
        <article className="prato" key={prato.id}>
          <div className="pratoImagem"><span>{prato.emoji}</span><small>{prato.categoria}</small></div>
          <div className="pratoInfo">
            <div><h3>{prato.nome}</h3><p>{prato.descricao}</p></div>
            <div className="pratoRodape">
              <strong>R$ {prato.preco.toFixed(2).replace(".", ",")}</strong>
              <button className="botaoAdicionar" onClick={() => adicionar(prato)} aria-label={`Adicionar ${prato.nome}`}>Adicionar <span>＋</span></button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}