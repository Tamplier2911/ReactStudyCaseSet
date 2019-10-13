import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';
// import { async } from 'q';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log('About to fetch posts!');
    await dispatch(fetchPosts());
    console.log('Posts fetched!');

/*
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    console.log(userIds);
    userIds.forEach(id => dispatch(fetchUser(id)));
*/

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();

        console.log(getState());
};

export const fetchPosts =  () => async dispatch => {
    const response =  await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data});
};


export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
};




/*

export const fetchUser = (id) => (dispatch) => {
    _fetchUser(id, dispatch);
}

const _fetchUser = _.memoize( async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
});


*/

/*
export const selectPost = () => {
    return {
        type: 'SELECT_POST'
    }                                   _.memoize(
}
*/