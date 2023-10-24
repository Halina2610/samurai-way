import React from 'react';
import {
    ActionType,
    PostsPropsType, StoreType,
} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/profileReducer";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    store: StoreType
    /*postData: PostsPropsType[]
    dispatch: (action: ActionType) => void
    newPostText: string*/
};


export const MyPostsContainer = (props: MyPostsPropsType) => {

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const onPostChange = (newPost: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(newPost));
    };

    return (
        <div>
            <MyPosts updateNewPostText={onPostChange} addPost={addPost} postData={props.store.getState().profilePage.posts} newPostText={props.store.getState().profilePage.newPostText}/>
        </div>
    );
};