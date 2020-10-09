import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function addListRequest() {
  return { type: types.ADD_LIST_REQUEST };
}

export function addListSuccess(newList) {
  return { type: types.ADD_LIST_SUCCESS, payload: { list: newList } };
}

export function addList(newList, callback) {
  return function(dispatch) {
    dispatch(addListRequest());
    apiClient.addList(newList, (list) => {
      dispatch(addListSuccess(list));

      if (callback) {
        callback(list);
      }
    });
  };
}

export function updateListRequest() {
  return { type: types.UPDATE_LIST_REQUEST };
}

export function updateListSuccess(list) {
  return { type: types.UPDATE_LIST_SUCCESS, payload: { list } };
}

export function updateList(listId, list, callback) {
  return function(dispatch) {
    dispatch(updateListRequest());
    apiClient.updateList(listId, list, (updatedList) => {
      dispatch(updateListSuccess(updatedList));

      if (callback) {
        callback(updatedList);
      }
    });
  };
}
