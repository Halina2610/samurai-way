import {connect} from "react-redux";
import {PostsPropsType} from "../../../types";
import {AppStateType} from "../../../redux/store/store";
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


