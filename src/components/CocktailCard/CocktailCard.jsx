/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openModal,
  sendCocktail,
} from '../../context/features/modal/modalSlice';
import './cocktail-card.scss';

function CocktailCard({ id: myId, imgUrl, name }) {
  const dispatch = useDispatch();
  const { cocktailItems } = useSelector((store) => store.cocktail);

  // when on click it will:
  // 1. filter the current coctail from the cocktail list
  // 2. dispatch that cocktail object to set the state in the modal slice
  // 3. open the modal component
  const handleClick = (cocktailID) => {
    const currentCocktail = cocktailItems.find(
      (item) => item.idDrink === cocktailID
    );

    dispatch(sendCocktail(currentCocktail));
    dispatch(openModal());
  };
  return (
    <div className="cocktail-card">
      <img
        src={imgUrl}
        alt={name}
        className="cocktail-image"
        onClick={() => handleClick(myId)}
      />
      <h3 onClick={() => handleClick(myId)} className="cocktail-title">
        {name}
      </h3>
    </div>
  );
}
export default CocktailCard;
