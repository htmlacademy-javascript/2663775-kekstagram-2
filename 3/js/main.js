const MESSAGES_SET = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES_SET = [
  'Маша',
  'Сергей',
  'Вероника',
  'Григорий',
  'Дмитрий',
  'Маргарита',
  'Евгения',
  'Константин',
  'Иван',
  'Григорий',
  'Александр',
  'Михаил'
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 200;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const craeteIdGenerator = () => {
  let lastGenerateId = 0;

  return () => {
    lastGenerateId += 1;
    return lastGenerateId;
  };
};

const getId = craeteIdGenerator();

const getRandomItem = (items) => items[getRandomInteger(0, items.length - 1)];

const createComments = () => {
  const comments = [];

  for(let i = 0; i <= getRandomInteger(MIN_COMMENTS, MAX_COMMENTS); i++) {
    const comment = {
      id: getId(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomItem(MESSAGES_SET),
      name: getRandomItem(NAMES_SET)
    };
    comments.push(comment);
  }
  return comments;
};

const createPhotos = () => {
  const photos = [];

  for(let i = 1; i <= 25; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: 'Перед нами интересная, необычная фотография.',
      likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
      comments: createComments()
    };
    photos.push(photo);
  }
  return photos;

};

createPhotos();
