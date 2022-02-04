import React from "react";
import io from "socket.io-client";


const socket = io("http://localhost:5500/chat")

export const socketReducer = (state = socket, action) => {
    switch (action.type) {
        case "UPDATE":
            return action.payload;

        default:
            return state;
    }
}


export const chatRoomReducer = (state = null, action) => {
    switch (action.type) {
        case 'CLOSE':
            return state = null
        case 'UPDATE':
            return state = action.payload
        default:
            return state
    }
}

export const notificationReducer = (state = null, action) => {

    switch (action.type) {
        //returns updated state
        case 'SEND_MESSAGE':
            return state = action.payload
        case 'RECEIVE_MESSAGE':
            return state = action.payload
        default:
            return state
    }

}


export const SocketContext = React.createContext(socket); 