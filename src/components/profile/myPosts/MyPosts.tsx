import React, {useRef} from 'react';
import {Post} from './post/Post';
import classes from './MyPosts.module.css';
import {PostsPropsType} from '../../../redux/State';
import {Button} from "../../ common/Button";

type MyPostsPropsType = {
    postData: PostsPropsType[];
    addPost: (postMessage: string) => void

};

export const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPostHandler = () => {
        if (newPostElement.current && newPostElement.current.value) {
            const newPost = newPostElement.current.value;
            props.addPost(newPost)
            newPostElement.current.value = '';
        }
    };

    return (
        <div className={classes.postWrapper}>
            <div className={classes.blockAddPosts}>
                <textarea ref={newPostElement}></textarea>
                <Button onClick={addPostHandler} name={'add post'}/>
            </div>
            {props.postData.map((p) => {
                return (
                    <Post
                        key={p.id} // Добавлен ключ для каждого поста
                        name={p.name}
                        title={p.title}
                        post={p.post}
                        likeCount={p.likeCount}
                        img={p.img}
                    />
                );
            })}
        </div>
    );
};