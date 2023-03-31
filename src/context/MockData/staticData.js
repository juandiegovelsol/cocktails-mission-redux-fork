import { nanoid } from '@reduxjs/toolkit';

const staticData = [
  {
    id: nanoid(),
    name: 'Margarita',
    imgUrl:
      'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    instruction:
      'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
  },
  {
    id: nanoid(),
    name: 'Mojito',
    imgUrl:
      'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg',
    instruction:
      'Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.',
  },
  {
    id: nanoid(),
    name: 'Negroni',
    imgUrl:
      'https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg',
    instruction: 'Stir into glass over ice, garnish and serve.',
  },
  {
    id: nanoid(),
    name: 'Whiskey Sour',
    imgUrl:
      'https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg',
    instruction:
      "Shake with ice. Strain into chilled glass, garnish and serve. If served 'On the rocks', strain ingredients into old-fashioned glass filled with ice.",
  },
];

export default staticData;
