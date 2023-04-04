import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { closeModal } from '../../context/features/modal/modalSlice';

import cocktailSection from './getInfo';
import './modal.scss';

function Modal() {
  const dispatch = useDispatch();
  const { currentCocktail } = useSelector((store) => store.modal);
  const {
    strDrinkThumb: url,
    strDrink: name,
    strInstructions: instructions,
  } = currentCocktail;

  // cocktailSection() is a helper function that returbn an array
  // the array is a portion of the currentCocktail values matching important keys
  // the second parameter is the string to match in the object keys.
  const cocktailIngredients = cocktailSection(currentCocktail, 'strIngredient');
  const ingredientsQty = cocktailSection(currentCocktail, 'strMeasure');

  const handleCloseClick = () => {
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
          <img src={url} alt={name} className="modal-image" />
        </span>
        <h2>Ingredients</h2>
        <span>
          {cocktailIngredients.map((item) => (
            <p key={nanoid()}>{item}</p>
          ))}
          {ingredientsQty.map((item) => (
            <p key={nanoid()}>{item}</p>
          ))}
        </span>
        <h2>Instructions</h2>
        <p>{instructions}</p>
      </div>
    </aside>
  );
}
export default Modal;
