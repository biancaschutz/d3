import { useState } from "react";
import pokemons from "../data/pokemon";
import s from "../styles/projectB.module.css";
import PokemonCard from "../components/projectB/PokemonCard";
import PokemonLogo from "../components/projectB/PokemonLogo";

const TYPES = new Set(pokemons.map((p) => p.type));

export default function ProjectB() {
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

      <div style={{ paddingTop: "20px", fontSize: ".5rem" }}>
        Task: Using fundamentals of React, build a small Pokemon explorer app.
        Display a grid of Pokemon cards and add some sort of interactivity to
        the app.
      </div>
    </div>
  );
}
