import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { useDispatch } from "react-redux";
import { update } from "../../../state/actions/chat_room_actions";
import Avatar from "./Avatar";

export default function ChatListItems(props) {

  const auth = useAuthUser();
  const [roomInfo, setRoomInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const getRoom = async () => {
      setIsLoading(true);
      await axios.get(`http://localhost:5500/api/room/get-room-user-info/${props.room.id}`)
        .then(res => {
          if (res.data.success) {
            let allroomUsers = res.data.data;
            allroomUsers = allroomUsers.filter(user => user.id !== auth().id);
            console.log('allroomUsers', allroomUsers)
            setRoomInfo(allroomUsers)

          }
        }).catch(err => {
          alert(err)
        }).finally(() => setIsLoading(false))
    }

    getRoom();

  }, []);

  if (isLoading) {
    return <h1>loading...</h1>
  }

  console.log(props)
  const selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };


  const setChatRoom = (data) => {
    console.log(data)
    dispatch(update(data))
  }

  return (
    <div
      style={{ animationDelay: `0.${props.animationDelay}s` }}
      // onClick={selectChat}
      onClick={e => setChatRoom({ user: roomInfo[0] })}

      className={`chatlist__item ${props.active ? props.active : ""
        } `}
    >
      <Avatar
        image={
          roomInfo[0].avatar.length > 0 ? roomInfo[0].avatar : "http://placehold.it/80x80"
        }
      // isOnline={props.isOnline}
      />

      <div className="userMeta">
        <p>{roomInfo[0].name}</p>
        {/* <span className="activeTime">32 mins ago</span> */}
      </div>
    </div>
  );

}