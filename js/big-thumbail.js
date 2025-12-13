import { isEscapeKey } from './utils';

const body = document.body;
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const description = bigPicture.querySelector('.social__caption');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');

const onEscapeKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const renderComments = (cooments) => {
  const fragment = document.createDocumentFragment();
  cooments.forEach((comment) => {
    const commentTemplate = socialComment.cloneNode(true);
    const commnetAuthor = commentTemplate.querySelector('.social__picture');
    commnetAuthor.src = comment.avatar;
    commnetAuthor.alt = comment.name;
    commentTemplate.querySelector('.social__text').textContent = comment.message;

    fragment.appendChild(commentTemplate);
  });
  socialComments.appendChild(fragment);
};


const openBigPicture = (photo) => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  bigPictureImage.src = photo.url;
  bigPictureImage.alt = photo.description;

  likesCount.textContent = photo.likes;
  description.textContent = photo.description;
  commentTotalCount.textContent = photo.comments.length;

  socialComments.innerHTML = '';
  renderComments(photo.comments);

  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  document.addEventListener('keydown', onEscapeKeydown);
};

function closeBigPicture() {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');

  socialComments.innerHTML = '';
  bigPictureImage.src = '';
  bigPictureImage.alt = '';

  likesCount.textContent = '';
  description.textContent = '';
  commentTotalCount.textContent = '';

  document.removeEventListener('keydown', onEscapeKeydown);
}

cancelButton.addEventListener('click', () => {
  closeBigPicture();
});

export {openBigPicture};

