const pratos = [
  { id: 1, nome: "Hambúrguer Artesanal", preco: 29.90 },
  { id: 2, nome: "Pizza Margherita", preco: 39.90 },
  { id: 3, nome: "Pasta Italiana", preco: 34.90 }
];

export default function Cardapio() {
  function adicionar(prato) {
    window.dispatchEvent(
      new CustomEvent("adicionar-item", { detail: prato })
    );
  }

  return (
    <div>
      {pratos.map((prato) => (
        <article key={prato.id}>
          <h3>{prato.nome}</h3>
          <p>R$ {prato.preco.toFixed(2)}</p>
          <button onClick={() => adicionar(prato)}>
            Adicionar ao pedido
          </button>
        </article>
      ))}
    </div>
  );
}