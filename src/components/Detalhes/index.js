import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import api from "../../services/api";

export default function Detalhes({ match }) {
  const [repositorio, setRepositorio] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = "3d06bfac";

  useEffect(() => {
    async function load() {
      const idRepo = match.params.repositorio;

      const repositorioDetalhesData = await api.get(`?apikey=${API_KEY}&i=${idRepo}`);

      setRepositorio(repositorioDetalhesData.data);

      setIsLoading(false);
    }

    load();
  }, [repositorio, match.params.repositorio]);

  if(isLoading){
    return(
      <div>
        <h1>Carregando...</h1>
      </div>
    )
  }

  return (
    <>
    <div className="routes">
      <div className="cabecalho-detalhes">
        <h2>{repositorio.Title}</h2>
      </div>
      <div className="detalhes">
        <img src={repositorio.Poster} alt="Capa do filme" />
      </div>
      <div className="detalhes">
        <strong>Ano:</strong>
        <span>{repositorio.Year}</span>
      </div>
      <div className="detalhes">
        <strong>Gênero(s):</strong>
        <span>{repositorio.Genre}</span>
      </div>
      <div className="detalhes">
        <strong>Diretor:</strong>
        <span>{repositorio.Director}</span>
      </div>
      <div className="detalhes">
        <strong>Atores:</strong>
        <span>{repositorio.Actors}</span>
      </div>
      <div className="detalhes">
        <Link to={`/`}>
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {"<<"} Voltar
          </button>
        </Link>
      </div>
    </div>
    </>
  );
}
