document.addEventListener('DOMContentLoaded', function () {
  const drinkingPerson = document.querySelector('#drinking-person');
  const drinkingButton = document.querySelector('#drinking-button');
  let drinkers = [
    { name: 'Dominic', count: 0 },
    { name: 'Donovon', count: 0 },
    { name: 'Metty', count: 0 },
    { name: 'Josh', count: 0 },
    { name: 'Ryan', count: 0 },
    { name: 'Angelo', count: 0 },
    { name: 'Noah', count: 0 },
    { name: 'Jason', count: 0 }
  ];
  const drinkingArr = new Array(100 - drinkers.length)
    .fill(false)
    .concat(drinkers);

  const renderDrinkers = () => {
    document.querySelector('#drink-count').innerHTML = drinkers
      .map((drinker) => `<p><span>${drinker.name}<span> : ${drinker.count}</p>`)
      .join('');
  };

  renderDrinkers();

  const takeADrink = () => {
    const shuffledArr = shuffle(drinkingArr);
    const chosenOne =
      shuffledArr[Math.floor(Math.random() * shuffledArr.length)];
    if (!chosenOne) {
      return `You got lucky!`;
    }
    const indexOfDrinker = drinkers.findIndex(
      (drinker) => drinker.name === chosenOne.name
    );
    drinkers[indexOfDrinker].count += 1;
    renderDrinkers();
    return `${chosenOne.name} take a drink!`;
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
