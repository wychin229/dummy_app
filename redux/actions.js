import axios from 'axios';

// an action type in Redux -> Here a HTTP request to get data from TMDB
export const GET_MOVIES = 'GET_MOVIES';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';
export const LOAD_IMG = 'LOAD_IMG';
export const ADD_LOVE = 'ADD_LOVE';
export const UNLOVE = 'UNLOVE';

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = '0327c167ced93bc7622290c2fff710f9';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;
const imgs = [{
  id: 0,
  uri: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80",
  title: "Small Timmy",
  details: "Some text here",
  love: 105,
  pressed: false
},
{
  id: 1,
  uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg",
  title: "Timmy's friend - Garry",
  details: "Some text here",
  love: 23, 
  pressed: false
},
{
  id: 2,
  uri: "https://cdn.shopify.com/s/files/1/0284/2391/3547/articles/photo-1570579380989-4ad216439577_1024x1024.jpg?v=1596407005",
  title: "Timmy's Paw",
  details: "Some text here",
  love: 55,
  pressed: false
}];

export const getMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);
      if (res.data) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};
export const addFavorite = movie => dispatch => {
  dispatch({
    type: ADD_FAVORITE_ITEM,
    payload: movie,
  });
};
export const removeFavorite = movie => dispatch => {
  dispatch({
    type: REMOVE_FAVORITE_ITEM,
    payload: movie,
  });
};
export const loadImg = () => dispatch => {
  dispatch({
    type: LOAD_IMG,
    payload: imgs
  });
};
export const loveIt = item => dispatch => {
  dispatch({
    type: ADD_LOVE,
    payload: {id: item.id, num: item.love+1} // imgs.id
  });
};
export const unlove = item => dispatch => {
  dispatch({
    type: UNLOVE,
    payload: {id: item.id, num: item.love-1}
  });
};