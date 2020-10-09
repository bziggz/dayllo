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
