import React, { Component, useState, createRef, useEffect, useContext } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
import { io } from "socket.io-client";
import { sendMessage } from "../../../state/actions/chat_room_actions";
// import { sendMessage } from "../../../utils/message_events";

/* props{
  socket
 } 
*/
export default function ChatContent({ socket }) {
  const auth = useAuthUser();
  const chatRoom = useSelector((state) => state.chatRoomReducer);

  const notificationsReducer = useSelector(state => state.notificationReducer);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [roomMessages, setRoomMessages] = useState([]);
  const [message, setMessage] = useState("");



  const messagesEndRef = createRef(null);
  // const chatItms = [
  //   {
  //     key: 1,
  //     image:
  //       "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
  //     type: "",
  //     msg: "Hi Tim, How are you?",
  //   },
  //   {
  //     key: 2,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
  //     type: "other",
  //     msg: "I am fine.",
  //   },
  //   {
  //     key: 3,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
  //     type: "other",
  //     msg: "What about you?",
  //   },
  //   {
  //     key: 4,
  //     image:
  //       "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
  //     type: "",
  //     msg: "Awesome these days.",
  //   },
  //   {
  //     key: 5,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
  //     type: "other",
  //     msg: "Finally. What's the plan?",
  //   },
  //   {
  //     key: 6,
  //     image:
  //       "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
  //     type: "",
  //     msg: "what plan mate?",
  //   },
  //   {
  //     key: 7,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
  //     type: "other",
  //     msg: "I'm taliking about the tutorial",
  //   },


  // ];

  // todo
  /**
   * 1- check room exist or not
   * 2- if exist get room messages
   *      2.1- get last 10 messages
   *      2.2- get last message id
   *    - if not exist
   *     2.1- when first message send create room too
   *  
   */

  const getRoomMessages = async () => {
    setIsLoading(true);
    await axios.post(`http://localhost:5500/api/room/check-common-room-messages`,
      {
        sender_id: chatRoom.user.id,
        receiver_id: auth().id,
      }
    )
      .then(res => {
        console.log(res.data);
        setRoomMessages(res.data);
      }).catch(err => setRoomMessages([]))
      .finally(() => setIsLoading(false))
  }


  const scrollToBottom = () => {
    if (messagesEndRef.current !== null) {

      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // function componentDidMount() {
  //   window.addEventListener("keydown", (e) => {
  //     if (e.keyCode == 13) {
  //       if (this.state.msg != "") {
  //         chatItms.push({
  //           key: 1,
  //           type: "",
  //           msg: this.state.msg,
  //           image:
  //             "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
  //         });
  //         this.setState({ chat: [...this.chatItms] });
  //         this.scrollToBottom();
  //         this.setState({ msg: "" });
  //       }
  //     }
  //   });
  //   scrollToBottom();
  // }
  useEffect(() => {
    if (chatRoom !== null) {
      // fetch for room with same peer user
      getRoomMessages()
      // socket.on('receive-message', data => {
      //   console.log(data);
      // })

    }
    // componentDidMount()
    // // test
    socket.on("receive-message", data => {
      console.log(data);
      setRoomMessages([...roomMessages, data]);
    }
    )


  }, [chatRoom]);


  // const sendMessage = () => {


  //   // get reciver room id

  //   /**
  //    * data : {
  //    * message: '',
  //    * sender_id: '',
  //    * receiver_id: '',
  //    * room_id: ''
  //    * }
  //    * 
  //    *  */


  //   const fakedata = {
  //     message: 'hi',
  //     sender_id: '1',
  //     receiver_id: '2',
  //   }



  //   // socket.broadcast.emit('send-message', fakedata);
  //   return socket.emit('send-message', fakedata);
  // }

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message !== "") {
      // update room messages
      setRoomMessages([...roomMessages, message]);

      // check receiver connect or not
      await axios.get(`http://localhost:5500/api/room/get-receiver-room-id/${chatRoom.user.id}`)
        .then(res => {

          // receiver connected
          socket.emit('send-message', { "text": message, "sender_id": auth().id, "receiver_id": chatRoom.user.id });

        }).catch(async (err) => {
          // receiver not connected
          console.log(err)
          // save message to db
          console.log('save message to db');
          await axios.post(`http://localhost:5500/api/msg/add`, {
            sender_id: auth().id,
          })

        })

      //   // send message to server
      //   await axios.post(`http://localhost:5500/api/room/send-message`,
      //     {
      //       sender_id: auth().id,
      //       receiver_id: chatRoom.user.id,
      //       message: message,
      //     }).then(res => {
      //       console.log(res.data);
      //       setRoomMessages(res.data);
      //     })
      //     .catch(err => alert(err));
      //   // set message to empty
    }
    setMessage("");

    // // sendMessage('rr');
    // const fakedata = {
    //   message: 'hi',
    //   sender_id: '1',
    //   receiver_id: '2',
    // }

    // // const secondSocket = io('http://localhost:5500');
    // // secondSocket.emit('send-message', fakedata);
    // // socket.emit('send-message', fakedata);
    // console.log('senddinng......');


  };


  if (chatRoom === null) {

    // getRoomMessages();
    // console.log(chatRoom)
    return <h1>no chat</h1>
  }
  console.log(chatRoom)


  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              isOnline="active"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            />
            <p>{chatRoom.user.name} </p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {/* {chatItms.map((itm, index) => {
            return (
              <ChatItem
                animationDelay={index + 2}
                key={itm.key}
                user={itm.type ? itm.type : "me"}
                msg={itm.msg}
                image={itm.image}
              />
            );
          })} */}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <i className="fa fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Type a message here"
            onChange={e => setMessage(e.target.value)}
          // value={state.msg}
          />
          <button className="btnSendMsg" id="sendMsgBtn"
            onClick={handleSendMessage}
          >
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );

}