document.addEventListener('DOMContentLoaded', function () {
  const drinkingPerson = document.querySelector('#drinking-person');
  const drinkingButton = document.querySelector('#drinking-button');
  const drinkers = [
    'Dominic',
    'Donovon',
    'Metty',
    'Josh',
    'Ryan',
    'Angelo',
    'Noah',
    'Jason'
  ];
  const drinkingArr = new Array(100 - drinkers.length)
    .fill(false)
    .concat(drinkers);

  const takeADrink = () => {
    const shuffledArr = shuffle(drinkingArr);
    const drinker = shuffledArr[Math.floor(Math.random() * shuffledArr.length)];
    if (!drinker) {
      return `You got lucky!`;
    }
    return `${drinker} take a drink!`;
  };
  const handleDrinker = () => (drinkingPerson.textContent = takeADrink());
  drinkingButton.addEventListener('click', handleDrinker);
});

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
