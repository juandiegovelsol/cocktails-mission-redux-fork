/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable */
import { useSelector } from 'react-redux';
import './cocktails-list.scss';
import { CocktailCard } from '../CocktailCard';

function CocktailsList() {
  const { cocktailItems } = useSelector((store) => store.cocktail);
  const getIngredients = (item, string) => {
    const result = Object.entries(item).reduce((list, current) => {
      const [key, value] = current;
      if (key.match(string) && value) {
        return [...list, value];
      }
      return [...list];
    });
    return result.slice(2);
    /* console.log('result', result); */
  };
  return (
    <div className="cocktails-list">
      <h3>Selecciona un cocktail</h3>
      <div>
        {cocktailItems.map((item) => {
          const ingredients = getIngredients(item, 'strIngredient');
          const quantity = getIngredients(item, 'strMeasure');
          return (
            <CocktailCard
              key={item.idDrink}
              imgUrl={item.strDrinkThumb}
              name={item.strDrink}
              instruction={item.strInstructions}
              ingredients={ingredients}
              quantity={quantity}
            />
          );
        })}
      </div>
    </div>
  );
}
export default CocktailsList;
