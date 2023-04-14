import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CocktailsList } from '../components/CocktailsList';
import { getCocktailsAsync } from '../context/features/cocktail/cocktailSlice';
import './cocktails.scss';

function Cocktails() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.cocktail);

  useEffect(() => {
    dispatch(getCocktailsAsync());
  }, []);

  return (
    <div className="cocktails">
      <h2>{isLoading ? 'Loading...' : 'Cocktails list'}</h2>
      {!isLoading && <CocktailsList />}
    </div>
  );
}

export default Cocktails;
