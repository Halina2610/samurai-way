import React, { useRef } from 'react';
import { Post } from './post/Post';
import classes from './MyPosts.module.css';
import { PostsPropsType } from '../../../redux/store';
import {Button} from "../../ common/Button";

type MyPostsPropsType = {
    postData: PostsPropsType[]
    addPost: (postMessage: string) => void
    updateNewPostText: (newPost: string) => void
    newPostText:  string
};

export const MyPosts = (props: MyPostsPropsType) => {
    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPostHandler = () => {
        if (newPostElement.current && newPostElement.current.value) {
            const post = newPostElement.current.value;
            props.addPost(post);
        }
    };

    const onPostChange = () => {
        if (newPostElement.current) {
            const newPost = newPostElement.current.value;
            props.updateNewPostText(newPost);
        }
    };

    return (
        <div className={classes.postWrapper}>
            <div className={classes.blockAddPosts}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <Button onClick={addPostHandler} name={'add post'} />
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