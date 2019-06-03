// Import Actions
import { TOGGLE_ADD_POST, SORT_POST } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    case SORT_POST:
      return {
        posts: action.posts,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

// Get showEditPost

// Export Reducer
export default AppReducer;
