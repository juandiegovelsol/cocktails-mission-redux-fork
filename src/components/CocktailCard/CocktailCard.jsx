import './cocktail-card.scss';

function CocktailCard({ imgUrl, name, instruction }) {
  return (
    <div className="cocktail-card">
      <img src={imgUrl} alt={name} />
      <h3>{name}</h3>
      <p>{instruction}</p>
    </div>
  );
}
export default CocktailCard;
