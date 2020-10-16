import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function fetchCardRequest() {
  return { type: types.FETCH_CARD_REQUEST };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, payload: { card } };
}

export function fetchCard(id, callback) {
  return function(dispatch) {
    dispatch(fetchCardRequest());
    apiClient.fetchCard(id, (card) => {
      dispatch(fetchCardSuccess(card));

      if (callback) {
        callback(card);
      }
    });
  };
}

export function updateCardRequest() {
  return { type: types.UPDATE_CARD_REQUEST };
}

export function updateCardSuccess(card) {
  return { type: types.UPDATE_CARD_SUCCESS, payload: { card } };
}

export function updateCard(card, callback) {
  return function(dispatch) {
    dispatch(updateCardRequest());
    apiClient.updateCard(card, (updatedCard) => {
      dispatch(updateCardSuccess(updatedCard));

      if (callback) {
        callback(updatedCard);
      }
    });
  };
}

export function createCommentRequest() {
  return { type: types.CREATE_COMMENT_REQUEST };
}

export function createCommentSuccess(comment) {
  return { type: types.CREATE_COMMENT_SUCCESS, payload: { comment } };
}

export function createComment(comment, callback) {
  return function(dispatch) {
    dispatch(createCommentRequest());
    apiClient.createComment(comment, (createdComment) => {
      dispatch(createCommentSuccess(createdComment));

      if (callback) {
        callback(createdComment);
      }
    });
  };
}
