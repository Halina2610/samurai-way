import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from './myPosts/MyPosts';



export const Profile = () => {
    return (
        <div>
            <div className={'app-wrapper-content'}>
                <div>
                    <img className={classes.img} src="https://fatcatart.com/wp-content/uploads/2016/04/space-cat-min.jpg"/>
                </div>
                <div className={classes.avatar}>
                    <div>
                        <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"/>
                    </div>
                    <div>
                        <h3>Mr.Cat</h3>
                        <p><span>City: </span><span>LA</span></p>
                        <p><span>Date of Birth: </span><span>9 Feb.</span></p>
                        <p><span>Web-site: </span><span><a>www.google.com</a></span></p>
                    </div>
                </div>

                <MyPosts/>
            </div>
        </div>
    );
};

