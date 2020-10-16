import axios from 'axios';
import * as routes from '../constants/ApiRoutes';

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error('Error: ', errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

const apiClient = {
  getBoards: function(callback) {
    return axios
      .get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function(board, callback) {
    return axios
      .post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  fetchBoard: function(boardId, callback) {
    return axios
      .get(`/api/boards/${boardId}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateList: function(listId, list, callback) {
    return axios
      .put(`/api/lists/${listId}`, { list })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  addList: function(list, callback) {
    return axios
      .post(routes.ADD_LIST_URL, { list })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  fetchCard(id, callback) {
    return axios
      .get(`/api/cards/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  addCard(card, callback) {
    return axios
    .post(routes.ADD_CARD_URL, { card })
    .then(unwrapData)
    .then(callback)
    .catch(logError);
  },
  updateCard(card, callback) {
    return axios
    .put(`/api/cards/${card.id}`, { card })
    .then(unwrapData)
    .then(callback)
    .catch(logError);
  },
  createComment(comment, callback) {
    return axios
    .post(routes.ADD_COMMENT_URL, { comment })
    .then(unwrapData)
    .then(callback)
    .catch(logError);
  },
};

export default apiClient;
