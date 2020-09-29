import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

const Resultado = ({ items, isLoading, result }) => {
  return isLoading ? (
    <p>Carregando...</p>
  ) : (
    <>
      <div className="routes">
        <h2>Resultados da Busca ({result.totalResults} Resultados)</h2>
        {items.map((item) => (
          <div className="conteudo" key={item.imdbID}>
            <h1>{item.Title}</h1>
            <p>Ano: {item.Year}</p>
            <Link to={`/repositorio/${item.imdbID}`}> 
              <button type='button'>Ver Detalhes</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Resultado;
