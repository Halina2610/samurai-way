import {connect} from "react-redux";
import {PostsPropsType} from "../../../types";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/profileReducer";
import {MyPosts} from "./MyPosts";


type MapStatePropsType = {
    postData: PostsPropsType[]
    newPostText: string
}

type mapDispatchPropsType = {
    updateNewPostText: (newPost: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        postData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch ):mapDispatchPropsType => {
    return {

        updateNewPostText: (newPost: string) => dispatch(updateNewPostTextActionCreator(newPost)),
        addPost: () =>  dispatch(addPostActionCreator())

    }
}

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

/*
import React from 'react';
import { StoreType } from '../../../redux/store';
import { MyPosts } from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/reducers/profileReducer";
import { StoreContext } from "../../../redux/reducers/StoreContext";

type MyPostsPropsType = {
    // store: StoreType
    /!*postData: PostsPropsType[]
    dispatch: (action: ActionType) => void
    newPostText: string*!/
};

export const MyPostsContainer = (props: MyPostsPropsType) => {
   /!* const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const onPostChange = (newPost: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(newPost));
    };*!/

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
};*/
