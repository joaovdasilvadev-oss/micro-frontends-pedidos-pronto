export default function Pedido({ itens }) {
  const total = itens.reduce((soma, item) => soma + item.preco, 0);

  function remover(id) {
    window.dispatchEvent(new CustomEvent("remover-item", { detail: id }));
  }

  return (
    <div className="pedidoConteudo">
      {itens.length === 0 ? (
        <div className="pedidoVazio">
          <div className="vazioIcone">＋</div>
          <h3>Seu pedido está vazio</h3>
          <p>Adicione um prato do cardápio para começar.</p>
        </div>
      ) : (
        <div className="itensPedido">
          {itens.map((item) => (
            <div className="itemPedido" key={item.idPedido}>
              <span className="itemEmoji">{item.emoji}</span>
              <div className="itemTexto"><strong>{item.nome}</strong><small>R$ {item.preco.toFixed(2).replace(".", ",")}</small></div>
              <button className="remover" onClick={() => remover(item.idPedido)} aria-label={`Remover ${item.nome}`}>×</button>
            </div>
          ))}
        </div>
      )}
      <div className="resumo">
        <div className="linhaResumo"><span>Itens</span><strong>{itens.length}</strong></div>
        <div className="linhaTotal"><span>Total</span><strong>R$ {total.toFixed(2).replace(".", ",")}</strong></div>
        <button className="finalizar" disabled={itens.length === 0} onClick={() => alert("Pedido enviado! (demonstração)")}>Finalizar pedido <span>→</span></button>
        <p className="nota">Taxas e entrega calculadas na finalização.</p>
      </div>
    </div>
  );
}