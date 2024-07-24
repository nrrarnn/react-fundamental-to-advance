const DEFAULT_STATE = {
  data: [],
  error: null
}

export const wishlistReducers = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'FETCH_WISHLIST_SUCCESS':
      return {
        ...state,
        items: action.payload,
      };
    case 'FETCH_WISHLIST_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    case 'ADD_WISHLIST_REQUEST':
      return {
        ...state,
        error: null,
      };
    case 'ADD_WISHLIST_SUCCESS':
      return {
        ...state
      };
    case 'ADD_WISHLIST_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}