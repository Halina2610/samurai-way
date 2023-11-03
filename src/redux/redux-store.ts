import {combineReducers, createStore} from 'redux';
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {sidebarReducer} from "./reducers/sidebarReducer";
import {StoreType} from "./store";


let reducers= combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store: StoreType = createStore(reducers)

export default store;