import s from "../../styles/project1.module.css";

const PokemonCard = ({ pokemonData }) => {
  return (
    <div className={s.cardMain}>
      <div className={s.cardContent}>
        <span>{pokemonData.name}</span>
        <div className={s.imageHolder}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
