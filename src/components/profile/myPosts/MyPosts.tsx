import React from 'react';
import {Post} from './post/Post';
import classes from "./MyPosts.module.css";
import {postData} from "../../../index";

export const MyPosts = () => {

    return (
        <div className={classes.postWrapper}>
            <div>
                <textarea></textarea>
            </div>
            <button>New post</button>
            {postData.map(p => {
               return <Post
                    name={p.name}
                    title={p.title}
                    post={p.post}
                    likeCount={p.likeCount}
                    img={p.img}
                />
            })}
        </div>
    );
};


