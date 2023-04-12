import { useNavigate } from 'react-router-dom';
import './go-to-btn.scss';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import WineBarIcon from '@mui/icons-material/WineBar';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import LiquorIcon from '@mui/icons-material/Liquor';

function GoToBtn() {
  const navigate = useNavigate();
  const iconStyle = { fontSize: '3em' };
  return (
    <div className="goTo">
      <div className="goTo__icons">
        <LocalBarIcon sx={iconStyle} />
        <WineBarIcon sx={iconStyle} />
        <SportsBarIcon sx={iconStyle} />
        <LiquorIcon sx={iconStyle} />
      </div>
      <button
        type="button"
        onClick={() => navigate('/cocktails')}
        className="goTo__btn"
      >
        Cocktails
      </button>
    </div>
  );
}
export default GoToBtn;
