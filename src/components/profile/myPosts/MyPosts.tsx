import React from 'react';
import { Post } from './post/Post';
import classes from "./MyPosts.module.css";

export const MyPosts = () => {
    return (
        <div className={classes.postWrapper}>
            <div>
                <textarea></textarea>
            </div>
            <button>New post</button>
            <Post
                name={'Murkiss'}
                title={'Post 1'}
                post={'bla bla bla blalaaaa'}
                likeCount={22}
                img={'https://cdn-irec.r-99.com/sites/default/files/imagecache/250i/pictures/picture-575475-9b2fd.jpg'}
            />

            <Post
                name={'Miu'}
                title={'Post 2'}
                post={'bla bla bla blalaaaa blala'}
                likeCount={2}
                img={'https://shapka-youtube.ru/wp-content/uploads/2022/06/ava-kot-iz-shreka.jpg'}
            />
        </div>
    );
};