import { POST_REDUCER, NEW_POST, FETCH_POSTS } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      break;

    default:
      return state;
  }
}
