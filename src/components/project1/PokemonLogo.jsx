// Renders the Pokémon logo from /public as a responsive header image.
// It scales to its container's width (capped by `maxWidth`) and keeps its aspect ratio.
export default function PokemonLogo({
  maxWidth = 600,
  className,
  style,
  alt = "Pokémon",
}) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}pokemon_logo.svg`}
      alt={alt}
      className={className}
      style={{
        display: "block",
        width: "100%",
        maxWidth,
        height: "auto",
        aspectRatio: "264.58 / 97.09",
        margin: "0 auto",
        ...style,
      }}
    />
  );
}
