const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GOT_DATA':
      return {
        ...state,
        [action.id]: action.data,
      };

    default:
      return state;
  }
};

export const getComponentStateById = (state, id) => state[id] || [];

export default rootReducer;
