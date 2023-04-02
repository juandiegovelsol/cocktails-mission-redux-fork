/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable */
import React, { useState } from 'react';
/* import { useDispatch } from 'react-redux'; */
import { Modal } from '../Modal';
/* import { openModal } from '../../context/features/modal/modalSlice'; */
import './cocktail-card.scss';

function CocktailCard({
  imgUrl,
  name,
  instruction,
  ingredients = [],
  quantity = [],
}) {
  const [isOpen, setIsOpen] = useState(false);
  /* const dispatch = useDispatch(); */

  const handleClick = () => {
    if (isOpen === false) {
      setIsOpen(true);
      /* dispatch(openModal()); */
    }
  };
  return (
    <div className="cocktail-card" onClick={handleClick}>
      <img src={imgUrl} alt={name} className="cocktail-image" />
      <h3>{name}</h3>
      <p>{instruction}</p>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          ingredients={ingredients}
          quantity={quantity}
        />
      )}
    </div>
  );
}
export default CocktailCard;
