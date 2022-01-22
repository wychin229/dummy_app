import { GET_MOVIES, ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM, LOAD_IMG, ADD_LOVE } from "./actions";
const initialState = {
    movies: [],
    favorites: [],
    pictures: []
};
function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, movies: action.payload };
        case ADD_FAVORITE_ITEM:
            return { ...state, favorites: [...state.favorites, action.payload] };
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
                pictures: action.payload
            };
        case ADD_LOVE:
            return {
                ...state,
                pictures: state.pictures.map(
                    (content, i) => i === action.payload.id ? { ...content, love: action.payload.num, pressed: true }
                        : content
                )
            };
        default:
            return state;
    }
}
export default moviesReducer;