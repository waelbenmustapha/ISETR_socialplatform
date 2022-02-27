// import { useSelector } from "react-redux";


// const socket = useSelector(state => state.socketReducer);

// export const isTyping = () => {
//     socket.on('isTyping', (data) => {
//         console.log(data)
//         socket.broadcast.emit('isTyping', data);
//     })
// }

// export const sendMessage = () => {


//     // get reciver room id

//     /**
//      * data : {
//      * message: '',
//      * sender_id: '',
//      * receiver_id: '',
//      * room_id: ''
//      * }
//      * 
//      *  */


//     const fakedata = {
//         message: 'hi',
//         sender_id: '1',
//         receiver_id: '2',
//     }



//     // socket.broadcast.emit('send-message', fakedata);
//     socket.emit('send-message', fakedata);
// }

// export const receiveMessage = () => {
//     socket.on('receive-message', (data) => {
//         console.log(data)
//     })
// }


// export const sendMessageToRoom = () => {
//     socket.on('sendMessageToRoom', (data) => {
//         console.log(data)
//         socket.broadcast.emit('sendMessageToRoom', data);
//     })
// }