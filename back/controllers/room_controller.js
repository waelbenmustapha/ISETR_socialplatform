import { con } from "../config/database.js";

const connectedUsers = [];


// create chat room
export const createRoom = async (name, type) => {

    const newroom = { name }
    if (type === 'group') {
        newroom.type = type;
    }
    console.log(newroom);
    // create room

    try {

        const newRoomID = await con
            .insert(newroom)
            .into("rooms");
        return newRoomID[0];
    } catch (error) {
        console.log(error);
        return error;
    }

};

// get all user rooms
export const getAllUserRooms = async (user_id) => {

    await con
        .select("*")
        .from("room-user")
        .where("user_id", user_id)
        .then((data) => {
            return data;
        }
        ).catch((err) => {
            return err;
        });

}

// user latest 10 rooms
export const getLatestUserRooms = async (req, res) => {
    const { id } = req.params;
    await con
        .select("*")
        .from("room-user")
        .where("user_id", id)
        .limit(10)
        .offset(1)
        .then((data) => {
            return res.status(200).json({
                data
            });
        }
        ).catch((err) => {
            return res.status(400).json(
                {
                    error: err
                }
            );

        });

}


// get room messages
export const getRoomMessages = async (room_id) => {

    await con
        .select("*")
        .from("messages")
        .where("room_id", room_id)
        .then((data) => {
            return data;
        }
        ).catch((err) => {
            return err;
        });

}


// add message to room

export const saveMessage = async (payload) => {

    const { text, room_id, sender_id } = payload;
    // add message messages
    const newMessage = {
        text,
        room_id,
        sender_id
    }
    console.log(newMessage);
    try {
        const newMessageResp = await con
            .insert(newMessage)
            .into("messages")
        console.log(newMessageResp);
        return newMessageResp;

    } catch (error) {
        console.log(error);
        return error;
    }

}

// check users have common room
const checkCommonRoom = async (sender_id, receiver_id) => {
    // check sender and receiver have same room
    const sender_rooms = await con
        .select('room_id')
        .from('room-user')
        .where('user_id', sender_id);
    const receiver_rooms = await con
        .select('room_id')
        .from('room-user')
        .where('user_id', receiver_id);

    // check if sender and receiver have same room
    const common_room = sender_rooms.filter(room => receiver_rooms.includes(room));

    return common_room;

}

// get user room if connected
export const getUserRoomID = (receiver_id) => {
    // check if user connected
    const user_connected = connectedUsers.find(user => parseInt(user.user_id) === parseInt(receiver_id));
    if (user_connected) {
        return user_connected;
    }
    return null;

}


// apis functions

export const getAllRoomsApi = async (req, res) => {
    await con
        .select("*")
        .from("rooms")
        .then((data) => {
            return res.status(200).json({
                data
            });
        }
        ).catch((err) => {
            return res.status(400).json(
                {
                    error: err
                }
            );
        });
}

export const getRoomApi = async (req, res) => {
    const { id } = req.params;
    await con
        .select("*")
        .from("rooms")
        .where("id", id)
        .then((data) => {
            return res.status(200).json({
                data
            });
        }
        ).catch((err) => {
            return res.status(400).json(
                {
                    error: err
                }
            );
        });
}

export const checkCommonRoomApi = async (req, res) => {
    const { sender_id, receiver_id } = req.body;
    const common_room = await checkCommonRoom(sender_id, receiver_id);
    if (common_room.length > 0) {
        return res.status(200).json({
            data: common_room[0],
            message: "Common room found"
        });
    } else {
        return res.status(404).json({
            message: "No common room found"
        });
    }
}

export const checkCommonRoomAndMessagesApi = async (req, res) => {
    const { sender_id, receiver_id } = req.body;
    const common_room = await checkCommonRoom(sender_id, receiver_id);
    if (common_room.length > 0) {
        const room_id = common_room[0].room_id;
        const messages = await getRoomMessages(room_id);

        return res.status(200).json({
            data: messages,
            message: "Common room found"
        });
    } else {
        return res.status(404).json({
            message: "No common room found"
        });
    }
}

export const getRoomMessagesApi = async (req, res) => {
    const { id } = req.params;

    getRoomMessages(id).then(data => {
        return res.status(200).json({
            data
        });
    }).catch(err => {
        return res.status(400).json(
            {
                error: err
            }
        );
    });
}

export const getReceiverRoomId = (req, res) => {

    // check if user connected
    const receiverData = getUserRoomID(req.params.id);

    if (receiverData !== null) {

        return res.status(200).json({
            data: receiverData
        });

    }
    return res.status(404).json({
        message: "No common room found"
    });
}












// socket

export const chatsocket = (socket) => {
    console.log(`a user connected ${socket.id}`);

    // add user to connected users list
    socket.on('user-connected', (data) => {
        // console.log(`user joined ${room_id}`);
        connectedUsers.push({
            user_id: data.user_id,
            socket_id: socket.id
        });
        console.log(connectedUsers);
    });
    // disconnect
    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
        // remove user from connected users list
        connectedUsers.splice(connectedUsers.findIndex(user => user.socket_id === socket.id), 1);
        console.log(connectedUsers);
    });

    // Todo
    /* 
    --change user status to online
      ->open chat    
          d-display latest 10 rooms with latest message
          d-display all friends online
      ->room click
          d-display latest 10 messages(sender, message, time)
          ->send message click
              d-sended message display in chat
              --update messages table (room_id, sender_id, message, time)
 
 
 
    --notification when message is sent
    */


    // listen to events from client
    socket.on('send-message', (payload) => {
        console.log({ 'massage data': payload });

        // check if user connected
        const receiverData = getUserRoomID(payload.receiver_id);
        if (receiverData !== null) {
            console.log(`receiver connected ${receiverData.socket_id}`);
            // receiver is connected
            // send message to receiver
            socket.to(receiverData.socket_id).emit('receive-message', payload);
            // save message to database
            saveMessage(payload);
        } else {
            // receiver is not connected
            // save message to database
            saveMessage(payload);
        }


        // /* *** */
        // check exist room
        // const common_room = checkCommonRoom(payload.sender_id, payload.receiver_id);
        // // if not create new room
        // if (common_room.length === 0) {
        //     // create room
        //     createRoom().then((data) => {
        //         console.log(data);
        //     }).catch((err) => {
        //         console.log(err);
        //     });



        // } else {
        //     // get room id
        //     const room_id = common_room[0].room_id;
        //     // save message
        //     saveMessage({
        //         text,
        //         room_id,
        //         sender_id
        //     });
        // }


        // save message
        // saveMessage(payload);
        // messageSentCallBack();
        // send message to waiter!!
        // socket.broadcast.emit("receive-message", payload);
    })



}