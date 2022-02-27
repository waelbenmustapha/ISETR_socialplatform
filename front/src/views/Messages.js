import React, { useEffect } from "react";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import ChatBody from "../components/messages/chatBody/ChatBody";
import { notifReceiveMessageAction } from "../state/actions/chat_room_actions";
function Messages() {
  const auth = useAuthUser()

  const isAuthenticated = useIsAuthenticated()

  // if (isAuthenticated) {
  // const socket = useSelector(state => state.socketReducer);
  const socket = io("http://localhost:5500/chat")

  const dispatch = useDispatch()

  useEffect(() => {

    if (isAuthenticated) {


      const receiveMessage = () => {
        socket.on('receive-message', (data) => {
          console.log(data)
          if (window.location.pathname !== "/messages") {
            // notify
            console.log("not in messages")
            dispatch(notifReceiveMessageAction({ ...data, type: 'msg' }))
          }
        })
      }

      const sendMessage = (data) => {
        socket.emit('send-message', data);
      }

      socket.on('connect', () => {
        console.log('connected to socket')
        // change the state of the socket
        socket.emit('user-connected', {
          user_id: auth().id,
        })




        // listen for user-connected
        receiveMessage();


      })
    }

  }, []);


  return (
    //good
    <div className="col-start-2 col-end-6  row-start-2 row-end-10 rounded-lg bg-gray-100 grid " style={{height:'100vh'}}>

      <ChatBody socket={socket} />
    </div>
  )
}

export default Messages;
