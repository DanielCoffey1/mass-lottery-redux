import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import { selectDraw } from '../actions';
import drawsReducer from './drawsReducer';

const selectedDrawReducer = (selectedDraw = null, action) => {
  if (action.type === 'DRAW_SELECTED') {
    return action.payload;
  }
  return selectedDraw;
};

export default combineReducers({
  draws: drawsReducer,
  selectedDraw: selectedDrawReducer,
  form: reducer
});
