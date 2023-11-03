import React from 'react';
import { StoreType } from '../../../redux/store';
import { MyPosts } from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/reducers/profileReducer";
import { StoreContext } from "../../../redux/reducers/StoreContext";

type MyPostsPropsType = {
    // store: StoreType
    /*postData: PostsPropsType[]
    dispatch: (action: ActionType) => void
    newPostText: string*/
};

export const MyPostsContainer = (props: MyPostsPropsType) => {
   /* const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const onPostChange = (newPost: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(newPost));
    };*/

    return (
        <div>
            <StoreContext.Consumer>
                {(store) => {
                    let state = store.getState();
                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };
                    const onPostChange = (newPost: string) => {
                        store.dispatch(updateNewPostTextActionCreator(newPost));
                    };

                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        postData={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
            }}
            </StoreContext.Consumer>
        </div>
    );
};