import { useState, useEffect } from 'react';

function App() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    async function carregarFilmes() {
      try {
        const resposta = await fetch('http://localhost:3000/api/filmes');
        const dados = await resposta.json();
        setItens(dados);
      } catch (erro) {
        console.error('Erro ao buscar filmes:', erro);
      }
    }

    carregarFilmes();
  }, []);

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <ul>
        {itens.map((item) => (
          <li>{item.nome || item.titulo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;