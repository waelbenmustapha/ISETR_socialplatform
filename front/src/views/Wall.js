import React ,{useState}from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faComment,
  faEllipsisH,
  faFileImage,
  faFileVideo,
  faHeart,
  faImages,
  faPaperPlane,
  faShare,
  faSmile,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Post from "../components/Post";
import AddPost from "../components/AddPost";

function Wall() {
  const [limit,setlimit]=useState(3);
  function  handleScroll (e) {
      const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      if (bottom) {  setlimit(limit+3) }
    }
  const [Posts, setPosts] = useState([
    {
      id:0,
      User: {
id:0,
        name: "wael Ben Mustapha",
        current:"Student",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_800_800/0/1608994757336?e=1645660800&v=beta&t=011XxwMzCyTwCTxIg-nCcgH2V76nCI5fcJr-VP1JtMQ",
      },
      timeago: "12",
      description: "Borgdéna bnina ",
      img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      likes: "24",
      comments: [
        {timeago:'17',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "borj svp",
        },
        {
          timeago:'168',
          User: {
            name: "nader",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "tbi3ha ??",
        },
      ],
      shares:'7'
    },
    {
      id:1,

      User: { 
id:1,
name: "Med Charabi", img: "https://avatars.githubusercontent.com/u/41237052?v=4",current:'Engineer at The National Aeronautics and Space Administration' },
      timeago: "124",
      description: "Searching for work , 5 years experience m3a NASA",
      img: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
      likes: "24",
      comments: [
        {
          timeago:'25',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "Mawjoud khédma m 6h -> 22h b 460Dt/mois",
        },
        {
          timeago:'785',
          User: {
            name: "nader guesmi",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "Hata ena nékhdém m3a nasa",
        },
      ],
      shares:'5'
    },{
      id:2,
      User: {
id:0,
        name: "wael Ben Mustapha",
        current:"Student",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_800_800/0/1608994757336?e=1645660800&v=beta&t=011XxwMzCyTwCTxIg-nCcgH2V76nCI5fcJr-VP1JtMQ",
      },
      timeago: "12",
      description: "Borgdéna bnina ",
      img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      likes: "24",
      comments: [
        {timeago:'17',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "borj svp",
        },
        {
          timeago:'168',
          User: {
            name: "nader",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "tbi3ha ??",
        },
      ],
      shares:'7'
    },
    {
      id:3,

      User: { 
id:1,
name: "Med Charabi", img: "https://avatars.githubusercontent.com/u/41237052?v=4",current:'Engineer at The National Aeronautics and Space Administration' },
      timeago: "124",
      description: "Searching for work , 5 years experience m3a NASA",
      img: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
      likes: "24",
      comments: [
        {
          timeago:'25',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "Mawjoud khédma m 6h -> 22h b 460Dt/mois",
        },
        {
          timeago:'785',
          User: {
            name: "nader guesmi",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "Hata ena nékhdém m3a nasa",
        },
      ],
      shares:'5'
    },{
      id:4,
      User: {
id:0,
        name: "wael Ben Mustapha",
        current:"Student",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_800_800/0/1608994757336?e=1645660800&v=beta&t=011XxwMzCyTwCTxIg-nCcgH2V76nCI5fcJr-VP1JtMQ",
      },
      timeago: "12",
      description: "Borgdéna bnina ",
      img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      likes: "24",
      comments: [
        {timeago:'17',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "borj svp",
        },
        {
          timeago:'168',
          User: {
            name: "nader",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "tbi3ha ??",
        },
      ],
      shares:'7'
    },
    {
id:5,
      User: { 
id:1,
name: "Med Charabi", img: "https://avatars.githubusercontent.com/u/41237052?v=4",current:'Engineer at The National Aeronautics and Space Administration' },
      timeago: "124",
      description: "Searching for work , 5 years experience m3a NASA",
      img: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
      likes: "24",
      comments: [
        {
          timeago:'25',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "Mawjoud khédma m 6h -> 22h b 460Dt/mois",
        },
        {
          timeago:'785',
          User: {
            name: "nader guesmi",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "Hata ena nékhdém m3a nasa",
        },
      ],
      shares:'5'
    },{
      id:6,
      User: {
id:0,
        name: "wael Ben Mustapha",
        current:"Student",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_800_800/0/1608994757336?e=1645660800&v=beta&t=011XxwMzCyTwCTxIg-nCcgH2V76nCI5fcJr-VP1JtMQ",
      },
      timeago: "12",
      description: "Borgdéna bnina ",
      img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      likes: "24",
      comments: [
        {timeago:'17',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "borj svp",
        },
        {
          timeago:'168',
          User: {
            name: "nader",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "tbi3ha ??",
        },
      ],
      shares:'7'
    },
    {
      id:7,

      User: { 
id:1,
name: "Med Charabi", img: "https://avatars.githubusercontent.com/u/41237052?v=4",current:'Engineer at The National Aeronautics and Space Administration' },
      timeago: "124",
      description: "Searching for work , 5 years experience m3a NASA",
      img: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
      likes: "24",
      comments: [
        {
          timeago:'25',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "Mawjoud khédma m 6h -> 22h b 460Dt/mois",
        },
        {
          timeago:'785',
          User: {
            name: "nader guesmi",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "Hata ena nékhdém m3a nasa",
        },
      ],
      shares:'5'
    },{
      id:8,
      User: {
id:0,
        name: "wael Ben Mustapha",
        current:"Student",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_800_800/0/1608994757336?e=1645660800&v=beta&t=011XxwMzCyTwCTxIg-nCcgH2V76nCI5fcJr-VP1JtMQ",
      },
      timeago: "12",
      description: "Borgdéna bnina ",
      img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      likes: "24",
      comments: [
        {timeago:'17',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "borj svp",
        },
        {
          timeago:'168',
          User: {
            name: "nader",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "tbi3ha ??",
        },
      ],
      shares:'7'
    },
    {
id:9,
      User: { 
id:1,
name: "Med Charabi", img: "https://avatars.githubusercontent.com/u/41237052?v=4",current:'Engineer at The National Aeronautics and Space Administration' },
      timeago: "124",
      description: "Searching for work , 5 years experience m3a NASA",
      img: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
      likes: "24",
      comments: [
        {
          timeago:'25',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "Mawjoud khédma m 6h -> 22h b 460Dt/mois",
        },
        {
          timeago:'785',
          User: {
            name: "nader guesmi",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "Hata ena nékhdém m3a nasa",
        },
      ],
      shares:'5'
    },{
      id:10,
      User: {
id:0,
        name: "wael Ben Mustapha",
        current:"Student",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_800_800/0/1608994757336?e=1645660800&v=beta&t=011XxwMzCyTwCTxIg-nCcgH2V76nCI5fcJr-VP1JtMQ",
      },
      timeago: "12",
      description: "Borgdéna bnina ",
      img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      likes: "24",
      comments: [
        {timeago:'17',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "borj svp",
        },
        {
          timeago:'168',
          User: {
            name: "nader",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "tbi3ha ??",
        },
      ],
      shares:'7'
    },
    {
      id:11,

      User: { 
id:1,
name: "Med Charabi", img: "https://avatars.githubusercontent.com/u/41237052?v=4",current:'Engineer at The National Aeronautics and Space Administration' },
      timeago: "124",
      description: "Searching for work , 5 years experience m3a NASA",
      img: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
      likes: "24",
      comments: [
        {
          timeago:'25',
          User: {
            name: "aziz sliti",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.18169-9/14907658_656668014514626_3769250828390762571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=B2p-yU_NUnIAX-PVhtw&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_pj8Yzamu-vnvds9UsEQH-ZgAt9nrJgadW8ptZdx8SxQ&oe=61E09C16",
          },
          comment: "Mawjoud khédma m 6h -> 22h b 460Dt/mois",
        },
        {
          timeago:'785',
          User: {
            name: "nader guesmi",
            img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/152030984_3957529804303387_8666733395871630056_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3f8pTPMg5D8AX84UoJk&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-ZJevAw70xhnI9JsDmNd--xdQNtz0lvy0m1IQ44c48XQ&oe=61DFBD38",
          },
          comment: "Hata ena nékhdém m3a nasa",
        },
      ],
      shares:'5'
    },
  ]);
  return (
    <div
    onScroll={(e)=>handleScroll(e)}
      // style={{ marginLeft: "200px" }}
      className="col-start-2 col-end-6  row-start-2 row-end-10 rounded-lg shadow-2xl bg-gray-100 p-3  overflow-y-scroll no-scrollbar"
    >
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "10px 10px 5px 5px",
          paddingBottom: "10px",
        }}
      >
        <div class="hero-image">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar6.png"
            style={{
              borderRadius: "50%",
              height: "150px",
              width: "150px",
              position: "absolute",
              border: "5px solid white",
              bottom: "0px",
              marginBottom: "-40px",
              left: "20px",
            }}
          />
          <p
            className="hover"
            style={{
              position: "absolute",
              right: "20px",
              bottom: "0px",
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Edit Cover Photo
          </p>
        </div>

        <p
          style={{
            marginTop: "40px",
            marginLeft: "20px",
            fontSize: "18px",
            fontWeight: "700",
            opacity: "0.75",
          }}
        >
          Med Wael Ben Mustapha
        </p>
        <p
          style={{
            marginLeft: "20px",
            fontSize: "13px",
            fontWeight: "700",
            opacity: "0.75",
          }}
        >
          Promotion 2018
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#eeeeee",
          borderRadius: "10px",
          padding: "20px",

          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            flex: 0.8,
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >
          <p style={{ fontWeight: "600", fontSize: "17px", opacity: "0.75" }}>
            INTRO
          </p>
          <p>
            <FontAwesomeIcon icon={faCoffee} />
            <span style={{ marginLeft: "15px" }}>male</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faCoffee} />
            <span style={{ marginLeft: "15px" }}>Born mars 21 1999</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faCoffee} />
            <span style={{ marginLeft: "15px" }}>Ben Arous, Tunis</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faCoffee} />
            <span style={{ marginLeft: "15px" }}>LinkedIn</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faCoffee} />
            <span style={{ marginLeft: "15px" }}>Facebook</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faCoffee} />
            <span style={{ marginLeft: "15px" }}>2146 Follower</span>
          </p>
          <div
            className="hover"
            style={{
              width: "50%",
              margin: "30px auto",
              textAlign: "center",
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: "#eeeeee",
            }}
          >
            Edit Details
          </div>
        </div>
        <div style={{ height: "100%", flex: 2 }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
<AddPost />

          </div>
          {Posts.slice(0,limit).map((val) => (
            <Post post={val} />
          ))}

        </div>
        <div
          style={{
            height: "100%",
            flex: 0.8,
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                fontSize: "15px",
                opacity: "0.75",
                padding: "5px",
              }}
            >
              You might know
            </p>
            <p
              style={{
                fontWeight: "600",
                fontSize: "13px",
                opacity: "0.75",
                padding: "5px",
                textAlign: "right",
                color: "blue",
              }}
            >
              See All
            </p>
          </div>
          <p style={{ margin: "0px" }} className="hr"></p>
          <div className="suggestedfriend">
            <div
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <img
                src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <p
                  className="hover"
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    opacity: "0.85",
                    paddingLeft: "5px",
                    margin: "0px",
                  }}
                >
                  Med Wael Ben Mustapha
                </p>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "13px",
                    opacity: "0.85",
                    paddingLeft: "5px",
                    margin: "0px",
                  }}
                >
                  Promotion 2018{" "}
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div
                className="hover"
                style={{
                  height: "30px",
                  width: "80px",
                  border: "1px solid #bbb",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                  color: "black",
                  fontSize: "13px",
                  opacity: "0.8",
                }}
              >
                Ignore
              </div>
              <div
                className="hover"
                style={{
                  height: "30px",
                  width: "80px",
                  backgroundColor: "#377dff",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                  color: "white",
                  fontSize: "13px",
                }}
              >
                Follow
              </div>
            </div>
          </div>{" "}
          <div className="suggestedfriend">
            <div
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <img
                src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <p
                  className="hover"
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    opacity: "0.85",
                    paddingLeft: "5px",
                    margin: "0px",
                  }}
                >
                  Med Wael Ben Mustapha
                </p>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "13px",
                    opacity: "0.85",
                    paddingLeft: "5px",
                    margin: "0px",
                  }}
                >
                  Promotion 2018{" "}
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div
                className="hover"
                style={{
                  height: "30px",
                  width: "80px",
                  border: "1px solid #bbb",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                  color: "black",
                  fontSize: "13px",
                  opacity: "0.8",
                }}
              >
                Ignore
              </div>
              <div
                className="hover"
                style={{
                  height: "30px",
                  width: "80px",
                  backgroundColor: "#377dff",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                  color: "white",
                  fontSize: "13px",
                }}
              >
                Follow
              </div>
            </div>
          </div>{" "}
          <div className="suggestedfriend">
            <div
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <img
                src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <p
                  className="hover"
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    opacity: "0.85",
                    paddingLeft: "5px",
                    margin: "0px",
                  }}
                >
                  Med Wael Ben Mustapha
                </p>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "13px",
                    opacity: "0.85",
                    paddingLeft: "5px",
                    margin: "0px",
                  }}
                >
                  Promotion 2018{" "}
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div
                className="hover"
                style={{
                  height: "30px",
                  width: "80px",
                  border: "1px solid #bbb",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                  color: "black",
                  fontSize: "13px",
                  opacity: "0.8",
                }}
              >
                Ignore
              </div>
              <div
                className="hover"
                style={{
                  height: "30px",
                  width: "80px",
                  backgroundColor: "#377dff",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                  color: "white",
                  fontSize: "13px",
                }}
              >
                Follow
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wall;
