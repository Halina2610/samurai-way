import React from 'react';
import { Post } from './post/Post';
import classes from './MyPosts.module.css';
import {Button} from "../../ common/Button";
import {PostsPropsType} from "../../../redux/State";

type MyPostsPropsType = {
    postData: PostsPropsType[];
};

export const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div className={classes.postWrapper}>
            <div className={classes.blockAddPosts}>
                <textarea></textarea>
            <Button onClick={()=> {}} name={'add post'}/>
            </div>
            {props.postData.map((p) => {
                return (
                    <Post
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