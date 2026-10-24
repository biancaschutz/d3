import s from "../../styles/project1.module.css";
import RelativeChart from "./AttackChart";

const MAX_STRENGTH = 140;

const MAX_HP = 160;

const PokemonCard = ({ pokemonData, index = 0 }) => {
  return (
    <div
      className={`${s.cardMain} ${s[pokemonData.type.toLowerCase()] ?? ""}`}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className={s.cardShine} />
      <div className={s.cardContent}>
        <div className={s.cardHeader}>
          <span>{pokemonData.name}</span>
          <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
            <span
              style={{
                fontSize: ".5rem",
                display: "flex",
                alignItems: "baseline",
                gap: 1.5,
              }}
            >
              HP <p style={{ fontSize: "1rem" }}>{pokemonData.hp}</p>
            </span>
            <img
              style={{ width: 25, height: 25 }}
              src={`${import.meta.env.BASE_URL}pokemon_energy/${pokemonData.type.toLowerCase()}.png`}
            />
          </div>
        </div>
        <div className={s.imageHolder}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px 25px",
          }}
        >
          <RelativeChart
            value={pokemonData.attack}
            maxValue={MAX_STRENGTH}
            label="Attack"
            color="#5db9ff"
          />
          <RelativeChart
            value={pokemonData.hp}
            maxValue={MAX_HP}
            label="HP"
            color="	#ff1f1f"
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "5px",

            paddingBottom: "5px",
          }}
        >
          <img
            style={{ width: 25, height: 25 }}
            src={`${import.meta.env.BASE_URL}pokemon_energy/${pokemonData.type.toLowerCase()}.png`}
          />
          <span style={{ fontSize: ".8rem" }}>
            Card type: {pokemonData.type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
