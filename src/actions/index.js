import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchDraws = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/');

  dispatch({ type: 'FETCH_DRAWS', payload: response.data.draws });
};

export const selectDraw = (draw) => {
  return {
    type: 'DRAW_SELECTED',
    payload: draw
  };
};
