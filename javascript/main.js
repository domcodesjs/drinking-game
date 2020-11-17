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
  const shuffle = (array) => {
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
  };
  const shuffledArr = shuffle(drinkingArr);

  const takeADrink = () => {
    const drinker = shuffledArr[Math.floor(Math.random() * shuffledArr.length)];
    console.log(shuffledArr);
    if (!drinker) {
      return `You got lucky!`;
    }

    return `${drinker} take a drink!`;
  };
  const handleDrinker = () => (drinkingPerson.textContent = takeADrink());
  drinkingButton.addEventListener('click', handleDrinker);
});
