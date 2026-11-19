const pratos = [
  {
    id: 1,
    nome: "Hambúrguer Artesanal",
    descricao: "Hambúrguer artesanal de carne bovina, queijo, alface, tomate e molho especial.",
    preco: 29.90
  },
  {
    id: 2,
    nome: "Pizza Margherita",
    descricao: "Pizza tradicional com molho de tomate, mussarela, manjericão fresco e azeite.",
    preco: 39.90
  },
  {
    id: 3,
    nome: "Pasta Italiana",
    descricao: "Massa italiana servida com molho de tomate e temperos especiais.",
    preco: 34.90
  }
];

export default function Cardapio() {
  function adicionar(prato) {
    window.dispatchEvent(
      new CustomEvent("adicionar-item", {
        detail: prato
      })
    );
  }

  return (
    <div>
      {pratos.map((prato) => (
        <article key={prato.id}>
          <h3>{prato.nome}</h3>

          <p>{prato.descricao}</p>

          <p>R$ {prato.preco.toFixed(2)}</p>

          <button onClick={() => adicionar(prato)}>
            Adicionar ao pedido
          </button>
        </article>
      ))}
    </div>
  );
}