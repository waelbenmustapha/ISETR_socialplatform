export const close = () => {
    return {
        type: "CLOSE",
    };
};


export const update = (payload) => {
    return {
        type: "UPDATE",
        payload: payload
    };
};


export const process = (text) => {
    return {
        type: "PROCESS",
        payload: text
    }
}

export const sendMessage = (payload) => {
    return {
        type: "SEND_MESSAGE",
        payload: payload
    }
}

export const notifReceiveMessageAction = (payload) => {
    return {
        type: "RECEIVE_MESSAGE",
        payload: payload
    }
}
