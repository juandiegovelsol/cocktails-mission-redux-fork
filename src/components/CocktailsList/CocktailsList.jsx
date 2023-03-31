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
      <h2>lista de cocktails</h2>
      {isOpen && <Modal />}
      <div onClick={handleClick}>
        {cocktailItems.map((item) => (
          <CocktailCard
            key={item.id}
            imgUrl={item.imgUrl}
            name={item.name}
            instruction={item.instruction}
          />
        ))}
      </div>
    </div>
  );
}
export default CocktailsList;
