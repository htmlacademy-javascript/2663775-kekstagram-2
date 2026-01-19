const COMMENTS_COUNT = 5;

const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
const commentCount = bigPicture.querySelector('.social__comment-shown-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentTotalCount = bigPicture.querySelector('.social__comment-total-count');

let totalComments = [];
let count = 0;

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentTemplate = socialComment.cloneNode(true);
    const commnetAuthor = commentTemplate.querySelector('.social__picture');
    commnetAuthor.src = comment.avatar;
    commnetAuthor.alt = comment.name;
    commentTemplate.querySelector('.social__text').textContent = comment.message;

    fragment.appendChild(commentTemplate);
  });
  socialComments.appendChild(fragment);

  commentCount.textContent = count;

  if (count >= totalComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const clearComments = () => {
  socialComments.innerHTML = '';
  commentTotalCount.textContent = '';
};

const initComments = (comments) => {
  count = Math.min(COMMENTS_COUNT, comments.length);
  totalComments = comments;
  commentTotalCount.textContent = comments.length;

  renderComments(totalComments.slice(0, count));
};

commentsLoader.addEventListener('click', () => {
  const prevCount = count;
  count = Math.min(count + COMMENTS_COUNT, totalComments.length);
  renderComments(totalComments.slice(prevCount, count));
});

export { renderComments, clearComments, initComments };
