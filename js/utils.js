const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createIdGenerator = () => {
  let lastGenerateId = 0;

  return () => {
    lastGenerateId += 1;
    return lastGenerateId;
  };
};

const getRandomItem = (items) => items[getRandomInteger(0, items.length - 1)];
const isEscapeKey = (evt) => evt.key === 'Escape';

export{ getRandomInteger, createIdGenerator, getRandomItem, isEscapeKey, };
