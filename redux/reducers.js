import {
  ADD_FAVORITE_ITEM,
  REMOVE_FAVORITE_ITEM,
  LOAD_IMG,
  ADD_LOVE,
  UNLOVE,
  GET_MOVIES_SUCCESS,
  UPDATE_POINT,
} from './actions';
import {INITIAL_STATES} from '../redux/initialStates';

function moviesReducer(state = INITIAL_STATES, action) {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      console.error('reducer hit with payload: ', action.payload);
      return {...state, movies: action.payload};
    case ADD_FAVORITE_ITEM:
      return {...state, favorites: [...state.favorites, action.payload]};
    case REMOVE_FAVORITE_ITEM:
      return {
        ...state,
        favorites: state.favorites.filter(
          movie => movie.id !== action.payload.id,
        ),
      };
    case LOAD_IMG:
      return {
        ...state,
        pictures: action.payload,
      };
    case ADD_LOVE:
      return {
        ...state,
        pictures: state.pictures.map((content, i) =>
          i === action.payload.id
            ? {...content, love: action.payload.num, pressed: true}
            : content,
        ),
      };
    case UNLOVE:
      return {
        ...state,
        pictures: state.pictures.map((content, i) =>
          i === action.payload.id
            ? {...content, love: action.payload.num, pressed: false}
            : content,
        ),
      };
    case UPDATE_POINT:
      return {
        ...state,
        point: action.payload,
      };
    default:
      return state;
  }
}
export default moviesReducer;
