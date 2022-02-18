/* eslint-disable prettier/prettier */
import { all, call, put, take, takeLatest, takeLeading } from 'redux-saga/effects';
import axios from 'axios';
import { getMoviesSuccess, getMoviesFailed } from './actions';

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = '0327c167ced93bc7622290c2fff710f9';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export function* rootSaga() {
    yield all([
        helloSaga(),
        callApi(),
    ]);
}
export function* helloSaga() {
    //yield take('ADD_FAVORITE_ITEM');
    console.log('Hello Saga');
}

export function* callApi() {
    yield take('GET_MOVIES');
    yield fetchMovies();

}

let getMovieList = async () => {
    try {
        const res = await axios.get(`${BASE_URL}`);
        return res.data;
    } catch (e) {
        console.log(e.message);
    }
};

export function* fetchMovies() {
    try {
        console.log('success');
        const result = yield call(getMovieList);
        yield put(getMoviesSuccess(result));
    } catch (e) {
        yield put(getMoviesFailed());
        console.log(e.message);
    }
}
