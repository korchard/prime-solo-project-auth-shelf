import axios from 'axios';
import {put, takeLatest } from 'redux-saga/effects';

// GET ROUTE
function* fetchShelf() {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      const response = yield axios.get('api/shelf', config);
  
      yield put({ type: 'SET_SHELF', payload: response.data });
    } catch (error) {
      console.log('Shelf get request failed', error);
    }
  }

  // POST ROUTE
  function* addItem (action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      yield axios.post('api/shelf', action.payload, config);
      yield put({ type: 'FETCH_SHELF' });
    } catch (error) {
      console.log('Shelf post request failed', error);
    }
  }

  // DELETE ROUTE
  function* deleteItem (action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
    
      yield axios.post(`api/shelf/${action.payload.id}`, action.payload, config);
      yield put({ type: 'FETCH_SHELF' });
    } catch (error) {
      console.log('Shelf delete request failed', error);
    }
  }
  
  function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', fetchShelf);
    yield takeLatest('ADD_ITEM', addItem);
    yield takeLatest('DELETE_ITEM', deleteItem);
  }
  
  export default shelfSaga;