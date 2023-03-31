import './modal.scss';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../context/features/modal/modalSlice';

function Modal() {
  const dispatch = useDispatch();

  return (
    <aside>
      <h2>Componente modal en construccion</h2>
      <button
        className="close-button"
        type="button"
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        cerrar modal
      </button>
    </aside>
  );
}
export default Modal;
