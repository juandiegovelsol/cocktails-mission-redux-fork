// This function has to parameters:
// item= object (keys: values) that will be evaluated.
// string= a portion of the string that will be matched in the object's keys.
// the function returns an array with the values matched in the found keys.
const cocktailSection = (item, string) => {
  const result = Object.entries(item).reduce((list, current) => {
    const [key, value] = current;
    if (key.match(string) && value) {
      return [...list, value];
    }
    return [...list];
  });
  return result.slice(2);
  /* console.log('result', result); */
};

export default cocktailSection;
