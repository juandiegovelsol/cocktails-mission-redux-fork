/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useSelector } from 'react-redux';
import './cocktails-list.scss';
import { CocktailCard } from '../CocktailCard';
import { Modal } from '../Modal';

function CocktailsList() {
  const { cocktailItems } = useSelector((store) => store.cocktail);
  const { isOpen } = useSelector((store) => store.modal);

  /*  const getIngredients = (item, string) => {
    const result = Object.entries(item).reduce((list, current) => {
      const [key, value] = current;
      if (key.match(string) && value) {
        return [...list, value];
      }
      return [...list];
    });
    return result.slice(2);
    // console.log('result', result);
  }; */
  return (
    <div className="cocktails-list">
      <h3>Select one cocktail</h3>
      {isOpen && <Modal />}
      <div className="cocktails-list__list">
        {cocktailItems.map((item) => (
          <CocktailCard
            key={item.idDrink}
            id={item.idDrink}
            imgUrl={item.strDrinkThumb}
            name={item.strDrink}
          />
        ))}
      </div>
    </div>
  );
}
export default CocktailsList;
