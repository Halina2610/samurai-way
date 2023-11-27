import React, { ChangeEvent } from 'react';
import { Post } from './post/Post';
import classes from './MyPosts.module.css';
import { Button } from "../../common/Button";
import {PostsPropsType} from "../../../types";

type MyPostsPropsType = {
    postData: PostsPropsType[];
    newPostText: string;
    updateNewPostText: (newPost: string) => void;
    addPost: () => void;
};

export const MyPosts = (props: MyPostsPropsType) => {
    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            const newPost = e.currentTarget.value;
            props.updateNewPostText(newPost);
        }
    };

    return (
        <div className={classes.postWrapper}>
            <div className={classes.blockAddPosts}>
                <textarea onChange={onPostChange} value={props.newPostText} />
                <Button onClick={onAddPost} name={'add post'} />
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