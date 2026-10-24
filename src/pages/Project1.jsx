import { useState } from "react";
import { Lottie } from "lottie-react";
import transition from "../assets/Pokeball Loading.json";
import pokemons from "../data/pokemon";
import s from "../styles/project1.module.css";
import PokemonCard from "../components/project1/PokemonCard";

const TYPES = new Set(pokemons.map((p) => p.type));

export default function Project1() {
  const [type, switchType] = useState("Grass");
  const [pending, setPending] = useState(null); // type we're switching to

  const handleClick = (t) => {
    if (t === type || pending) return; // ignore clicks mid-animation
    setPending(t);
  };

  return (
    <div className={s.page}>
      <div className={s.options}>
        {[...TYPES].map((t) => (
          <button
            style={{ backgroundColor: t === type ? "#ff1f1f" : "" }}
            key={t}
            onClick={() => handleClick(t)}
            className={s.typeButton}
          >
            {t}
          </button>
        ))}
      </div>

      {pending ? (
        <Lottie
          key={pending} // remount = replay from frame 0 each switch
          src={transition}
          autoplay
          loop={false}
          segment={[20, 60]}
          subscriptions={{
            complete: () => {
              switchType(pending);
              setPending(null);
            },
          }}
          className={s.transition}
        />
      ) : (
        <div className={s.cardGrid}>
          {pokemons
            .filter((p) => p.type === type)
            .map((p) => (
              <PokemonCard key={p.id} pokemonData={p} />
            ))}
        </div>
      )}
    </div>
  );
}
