import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";

export default function ChatBody({ socket }) {


  return (
    <div className="main__chatbody">
      <ChatList />
      <ChatContent socket={socket} />
      {/* <UserProfile /> */}
    </div>
  );

}