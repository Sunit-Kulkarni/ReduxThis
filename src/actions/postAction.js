import { POST_REDUCER, NEW_POST, FETCH_POSTS } from './types';

export const fetchPosts = () => dispatch => {
  console.log('fetching');
  //allows for async actions
  //will do fetching here.
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        //goes to reducer
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        //goes to reducer
        type: NEW_POST,
        payload: post
      })
    );
};
