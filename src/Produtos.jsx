import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}{" "}
            <button onClick={() => navigate(`/editar/${produto.id}`)}>
              Editar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}