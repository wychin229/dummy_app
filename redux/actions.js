/* eslint-disable prettier/prettier */
import { imgs } from '../asset/images';

// an action type in Redux -> Here a HTTP request to get data from TMDB
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILED = 'GET_MOVIES_FAILED';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';
export const LOAD_IMG = 'LOAD_IMG';
export const ADD_LOVE = 'ADD_LOVE';
export const UNLOVE = 'UNLOVE';
export const UPDATE_POINT = 'UPDATE_POINT';

export const getMovies = () => {
  return {
    type: GET_MOVIES,
  };
};
export const getMoviesFailed = () => {
  return {
    type: GET_MOVIES_FAILED,
  };
};
export const getMoviesSuccess = data => {
  return {
    type: GET_MOVIES_SUCCESS,
    payload: data,
  };
};
export const addFavorite = movie => {
  return {
    type: ADD_FAVORITE_ITEM,
    payload: movie,
  };
};
export const removeFavorite = movie => {
  return {
    type: REMOVE_FAVORITE_ITEM,
    payload: movie,
  };
};
export const loadImg = () => {
  return {
    type: LOAD_IMG,
    payload: imgs,
  };
};
export const loveIt = item => {
  return {
    type: ADD_LOVE,
    payload: { id: item.id, num: item.love + 1 }, // imgs.id
  };
};
export const unlove = item => {
  return {
    type: UNLOVE,
    payload: { id: item.id, num: item.love - 1 },
  };
};
export const updatePoint = point => {
  return {
    type: UPDATE_POINT,
    payload: point,
  };
};
