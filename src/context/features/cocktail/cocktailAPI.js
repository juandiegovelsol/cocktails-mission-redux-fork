/* eslint-disable no-unused-vars */
const getOneCocktail = async (url) => {
  try {
    const isOpen = false;
    const request = await fetch(url);
    const data = await request.json();
    const drinks = await data.drinks[0];
    return drinks;
  } catch (error) {
    return error;
  }
};

export const fetchCocktails = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const numCocktail = 6;
  const allCocktails = [];
  try {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < numCocktail; i++) {
      // eslint-disable-next-line no-await-in-loop
      const response = await getOneCocktail(url);
      allCocktails.push(response);
    }
    return new Promise((resolve, reject) => {
      resolve(allCocktails);
    });
  } catch (error) {
    return new Promise((resolve, reject) => {
      reject(error);
    });
  }
};
