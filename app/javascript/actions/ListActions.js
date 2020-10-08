import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function updateList(list) {
  return {
    type: types.UPDATE_LIST_SUCCESS, payload: { list },
  };
};