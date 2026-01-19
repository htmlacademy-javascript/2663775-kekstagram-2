import {MESSAGES, NAMES} from './data';
import {getRandomInteger, createIdGenerator, getRandomItem} from './utils';


const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 200;

const getId = createIdGenerator();

const createComments = () => {
  const comments = [];

  for(let i = 0; i <= getRandomInteger(MIN_COMMENTS, MAX_COMMENTS); i++) {
    const comment = {
      id: getId(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomItem(MESSAGES),
      name: getRandomItem(NAMES)
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

export {createPhotos};
