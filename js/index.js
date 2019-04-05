const commonFish = [
  'Small Bass',
  'Freshwater Goby',
  'Carp',
  'Sea Bass'
];

const uncommonFish = [
  'Bass',
  'Dace',
  'Crucian Carp'
];

const rareFish = [
  'Killifish',
  'Pagoda',
  'Koi'
];

const randomNumFromOneToN = (n) => {
  return Math.floor((Math.random() * n)) + 1;
};

const randomElementFromArray = (array) => {
  const randomIndex = randomNumFromOneToN(array.length) - 1;
  return array[randomIndex];
};

const goFish = () => {
  const randomNum = randomNumFromOneToN(100);
  console.log(randomNum);

  if (randomNum < 60) {
    return randomElementFromArray(commonFish);
  } else if (randomNum >= 60 && randomNum < 85) {
    return randomElementFromArray(uncommonFish);
  } else if (randomNum >= 85) {
    return randomElementFromArray(rareFish);
  }
};
