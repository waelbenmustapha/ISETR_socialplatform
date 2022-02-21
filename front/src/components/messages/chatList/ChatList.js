import React, { Component, useContext, useEffect, useState } from 'react'
import "./chatList.css"
import 'font-awesome/css/font-awesome.min.css'
import ChatListItems from './ChatListItems'
import axios from 'axios';
import { useAuthHeader, useAuthUser } from 'react-auth-kit';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../../state/actions/chat_room_actions';
// import { ChatRoomContext } from '../../../state/chat_room';



const allChatUsers = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    id: 1,
    name: "Tim Hover",
    active: true,
    isOnline: true,
  },

  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    id: 3,
    name: "Hamaad Dejesus",
    active: false,
    isOnline: false,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
    id: 4,
    name: "Eleni Hobbs",
    active: false,
    isOnline: true,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
    id: 5,
    name: "Elsa Black",
    active: false,
    isOnline: false,
  },
  {
    image:
      "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
    id: 6,
    name: "Kayley Mellor",
    active: false,
    isOnline: true,
  },
  {
    image:
      "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
    id: 7,
    name: "Hasan Mcculloch",
    active: false,
    isOnline: true,
  },

  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
    id: 9,
    name: "Allen Woodley",
    active: false,
    isOnline: true,
  },
  {
    image: "https://pbs.twimg.com/profile_images/770394499/female.png",
    id: 10,
    name: "Manpreet David",
    active: false,
    isOnline: true,
  },
];

export default function ChatList() {
  const auth = useAuthUser()
  const userid = auth().id;
  const authHeader = useAuthHeader();
  const [isLoading, setIsLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [usersSuggestion, setUserSuggestion] = useState([]);

  // chat room context
  // const { setRoom } = useContext(ChatRoomContext);
  const chatRoom = useSelector((state) => state.chatRoom);
  const dispatch = useDispatch();

  const getUserRooms = async () => {
    setIsLoading(true);
    await axios.get(`http://localhost:5500/api/user/latest-rooms/${userid}`)
      .then(data => {
        setRooms(data.data)

      }).catch(err => {
        alert(err)
      }).finally(() => setIsLoading(false))
  }


  useEffect(() => {

    const getLatestUserRooms = async () => {
      setIsLoading(true);
      await axios.get(`http://localhost:5500/api/room/get-user-latest-room/${userid}?offset=0`)
        .then(res => {
          console.log(res.data)
          if (res.data.success) {
            setRooms(res.data.latest_rooms)
          }
        }).catch(err => {
          alert(err)
        }).finally(() => setIsLoading(false))
    }

    getLatestUserRooms();

    // getUserRooms();

  }, []);


  if (isLoading) {
    return <h1>loading...</h1>
  }



  const searchOnChange = async (e) => {
    let value = e.target.value;

    if (value.length > 0) {
      await axios
        .get(`http://localhost:5500/api/user/search/${value}`, {
          headers: {
            authorization: authHeader().substring(7),
          }
        })
        .then((res) => {
          console.log(res.data);
          setUserSuggestion(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setUserSuggestion([]);
    }
  };




  const setChatRoom = (data) => {
    console.log(data)
    dispatch(update(data))
  }




  const renderSuggestions = () => {

    if (usersSuggestion.length === 0) {
      return null;
    }
    console.log(usersSuggestion);
    return (
      <u>
        {usersSuggestion.slice(0, 5).map((user) => {
          return (
            <li key={user.id} className="flex mt-5 px-2 py-1 hover:bg-blue-200"
              onClick={e => setChatRoom({ user: user })}
            >
              {/* <img alt="author" className=" w-14 h-14 rounded-full" src={user.cover_url} /> */}
              <div className="flex-col flex ml-2">
                <span>{user.name}</span>
                {/* <span>{user.author}</span> */}
              </div>
            </li>
          );
        })}
      </u>
    );
  };




  return (
    <div className="main__chatlist flex flex-col">
      <button className="btn bg-yellow-200">
        <i class="fa fa-plus" aria-hidden="true"></i>                    <span>New conversation</span>
      </button>
      <div className="chatlist__heading">
        <h2>Chats</h2>
        <button className="btn-nobg">
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>
      <div className="chatList__search ">
        <div className="search_wrap relative">
          <input type="text" placeholder="Search Here" onChange={searchOnChange} />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
          <div className='absolute top-16  bg-gray-400 w-full h32'>
            {renderSuggestions()}
          </div>
        </div>



      </div>
      <div className="chatlist__items"
        style={{ marginTop: `${usersSuggestion.length * 70}px` }}
      >
        {
          console.log('rooms', rooms),
          rooms.map((room, index) => {
            console.log(room);
            return (
              <ChatListItems
                room={room}
                name={allChatUsers[0].name}
                key={allChatUsers[0].id}
                animationDelay={index + 1}
                active={allChatUsers[0].active ? "active" : ""}
                isOnline={allChatUsers[0].isOnline ? "active" : ""}
                image={allChatUsers[0].image}
              />
            );
          })
        }
      </div>
    </div>
  )

}
