/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useSelector, useDispatch } from 'react-redux';
import './cocktails-list.scss';
import { CocktailCard } from '../CocktailCard';
import { Modal } from '../Modal';
import { openModal } from '../../context/features/modal/modalSlice';

function CocktailsList() {
  const { cocktailItems } = useSelector((store) => store.cocktail);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal());
  };

  return (
    <div>
      <h3>Selecciona un cocktail</h3>
      {isOpen && <Modal />}
      <div onClick={handleClick}>
        {cocktailItems.map((item) => (
          <CocktailCard
            key={item.idDrink}
            imgUrl={item.strDrinkThumb}
            name={item.strDrink}
            instruction={item.strInstructions}
          />
        ))}
      </div>
    </div>
  );
}
export default CocktailsList;
