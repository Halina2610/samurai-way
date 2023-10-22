import React, {ChangeEvent} from 'react';
import { Post } from './post/Post';
import classes from './MyPosts.module.css';
import {
    ActionType,
    PostsPropsType,
} from '../../../redux/store';
import {Button} from "../../common/Button";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/profileReducer";

type MyPostsPropsType = {
    postData: PostsPropsType[]
    dispatch: (action: ActionType) => void
    newPostText:  string
};



export const MyPosts = (props: MyPostsPropsType) => {


    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            const newPost = e.currentTarget.value;
            props.dispatch(updateNewPostTextActionCreator(newPost));
        }
    };

    return (
        <div className={classes.postWrapper}>
            <div className={classes.blockAddPosts}>
                <textarea onChange={onPostChange} value={props.newPostText} />
                <Button onClick={addPost} name={'add post'} />
            </div>
            {props.postData.map((p) => (
                <Post
                    key={p.id}
                    name={p.name}
                    title={p.title}
                    post={p.post}
                    likeCount={p.likeCount}
                    img={p.img}
                />
            ))}
        </div>
    );
};