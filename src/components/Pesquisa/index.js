import React, { useState } from "react";
import "./style.css";

import api from "../../services/api";
import Resultado from "../Resultado";
import ResultadoInicial from "../ResultadoInicial";

export default function Pesquisa() {
  const [items, setItems] = useState([]);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = "3d06bfac";

  const handleSubmit = (e) => {
    e.preventDefault();

    async function submit() {
      const response = await api.get(
        `?apikey=${API_KEY}&s=${query}&type=${type}`
      );

      setItems(response.data.Search);
      setResult(response.data);

      setIsLoading(false);
    }
    submit();
  };

  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <div className="pesquisa">
        <div className="cabecalho-pesquisa">
          <h2>Pesquisar</h2>
        </div>
        <div className="cabecalho-pesquisa">
          <p>O que deseja buscar?</p>
        </div>
        <div className="btn-selecao">
          <button type="button" value="Filme" onClick={() => setType("movie")}>
            Filme
          </button>
          <button type="button" value="Serie" onClick={() => setType("series")}>
            Série
          </button>
        </div>
        <form onSubmit={handleSubmit} className="input-pesquisa">
          <input
            type="text"
            placeholder="termo da busca (ex: back to the future)"
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn-submit">
            Pesquisar
          </button>
        </form>
      </div>
      
    {
      result === '' ? (
        <ResultadoInicial />
      ) : (
        <Resultado isLoading={isLoading} items={items} result={result} />
      ) 
    }

    </>
  );
}
