import { useNavigate } from 'react-router-dom';
import './go-to-btn.scss';

function GoToBtn() {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate('/cocktails')}>
      Go to cocktails
    </button>
  );
}
export default GoToBtn;
