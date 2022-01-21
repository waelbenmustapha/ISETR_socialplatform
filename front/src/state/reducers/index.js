import { combineReducers } from "redux";
import { chatRoomReducer, notificationReducer, socketReducer } from './chat_reducers'

const allReducers = combineReducers({
    socketReducer,
    chatRoomReducer,
    notificationReducer
});
export default allReducers;