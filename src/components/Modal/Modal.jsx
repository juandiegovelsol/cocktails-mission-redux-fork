import './modal.scss';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../context/features/modal/modalSlice';

function Modal({ setIsOpen, ingredients = [], quantity = [] }) {
  const dispatch = useDispatch();
  const handleCloseClick = () => {
    setIsOpen(false);
    dispatch(closeModal());
  };

  return (
    <aside className="modal">
      <div className="modal__details">
        <span className="top">
          <button
            className="close-button"
            type="button"
            onClick={handleCloseClick}
          >
            X
          </button>
        </span>
        <h2>Ingredients</h2>
        <span>
          {quantity.map((item) => (
            <p key={item}>{item}</p>
          ))}
          {ingredients.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </span>
      </div>
    </aside>
  );
}
export default Modal;
