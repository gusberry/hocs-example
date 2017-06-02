import { getData } from '../services/apiService';

export const fetchDataForSpecificId = (id, dispatch) => url =>
  getData(url).then(data =>
    dispatch({
      type: 'GOT_DATA',
      id,
      data,
    }),
  );
