const randomNumber = new RandomNumber('#random-numbers');
randomNumber.init();

const passArrayWithNumbers = randomNumber.allDrawnNumbers;

const ranking = new Ranking('#numbers-ranking', passArrayWithNumbers);
ranking.init();