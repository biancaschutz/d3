import { useState } from "react";
import pokemons from "../data/pokemon";
import s from "../styles/project1.module.css";
import PokemonCard from "../components/project1/PokemonCard";
import PokemonLogo from "../components/project1/PokemonLogo";

const TYPES = new Set(pokemons.map((p) => p.type));

export default function Project1() {
  const [type, switchType] = useState("Grass");

  return (
    <div className={s.page}>
      <PokemonLogo />
      <div className={s.options}>
        {[...TYPES].map((t) => (
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              backgroundColor: t === type ? "#ff1f1f" : "",
            }}
            key={t}
            onClick={() => switchType(t)}
            className={s.typeButton}
          >
            <img
              style={{
                width: 25,
                height: 25,
              }}
              src={`${import.meta.env.BASE_URL}pokemon_energy/${t.toLowerCase()}.png`}
            />
            {t}
          </button>
        ))}
      </div>

      <div className={s.cardGrid}>
        {pokemons
          .filter((p) => p.type === type)
          .map((p, i) => (
            <PokemonCard key={p.id} pokemonData={p} index={i} />
          ))}
      </div>
    </div>
  );
}
