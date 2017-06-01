import { getData } from '../services/apiService';

export const fetchDataForSpecificId = (id) => (url) => (dispatch) =>
  getData(url)
    .then(data => dispatch({
      type: 'GOT_DATA',
      id,
      data
    }));