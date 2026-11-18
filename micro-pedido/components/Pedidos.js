export default function Pedido({ itens = [] }) {
  const total = itens.reduce(
    (soma, item) => soma + item.preco,
    0
  );

  function remover(item) {
    window.dispatchEvent(
      new CustomEvent("remover-item", {
        detail: item.idPedido
      })
    );
  }

  return (
    <div>
      {itens.length === 0 ? (
        <p>Nenhum item adicionado.</p>
      ) : (
        itens.map((item) => (
          <article key={item.idPedido}>
            <h3>{item.nome}</h3>
            <p>R$ {item.preco.toFixed(2)}</p>
            <button onClick={() => remover(item)}>
              Remover
            </button>
          </article>
        ))
      )}

      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}