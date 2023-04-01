import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CocktailsList } from '../components/CocktailsList';
import { getCocktailsAsync } from '../context/features/cocktail/cocktailSlice';

function Cocktails() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.cocktail);

  useEffect(() => {
    dispatch(getCocktailsAsync());
  }, []);

  return (
    <div>
      <h2>{isLoading ? 'Cargando...' : 'Lista de cocktails'}</h2>
      {!isLoading && <CocktailsList />}
    </div>
  );
}

export default Cocktails;
